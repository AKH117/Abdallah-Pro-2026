const dotenv = require('dotenv');
dotenv.config();
const { Telegraf } = require('telegraf');
const { createClient } = require('@supabase/supabase-js');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const adminChatId = 1191760477;

async function sendLiveDemo() {
  console.log('Fetching Aortic Stenosis quiz from Supabase...');
  const { data: quizzes, error } = await supabase
    .from('medical_spaced_quizzes')
    .select('*')
    .ilike('topic', '%Aortic Stenosis%')
    .limit(1);

  if (error || !quizzes || quizzes.length === 0) {
    console.error('Quiz not found:', error);
    return;
  }

  const quiz = quizzes[0];
  console.log('Quiz found:', quiz.topic);

  // Extract Arabic translation from answer_and_explanation
  const explanation = quiz.answer_and_explanation || '';
  const match = explanation.match(/(?:📝\s*)?(?:<b>)?أولاً\s*-\s*ترجمة رأس السؤال السريري:(?:<\/b>)?\s*([\s\S]*?)(?=\n\n(?:🔍|⚖️|🧠|🇬🇧|$))/i);
  const arabicTr = match ? match[1].trim() : '';

  // 1. Send Message 1: Clinical Case Card (Full English Scenario + Arabic Translation)
  let cardMsg = `🩺 <b>كويز وتثبيت إكلينيكي [${quiz.course_code || 'CAD'}] 🧠✨</b>\n`;
  cardMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  cardMsg += `📌 <b>الموضوع:</b> <b>${quiz.topic.replace(/\[UID:\d+\]\s*/g, '')}</b>\n\n`;
  cardMsg += `📋 <b>الحالة والسيناريو السريري (Clinical Scenario):</b>\n`;
  cardMsg += `<i>${quiz.question}</i>\n\n`;
  if (arabicTr) {
    const rtlTr = arabicTr.split('\n').map(l => l.trim() ? `\u200F${l}` : '').join('\n');
    cardMsg += `📝 <b>الترجمة والتوضيح السريري للحالة:</b>\n`;
    cardMsg += `${rtlTr}\n\n`;
  }
  cardMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  cardMsg += `👇 <i>اختر السمة السريرية أو الفحص الأنسب من الاستطلاع أدناه (+30 Doctor XP):</i>`;

  console.log('Sending Message 1 (Clinical Case Card)...');
  await bot.telegram.sendMessage(adminChatId, cardMsg, { parse_mode: 'HTML' });

  // 2. Prepare options
  let options = [
    'Ejection systolic murmur radiating to the carotid arteries with pulsus parvus et tardus',
    'Pansystolic murmur radiating to the axilla with water-hammer pulse',
    'Mid-diastolic rumbling murmur with opening snap and tapping apex beat',
    'Continuous machinery murmur heard best at the left infraclavicular area'
  ];
  let correctIdx = 0;

  // Extract from existing metadata if present
  if (quiz.doctor_pearl && quiz.doctor_pearl.includes('<<<QUIZ_META_START>>>')) {
    try {
      const json = quiz.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0];
      const parsed = JSON.parse(json);
      if (parsed.options && parsed.options.length >= 2) {
        options = parsed.options;
        correctIdx = parsed.correct_index || 0;
      }
    } catch (_) {}
  }

  // Concise poll prompt
  const pollPrompt = `[CAD] Which of the following is the most characteristic finding of this condition?`;

  console.log('Sending Message 2 (Interactive Telegram Quiz Poll)...');
  const pollMsg = await bot.telegram.sendPoll(adminChatId, pollPrompt, options, {
    type: 'quiz',
    correct_option_id: correctIdx,
    explanation: `💡 الإجابة الصحيحة: ${options[correctIdx]}\n👇 الشرح السريري الخماسي الكامل والتحشيشة في الرسالة بالأسفل`.substring(0, 195),
    is_anonymous: false
  });

  console.log('Poll sent successfully! Poll ID:', pollMsg.poll.id, 'Message ID:', pollMsg.message_id);

  // 3. Save metadata to Supabase so bot.on('poll_answer') can bind directly
  const metaObj = {
    poll_id: pollMsg.poll.id,
    message_id: pollMsg.message_id,
    chat_id: adminChatId,
    options: options,
    correct_index: correctIdx,
    explanation: explanation
  };

  await supabase.from('medical_spaced_quizzes').update({
    doctor_pearl: `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${explanation}`.trim(),
    last_reviewed_at: new Date().toISOString()
  }).eq('id', quiz.id);

  console.log('Metadata saved with message_id and chat_id! Ready for live test.');
}

sendLiveDemo().catch(err => {
  console.error('Error in sendLiveDemo:', err);
});
