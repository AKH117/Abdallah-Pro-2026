// 🩺 سكريبت معالجة وتغذية منهج الكارديولوجي للأسبوع الأول (O6U Faculty of Medicine - Block 7)
// يغذي فلاش كاردز المصطلحات الإنجليزية + بنك الأسئلة السريرية الجامعية بهيكل الشرح الخماسي المعتمد

import { supabase, ADMIN_CHAT_ID, saveNativeQuizPoll } from '../lib/supabase.js';

const WEEK1_FLASHCARDS = [
  {
    term_or_sentence: "Mid-diastolic rumbling murmur",
    egyptian_translation: "لغط قلبي دحرجي منخفض النبرة في منتصف فترة الانبساط (العلامة الكلاسيكية لضيق الصمام الميترالي Mitral Stenosis يُسمع بقمة القلب بالسماعة Bell).",
    example_sentence: "On auscultation at the apex, a low-pitched mid-diastolic rumbling murmur is best heard with the bell in left lateral position.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Presystolic accentuation",
    egyptian_translation: "علو واشتداد صوت اللغط قبل الانقباض مباشرة بسبب انقباض الأذين وضخ الدم بقوة عبر الصمام الضيق (يختفي في حالة الرجفان الأذيني AF).",
    example_sentence: "Presystolic accentuation disappears when atrial fibrillation develops due to loss of effective atrial contraction.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Opening snap (OS)",
    egyptian_translation: "طقة الانفتاح: صوت حاد ومفاجئ بعد الصوت الثاني S2 مباشرة ينتج عن فتح صمام ميترالي متصلب ومتحجر لكنه ما زال مرناً.",
    example_sentence: "The shorter the A2-OS interval, the more severe the mitral stenosis.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Pansystolic (Holosystolic) murmur",
    egyptian_translation: "لغط مستمر طوال فترة انقباض البطين يبدأ مع الصوت الأول S1 (علامة مميزة لارتجاع الصمام الميترالي MR، ارتجاع الثلاثي TR، أو ثقب VSD).",
    example_sentence: "Mitral regurgitation produces a high-pitched pansystolic murmur radiating to the left axilla.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Radiation to the axilla",
    egyptian_translation: "انتشار صوت اللغط نحو الإبط الأيسر (علامة سريرية فارقة تؤكد أن لغط الانقباض ناتج عن ارتجاع الصمام الميترالي وليس الأورطي).",
    example_sentence: "The apical systolic murmur of mitral regurgitation characteristically radiates to the axilla.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Ejection systolic murmur",
    egyptian_translation: "لغط قذفي انقباضي ذو شكل معيني يبدأ بعد S1 ويعلو ثم يهبط (Crescendo-Decrescendo) يميز ضيق الصمام الأورطي Aortic Stenosis.",
    example_sentence: "Aortic stenosis presents with a harsh crescendo-decrescendo ejection systolic murmur at the right 2nd intercostal space.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Radiation to the carotids",
    egyptian_translation: "انتشار صوت اللغط للأعلى باتجاه الشرايين السباتية في الرقبة (العلامة الكلاسيكية لضيق الصمام الأورطي Aortic Stenosis).",
    example_sentence: "Aortic stenosis murmur typically radiates along the carotid arteries bilaterally.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Pulsus parvus et tardus",
    egyptian_translation: "نبض بطيء وضعيف ومتأخر الذروة (Slow-rising, low-amplitude pulse المميز لضيق الصمام الأورطي الشديد).",
    example_sentence: "Severe aortic stenosis is characterized by pulsus parvus et tardus on radial pulse palpation.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Water-hammer (Collapsing) pulse",
    egyptian_translation: "النبض المطرقي المتهاوي (Corrigan's pulse): نبض يرتفع بسرعة هائلة ثم ينهار فجأة بسبب رجوع الدم للبطين في ارتجاع الأورطي AR.",
    example_sentence: "Water-hammer pulse is elicited by raising the patient's arm upright while feeling the radial artery.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Wide pulse pressure",
    egyptian_translation: "اتساع فارق الضغط النبضي بين الانقباضي والانبساطي (مثل 160/40 mmHg) نتيجة انخفاض الضغط الانبساطي في ارتجاع الأورطي Aortic Regurgitation.",
    example_sentence: "Wide pulse pressure and low diastolic blood pressure are hallmarks of chronic severe aortic regurgitation.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "Malar flush (Mitral facies)",
    egyptian_translation: "احمرار وجنتين مائل للزرقة (لون وردي مزرق على عظام الوجنتين نتيجة نقص النتاج القلبي واحتقان الرئة في ضيق الميترالي).",
    example_sentence: "Mitral facies is a dusky pink or cyanotic discoloration of the cheeks seen in severe mitral stenosis.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  },
  {
    term_or_sentence: "PR interval prolongation",
    egyptian_translation: "استطالة مسافة PR في رسم القلب (> 0.20 ثانية / أكثر من 5 مربعات صغيرة)، وهي المعيار التشخيصي لحصار القلب من الدرجة الأولى (1st-degree AV Block).",
    example_sentence: "A PR interval greater than 200 ms on a standard 25 mm/s ECG indicates first-degree AV block.",
    usage_context: `[UID:${ADMIN_CHAT_ID}] [MODULE:CAD] [WEEK:1]`
  }
];

const WEEK1_CLINICAL_QUIZZES = [
  {
    course_code: "CAD",
    topic: "Mitral Stenosis (MS) Clinical Vignette",
    question: "A 28-year-old female presents with progressive exertional dyspnea, orthopnea, and occasional hemoptysis. She has a history of recurrent sore throats and joint pains during childhood. On physical examination, her apex beat is tapping, and auscultation reveals an accentuated first heart sound (S1), an opening snap following S2, and a low-pitched mid-diastolic rumbling murmur with presystolic accentuation. What is the most definitive diagnostic investigation?",
    options: [
      "Transthoracic Echocardiography with Doppler",
      "Standard 12-lead Electrocardiogram (ECG)",
      "Chest X-Ray (Posteroanterior view)",
      "Coronary Angiography"
    ],
    correct_option_index: 0,
    explanation: `📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
شابة عمرها 28 سنة تشتكي من ضيق تنفس متصاعد مع المجهود، وعدم القدرة على الاستلقاء مستوية (orthopnea)، ونفث دموي بسيط (hemoptysis). لديها تاريخ مرضي في طفولتها لالتهاب متكرر بالحلق وآلام بالمفاصل (حمى روماتيزمية). بالفحص الإكلينيكي: نبض قمة القلب نقري (Tapping apex)، والسماعة أظهرت صوتاً أول عالياً (Loud S1)، وطقة انفتاح (Opening Snap) بعد S2، ولغطاً دحرجياً في منتصف الانبساط مع اشتداد قبل الانقباض (Mid-diastolic rumbling murmur with presystolic accentuation). ما هو الفحص التشخيصي الأكثر حساسية ودقة وتأكيداً للحالة؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي:</b>
المريضة تعاني من حالة ضيق صمام ميترالي روماتيزمي كلاسيكية (Rheumatic Mitral Stenosis). احتقان الرئة ناتج عن زيادة الضغط في الأذين الأيسر والأوردة الرئوية. اللغط الدحرجي وطقة الانفتاح والنقرة في قمة القلب هي العلامات الذهبية لـ MS.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (فحص الإيكو والدوبلر Echocardiography):</b> هو الفحص الأساسي رقم 1 والـ Gold Standard؛ لأنه يقيس مساحة الصمام بدقة (Valve Area)، ويقيس فرق الضغط (Pressure Gradient)، ويحدد مدى تكلس الصمام وحركة وريقاته لتحديد التدخل المناسب (قسطرة بالبالون PTMC أو جراحة).
• <b>خيار رسم القلب (ECG - غير صحيح):</b> فحص مساعد لرؤية تضخم الأذين الأيسر (P mitrale) أو الرجفان الأذيني (AF)، لكنه لا يؤكد التشخيص ولا يقيس شدة الضيق الصمامي.
• <b>خيار أشعة الصدر (Chest X-ray - غير صحيح):</b> يظهر احتقان الرئة واستقامة الحافة اليسرى للقلب (Straight left border)، لكنه فحص تصويري غير نوعي لتشخيص الصمامات بدقة.
• <b>خيار قسطرة الشرايين (Coronary Angiography - غير صحيح):</b> قسطرة مخصصة لتصوير الشرايين التاجية في حالات الجلطات والذبحة، ولا دور لها في تشخيص ضيق الصمام الميترالي لشابة صغيرة.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 إسكيمة الراوند: 'الميترالي لو ضاق.. دحرجة وطقة واختناق! والإيكو هو اللي يجيب من الأعماق!'
📌 القاعدة: ضيق الميترالي (MS) = لغط دحرجي + طقة انفتاح + الفحص الأساسي المؤكد هو الإيكو.

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• مصطلح (Exertional dyspnea): ضيق تنفس متصاعد مع بذل المجهود.
• مصطلح (Hemoptysis): بصق الدم أو خروج نفث دموي مع السعال.
• مصطلح (Opening snap): طقة انفتاح الصمام بعد الصوت الثاني S2.
• مصطلح (Tapping apex beat): ضربة قمة القلب النقرية الكلاسيكية لضيق الميترالي.`
  },
  {
    course_code: "CAD",
    topic: "Mitral Regurgitation (MR) Clinical Vignette",
    question: "A 52-year-old male presents with fatigue and worsening shortness of breath on exertion. On cardiovascular examination, the apex beat is hyperdynamic and displaced laterally to the 6th left intercostal space, anterior axillary line. Auscultation reveals a soft S1, an audible S3, and a harsh pansystolic (holosystolic) murmur heard best at the apex that radiates directly to the left axilla. What is the most likely diagnosis?",
    options: [
      "Chronic Mitral Regurgitation",
      "Severe Mitral Stenosis",
      "Aortic Regurgitation",
      "Ventricular Septal Defect"
    ],
    correct_option_index: 0,
    explanation: `📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
رجل عمره 52 سنة يشكو من إرهاق مستمر وضيق تنفس يزداد سوءاً مع المجهود. بالفحص السريري للقلب: قمة القلب مفرطة الحركة (Hyperdynamic) ومزاحة للجهة اليسرى في المساحة البينية السادسة على خط الإبط الأمامي. بالسماعة: الصوت الأول ضعيف (Soft S1) مع وجود صوت ثالث (S3 gallop)، ولغط انقباضي شامل (Pansystolic murmur) بأعلى شدة عند قمة القلب وينتشر مباشرة إلى الإبط الأيسر. ما هو التشخيص الأرجح؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي:</b>
إزاحة قمة القلب للأسفل والخارج تدل على تضخم وتمدد البطين الأيسر (LV Dilatation). اللغط الانقباضي الشامل (Pansystolic) الذي ينتشر للإبط الأيسر هو العلامة المميزة لارتجاع الصمام الميترالي (Mitral Regurgitation)، والصوت الثالث S3 يعكس زيادة حجم الدم المتدفق بسرعة داخل البطين المتسع.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (ارتجاع الميترالي المزمن Chronic MR):</b> يتطابق 100% مع اللغط الانقباضي الشامل المنتشر للإبط الأيسر مع تضخم البطين.
• <b>خيار ضيق الصمام الميترالي (Mitral Stenosis - غير صحيح):</b> لغط ضيق الميترالي يكون في الانبساط (Diastolic) وليس في الانقباض، ولا ينتشر للإبط، وقمة القلب تكون نقرية (Tapping) وليست مزاحة ومفرطة الحركة.
• <b>خيار ارتجاع الصمام الأورطي (Aortic Regurgitation - غير صحيح):</b> لغط ارتجاع الأورطي هو لغط انبساطي مبكر (Early diastolic) يُسمع على حافة القص اليسرى وليس انقباضياً عند القمة.
• <b>خيار ثقب الحاجز البطيني (VSD - غير صحيح):</b> لغط ثقب الحاجز البطيني يكون Pansystolic لكنه يُسمع بأعلى شدة عند أسفل حافة القص اليسرى (Lower left sternal border) وينتشر في كل الصدر، وغالباً عيب خلقي في سن أصغر.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 إسكيمة الراوند: 'ارتجاع الميترالي رايح للإبط.. بنسوستوليك على الظبط!'
📌 القاعدة: ارتجاع الميترالي (MR) = لغط شامل للانقباض (Pansystolic) ينتشر مباشرة نحو الإبط الأيسر (Axilla).

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• مصطلح (Hyperdynamic apex): قمة قلب قوية ومفرطة الحركة تدل على زيادة حمل الحجم (Volume Overload).
• مصطلح (Pansystolic murmur): لغط شامل مستمر طوال فترة انقباض البطين يبدأ مع S1.
• مصطلح (S3 gallop): صوت القلب الثالث الدال على امتلاء البطين السريع وزيادة حجم الدم المتدفق.`
  },
  {
    course_code: "CAD",
    topic: "Aortic Stenosis (AS) Classic Triad",
    question: "A 68-year-old male with a history of calcific valve disease experiences an episode of syncope while walking up stairs. He also reports retrosternal chest tightness on exertion and shortness of breath (SAD triad: Syncope, Angina, Dyspnea). On physical examination, radial pulse shows low amplitude with delayed peak (pulsus parvus et tardus). Auscultation reveals a harsh crescendo-decrescendo ejection systolic murmur at the right upper sternal border that radiates to both carotid arteries. Which of the following is the most characteristic finding of this condition?",
    options: [
      "Ejection systolic murmur radiating to the carotid arteries with pulsus parvus et tardus",
      "Pansystolic murmur radiating to the axilla with water-hammer pulse",
      "Mid-diastolic rumbling murmur with opening snap and tapping apex beat",
      "Continuous machinery murmur heard best at the left infraclavicular area"
    ],
    correct_option_index: 0,
    explanation: `📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
رجل مسن عمره 68 سنة لديه تاريخ تكلس صمامي، أصيب بنوبة إغماء (syncope) أثناء صعود الدرج، ويشكو أيضاً من ضيق وثقل بالصدر عند المجهود وضيق تنفس (الثالوث الشهير: إغماء، ذبحة، ضيق تنفس = SAD). بالفحص الإكلينيكي: نبض الشريان الكعبري ضعيف وبطيء ومتأخر الذروة (pulsus parvus et tardus). وبالسماعة: لغط قذفي انقباضي خشن (Crescendo-Decrescendo) عند أعلى عظمة القص بالجانب الأيمن وينتشر للشرايين السباتية بالرقبة. أي من التالي يمثل السمة السريرية الأكثر دقة لهذه الحالة؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي:</b>
هذه حالة كلاسيكية نموذجية لضيق الصمام الأورطي التكلسي (Calcific Aortic Stenosis). الثالوث الإكلينيكي الشهير هو (SAD: Syncope, Angina, Dyspnea). انتشار اللغط للرقبة ونبض Parvus et tardus هما البصمة الإكلينيكية المؤكدة لـ AS.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (اللغط القذفي الانقباضي للرقبة مع نبض Parvus et tardus):</b> هما العلامتان الأكثر تمييزاً لضيق الصمام الأورطي (Aortic Stenosis).
• <b>خيار اللغط الشامل للإبط مع النبض المطرقي (غير صحيح):</b> هذا يصف ارتجاع الميترالي، والنبض المطرقي مميز لارتجاع الأورطي وليس الضيق.
• <b>خيار اللغط الدحرجي مع ضربة القمة النقرية (غير صحيح):</b> هذا يصف ضيق الصمام الميترالي (Mitral Stenosis).
• <b>خيار اللغط الميكانيكي المستمر (Continuous machinery murmur - غير صحيح):</b> هذا اللغط خاص بالقناة الشريانية المفتوحة (Patent Ductus Arteriosus - PDA).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 إسكيمة الراوند: 'ثالوث الأورطي الحزين: SAD (إغماء، ذبحة، ضيق تنفس).. ولغطه للرقبة بيجري، ونبضه بطيء ومش بدري!'
📌 القاعدة: ضيق الأورطي (AS) = ثالوث SAD + لغط قذفي للرقبة + نبض Parvus et tardus.

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• مصطلح (Pulsus parvus et tardus): نبض بطيء وضعيف ومتأخر الذروة مميز لضيق الأورطي الشديد.
• مصطلح (Crescendo-Decrescendo): لغط متصاعد ثم هابط في الشدة على شكل معيني.
• مصطلح (Carotid radiation): انتشار صوت اللغط لأعلى نحو الشرايين السباتية في جانبي الرقبة.`
  },
  {
    course_code: "CAD",
    topic: "Normal ECG & Conduction Blueprint",
    question: "A 4th-year medical student is evaluating a standard 12-lead ECG recorded at 25 mm/s paper speed and 10 mm/mV voltage calibration. The ECG shows a regular rhythm, upright P waves before every QRS in lead II, a PR interval measuring 7 small squares (0.28 seconds), and a narrow QRS complex measuring 2 small squares (0.08 seconds). What is the correct interpretation of this ECG tracing?",
    options: [
      "Sinus rhythm with first-degree atrioventricular (AV) block",
      "Normal sinus rhythm without conduction abnormalities",
      "Second-degree AV block (Mobitz Type I)",
      "Left bundle branch block (LBBB)"
    ],
    correct_option_index: 0,
    explanation: `📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
طالب بالفرقة الرابعة يحلل رسم قلب قياسي 12-Lead مسجل بسرعة ورقة 25 مم/ثانية ومعايرة 10 مم/ملليفولت. رسم القلب أظهر نظماً منتظماً، وموجات P موجبة ومعتدلة تسبق كل مركب QRS في الاتجاه II، ومسافة PR تقيس 7 مربعات صغيرة (0.28 ثانية)، ومركب QRS ضيق يقيس مربعين صغيرين (0.08 ثانية). ما هو التفسير العلمي الصحيح لرسم القلب هذا؟

🔍 <b>ثانياً - شرح الحالة ورسم القلب:</b>
القواعد القياسية للـ Normal ECG:
- النظم الجيبي الطبيعي (Sinus Rhythm): موجة P معتدلة في الاتجاه II تسبق كل QRS.
- مسافة PR الطبيعية: من 3 إلى 5 مربعات صغيرة (0.12 إلى 0.20 ثانية). هنا مسافة PR تساوي 7 مربعات (0.28 ثانية)، أي أطول من الطبيعي بثبات وتناسق تام.
- مركب QRS الطبيعي: أقل من 3 مربعات صغيرة (< 0.12 ثانية)، وهنا 0.08 ثانية طبيعي جداً.
النتيجة: استطالة ثابتة في مسافة PR تسمى حصار أذيني بطيني من الدرجة الأولى (First-Degree AV Block).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (حصار الدرجة الأولى First-degree AV block):</b> استطالة مسافة PR لأكثر من 0.20 ثانية (أكثر من 5 مربعات صغيرة) مع اتباع كل P بـ QRS هو التعريف الحرفي الدقيق للحصار من الدرجة الأولى.
• <b>خيار النظم الجيبي الطبيعي التام (غير صحيح):</b> لا يمكن اعتباره طبيعياً تماماً لأن مسافة PR مستطالة بشكل مرضي (0.28 ثانية مقابل الحد الأقصى 0.20 ثانية).
• <b>خيار حصار الدرجة الثانية Mobitz I (غير صحيح):</b> في هذا النوع تحدث استطالة متدرجة في PR نبضة بعد نبضة حتى تسقط نبضة QRS كاملة (Dropped beat)، بينما هنا النظم منتظم ومسافة PR ثابتة.
• <b>خيار حصار الغصن الأيسر LBBB (غير صحيح):</b> حصار الغصن الأيسر يتطلب اتساع مركب QRS لأكثر من 0.12 ثانية (3 مربعات صغيرة) مع شكل حرف M في V5-V6، بينما هنا QRS ضيق وطبيعي (0.08 ثانية).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 إسكيمة الراوند: 'مسافة PR من 3 لخمس مربعات.. زادت عن 5 يبقى بلوك درجات!'
📌 القاعدة: مسافة PR الطبيعية = من 3 إلى 5 مربعات صغيرة (0.12 إلى 0.20 ثانية).

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• مصطلح (PR interval): المسافة من بداية P إلى بداية QRS (زمن التوصيل الأذيني البطيني).
• مصطلح (First-degree AV block): بطء توصيل الإشارة عبر العقدة AV دون إسقاط أي نبضة.
• مصطلح (Small square on ECG): مربع صغير واحد يعادل 0.04 ثانية عند سرعة 25 مم/ثانية.`
  }
];

async function runIngestion() {
  console.log('🚀 Starting Week 1 Cardiology Curriculum Ingestion for Dr. Abdallah (Group 7)...');

  // 1. Ingest Flashcards
  console.log(`\n📚 Ingesting ${WEEK1_FLASHCARDS.length} English Medical Flashcards...`);
  let cardsInserted = 0;
  for (const card of WEEK1_FLASHCARDS) {
    const { data: existing } = await supabase
      .from('english_spaced_flashcards')
      .select('id')
      .eq('term_or_sentence', card.term_or_sentence)
      .maybeSingle();

    if (!existing) {
      const { error } = await supabase.from('english_spaced_flashcards').insert({
        term_or_sentence: card.term_or_sentence,
        egyptian_translation: card.egyptian_translation,
        example_sentence: card.example_sentence,
        usage_context: card.usage_context,
        repetition_level: 0,
        next_review_at: new Date().toISOString(),
        is_mastered: false
      });
      if (!error) cardsInserted++;
    }
  }
  console.log(`✅ Flashcards ingestion finished: ${cardsInserted} new cards added!`);

  // 2. Ingest Clinical Vignette Quizzes
  console.log(`\n🩺 Ingesting ${WEEK1_CLINICAL_QUIZZES.length} Academic Clinical Quizzes...`);
  let quizzesInserted = 0;
  for (const q of WEEK1_CLINICAL_QUIZZES) {
    const saved = await saveNativeQuizPoll(ADMIN_CHAT_ID, {
      course_code: q.course_code,
      topic: q.topic,
      question: q.question,
      options: q.options,
      correct_option_index: q.correct_option_index,
      explanation: q.explanation,
      repetition_level: 0,
      next_review_at: new Date().toISOString()
    });
    if (saved && !saved.skipped) quizzesInserted++;
  }
  console.log(`✅ Clinical Quizzes ingestion finished: ${quizzesInserted} quizzes inserted into Supabase!`);

  console.log('\n🎉 ALL CURRICULUM DATA FOR WEEK 1 SUCCESSFULLY SYNCED!');
}

runIngestion().catch(err => {
  console.error('Ingestion error:', err);
  process.exit(1);
});
