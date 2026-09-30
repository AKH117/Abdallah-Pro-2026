const { supabase } = require('../lib/supabase.js');

const ADMIN_ID = 1191760477;

const part3Quizzes = [
  // 1. Epidemiology: Primordial vs Primary vs Secondary
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_EPI_MARKERS] Epidemiology & Prevention - Primordial vs Primary vs Secondary Prevention`,
    question: 'A community health initiative aims to implement health promotion programs in elementary schools to encourage daily physical activity, reduce salt and refined sugar consumption, and prevent childhood tobacco initiation. Which level of cardiovascular disease prevention does this intervention represent according to the curriculum?',
    options: [
      'Primordial Prevention (preventing the emergence and development of cardiovascular risk factors from childhood)',
      'Primary Prevention (controlling established risk factors such as hypertension before a cardiac event occurs)',
      'Secondary Prevention (preventing recurrent myocardial infarction after revascularization)',
      'Tertiary Prevention (palliative hospice care for end-stage congestive heart failure)'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A community health initiative aims to implement health promotion programs in elementary schools to encourage daily physical activity, reduce salt and refined sugar consumption, and prevent childhood tobacco initiation. Which level of cardiovascular disease prevention does this intervention represent according to the curriculum?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«مبادرة صحة مجتمعية نظمت برنامجاً في المدارس الابتدائية للأطفال لتشجيع الرياضة اليومية وتقليل استهلاك الملح والسكر ومنع التدخين في سن مبكرة. أي مستوى من مستويات الوقاية من أمراض القلب والأوعية الدموية يمثله هذا البرنامج وفقاً لكتاب القسم؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 30 - مستويات الوقاية الثلاثة):
1. <b>الوقاية البكرية / البدئية (Primordial Prevention):</b> تعني منع ظهور عوامل الخطر أصلاً (Preventing the emergence of risk factors like hypertension, obesity, dyslipidemia) من البداية وتبدأ من مرحلة الطفولة عبر تعديل نمط الحياة والتغذية السليمة.
2. <b>الوقاية الأولية (Primary Prevention):</b> التدخل عند شخص ظهرت لديه عوامل خطر بالفعل (مثل شخص عنده ضغط أو دهون مرتفعة) لمنع حدوث أول جلطة أو ذبحة صدرية (First heart attack).
3. <b>الوقاية الثانوية (Secondary Prevention):</b> التدخل بعد حدوث الجلطة أو تركيب الدعامة لمنع تكرار الجلطة الثانية (Preventing a second heart attack or stroke).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Primordial Prevention; preventing emergence of risk factors):</b> مطابق حرفياً لصفحة 30: "Primordial prevention involves working to prevent risk factors from taking hold, ideally from childhood on".
• <b>خيار (Primary Prevention - غير صحيح):</b> الوقاية الأولية تكون لأشخاص لديهم بالفعل ضغط أو سكر أو كوليسترول لمنع حدوث الجلطة الأولى.
• <b>خيار (Secondary Prevention - غير صحيح):</b> الوقاية الثانوية تبدأ بعد حدوث الجلطة القلبية الأولى فعلياً.
• <b>خيار (Tertiary Prevention - غير صحيح):</b> مصطلح غير مستخدم في هذا السياق الوقائي لمنع تصلب الشرايين.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«من الطفولة مفيش ريسك فاكتور = بريمورديال (Primordial)! فيه ريسك فاكتور ومجاش جلطة = برايمري (Primary)! جاله جلطة وبنحميه من التانية = سكندري (Secondary)!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Primordial prevention:</b> الوقاية البدئية الفطرية من مرحلة الطفولة.
• <b>Primary prevention:</b> الوقاية الأولية قبل حدوث أول حدث وعائي قلبي.
• <b>Secondary prevention:</b> الوقاية الثانوية بعد حدوث الجلطة الأولى.`
  },

  // 2. High-Risk NSTEMI requiring early angiography within 24h
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - High-Risk Features in NSTE-ACS Mandating Early Invasive Strategy`,
    question: 'A 64-year-old diabetic male presents with recurrent, crescendo chest pain of 15 minutes duration occurring at rest. Initial 12-lead ECG reveals 1 mm horizontal ST-segment depression in leads V4-V6 and flat T waves. High-sensitivity cardiac troponin I is elevated above the 99th percentile. Blood pressure is 110/70 mmHg, and his estimated GRACE risk score is > 140. According to ACS management guidelines, what is the recommended timing for coronary angiography in this patient?',
    options: [
      'Early invasive coronary angiography within 24 hours of admission',
      'Immediate emergency angiography within 2 hours regardless of medical stabilization',
      'Conservative medical therapy with delayed angiography only if a treadmill stress test is positive at 4 weeks',
      'Immediate intravenous thrombolytic therapy with Tenecteplase'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 64-year-old diabetic male presents with recurrent, crescendo chest pain of 15 minutes duration occurring at rest. Initial 12-lead ECG reveals 1 mm horizontal ST-segment depression in leads V4-V6 and flat T waves. High-sensitivity cardiac troponin I is elevated above the 99th percentile. Blood pressure is 110/70 mmHg, and his estimated GRACE risk score is > 140. According to ACS management guidelines, what is the recommended timing for coronary angiography in this patient?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 64 سنة ومريض سكر، بيشتكي من ألم متكرر ومتصاعد في الصدر وقت الراحة مدته 15 دقيقة (Crescendo angina). رسم القلب أظهر انخفاض ST بمقدار 1 مم في اتجاهات V4-V6، وإنزيم التروبونين عالي، وضغطه 110/70 وسكور جريس عالي الخطورة (> 140). بناءً على بروتوكولات الـ NSTEMI، ما هو التوقيت الموصى به لعمل القسطرة التداخلية (Coronary Angiography)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 57 و 58):
في حالات متلازمة الشريان التاجي غير المرتفعة لـ ST (NSTEMI / High-Risk UA):
المريض لديه علامات خطورة عالية (High-Risk Features): سكر، تروبونين إيجابي، تغيرات ديناميكية في ST، وسكور خطورة مرتفع.
التوصية المعتمدة بالمنهج:
<b>Early Invasive Strategy (Coronary Angiography within 24 hours)</b>.
تنبيه سريري هام جداً: <b>مذيبات التجلط (Thrombolytics) ممنوعة منعاً باتاً وغير مفيدة بل ضارة في حالات UA و NSTEMI</b> (صفحة 54 نصاً: "Thrombolytic therapy is not effective in UA or NSTEMI and may be harmful, unlike the clear benefit in STEMI").

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Early invasive angiography within 24 hours):</b> التوقيت القياسي المعتمد في صفحة 57 لمرضى الـ NSTEMI عالي الخطورة.
• <b>خيار (Immediate within 2 hours - غير صحيح):</b> القسطرة الفورية خلال ساعتين مخصصة للمرضى شديدي الخطورة جداً (Very high risk: صدمة قلبية Cardiogenic shock، عدم استقرار ديناميكي، عدم استجابة للأدوية، أو توقف قلب).
• <b>خيار (Conservative with treadmill at 4 weeks - غير صحيح):</b> المريض لديه NSTEMI مثبت بتروبونين ولا يعامل كمريض ذبحة مستقرة منخفضة الخطورة.
• <b>خيار (Immediate IV thrombolytic - غير صحيح):</b> خطأ طبي كارثي، مذيبات التجلط ممنوعة تماماً في الـ NSTEMI.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«إنستيماي (NSTEMI) وتروبونين عالي = قسطرة خلال 24 ساعة بدون تأخير! واوعى تفكر في مذيب جلطات.. المذيب في النستيماي يجيب نزيف وتدمير!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>NSTEMI:</b> احتشاء قلبي بدون ارتفاع قطعة ST مع إيجابية التروبونين.
• <b>Early invasive strategy:</b> التدخل بالقسطرة التاجية خلال 24 ساعة من الدخول.
• <b>GRACE score:</b> مقياس حساب الخطورة ومعدل الوفاة في متلازمة الشرايين التاجية الحادة.`
  },

  // 3. Post-MI Dressler Syndrome vs Early Pericarditis
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - Post-MI Inflammatory Complications & Dressler Syndrome`,
    question: 'A 55-year-old male presents 3 weeks following an extensive anterior STEMI with sharp, pleuritic retrosternal chest pain that worsens when lying flat and is significantly relieved by sitting up and leaning forward. Physical examination reveals low-grade fever and a scratchy, high-pitched friction rub heard best along the left sternal border. An ECG demonstrates diffuse, widespread concave-upward ST-segment elevation with PR-segment depression in multiple leads. What is the diagnosis and what is the recommended medical therapy according to the curriculum?',
    options: [
      'Dressler Syndrome (Late Post-MI Autoimmune Pericarditis); treat with High-Dose Aspirin (avoid other NSAIDs)',
      'Acute Recurrent Myocardial Infarction; treat with immediate Thrombolytic therapy',
      'Acute Pulmonary Embolism; treat with full-dose Warfarin',
      'Infective Endocarditis; treat with intravenous Vancomycin and Gentamicin'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 55-year-old male presents 3 weeks following an extensive anterior STEMI with sharp, pleuritic retrosternal chest pain that worsens when lying flat and is significantly relieved by sitting up and leaning forward. Physical examination reveals low-grade fever and a scratchy, high-pitched friction rub heard best along the left sternal border. An ECG demonstrates diffuse, widespread concave-upward ST-segment elevation with PR-segment depression in multiple leads. What is the diagnosis and what is the recommended medical therapy according to the curriculum?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 55 سنة جه بعد 3 أسابيع من إصابته بجلطة قلبية أمامية كبيرة (Anterior STEMI)، بألم حاد في الصدر نغزي بيزيد لما ينام مستوي وبيخف لما يقعد ويميل لقدام (Pleuritic positional chest pain). الفحص أظهر سخونية خفيفة وصوت احتكاك خشن بالسماعة (Pericardial friction rub). رسم القلب أظهر ارتفاعاً مقعراً واسعاً في قطعة ST مع هبوط في مسافة الـ PR في معظم الاتجاهات. ما هو التشخيص وما هو العلاج الموصى به في كتاب القسم؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 61 نصاً تحت Inflammatory complications):
• <b>متلازمة دريسلر (Dressler Syndrome / Late Post-MI Pericarditis):</b>
تحدث بعد <b>2 إلى 4 أسابيع</b> من الجلطة القلبية، وهي تفاعل مناعي ذاتي متأخر (Autoimmune inflammatory reaction) ضد مستضدات عضلة القلب التالفة.
• <b>العلامات السريرية:</b> ألم التهاب الغشاء التاموري (يخف بالميل للأمام)، وصوت احتكاك التامور (Friction rub)، وارتفاع مقعر شامل في ST مع هبوط PR في رسم القلب.
• <b>قاعدة العلاج الذهبية بالكتاب:</b>
العلاج هو <b>جرعات عالية من الأسبرين (High-dose Aspirin)</b>.
ونص الكتاب صريح: <b>"Treatment is high dose aspirin… never use any other NSAIDs"</b>؛ لأن مضادات الالتهاب غير الستيرويدية الأخرى (مثل الإيبوبروفين والديكلوفيناك) تمنع وتعيق التئام وتليف ندبة الجلطة وتزيد خطورة انفجار جدار القلب (Myocardial rupture)!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Dressler Syndrome; treat with High-Dose Aspirin, avoid other NSAIDs):</b> نص حرفي مباشر من صفحة 61 في كتاب الكارديو.
• <b>خيار (Acute Recurrent MI - غير صحيح):</b> ألم الجلطة عصر وثقل ولا يتغير بوضعية الجسم (الميل للأمام)، وارتفاع ST في الجلطة يكون محدداً في اتجاهات معينة مع تغيرات تبادلية.
• <b>خيار (Pulmonary Embolism - غير صحيح):</b> لا يسبب ارتفاعاً شاملاً مقعراً في ST ولا احتكاك تامور (Pericardial rub).
• <b>خيار (Infective Endocarditis - غير صحيح):</b> التهاب شغاف لا يسبب friction rub يخف بالانحناء للأمام.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«بعد الجلطة بـ 3 أسابيع الوجع يخف لما يميل لقدام = متلازمة دريسلر في التمام! وعلاجها أسبرين عالي التركيز.. واوعى تدي أي مسكن تاني يفرقع الندبة ويعمل انفجار!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Dressler syndrome:</b> متلازمة دريسلر (التهاب التامور المناعي المتأخر بعد الجلطة بأسابيع).
• <b>Pericardial friction rub:</b> صوت احتكاك وريقات غشاء التامور الملتهب.
• <b>Concave-upward ST elevation:</b> ارتفاع قطعة ST المقعر لأعلى المميز لالتهاب التامور.`
  },

  // 4. Atherosclerosis: Familial Hypercholesterolemia
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ATHERO] Atherosclerosis & Dyslipidemia - Familial Hypercholesterolemia Genetics & Features`,
    question: 'A 32-year-old male presents with non-anginal palpitations. Physical examination reveals prominent firm nodular swellings over the Achilles tendons bilaterally and a complete white-gray ring around the periphery of the corneas (arcus senilis). Fasting lipid panel reveals: Total Cholesterol 340 mg/dL, LDL-C 260 mg/dL, and Triglycerides 130 mg/dL. His father suffered a fatal myocardial infarction at age 41. What is the genetic mode of inheritance, primary molecular defect, and standard screening recommendation for this disorder?',
    options: [
      'Autosomal dominant mutation in the LDL-receptor gene; family (first-degree relatives) lipid testing is mandatory',
      'Autosomal recessive deficiency of lipoprotein lipase; only maternal siblings require screening',
      'X-linked recessive mutation in Apolipoprotein B-100; no family screening is indicated',
      'Mitochondrial inheritance affecting ATP-citrate lyase; genetic testing is contraindicated'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 32-year-old male presents with non-anginal palpitations. Physical examination reveals prominent firm nodular swellings over the Achilles tendons bilaterally and a complete white-gray ring around the periphery of the corneas (arcus senilis). Fasting lipid panel reveals: Total Cholesterol 340 mg/dL, LDL-C 260 mg/dL, and Triglycerides 130 mg/dL. His father suffered a fatal myocardial infarction at age 41. What is the genetic mode of inheritance, primary molecular defect, and standard screening recommendation for this disorder?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«شاب عنده 32 سنة بيشتكي من رفرفة في القلب. الفحص أظهر كتل وتورمات عقدية صلبة فوق وتر أكيليس في القدمين (Tendinous xanthomas)، وقوس أبيض رمادي محيط بقرنية العين (Arcus senilis). تحليل الدهون أظهر كوليسترول كلي 340 والـ LDL-C عنده 260 mg/dL. والده توفي بجلطة قلبية مبكرة في سن 41 سنة. ما هو النمط الوراثي والخلل الجيني وتوصية الفحص العائلي المعتمدة لهذا المرض؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 34 - Familial Hypercholesterolemia FH):
1. <b>الوراثة والجينات:</b> مرض وراثي سائد <b>(Autosomal dominant disorder)</b> ينتج بشكل رئيسي عن طفرات في جين <b>مستقبلات الكوليسترول الكبدية (LDL-receptor gene)</b>، مما يمنع خلايا الكبد من استخلاص وتكسير الـ LDL من الدم.
2. <b>الأعراض السريرية الكلاسيكية:</b>
• ارتفاع هائل في الـ LDL-C (غالباً فوق 200 mg/dL في الشكل الهجين Heterozygous).
• ترسب الكوليسترول في الأوتار كعقد أكيليس (Tendinous xanthoma) وقرنية العين (Corneal arcus senilis).
• حدوث جلطات وقصور شرايين تاجية مبكر جداً في العقد الثالث أو الرابع من العمر (Premature CAD in 3rd-4th decade).
3. <b>التوصية العائلية بالكتاب:</b> فحص وتحليل الدهون لجميع أقارب الدرجة الأولى <b>(First-degree relatives screening)</b> لاكتشاف الحالات مبكراً وبدء العلاج بالستاتينات والإزيتيميب ومثبطات PCSK9.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Autosomal dominant LDL-receptor mutation; first-degree relative testing):</b> مطابق بالمللي لصفحة 34 في كتاب الكارديو.
• <b>خيار (Autosomal recessive LPL deficiency - غير صحيح):</b> نقص LPL يرفع الدهون الثلاثية (Chylomicronemia) وليس كوليسترول الـ LDL النقي.
• <b>خيار (X-linked recessive - غير صحيح):</b> المرض سائد جسدي (Autosomal dominant) وليس مرتبطاً بالجنس X.
• <b>خيار (Mitochondrial inheritance - غير صحيح):</b> لا علاقة للميتوكوندريا بالـ FH.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«كوليسترول وراثة سائد (Autosomal Dominant) في مستقبل الـ LDL.. زانثوما في وتر أكيليس وقوس في العين وجلطة في سن الشباب! وافحص كل العيلة من الدرجة الأولى في الحال!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Familial Hypercholesterolemia (FH):</b> فرط كوليسترول الدم العائلي الوراثي السائد.
• <b>Tendinous xanthoma:</b> الأورام الصفراء العقدية المترسبة في الأوتار كوتر أكيليس.
• <b>Premature CAD:</b> قصور وتصلب الشرايين التاجية المبكر في الشباب.`
  },

  // 5. Antiischemic: Vasospastic Angina Beta Blocker Contraindication
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_PHARMA] Antiischemic Pharmacology - Beta Blockers Contraindications & Vasospasm Danger`,
    question: 'A 42-year-old female with documented vasospastic (Prinzmetal) angina is mistakenly started on Propranolol (a non-selective beta-blocker) for situational anxiety. Two days later, she experiences a dramatic worsening of her angina with prolonged, severe chest pain episodes. What is the fundamental pharmacological mechanism responsible for this paradoxical exacerbation of coronary vasospasm?',
    options: [
      'Blockade of vascular beta-2 receptors leaves alpha-1 adrenergic vasoconstriction unopposed, precipitating intense coronary spasm',
      'Direct stimulation of endothelial nitric oxide synthase leading to coronary steal',
      'Activation of myocardial If funny channels increasing heart rate to > 150 bpm',
      'Direct degradation of vascular cyclic GMP preventing smooth muscle relaxation'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 42-year-old female with documented vasospastic (Prinzmetal) angina is mistakenly started on Propranolol (a non-selective beta-blocker) for situational anxiety. Two days later, she experiences a dramatic worsening of her angina with prolonged, severe chest pain episodes. What is the fundamental pharmacological mechanism responsible for this paradoxical exacerbation of coronary vasospasm?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«سيدة عندها 42 سنة ومشخصة بذبحة برينزميتال التشنجية (Vasospastic angina)، أخدت بالخطأ دواء بروبرانولول (Propranolol - حاصرات بيتا غير انتقائية) لعلاج القلق. بعد يومين جالها تدهور حاد وأزمات وجع شديدة جداً ومطولة في الصدر. ما هي الآلية الدوائية المسؤولة عن هذا التفاقم العكسي لتشنج الشرايين التاجية؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 49 تحت تحذيرات Beta-blockers نصاً):
"<b>Avoid β-blockers in vasospastic angina → more vasospasm</b>".
<b>الأساس الفسيولوجي والدوائي:</b>
جدران الشرايين التاجية تحتوي على نوعين من المستقبلات الأدرينالينية:
1. مستقبلات <b>ألفا-1 (Alpha-1 receptors):</b> تسبب انقباضاً وتشنجاً وضيقاً في الأوعية (Vasoconstriction).
2. مستقبلات <b>بيتا-2 (Beta-2 receptors):</b> تسبب اتساعاً وارتخاءً في الأوعية (Vasodilation).
في الحالات العادية، هناك توازن بين التأثيرين.
عندما يأخذ المريض أدوية Beta-blockers، فإنها تقفل مستقبلات بيتا-2 الباسطة للشرايين. هذا يترك مستقبلات ألفا-1 التشنجية تعمل بمفردها ودون أي مقاومة أو معادلة <b>(Unopposed Alpha-1 vasoconstriction)</b>، مما يؤدي إلى تقلص وتشنج عنيف في الشريان التاجي وانقطاع التروية الدموية وتفاقم الذبحة!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Blockade of beta-2 leaves alpha-1 unopposed, precipitating spasm):</b> التفسير الفارماكولوجي الكلاسيكي المعتمد في كل امتحانات الباطنة والفارما.
• <b>خيار (Stimulation of eNOS - غير صحيح):</b> أكسيد النيتريك موسع للشرايين ولا يسبب تشنجاً.
• <b>خيار (Activation of If channels - غير صحيح):</b> بيتا بلوكر تبطئ النبض ولا تنشط قنوات If.
• <b>خيار (Direct degradation of cGMP - غير صحيح):</b> لا علاقة للبيتا بلوكرز بإنزيمات تكسير cGMP.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«ذبحة تشنجية اوعى تديلها بيتا بلوكر بالمرة.. تقفل بيتا وتفتح ألفا المفترية تولع الشريان بشرارة!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Vasospastic angina:</b> الذبحة التشنجية الوعائية (برينزميتال).
• <b>Unopposed alpha-1 vasoconstriction:</b> انقباض وعائي تشنجي أحادي ناتج عن حجب مستقبلات بيتا الباسطة للأوعية.
• <b>Non-selective beta-blocker:</b> حاصرات بيتا غير الانتقائية (تغلق بيتا-1 وبيتا-2 معاً مثل بروبرانولول).`
  }
];

async function seedPart3() {
  console.log('🚀 Seeding Midterm Bank Part 3 (Final Blueprint Balance)...');
  let count = 0;
  for (const q of part3Quizzes) {
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
      console.log(`✅ [${count}/${part3Quizzes.length}] Inserted: ${q.topic}`);
    }
  }
  console.log(`🎉 Part 3 completed! Successfully inserted ${count} quizzes.`);
}

seedPart3();
