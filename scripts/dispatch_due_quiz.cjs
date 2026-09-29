const dotenv = require('dotenv');
dotenv.config();
const { Telegraf } = require('telegraf');
const { createClient } = require('@supabase/supabase-js');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const ADMIN_CHAT_ID = 1191760477;

async function sendFirstDueQuiz() {
  const { data: quizzes, error } = await supabase
    .from('medical_spaced_quizzes')
    .select('*')
    .ilike('topic', `%[UID:${ADMIN_CHAT_ID}]%`)
    .lte('next_review_at', new Date().toISOString())
    .eq('is_mastered', false)
    .order('next_review_at', { ascending: true })
    .limit(1);

  if (error || !quizzes || quizzes.length === 0) {
    console.log('No due quiz found:', error?.message);
    return;
  }

  const quiz = quizzes[0];
  console.log('Dispatching English quiz:', quiz.question);

  let options = null;
  let correctIdx = 0;
  let explanation = quiz.answer_and_explanation;

  if (quiz.doctor_pearl && quiz.doctor_pearl.includes('<<<QUIZ_META_START>>>')) {
    const metaJson = quiz.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0];
    const parsed = JSON.parse(metaJson);
    options = parsed.options;
    correctIdx = parsed.correct_index;
    if (parsed.explanation) explanation = parsed.explanation;
  }

  const cleanTopic = (quiz.topic || '').replace(/\[UID:\d+\]\s*/g, '').replace(/\[USER_INPUT\]\s*/g, '').trim();

  const introMsg = `🩺 <b>Clinical Spaced Retrieval [${quiz.course_code || 'CAD402'}] 🧠✨</b>\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `📌 <b>Topic:</b> <b>${cleanTopic}</b>\n\n` +
    `📋 <b>Clinical Vignette:</b>\n` +
    `<i>${quiz.question}</i>\n\n` +
    `👇 <b>Select the single best answer (+30 Doctor XP):</b>`;

  await bot.telegram.sendMessage(ADMIN_CHAT_ID, introMsg, { parse_mode: 'HTML' });

  // Shuffle options
  const optionObjs = options.map((opt, idx) => ({ text: opt, isCorrect: idx === correctIdx }));
  for (let i = optionObjs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionObjs[i], optionObjs[j]] = [optionObjs[j], optionObjs[i]];
  }
  const shuffledOptions = optionObjs.map(o => o.text.substring(0, 100));
  const newCorrectIdx = optionObjs.findIndex(o => o.isCorrect);

  const pollPrompt = `[${quiz.course_code || 'CAD402'}] Onset of Ventricular Systole:`;

  const pollMessage = await bot.telegram.sendPoll(
    ADMIN_CHAT_ID,
    pollPrompt,
    shuffledOptions,
    {
      type: 'quiz',
      correct_option_id: newCorrectIdx,
      explanation: '💡 Systole begins at S1 (Mitral closure) with isovolumetric contraction; blood ejection occurs later in mid-systole!'.substring(0, 195),
      is_anonymous: false
    }
  );

  const metaObj = {
    poll_id: pollMessage.poll.id,
    message_id: pollMessage.message_id,
    chat_id: ADMIN_CHAT_ID,
    options: shuffledOptions,
    correct_index: newCorrectIdx,
    explanation: explanation
  };

  await supabase.from('medical_spaced_quizzes').update({
    doctor_pearl: `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${explanation}`.trim(),
    last_reviewed_at: new Date().toISOString(),
    next_review_at: new Date(Date.now() + 12 * 3600 * 1000).toISOString()
  }).eq('id', quiz.id);

  console.log('🎉 Successfully sent Medical English Poll ID:', pollMessage.poll.id, 'Message ID:', pollMessage.message_id);
}

sendFirstDueQuiz().catch(console.error);
