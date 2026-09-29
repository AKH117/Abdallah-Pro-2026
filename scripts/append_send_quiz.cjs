const fs = require('fs');

let content = fs.readFileSync('lib/supabase.js', 'utf8');

const functionCode = `

/**
 * 🩺 Universal On-Demand Medical Curriculum Quiz Engine
 * Sends a random clinical question from the medical curriculum using the Standardized 2-Step Architecture:
 * 1. Message 1 (Clinical Case Card): Full English stem + Egyptian clinical translation (NO topic spoilers!)
 * 2. Message 2 (Native Telegram Quiz Poll): Concise prompt + 4 shuffled options
 * Metadata is saved in doctor_pearl so bot.on('poll_answer') replies with the full 5-Part Explanation Framework.
 */
export async function sendRandomMedicalCurriculumQuiz(bot, chatId) {
  if (!bot || !chatId) return false;
  const targetChatId = Number(chatId);

  const nonMedicalCodes = ['SHARIA', 'STATESMAN', 'SAHABA_SPOTLIGHT', 'QURAN_ASBAB', 'BUKHARI', 'DISCIPLINE', 'PROPHETIC_LEADERSHIP', 'PURITY'];
  const { data: allQuizzes, error } = await supabase
    .from('medical_spaced_quizzes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !allQuizzes || allQuizzes.length === 0) {
    await bot.telegram.sendMessage(targetChatId, '⚠️ عذراً يا دكتور، تعذر تحميل بنك الكويزات الطبية حالياً. يرجى المحاولة بعد قليل.').catch(() => {});
    return false;
  }

  // Filter 100% strictly for clinical medical curriculum quizzes
  const medQuizzes = allQuizzes.filter(q => {
    const code = (q.course_code || '').toUpperCase();
    if (nonMedicalCodes.includes(code)) return false;
    if (/فقه|شريع|دولة|مضوا|أعصاب|دوبامين|صحابي|بخاري|نزول/.test(q.topic || '') || /فقه|شريع|دولة|مضوا|أعصاب|دوبامين|صحابي|بخاري|نزول/.test(q.question || '')) return false;
    if (!q.doctor_pearl || !q.doctor_pearl.includes('<<<QUIZ_META_START>>>')) return false;
    try {
      const meta = JSON.parse(q.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0]);
      return meta.options && Array.isArray(meta.options) && meta.options.length >= 2;
    } catch (e) {
      return false;
    }
  });

  if (medQuizzes.length === 0) {
    await bot.telegram.sendMessage(targetChatId, '⚠️ لم يتم العثور على أسئلة طبية مسجلة في المنهج حالياً.').catch(() => {});
    return false;
  }

  // Pick a random medical quiz from the curriculum
  const quiz = medQuizzes[Math.floor(Math.random() * medQuizzes.length)];

  let options = [];
  let correctIdx = 0;
  let explanation = quiz.answer_and_explanation || '';
  try {
    const meta = JSON.parse(quiz.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0]);
    options = meta.options;
    correctIdx = Number(meta.correct_index || 0);
    if (meta.explanation && meta.explanation.length > explanation.length) {
      explanation = meta.explanation;
    }
  } catch (e) {}

  // 🎲 Shuffle options so correct answer is randomly distributed
  const shuffled = shuffleQuizOptions(options, correctIdx);
  const formattedOptions = shuffled.options.map(o => String(o).substring(0, 100));
  const safeCorrectIdx = Math.max(0, Math.min(formattedOptions.length - 1, shuffled.correctIndex));
  const correctOptText = formattedOptions[safeCorrectIdx] || '';
  const pollExplanation = formatNativePollExplanation(explanation, correctOptText);

  // 🩺 Universal Standardized 2-Step Clinical Quiz Presentation:
  // 1. Message 1: Full Clinical Case Card & Scenario Stem (NO topic spoiler! Up to 4096 chars - NEVER gets cut off!)
  let introMsg = \`🩺 <b>كويز وتثبيت إكلينيكي [\${quiz.course_code || 'MED'}] 🧠✨</b>\\n\`;
  introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
  introMsg += \`📋 <b>الحالة والسيناريو السريري (Clinical Scenario):</b>\\n\`;
  introMsg += \`<i>\${quiz.question}</i>\\n\\n\`;

  const arabicTr = extractArabicQuestionTranslation(explanation);
  if (arabicTr) {
    const rtlTr = arabicTr.split('\\n').map(l => l.trim() ? \`\u200F\${l}\` : '').join('\\n');
    introMsg += \`📝 <b>الترجمة والتوضيح السريري للحالة:</b>\\n\`;
    introMsg += \`\${rtlTr}\\n\\n\`;
  }
  introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
  introMsg += \`👇 <i>اختر الإجابة أو السمة السريرية الأنسب من الاستطلاع أدناه (+30 Doctor XP):</i>\`;

  await bot.telegram.sendMessage(targetChatId, introMsg, { parse_mode: 'HTML' }).catch(() => {});

  // 2. Message 2: Concise Telegram Quiz Poll with choices
  const sentences = quiz.question.split(/[.?؟]/).map(s => s.trim()).filter(Boolean);
  const lastSentence = sentences.length > 1 ? sentences[sentences.length - 1] : '';
  let pollPrompt = '';
  if (lastSentence.length >= 15 && lastSentence.length <= 250) {
    pollPrompt = \`[\${quiz.course_code || 'MED'}] \${lastSentence}?\`;
  } else {
    pollPrompt = \`[\${quiz.course_code || 'MED'}] ما هو التشخيص أو الإجراء الأنسب للحالة؟\`;
  }

  const pollMessage = await bot.telegram.sendPoll(targetChatId, pollPrompt.substring(0, 295), formattedOptions, {
    type: 'quiz',
    correct_option_id: safeCorrectIdx,
    explanation: pollExplanation,
    is_anonymous: false
  }).catch(err => {
    console.warn('[sendRandomMedicalCurriculumQuiz Poll Error]:', err.message);
  });

  if (pollMessage && pollMessage.poll) {
    const metaObj = {
      poll_id: pollMessage.poll.id,
      message_id: pollMessage.message_id,
      chat_id: targetChatId,
      options: formattedOptions,
      correct_index: safeCorrectIdx,
      explanation: explanation
    };
    await supabase.from('medical_spaced_quizzes').update({
      doctor_pearl: \`<<<QUIZ_META_START>>>\${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> \${explanation || ''}\`.trim(),
      last_reviewed_at: new Date().toISOString()
    }).eq('id', quiz.id);
  }

  return true;
}
`;

if (!content.includes('export async function sendRandomMedicalCurriculumQuiz')) {
  fs.appendFileSync('lib/supabase.js', functionCode, 'utf8');
  console.log('✅ Appended sendRandomMedicalCurriculumQuiz to lib/supabase.js');
} else {
  console.log('⚠️ sendRandomMedicalCurriculumQuiz already exists in lib/supabase.js');
}
