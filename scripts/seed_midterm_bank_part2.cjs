const { supabase } = require('../lib/supabase.js');

const ADMIN_ID = 1191760477;

const part2Quizzes = [
  // 1. Introduction: S3 vs S4 gallops
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_INTRO] Introduction & Heart Sounds - Pathological S3 vs S4 Gallop Rhythms`,
    question: 'A 72-year-old male with long-standing poorly controlled hypertension presents for a routine check-up. Cardiac auscultation reveals a low-pitched, presystolic extra heart sound heard best at the cardiac apex using the bell of the stethoscope in the left lateral decubitus position. It occurs immediately before S1 and is absent in atrial fibrillation. What is this heart sound and what is its underlying hemodynamic mechanism?',
    options: [
      'Fourth Heart Sound (S4, Atrial Gallop); caused by vigorous atrial contraction ejecting blood into a stiff, non-compliant, hypertrophied left ventricle',
      'Third Heart Sound (S3, Ventricular Gallop); caused by rapid passive ventricular filling into a severely dilated failing ventricle',
      'Opening Snap (OS); caused by sudden tense dome opening of a calcified stenotic mitral valve',
      'Mid-systolic Click; caused by abrupt sudden tensing of prolapsed mitral valve leaflets during ventricular ejection'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 72-year-old male with long-standing poorly controlled hypertension presents for a routine check-up. Cardiac auscultation reveals a low-pitched, presystolic extra heart sound heard best at the cardiac apex using the bell of the stethoscope in the left lateral decubitus position. It occurs immediately before S1 and is absent in atrial fibrillation. What is this heart sound and what is its underlying hemodynamic mechanism?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 72 سنة وعنده ضغط دم مرتفع مزمن وغير منضبط. فحص القلب بالسماعة الجرس (Bell) عند قمة القلب في وضع الاستلقاء الجانبي الأيسر أظهر صوتاً إضافياً منخفض النبرة بيظهر قبل الصوت الأول مباشرة (Presystolic sound - قبل S1). الصوت ده بيختفي تماماً لو المريض أصيب بالرجفان الأذيني (Atrial fibrillation). ما هو هذا الصوت وما هي آليته الفسيولوجية؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 8 و 9 - أصوات القلب الفسيولوجية والمرضية):
• <b>الصوت الرابع (Fourth Heart Sound - S4 / Atrial Gallop):</b> هو صوت انقباض الأذين (Tennessee rhythm). يحدث في نهاية الانبساط (Presystolic) قبل S1 مباشرة، عندما ينقبض الأذين بقوة ليضخ آخر كمية دم في بطين متخشب ومتيبس وفاقد للمرونة <b>(Stiff, non-compliant, hypertrophied ventricle)</b> بسبب تضخم عضلة القلب الناتج عن ارتفاع ضغط الدم (LVH) أو ضيق الصمام الأورطي (AS).
• <b>القاعدة الذهبية:</b> الصوت الرابع S4 دائماً مرضي في البالغين! ولأنه يتطلب انقباضاً أذينياً فعالاً، فإنه <b>يختفي فوراً ومستحيل أن يُسمع في مرضى الرجفان الأذيني (AF)</b> لغياب الانقباض الأذيني المنتظم!
• أما الصوت الثالث S3: فيحدث مبكراً في مرحلة الامتلاء السريع (Early diastole) نتيجة تدفق الدم في بطين متوسع ومحتقن (Dilated/Failing ventricle).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (S4; atrial contraction into a stiff, non-compliant hypertrophied LV):</b> التوصيف الفسيولوجي المعتمد في صفحة 8-9 بالكتاب.
• <b>خيار (S3 ventricular gallop - غير صحيح):</b> الصوت الثالث يحدث في أوائل الانبساط بعد S2 مباشرة ولا يعتمد على انقباض الأذين.
• <b>خيار (Opening Snap - غير صحيح):</b> طقة الانفتاح طقة حادة عالية النبرة في بداية الانبساط لضيق الميترالي وتسمع بالديافرام.
• <b>خيار (Mid-systolic Click - غير صحيح):</b> نقرة منتصف الانقباض تحدث أثناء الانقباض لارتخاء الميترالي (MVP).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«الصوت الرابع S4 خبطة أذين في بطين ناشف وتخين (Stiff LV)! والـ AF يطير S4 فوراً بدون تخمين!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Fourth Heart Sound (S4):</b> الصوت القلبي الرابع (خبب أذيني Atrial Gallop).
• <b>Non-compliant ventricle:</b> بطين متيبس فاقد للمرونة والاستيعاب نتيجة التضخم.
• <b>Presystolic timing:</b> التوقيت السابق للانقباض مباشرة (أواخر الانبساط).`
  },

  // 2. Normal ECG: Mean Electrical Axis Determination
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ECG] Normal ECG - Frontal Plane Mean Electrical Axis Determination`,
    question: 'A 45-year-old healthy male undergoes an executive health screening. His standard 12-lead ECG shows a predominantly positive (upright) QRS complex in lead I (R wave 12 mm, S wave 2 mm) and a predominantly negative (downward) QRS complex in lead aVF (R wave 2 mm, S wave 10 mm). Lead II shows a net negative QRS deflection (R wave 3 mm, S wave 7 mm). What is the mean electrical cardiac axis of this patient?',
    options: [
      'Left Axis Deviation (LAD) (between -30° and -90°)',
      'Normal Electrical Axis (between -30° and +90°)',
      'Right Axis Deviation (RAD) (between +90° and +180°)',
      'Extreme Axis Deviation / Northwest Axis (between -90° and 180°)'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 45-year-old healthy male undergoes an executive health screening. His standard 12-lead ECG shows a predominantly positive (upright) QRS complex in lead I (R wave 12 mm, S wave 2 mm) and a predominantly negative (downward) QRS complex in lead aVF (R wave 2 mm, S wave 10 mm). Lead II shows a net negative QRS deflection (R wave 3 mm, S wave 7 mm). What is the mean electrical cardiac axis of this patient?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 45 سنة بيعمل فحص شامل. رسم القلب القياسي أظهر إن مركب QRS موجب ومرفوع لفوق في اتجاه Lead I، وسالب ونازل لتحت في اتجاه aVF، وفي اتجاه Lead II كان المحصلة سالبة أيضاً (S أطول من R). ما هو المحور الكهربائي للقلب (Cardiac Axis) في هذه الحالة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 39 - تحديد المحور الكهربائي Frontal Plane Axis):
القاعدة الذهبية لتحديد المحور بالنظر في اتجاهات I و aVF و II:
1. <b>Lead I موجب و aVF موجب:</b> المحور طبيعي حتماً (Normal Axis: 0° to +90°).
2. <b>Lead I سالب و aVF موجب:</b> انحراف المحور لليمين (Right Axis Deviation: +90° to +180°).
3. <b>Lead I موجب و aVF سالب:</b> هنا المحور يتجه لليسار، وللتفريق بين المحور الطبيعي المقبول (0° إلى -30°) والانحراف المرضي لليسار (Left Axis Deviation من -30° إلى -90°)، <b>ننظر إلى Lead II</b>:
• إذا كان Lead II محصلته موجبة ➔ المحور طبيعي (بين 0° و -30°).
• <b>إذا كان Lead II محصلته سالبة (كما في السؤال) ➔ انحراف المحور لليسار (Left Axis Deviation LAD) بين -30° و -90°!</b>

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Left Axis Deviation LAD; between -30° and -90°):</b> لأن Lead I موجب و aVF سالب و Lead II محصلته سالبة.
• <b>خيار (Normal Electrical Axis - غير صحيح):</b> لو كان Lead II موجباً لكان طبيعياً، لكن سلبية Lead II تؤكد تجاوزه لـ -30° ليصبح LAD.
• <b>خيار (Right Axis Deviation - غير صحيح):</b> انحراف اليمين يكون فيه Lead I سالباً و aVF موجباً.
• <b>خيار (Extreme Axis Deviation - غير صحيح):</b> المحور المتطرف يكون فيه كلاهما (I و aVF) سالباً.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«I باصص لفوق و aVF باصص لتحت.. الاتنين ماشيين عكس بعض مفارقين (Leaving each other) = انحراف يسار (Left Axis)! و Lead II سالب يثبتها تحت الـ -30 كمان!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Mean electrical axis:</b> المحور الكهربائي المتوسط لإزالة استقطاب البطينين.
• <b>Left Axis Deviation (LAD):</b> انحراف المحور الكهربائي نحو اليسار (أقل من -30 درجة).
• <b>Net QRS deflection:</b> محصلة اتجاه موجات مركب QRS (طرح عمق S من علو R).`
  },

  // 3. Infective Endocarditis: Aortic Root Abscess & ECG Clue
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_IE] Infective Endocarditis - Complications & Aortic Root Abscess ECG Clue`,
    question: 'A 48-year-old male with confirmed native aortic valve infective endocarditis caused by Staphylococcus aureus is receiving targeted intravenous antibiotic therapy. On day 5 of therapy, routine telemetry demonstrates new-onset prolongation of the PR interval from 160 ms to 260 ms (first-degree AV block). He is afebrile but complains of mild retrosternal discomfort. What critical, potentially life-threatening complication must be immediately suspected and investigated via transesophageal echocardiography (TEE)?',
    options: [
      'Aortic Root / Perivalvular Abscess extending into the cardiac conduction system',
      'Splenic infarction from acute septic embolization',
      'Immune-complex mediated acute glomerulonephritis',
      'Acute pulmonary thromboembolism from deep vein thrombosis'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 48-year-old male with confirmed native aortic valve infective endocarditis caused by Staphylococcus aureus is receiving targeted intravenous antibiotic therapy. On day 5 of therapy, routine telemetry demonstrates new-onset prolongation of the PR interval from 160 ms to 260 ms (first-degree AV block). He is afebrile but complains of mild retrosternal discomfort. What critical, potentially life-threatening complication must be immediately suspected and investigated via transesophageal echocardiography (TEE)?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 48 سنة مشخص بالتهاب شغاف إنتاني في الصمام الأورطي بميكروب Staph aureus وبياخد المضاد الحيوي المناسب بالوريد. في اليوم الخامس، رسم القلب والمونيتور أظهر استطالة مفاجئة في مسافة الـ PR من 160 إلى 260 مللي ثانية (First-degree AV block). إيه هي المضاعفة الجراحية الخطيرة القاتلة اللي لازم نشك فيها فوراً ونطلب إيكو عبر المريء (TEE) لتأكيدها؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 26 بالكتاب نصاً تحت Complications):
"Cardiac extension of infection → abscess (<b>aortic root abscess may be manifested as long PR interval in ECG</b>)".
<b>الأساس التشريحي:</b>
الصمام الأورطي يقع تشريحياً ملاصقاً مباشرة للحاجز الغشائي (Membranous septum) ومسار حزمة التوصيل الكهربائي وحزمة هيس (Bundle of His / AV node).
عندما تتآكل أنسجة الصمام وتنتشر العدوى حول جذر الصمام مكونة خراجاً صديدياً (Aortic root perivalvular abscess)، يضغط الخراج ويلتهب نسيج العقدة الأذينية البطينية (AV conduction system)، مما يؤدي لتباطؤ التوصيل واستطالة مسافة الـ PR (AV block) وقد يتطور إلى إحصار كامل (Complete Heart Block).
ظهور PR طويل جديد في مريض إندوكاردايتس أورطي هو إشارة إنذار كبرى تستدعي <b>جراحة قلب عاجلة (Urgent Surgery)</b> لتفريغ الخراج وتغيير الصمام!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Aortic root / perivalvular abscess invading conduction system):</b> نص حرفي ومباشر في صفحة 26 وسؤال شفوي وتحريري متكرر بالامتحانات.
• <b>خيار (Splenic infarction - غير صحيح):</b> طحال يسبب وجع بالجانب الأيسر من البطن وتضخم طحال ولا يغير كهربية القلب PR interval.
• <b>خيار (Glomerulonephritis - غير صحيح):</b> التهاب الكلى يسبب بيلة دموية (Hematuria) وبروتين في البول وليس إحصار قلب.
• <b>خيار (Pulmonary embolism - غير صحيح):</b> يسبب تسرع قلب S1Q3T3 وليس استطالة معزولة في الـ PR.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«إندوكاردايتس في الصمام الأورطي ورسم القلب جاب PR طويل.. اوعى تنام! خراج جذر الأورطي (Root Abscess) ضغط على كهربية القلب وعايز جراحة قوام!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Aortic root abscess:</b> خراج صديدي بجذر الصمام الأورطي مخترق للحاجز.
• <b>PR interval prolongation:</b> استطالة زمن التوصيل الأذيني البطيني (> 0.20 ثانية).
• <b>Transesophageal echocardiography (TEE):</b> فحص الموجات الصوتية على القلب عبر المريء (الأدق لاكتشاف الخراجات).`
  },

  // 4. ACS: Prinzmetal Variant Angina vs STEMI
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - Variant / Prinzmetal Angina vs Obstructive CAD`,
    question: 'A 38-year-old female with a history of recurrent migraine headaches presents with recurrent episodes of severe retrosternal chest pain that characteristically occur at rest during the early morning hours (04:00 AM). During an acute episode in the ED, her 12-lead ECG demonstrates transient 2.5 mm ST-segment elevation in leads V2-V5 that resolves completely within 15 minutes following sublingual nitroglycerin administration. Subsequent urgent coronary angiography reveals normal, non-obstructive coronary arteries. Which of the following therapeutic agents is the drug of choice for long-term prophylaxis, and which class of medications is strictly contraindicated?',
    options: [
      'Calcium Channel Blockers (e.g., Diltiazem or Amlodipine) are first-line; Beta-blockers are strictly contraindicated',
      'Non-selective Beta-blockers (e.g., Propranolol) are first-line; Nitrates are strictly contraindicated',
      'Aspirin 325 mg combined with Ticagrelor is first-line; Calcium channel blockers are strictly contraindicated',
      'High-dose statins are first-line; Sublingual nitroglycerin is strictly contraindicated'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 38-year-old female with a history of recurrent migraine headaches presents with recurrent episodes of severe retrosternal chest pain that characteristically occur at rest during the early morning hours (04:00 AM). During an acute episode in the ED, her 12-lead ECG demonstrates transient 2.5 mm ST-segment elevation in leads V2-V5 that resolves completely within 15 minutes following sublingual nitroglycerin administration. Subsequent urgent coronary angiography reveals normal, non-obstructive coronary arteries. Which of the following therapeutic agents is the drug of choice for long-term prophylaxis, and which class of medications is strictly contraindicated?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«سيدة عندها 38 سنة وعندها تاريخ صداع نصفي (Migraines)، بتشتكي من نوبات متكررة من ألم الصدر الشديد بتجيلها وقت الراحة تحديداً الفجر في الصباح الباكر (04:00 AM). وقت النوبة في الطوارئ رسم القلب أظهر ارتفاعاً مؤقتاً في قطعة ST بمقدار 2.5 مم في اتجاهات V2-V5، وفك تماماً واختفى خلال 15 دقيقة بعد قرص نتروجليسرين تحت اللسان. عملت قسطرة تشخيصية عاجلة وطلعت الشرايين التاجية سليمة تماماً ومفيهاش أي انسدادات تصلبية (Normal coronaries). مين هو الدواء الخيار الأول للوقاية طويلة الأجل، ومين الفئة الممنوعة منعاً باتاً من أدوية القلب؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 55 و 56 - Prinzmetal or Variant Angina):
1. <b>التشخيص:</b> ذبحة برينزميتال التشنجية (Prinzmetal Angina / Vasospastic Angina). تتميز بنوبات ألم وقت الراحة (خاصة الفجر) مع ارتفاع عابر في ST يختفي مع زوال التشنج، وتكون الشرايين التاجية في القسطرة خالية من التصلب العضوي الثابت.
2. <b>العلاج المفضل:</b> <b>مضادات قنوات الكالسيوم (CCBs مثل Amlodipine أو Diltiazem) والنترات طويلة المفعول</b>؛ لأنها باسطة قوية للعضلات الملساء بجدار الشريان وتمنع حدوث التقلص التشنجي (Vasospasm).
3. <b>الممنوع تماماً (Strictly Contraindicated):</b> <b>مثبطات بيتا (Beta-blockers)!</b>
لأن قفل مستقبلات بيتا-2 المسؤولة عن توسيع الأوعية يترك مستقبلات ألفا-1 الوعائية التشنجية تعمل بحرية وبدون مقاومة (Unopposed Alpha-1 adrenergic stimulation)، مما يؤدي إلى زيادة وتفاقم انقباض الشريان التاجي وحدوث جلطة قلبية حادة كارثية!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (CCBs are first-line; Beta-blockers are contraindicated):</b> نص صريح ومباشر في صفحة 56: "Treatment with CCBs or nitrates eliminates spasm in most of these patients. Avoid beta blockers".
• <b>خيار (Beta-blockers first-line - غير صحيح):</b> خطأ طبي جسيم يؤدي لتقلص شرياني تاجي حاد (Severe coronary spasm).
• <b>خيار (DAPT first-line; CCBs contraindicated - غير صحيح):</b> لا يوجد تجلط دموي مستمر ولا انسداد تصلبي عضوي، وCCBs هي الأساس العلاجي.
• <b>خيار (Sublingual nitroglycerin contraindicated - غير صحيح):</b> النتروجليسرين هو المنقذ الفوري للنوبة لفك التشنج الشرياني.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«برينزميتال فجرية وتشنج شريان = كالسيوم بلوكر ونتروجليسرين يفك الأمان! واوعى تديلها بيتا بلوكر.. الألفا تسوحها وتقفل الشريان تمام!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Prinzmetal / Variant angina:</b> الذبحة التشنجية المتغيرة العابرة.
• <b>Coronary vasospasm:</b> تشنج وتقلص حاد مؤقت في جدار الشريان التاجي.
• <b>Unopposed alpha-1 stimulation:</b> تحفيز أحادي لمستقبلات ألفا المقبضة للأوعية عند حجب مستقبلات بيتا.`
  },

  // 5. Atherosclerosis: Pathogenesis & Foam Cells
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ATHERO] Atherosclerosis & Dyslipidemia - Cellular Pathogenesis & Fatty Streak Formation`,
    question: 'In the cellular pathogenesis of atherosclerosis as described in the curriculum, what is the initial macroscopic lesion observed in the arterial wall, and what specific cellular event leads to the formation of lipid-laden "foam cells"?',
    options: [
      'The fatty streak; formed when macrophages engulf oxidized low-density lipoproteins (ox-LDL) beneath the injured endothelium',
      'The fibrous plaque; formed when smooth muscle cells transform directly into osteoblasts',
      'The calcified nodule; formed when neutrophils release myeloperoxidase into the adventitia',
      'The mural thrombus; formed when circulating platelets synthesize cholesterol de novo'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"In the cellular pathogenesis of atherosclerosis as described in the curriculum, what is the initial macroscopic lesion observed in the arterial wall, and what specific cellular event leads to the formation of lipid-laden 'foam cells'?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«في مسار التكوين الخلوي لتصلب الشرايين (Atherogenesis) المذكور بالمنهج، ما هي أول آفة نسيجية يمكن رؤيتها بالعين المجردة في جدار الشريان (Initial macroscopic lesion)، وما هو الحدث الخلوي المحدد الذي ينتج عنه تكوين الخلايا الرغوية (Foam cells)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 32 - Pathophysiology of atherosclerosis):
1. البداية تحدث نتيجة إصابة ميكروسكوبية لبطانة الشريان (Microscopic endothelial injury) بتأثير عوامل الخطر (التدخين، الضغط، السكر، الكوليسترول).
2. تتسرب جزيئات الكوليسترول منخفض الكثافة (LDL) إلى طبقة تحت الشغاف (Intima) وتتعرض للأكسدة (Oxidized LDL).
3. تجذب هذه التغيرات خلايا الدم البيضاء الأحادية (Monocytes) التي تهاجر إلى تحت البطانة وتتحول إلى خلايا بلعمية (Macrophages).
4. تلتهم الخلايا البلعمية الـ Oxidized LDL بنهم شديد عن طريق مستقبلات Scavenger Receptors حتى تمتلئ بالدهون وتتحول إلى <b>خلايا رغوية (Foam cells)</b>.
5. تجمع هذه الخلايا الرغوية يشكل أول آفة نسيجية مرئية بالعين المجردة وتسمى <b>الخط أو البقعة الدهنية (Fatty Streak)</b>، والتي تتطور لاحقاً مع هجرة الخلايا العضلية الملساء إلى لويحة ليفية (Fibrous plaque).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Fatty streak; macrophages engulfing ox-LDL beneath injured endothelium):</b> مطابق نصاً لما ورد في صفحة 32 من كتاب الكارديو.
• <b>خيار (Fibrous plaque; smooth muscle to osteoblasts - غير صحيح):</b> اللويحة الليفية مرحلة متقدمة لاحقة وليست الآفة الأولية.
• <b>خيار (Calcified nodule; neutrophils - غير صحيح):</b> التكلس مرحلة معقدة متأخرة ولا علاقة للعدلات بها.
• <b>خيار (Mural thrombus; platelets synthesize cholesterol - غير صحيح):</b> الصفائح لا تصنع الكوليسترول والتجلط يحدث عند انفجار اللويحة.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«إصابة بطانة الشريان ➔ دخول الـ LDL والأكسدة في الحال ➔ الماكروفاج تبلع وتتخن وتبقى خلايا رغوية (Foam cells) تعمل أول خط دهني Fatty streak في الجدار!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Fatty streak:</b> الخط الدهني (أول آفة عيانية لتصلب الشرايين).
• <b>Oxidized LDL:</b> الكوليسترول منخفض الكثافة المؤكسد المثير للالتهاب.
• <b>Foam cells:</b> الخلايا الرغوية المحملة بقطيرات الكوليسترول.`
  },

  // 6. Antiischemic Pharma: Beta Blockers vs CCBs DHP vs Non-DHP
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_PHARMA] Antiischemic Pharmacology - Calcium Channel Blockers DHP vs Non-DHP Comparison`,
    question: 'A 63-year-old male with chronic stable angina and hypertension presents with bilateral pitting ankle edema without evidence of pulmonary congestion or elevated jugular venous pressure. His medication list includes Amlodipine 10 mg daily and Aspirin 81 mg daily. What is the pharmacological mechanism responsible for this peripheral ankle edema, and which medication can be combined with Amlodipine to reduce this adverse effect and enhance antianginal efficacy?',
    options: [
      'Preferential arteriolar dilation leading to increased precapillary hydrostatic pressure and fluid extravasation; combine with a Beta-blocker or ACE inhibitor',
      'Direct renal tubular sodium retention; combine with high-dose loop diuretics only',
      'Selective venodilation causing venous pooling; combine with oral nitrates',
      'Systemic capillary leak syndrome from endothelial cell apoptosis; combine with oral corticosteroids'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 63-year-old male with chronic stable angina and hypertension presents with bilateral pitting ankle edema without evidence of pulmonary congestion or elevated jugular venous pressure. His medication list includes Amlodipine 10 mg daily and Aspirin 81 mg daily. What is the pharmacological mechanism responsible for this peripheral ankle edema, and which medication can be combined with Amlodipine to reduce this adverse effect and enhance antianginal efficacy?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 63 سنة وبيتعالج من ذبحة مستقرة وضغط، بيشتكي من تورم وانطباع في الكاحلين بالقدمين (Bilateral ankle edema) بدون أي احتقان بالرئة ولا ارتفاع في أوردة الرقبة. علاجه يشمل أقراص أملوديبين 10 مجم (Amlodipine - Dihydropyridine CCB). ما هي الآلية الدوائية المسؤولة عن تورم القدمين ده، وإيه الدواء اللي ممكن نضيفه مع الأملوديبين عشان يقلل التورم ده ويزود فاعلية علاج الذبحة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 49 و 50 - جدول مقارنة CCBs):
1. <b>آلية تورم الكاحل مع أدوية الـ DHP (مثل Amlodipine و Nifedipine):</b>
هذه الأدوية موسعات شريانية قوية جداً وانتقائية (Selective arteriolar vasodilators)، ولكنها تفتقر تقريباً لأي تأثير موسع على الأوردة اللاحقة للشعيرات (Post-capillary venules). هذا يؤدي لتدفق دم هائل وزيادة الضغط الهيدروستاتيكي داخل الشعيرات الدموية (Pre-capillary dilation ➔ Increased capillary hydrostatic pressure)، مما يدفع السوائل للترشح خارج الأوعية نحو الأنسجة المحيطة مسببة تورم الكاحلين (Ankle edema).
2. <b>الحل الدوائي العبقري:</b>
إضافة <b>مثبطات الإنزيم المحول للأنجيوتنسين (ACE inhibitors) أو حاصرات بيتا (Beta-blockers)</b>؛ حيث تعمل مثبطات ACE على توسيع الأوردة اللاحقة للشعيرات فتخفف الضغط الهيدروستاتيكي المحبوس وتمنع التورم، بينما تمنع أدوية Beta-blockers تسارع ضربات القلب الانعكاسي (Reflex tachycardia) الناتج عن الأملوديبين وتعزز الوقاية من الذبحة.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Preferential arteriolar dilation with increased hydrostatic pressure; combine with BB or ACEi):</b> يطابق بالمللي جدول صفحة 50: "Ankle edema (dilate arterioles > venules)... β-blockers are added to correct reflex tachycardia and ACEIs/ARBs reduce edema".
• <b>خيار (Renal sodium retention - غير صحيح):</b> الأملوديبين ليس سببه احتباس صوديوم كلوي ولا يعالج بمدرات البول العروية.
• <b>خيار (Selective venodilation - غير صحيح):</b> النترات هي الموسعات الوريدية وليست أدوية الـ DHP.
• <b>خيار (Endothelial apoptosis... - غير صحيح):</b> لا علاقة للكورتيزون بهذه الظاهرة الفسيولوجية.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«أملوديبين يوسع الشرايين ويسيب الأوردة محبوسة = الكاحل يورم والمريض يتضايق! حط معاه ACE inhibitor يفتح الأوردة ويفرغ الضغط فوراً!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Dihydropyridines (DHP):</b> أدوية حاصرات قنوات الكالسيوم الوعائية الانتقائية (أملوديبين، نيفيديبين).
• <b>Pre-capillary arteriolar dilation:</b> توسع الشرايين السابقة للشعيرات الدموية.
• <b>Pitting ankle edema:</b> تورم الكاحل الانطباعي الناتج عن ترشح السوائل الهيدروستاتيكي.`
  }
];

async function seedPart2() {
  console.log('🚀 Seeding Midterm Bank Part 2 (High-Yield Clinical Cases)...');
  let count = 0;
  for (const q of part2Quizzes) {
    const metaObj = {
      options: q.options,
      correct_index: q.correct_index,
      explanation: q.explanation
    };
    const pearlString = `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${q.explanation}`;

    const { error } = await supabase.from('medical_spaced_quizzes').insert({
      course_code: q.course_code,
      topic: q.topic,
      question: q.question,
      answer_and_explanation: q.explanation,
      doctor_pearl: pearlString,
      repetition_level: 0,
      next_review_at: new Date().toISOString(),
      is_mastered: false
    });

    if (error) console.error('Insert error:', q.topic, error.message);
    else {
      count++;
      console.log(`✅ [${count}/${part2Quizzes.length}] Inserted: ${q.topic}`);
    }
  }
  console.log(`🎉 Part 2 completed! Successfully inserted ${count} quizzes.`);
}

seedPart2();
