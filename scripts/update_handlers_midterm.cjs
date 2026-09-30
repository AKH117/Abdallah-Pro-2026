const fs = require('fs');

let content = fs.readFileSync('lib/handlers.js', 'utf8');

// 1. Update import at top to include MIDTERM_BLUEPRINT_TOPICS
if (!content.includes('MIDTERM_BLUEPRINT_TOPICS')) {
  content = content.replace(
    "sendRandomMedicalCurriculumQuiz,",
    "sendRandomMedicalCurriculumQuiz,\n  MIDTERM_BLUEPRINT_TOPICS,"
  );
  console.log('✅ Added MIDTERM_BLUEPRINT_TOPICS import');
}

// 2. Define detectRequestedMidtermTopic, getMidtermBlueprintMenuContent, and improved isMedicalQuizRequest
const newFunctionsCode = `
export function detectRequestedMidtermTopic(rawText) {
  if (!rawText || typeof rawText !== 'string') return null;
  const t = rawText.toLowerCase();

  // 1. ACS / Myocardial Infarction / STEMI / NSTEMI (4 marks)
  if (t.includes('acs') || t.includes('stemi') || t.includes('nstemi') || t.includes('احتشاء') || t.includes('جلطة') || t.includes('تاجية') || t.includes('شرايين تاجية')) {
    return 'MIDTERM_ACS';
  }

  // 2. Infective Endocarditis (3 marks)
  if (t.includes('endocarditis') || t.includes('شغاف') || t.includes('إنتاني') || t.includes('انتاني') || t.includes('ie')) {
    return 'MIDTERM_IE';
  }

  // 3. Valvular Heart Diseases & Murmurs (4 marks)
  if (t.includes('صمام') || t.includes('صمامات') || t.includes('valve') || t.includes('valvular') || t.includes('mitral') || t.includes('aortic') || t.includes('مترالي') || t.includes('ميترالي') || t.includes('أورطي') || t.includes('اورطي') || t.includes('مرمر') || t.includes('murmur') || t.includes('خرخرة')) {
    return 'MIDTERM_VALVULAR';
  }

  // 4. Pharmacology: Antiischemic Drugs (3 marks)
  if (t.includes('أدوية') || t.includes('ادوية') || t.includes('دوا') || t.includes('pharma') || t.includes('pharmacology') || t.includes('فارما') || t.includes('نيترات') || t.includes('بيتا') || t.includes('كالسيوم') || t.includes('antiischemic')) {
    return 'MIDTERM_PHARMA';
  }

  // 5. Atherosclerosis & Dyslipidemia (3 marks)
  if (t.includes('تصلب') || t.includes('شرايين') || t.includes('athero') || t.includes('atherosclerosis') || t.includes('دهون') || t.includes('كوليسترول') || t.includes('statin') || t.includes('ستاتين') || t.includes('dyslipidemia')) {
    return 'MIDTERM_ATHERO';
  }

  // 6. Chronic Stable Angina (3 marks)
  if (t.includes('ذبحة') || t.includes('ذبحه') || t.includes('angina') || t.includes('مستقرة') || t.includes('مستقره') || t.includes('prinzmetal')) {
    return 'MIDTERM_ANGINA';
  }

  // 7. Normal ECG & Conduction (3 marks)
  if (t.includes('رسم قلب') || t.includes('تخطيط') || t.includes('ecg') || t.includes('اي سي جي') || t.includes('leads') || t.includes('conduction') || t.includes('axis') || t.includes('نظم')) {
    return 'MIDTERM_ECG';
  }

  // 8. Epidemiology & Cardiac Biomarkers (2 marks)
  if (t.includes('إنزيم') || t.includes('انزيم') || t.includes('biomarker') || t.includes('markers') || t.includes('ماركر') || t.includes('تروبونين') || t.includes('troponin') || t.includes('وبائيات') || t.includes('epidemiology') || t.includes('وقاية')) {
    return 'MIDTERM_EPI_MARKERS';
  }

  // 9. Intro & Cardiac Cycle / Heart Sounds (2 marks)
  if (t.includes('فسيولوجي') || t.includes('مقدمة') || t.includes('مقدمه') || t.includes('دورة قلبية') || t.includes('أصوات القلب') || t.includes('اصوات القلب') || t.includes('cardiac cycle') || t.includes('heart sounds') || t.includes('s1') || t.includes('s2') || t.includes('s3') || t.includes('s4')) {
    return 'MIDTERM_INTRO';
  }

  return null;
}

export function getMidtermBlueprintMenuContent() {
  const msg = \`📊 <b>خريطة ومطابقة بلوبرينت امتحان الميد تيرم (Cardiology 2026-2027) 🩺</b>\\n\` +
    \`━━━━━━━━━━━━━━━━━━━━━\\n\` +
    \`🎯 <b>إجمالي درجات الميد تيرم:</b> 27 درجة (MCQs)\\n\` +
    \`📖 <b>المنهج المعتمد:</b> كلية الطب - قسم القلب والأوعية الدموية\\n\` +
    \`━━━━━━━━━━━━━━━━━━━━━\\n\\n\` +
    \`اختر أي درس لاختبار نفسك فيه مباشرة، أو اضغط <b>"🎲 كويز متوازن شامل"</b> للتدريب بنظام التدوير الذكي عبر الـ 9 مواضيع بالتساوي ومنع التكرار:\\n\\n\` +
    \`1️⃣ <b>متلازمة الشرايين التاجية (ACS & STEMI):</b> 4 درجات\\n\` +
    \`2️⃣ <b>أمراض الصمامات واللغط (Valvular Diseases):</b> 4 درجات\\n\` +
    \`3️⃣ <b>التهاب الشغاف الإنتاني (Infective Endocarditis):</b> 3 درجات\\n\` +
    \`4️⃣ <b>أدوية قصور التروية (Antiischemic Drugs):</b> 3 درجات\\n\` +
    \`5️⃣ <b>تصلب الشرايين والدهون (Atherosclerosis):</b> 3 درجات\\n\` +
    \`6️⃣ <b>الذبحة الصدرية المستقرة (Stable Angina):</b> 3 درجات\\n\` +
    \`7️⃣ <b>رسم القلب والتوصيل الكهربي (Normal ECG):</b> 3 درجات\\n\` +
    \`8️⃣ <b>وبائيات وإنزيمات القلب (Biomarkers):</b> درجتان\\n\` +
    \`9️⃣ <b>مقدمة الكارديو وأصوات القلب (Intro & Sounds):</b> درجتان\\n\\n\` +
    \`<i>⚡ محرك الكويزات مبرمج الآن على منع تكرار نفس الدرس مرتين متتاليتين تلقائياً.</i>\`;

  const keyboard = {
    inline_keyboard: [
      [
        { text: '🎲 كويز متوازن شامل (تدوير ذكي)', callback_data: 'start_user_quiz' }
      ],
      [
        { text: '🫀 الـ ACS والجلطات (4 درجات)', callback_data: 'midterm_topic_MIDTERM_ACS' },
        { text: '🚪 الصمامات (4 درجات)', callback_data: 'midterm_topic_MIDTERM_VALVULAR' }
      ],
      [
        { text: '🦠 التهاب الشغاف IE (3 درجات)', callback_data: 'midterm_topic_MIDTERM_IE' },
        { text: '💊 أدوية الكارديو (3 درجات)', callback_data: 'midterm_topic_MIDTERM_PHARMA' }
      ],
      [
        { text: '🧈 تصلب الشرايين (3 درجات)', callback_data: 'midterm_topic_MIDTERM_ATHERO' },
        { text: '🏃 الذبحة الصدرية (3 درجات)', callback_data: 'midterm_topic_MIDTERM_ANGINA' }
      ],
      [
        { text: '📈 رسم القلب ECG (3 درجات)', callback_data: 'midterm_topic_MIDTERM_ECG' },
        { text: '🔬 إنزيمات القلب (درجتان)', callback_data: 'midterm_topic_MIDTERM_EPI_MARKERS' }
      ],
      [
        { text: '⚡ مقدمة وأصوات القلب (درجتان)', callback_data: 'midterm_topic_MIDTERM_INTRO' }
      ],
      [
        { text: '🚀 القائمة الرئيسية', callback_data: 'menu_main' }
      ]
    ]
  };

  return { msg, keyboard };
}

export function isMedicalQuizRequest(rawText) {
  if (!rawText || typeof rawText !== 'string') return false;
  const t = rawText.trim().toLowerCase();
  if (t.length > 90) return false;

  // Midterm direct keywords
  if (t === 'ميدتيرم' || t === 'الميدتيرم' || t === 'بلوبرينت' || t === 'البلوبرينت' || t === 'midterm' || t === 'blueprint') {
    return true;
  }

  const explicitPhrases = [
    'سؤال طبي', 'كويز طبي', 'اختبرني طبي', 'اسألني طبي', 'سؤال كلينيكال',
    'كويز كلينيكال', 'سؤال في المنهج', 'سؤال من المنهج', 'كويز في المنهج',
    'كويز من المنهج', 'ابعتلي سؤال', 'ابعت سؤال', 'عايز سؤال', 'عاوز سؤال',
    'ابعتلي كويز', 'عايز كويز', 'عاوز كويز', 'سؤال عشوائي', 'كويز عشوائي',
    'quiz', 'medical quiz', 'med quiz', 'clinical quiz', 'اختبرني', 'اسألني',
    'سؤال جديد', 'كويز جديد', 'سؤال آخر', 'سؤال اخر', 'كويز اخر', 'كويز تاني', 'سؤال تاني'
  ];

  for (const p of explicitPhrases) {
    if (t === p || t === p + ' طبي' || t === 'ابعتلي ' + p || t === 'عايز ' + p || t === 'عاوز ' + p) {
      return true;
    }
  }

  // Check if it's asking for a question in a specific topic:
  const topicQuizRegex = /^(?:ابعتلي|ابعت|عايز|عاوز|هاتلي|هات|ممكن|يلا)?\\s*(?:سؤال|كويز|اختبار|اسألني|اختبرني)\\s*(?:في|عن|من|بخصوص)?\\s*(.+)$/i;
  const match = t.match(topicQuizRegex);
  if (match) {
    const topicPart = match[1].trim();
    if (detectRequestedMidtermTopic(topicPart) || /^(?:طبي|سريري|كلينيكال|المنهج|كارديو|ميدتيرم|الميدتيرم|عشوائي)$/i.test(topicPart)) {
      return true;
    }
  }

  const quizRegex = /^(?:ابعتلي|ابعت|عايز|عاوز|هاتلي|هات|ممكن|يلا)?\\s*(?:سؤال|كويز|اختبار|تحدي|اسألني|اختبرني)(?:\\s*(?:طبي|سريري|كلينيكال|في\\s+المنهج|من\\s+المنهج|عشوائي|تاني|جديد|آخر|اخر))*(?:\\s*(?:يا\\s*بوت|يا\\s*دكتور|دلوقتي|بسرعة))?$/i;
  return quizRegex.test(t);
}
`;

