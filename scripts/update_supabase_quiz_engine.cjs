const fs = require('fs');

let content = fs.readFileSync('lib/supabase.js', 'utf8');

const newEngineCode = `
// 🎯 Midterm Blueprint Definitions & Balanced Rotation Tracker
const _userLastMidtermTopicIndex = new Map();

export const MIDTERM_BLUEPRINT_TOPICS = [
  { key: 'MIDTERM_ACS', title: 'Acute Coronary Syndromes (STEMI & NSTEMI)', arabicTitle: '🫀 متلازمة الشرايين التاجية والجلطات (ACS)', marks: 4 },
  { key: 'MIDTERM_VALVULAR', title: 'Valvular Heart Diseases & Prosthetic Valves', arabicTitle: '🚪 أمراض الصمامات والصمامات الصناعية', marks: 4 },
  { key: 'MIDTERM_IE', title: 'Infective Endocarditis', arabicTitle: '🦠 التهاب الشغاف الإنتاني (Infective Endocarditis)', marks: 3 },
  { key: 'MIDTERM_PHARMA', title: 'Pharmacology: Antiischemic Drugs', arabicTitle: '💊 أدوية الذبحة وقصور التروية (Antiischemic)', marks: 3 },
  { key: 'MIDTERM_ATHERO', title: 'Atherosclerosis & Dyslipidemia', arabicTitle: '🧈 تصلب الشرايين وعلاج الدهون والكوليسترول', marks: 3 },
  { key: 'MIDTERM_ANGINA', title: 'Chronic Stable Angina', arabicTitle: '🏃 الذبحة الصدرية المستقرة وقسطرة القلب', marks: 3 },
  { key: 'MIDTERM_ECG', title: 'Normal ECG & Cardiac Conduction', arabicTitle: '📈 رسم القلب الطبيعي وقواعد التخطيط', marks: 3 },
  { key: 'MIDTERM_EPI_MARKERS', title: 'Epidemiology & Cardiac Biomarkers', arabicTitle: '🔬 وبائيات القلب وإنزيمات الاحتشاء (Biomarkers)', marks: 2 },
  { key: 'MIDTERM_INTRO', title: 'Introduction & Cardiac Physiology', arabicTitle: '⚡ مقدمة الكارديو وفسيولوجيا الدورة القلبية', marks: 2 }
];

export function categorizeQuizTopic(topic) {
  const t = topic || '';
  if (t.includes('MIDTERM_IE') || t.includes('Endocarditis')) return 'MIDTERM_IE';
  if (t.includes('MIDTERM_ACS') || t.includes('STEMI') || t.includes('ACS')) return 'MIDTERM_ACS';
  if (t.includes('MIDTERM_PHARMA') || t.includes('Antiischemic') || t.includes('Pharmacology')) return 'MIDTERM_PHARMA';
  if (t.includes('MIDTERM_ATHERO') || t.includes('Atherosclerosis') || t.includes('Dyslipidemia')) return 'MIDTERM_ATHERO';
  if (t.includes('MIDTERM_ANGINA') || t.includes('Angina')) return 'MIDTERM_ANGINA';
  if (t.includes('MIDTERM_ECG') || t.includes('Normal ECG')) return 'MIDTERM_ECG';
  if (t.includes('MIDTERM_EPI_MARKERS') || t.includes('Biomarkers') || t.includes('Epidemiology')) return 'MIDTERM_EPI_MARKERS';
  if (t.includes('MIDTERM_INTRO') || t.includes('Cardiac Cycle') || t.includes('Heart Sounds') || t.includes('Contraction Phase')) return 'MIDTERM_INTRO';
  if (t.includes('Mitral') || t.includes('Aortic') || t.includes('Murmur') || t.includes('Valvular') || t.includes('Click')) return 'MIDTERM_VALVULAR';
  return 'OTHER';
}

/**
 * 🩺 Universal On-Demand Medical Curriculum Quiz Engine (Balanced Blueprint Rotator)
 * Sends an exam-grade clinical question from the medical curriculum using the Standardized 2-Step Architecture:
 * 1. Message 1 (Clinical Case Card): Full English stem + Egyptian clinical translation (NO topic spoilers!)
 * 2. Message 2 (Native Telegram Quiz Poll): Concise prompt + 4 shuffled options
 * Systematically rotates across the 9 Midterm Blueprint topics so the student covers all lessons without repetition!
 */
export async function sendRandomMedicalCurriculumQuiz(bot, chatId, preferredTopicKey = null) {
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

  // Filter 100% strictly for clinical medical curriculum quizzes with valid options
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

  // Group into Midterm Blueprint Topic Buckets
  const buckets = {};
  medQuizzes.forEach(q => {
    const cat = categorizeQuizTopic(q.topic);
    if (!buckets[cat]) buckets[cat] = [];
    buckets[cat].push(q);
  });

  let chosenBucket = null;
  let chosenTopicKey = null;

  // 1. If user specifically requested a topic
  if (preferredTopicKey && buckets[preferredTopicKey] && buckets[preferredTopicKey].length > 0) {
    chosenTopicKey = preferredTopicKey;
    chosenBucket = buckets[preferredTopicKey];
  } else {
    // 2. Intelligent Balanced Round-Robin across the 9 Midterm Topics
    const activeBlueprintKeys = MIDTERM_BLUEPRINT_TOPICS
      .map(t => t.key)
      .filter(k => buckets[k] && buckets[k].length > 0);

    const lastIdx = _userLastMidtermTopicIndex.get(targetChatId) ?? -1;
    const nextIdx = (lastIdx + 1) % activeBlueprintKeys.length;
    _userLastMidtermTopicIndex.set(targetChatId, nextIdx);

    chosenTopicKey = activeBlueprintKeys[nextIdx];
    chosenBucket = buckets[chosenTopicKey];
  }

  if (!chosenBucket || chosenBucket.length === 0) {
    chosenBucket = medQuizzes;
  }

  // Prioritize least recently reviewed question within the chosen bucket
  const candidatePool = [...chosenBucket];
  candidatePool.sort((a, b) => {
    if (!a.last_reviewed_at) return -1;
    if (!b.last_reviewed_at) return 1;
    return new Date(a.last_reviewed_at) - new Date(b.last_reviewed_at);
  });

  // Pick from top 2 least reviewed to maintain slight variety
  const topCandidates = candidatePool.slice(0, Math.min(2, candidatePool.length));
  const quiz = topCandidates[Math.floor(Math.random() * topCandidates.length)];

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
  let introMsg = \`🩺 <b>كويز وتثبيت إكلينيكي [\${quiz.course_code || 'CAD402'}] 🧠✨</b>\\n\`;
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
    pollPrompt = \`[\${quiz.course_code || 'CAD402'}] \${lastSentence}?\`;
  } else {
    pollPrompt = \`[\${quiz.course_code || 'CAD402'}] ما هو التشخيص أو الإجراء الأنسب للحالة؟\`;
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

// Replace from 'export async function sendRandomMedicalCurriculumQuiz' to the end
const targetHook = "export async function sendRandomMedicalCurriculumQuiz";
const idx = content.indexOf(targetHook);

if (idx !== -1) {
  content = content.substring(0, idx) + newEngineCode.trim();
  fs.writeFileSync('lib/supabase.js', content, 'utf8');
  console.log('✅ Successfully updated sendRandomMedicalCurriculumQuiz in lib/supabase.js with Blueprint Balanced Rotator!');
} else {
  console.error('❌ Could not find targetHook in lib/supabase.js');
}
