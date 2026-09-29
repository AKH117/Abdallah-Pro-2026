require('dotenv').config();
const { Telegraf } = require('telegraf');

async function testDelivery() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error('No bot token found');
    return;
  }
  const bot = new Telegraf(token);
  const { sendRandomMedicalCurriculumQuiz, ADMIN_CHAT_ID } = await import('../lib/supabase.js');

  console.log('🚀 Triggering live on-demand medical curriculum quiz to Dr. Abdallah...');
  const res = await sendRandomMedicalCurriculumQuiz(bot, ADMIN_CHAT_ID);
  console.log('Result:', res);
}

testDelivery().catch(console.error);