// Replace existing isMedicalQuizRequest function
const oldFuncRegex = /function isMedicalQuizRequest\(rawText\)[\s\S]*?return quizRegex\.test\(t\);\s*\}/;
if (oldFuncRegex.test(content)) {
  content = content.replace(oldFuncRegex, newFunctionsCode.trim());
  console.log('✅ Replaced isMedicalQuizRequest and added detectRequestedMidtermTopic + getMidtermBlueprintMenuContent');
} else {
  console.error('❌ Could not find old isMedicalQuizRequest regex');
}

// 3. Update command ['quiz', 'كويز', 'سؤال', 'اختبار'] to handle topicKey and add /midterm command
const oldQuizCmd = `  bot.command(['quiz', 'كويز', 'سؤال', 'اختبار'], async (ctx) => {
    const fromId = ctx.from?.id;
    if (!fromId) return;
    return sendRandomMedicalCurriculumQuiz(bot, fromId);
  });`;

const newQuizCmd = `  bot.command(['quiz', 'كويز', 'سؤال', 'اختبار'], async (ctx) => {
    const fromId = ctx.from?.id;
    if (!fromId) return;
    const text = ctx.message?.text || '';
    const topicKey = detectRequestedMidtermTopic(text);
    return sendRandomMedicalCurriculumQuiz(bot, fromId, topicKey);
  });

  bot.command(['midterm', 'ميدتيرم', 'بلوبرينت', 'blueprint'], async (ctx) => {
    const { msg, keyboard } = getMidtermBlueprintMenuContent();
    return ctx.reply(msg, { parse_mode: 'HTML', reply_markup: keyboard });
  });`;

