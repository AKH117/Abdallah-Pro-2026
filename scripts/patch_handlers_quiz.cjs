const fs = require('fs');

let code = fs.readFileSync('lib/handlers.js', 'utf8');

// 1. Add sendRandomMedicalCurriculumQuiz to imports from ./supabase.js
if (!code.includes('sendRandomMedicalCurriculumQuiz,')) {
  code = code.replace(
    /import\s*\{([\s\S]*?)\}\s*from\s*['"]\.\/supabase\.js['"];/,
    (match, p1) => {
      return `import {\n  sendRandomMedicalCurriculumQuiz,${p1}} from './supabase.js';`;
    }
  );
  console.log('✅ Added sendRandomMedicalCurriculumQuiz to imports');
}

// 2. Add isMedicalQuizRequest function if not present
if (!code.includes('function isMedicalQuizRequest')) {
  const isMedicalQuizFunc = `
export function isMedicalQuizRequest(rawText) {
  if (!rawText || typeof rawText !== 'string') return false;
  const t = rawText.trim().toLowerCase();
  if (t.length > 70) return false;

  // If text contains question marks or specific signs with long queries, it might be an inquiry, not a request for a quiz
  if (t.includes('؟') || t.includes('?') || t.includes('stemi') || t.includes('ecg') || t.includes('leads') || t.includes('murmur') || t.includes('valve')) {
    return false;
  }

  const explicitPhrases = [
    'سؤال طبي', 'كويز طبي', 'اختبرني طبي', 'اسألني طبي', 'سؤال كلينيكال',
    'كويز كلينيكال', 'سؤال في المنهج', 'سؤال من المنهج', 'كويز في المنهج',
    'كويز من المنهج', 'ابعتلي سؤال', 'ابعت سؤال', 'عايز سؤال', 'عاوز سؤال',
    'ابعتلي كويز', 'عايز كويز', 'عاوز كويز', 'سؤال عشوائي', 'كويز عشوائي',
    'quiz', 'medical quiz', 'med quiz', 'clinical quiz', 'اختبرني', 'اسألني'
  ];

  for (const p of explicitPhrases) {
    if (t === p || t === p + ' طبي' || t === 'ابعتلي ' + p || t === 'عايز ' + p || t === 'عاوز ' + p) {
      return true;
    }
  }

  const quizRegex = /^(?:ابعتلي|ابعت|عايز|عاوز|هاتلي|هات|ممكن|يلا)?\\s*(?:سؤال|كويز|اختبار|تحدي|اسألني|اختبرني)(?:\\s*(?:طبي|سريري|كلينيكال|في\\s+المنهج|من\\s+المنهج|عشوائي|تاني|جديد|آخر|اخر))*(?:\\s*(?:يا\\s*بوت|يا\\s*دكتور|دلوقتي|بسرعة))?$/i;
  return quizRegex.test(t);
}
`;

  // Insert before bot.on('text'
  const textHook = "bot.on('text', async (ctx) => {";
  if (code.includes(textHook)) {
    code = code.replace(textHook, `${isMedicalQuizFunc}\n  ${textHook}`);
    console.log('✅ Added isMedicalQuizRequest function');
  }
}

// 3. Add fast interceptor in processUserTextWithDebounce
const targetInterp = "// 🏛️ 0.05 Academic Group Direct Intent";
if (code.includes(targetInterp) && !code.includes('// 🩺 0.03 On-Demand Medical Curriculum Quiz Request')) {
  const interceptCode = `// 🩺 0.03 On-Demand Medical Curriculum Quiz Request (Zero-Latency, Zero-Token)
    if (isMedicalQuizRequest(text)) {
      return sendRandomMedicalCurriculumQuiz(bot, fromId);
    }

    `;
  code = code.replace(targetInterp, `${interceptCode}${targetInterp}`);
  console.log('✅ Added on-demand quiz interceptor in processUserTextWithDebounce');
}

// 4. Update bot.command(['quiz', 'كويز', 'سؤال', 'اختبار'])
const oldCommandRegex = /bot\.command\(\['quiz',\s*'كويز',\s*'سؤال',\s*'اختبار'\],\s*async\s*\(ctx\)\s*=>\s*\{[\s\S]*?\n  \}\);/;
if (oldCommandRegex.test(code)) {
  const newCommand = `bot.command(['quiz', 'كويز', 'سؤال', 'اختبار'], async (ctx) => {
    const fromId = ctx.from?.id;
    if (!fromId) return;
    return sendRandomMedicalCurriculumQuiz(bot, fromId);
  });`;
  code = code.replace(oldCommandRegex, newCommand);
  console.log('✅ Updated bot.command for quiz');
}

// 5. Update bot.action('start_user_quiz')
const oldActionStartRegex = /bot\.action\('start_user_quiz',\s*async\s*\(ctx\)\s*=>\s*\{[\s\S]*?\n  \}\);/;
if (oldActionStartRegex.test(code)) {
  const newActionStart = `bot.action('start_user_quiz', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const fromId = ctx.from?.id;
    if (!fromId) return;
    return sendRandomMedicalCurriculumQuiz(bot, fromId);
  });`;
  code = code.replace(oldActionStartRegex, newActionStart);
  console.log('✅ Updated bot.action(start_user_quiz)');
}

// 6. Update bot.action('menu_med_spaced')
const oldMenuMedRegex = /bot\.action\('menu_med_spaced',\s*async\s*\(ctx\)\s*=>\s*\{[\s\S]*?\n  \}\);/;
if (oldMenuMedRegex.test(code)) {
  const newMenuMed = `bot.action('menu_med_spaced', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const fromId = ctx.from?.id;
    if (!fromId) return;

    let msg = \`🩺 <b>بنك الكويزات والمراجعة المتباعدة بالمنهج الطبي (Spaced Repetition):</b>\\n\`;
    msg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
    msg += \`🧠 تم تجهيز بنك أسئلة المنهج الطبي الشامل بنظام البطاقات السريرية المعتمدة.\\n\`;
    msg += \`📊 كل سؤال يمر بـ 6 مراحل إتقان لتثبيت المعلومة مدى الحياة مع الشرح الخماسي وزتونة الراوند!\\n\\n\`;
    msg += \`👇 <i>اضغط على الزر أدناه لبدء كويز إكلينيكي عشوائي الآن:</i>\`;

    const keyboard = {
      inline_keyboard: [
        [{ text: '🎯 ابدأ كويز إكلينيكي عشوائي (+30 XP)', callback_data: 'start_user_quiz' }],
        [{ text: '🚀 القائمة الرئيسية', callback_data: 'menu_main' }]
      ]
    };

    return ctx.reply(msg, { parse_mode: 'HTML', reply_markup: keyboard });
  });`;
  code = code.replace(oldMenuMedRegex, newMenuMed);
  console.log('✅ Updated bot.action(menu_med_spaced)');
}

// 7. Update keyboard in poll_answer to include "🩺 سؤال طبي آخر"
const oldPollKb = `      const keyboard = {
        inline_keyboard: [
          [
            { text: '📅 قسم الجدول بتاعي', callback_data: 'btn_my_schedule' },
            { text: '🚀 القائمة الرئيسية', callback_data: 'menu_main' }
          ]
        ]
      };`;

const newPollKb = `      const keyboard = {
        inline_keyboard: [
          [
            { text: '🩺 سؤال طبي آخر', callback_data: 'start_user_quiz' }
          ],
          [
            { text: '📅 قسم الجدول بتاعي', callback_data: 'btn_my_schedule' },
            { text: '🚀 القائمة الرئيسية', callback_data: 'menu_main' }
          ]
        ]
      };`;

if (code.includes(oldPollKb)) {
  code = code.replace(oldPollKb, newPollKb);
  console.log('✅ Updated poll_answer navigation keyboard');
}

fs.writeFileSync('lib/handlers.js', code, 'utf8');
console.log('🎉 Handlers.js patched successfully!');