if (content.includes(oldQuizCmd)) {
  content = content.replace(oldQuizCmd, newQuizCmd);
  console.log('✅ Updated quiz command and added midterm command');
} else {
  console.warn('⚠️ Could not find exact oldQuizCmd string, searching by regex...');
  const cmdRegex = /bot\.command\(\['quiz',\s*'كويز',\s*'سؤال',\s*'اختبار'\],\s*async\s*\(ctx\)\s*=>\s*\{[\s\S]*?sendRandomMedicalCurriculumQuiz\(bot,\s*fromId\);\s*\}\);/;
  if (cmdRegex.test(content)) {
    content = content.replace(cmdRegex, newQuizCmd);
    console.log('✅ Updated quiz command and added midterm command via regex');
  }
}

// 4. Update text processing of medical quiz request
const oldTextCall = `    // 🩺 0.03 On-Demand Medical Curriculum Quiz Request (Zero-Latency, Zero-Token)
    if (isMedicalQuizRequest(text)) {
      return sendRandomMedicalCurriculumQuiz(bot, fromId);
    }`;

const newTextCall = `    // 🩺 0.03 On-Demand Medical Curriculum Quiz Request (Zero-Latency, Zero-Token)
    if (isMedicalQuizRequest(text)) {
      const topicKey = detectRequestedMidtermTopic(text);
      return sendRandomMedicalCurriculumQuiz(bot, fromId, topicKey);
    }`;

if (content.includes(oldTextCall)) {
  content = content.replace(oldTextCall, newTextCall);
  console.log('✅ Updated on-demand text quiz call with topicKey');
}

// 5. Update poll_answer keyboard and reply options
const oldKeyboardInPollAnswer = `      const keyboard = {
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

const newKeyboardInPollAnswer = `      const keyboard = {
        inline_keyboard: [
          [
            { text: '🎲 كويز متوازن من درس آخر بالميد تيرم', callback_data: 'start_user_quiz' }
          ],
          [
            { text: '📊 خريطة دروس الميد تيرم (27 درجة)', callback_data: 'menu_midterm_blueprint' }
          ],
          [
            { text: '📅 قسم الجدول بتاعي', callback_data: 'btn_my_schedule' },
            { text: '🚀 القائمة الرئيسية', callback_data: 'menu_main' }
          ]
        ]
      };`;

if (content.includes(oldKeyboardInPollAnswer)) {
  content = content.replace(oldKeyboardInPollAnswer, newKeyboardInPollAnswer);
  console.log('✅ Updated poll_answer keyboard with blueprint hub button');
}

// Update reply_parameters in poll_answer
const oldTargetMsgId = `const targetMessageId = result.quiz?.message_id;`;
const newTargetMsgId = `const targetMessageId = result.quiz?.message_id || result.quiz?.intro_message_id;`;
if (content.includes(oldTargetMsgId)) {
  content = content.replace(oldTargetMsgId, newTargetMsgId);
  console.log('✅ Updated targetMessageId to support intro_message_id fallback');
}

const oldSendOptions = `        const sendOptions = {
          parse_mode: 'HTML'
        };
        if (isLast) {
          sendOptions.reply_markup = keyboard;
        }
        if (isFirst && targetMessageId) {
          sendOptions.reply_to_message_id = targetMessageId;
        }`;

const newSendOptions = `        const sendOptions = {
          parse_mode: 'HTML',
          allow_sending_without_reply: true
        };
        if (isLast) {
          sendOptions.reply_markup = keyboard;
        }
        if (isFirst && targetMessageId) {
          sendOptions.reply_to_message_id = targetMessageId;
          sendOptions.reply_parameters = {
            message_id: targetMessageId,
            allow_sending_without_reply: true
          };
        }`;

if (content.includes(oldSendOptions)) {
  content = content.replace(oldSendOptions, newSendOptions);
  console.log('✅ Enhanced sendOptions with allow_sending_without_reply & reply_parameters');
}

// 6. Add action handlers for menu_midterm_blueprint and midterm_topic_
const oldStartQuizAction = `  bot.action('start_user_quiz', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const fromId = ctx.from?.id;
    if (!fromId) return;
    return sendRandomMedicalCurriculumQuiz(bot, fromId);
  });`;

const newStartQuizAction = `  bot.action('start_user_quiz', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const fromId = ctx.from?.id;
    if (!fromId) return;
    return sendRandomMedicalCurriculumQuiz(bot, fromId);
  });

  bot.action('menu_midterm_blueprint', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const { msg, keyboard } = getMidtermBlueprintMenuContent();
    return ctx.reply(msg, { parse_mode: 'HTML', reply_markup: keyboard });
  });

  bot.action(/^midterm_topic_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const fromId = ctx.from?.id;
    if (!fromId) return;
    const topicKey = ctx.match[1];
    return sendRandomMedicalCurriculumQuiz(bot, fromId, topicKey);
  });`;

if (content.includes(oldStartQuizAction)) {
  content = content.replace(oldStartQuizAction, newStartQuizAction);
  console.log('✅ Added menu_midterm_blueprint and midterm_topic_ actions');
}

fs.writeFileSync('lib/handlers.js', content, 'utf8');
console.log('🎉 Successfully finished updating lib/handlers.js!');
