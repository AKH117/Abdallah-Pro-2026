const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY);

const FULL_5PART_UPDATES = [
  // 1. Mitral Stenosis (MS)
  {
    filterCol: 'id',
    filterVal: '7517e638-9ee2-4d1c-82a5-64efaa60d90b',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 32-year-old female presents with progressive exertional dyspnea and orthopnea. Physical examination reveals a tapping apex beat, a loud S1, an opening snap 60 ms after S2, and a low-pitched mid-diastolic rumbling murmur heard best at the apex with the bell in the left lateral decubitus position. Which of the following findings most reliably indicates severe mitral stenosis?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«شابة عندها 32 سنة بتشتكي من كرشة نفس وضيق تنفس بيزيد تدريجياً مع أي مجهود (progressive exertional dyspnea) وما بتقدرش تنام مفرودة على ضهرها من كتمة النفس وخنقة الرئة (orthopnea).
لما كشفنا عليها إكلينيكياً:
1. حطينا إيدينا على قمة القلب لقينا النبضة بتخبط تحت الإيد زي النقرة المحددة الحادة (tapping apex beat) بسبب رقعة الصوت الأول العالي.
2. بالسماعة سمعنا الصوت الأول عالي جداً وبيرزع زي الباب اللي بيترزع فجأة (loud S1).
3. بعد الصوت الثاني S2 بـ 60 مللي ثانية بس، سمعنا طقة انفتاح حادة للصمام المتيبس (opening snap 60 ms after S2).
4. سمعنا لغط دحرجي رخيم واطي النبرة في نص الانبساط عند قمة القلب بالجرس والمريضة مايلة على جنبها الشمال (low-pitched mid-diastolic rumbling murmur at apex with bell in left lateral decubitus).
السؤال بيسأل: مين في العلامات والفحوصات دي يعتبر الدليل الأكثر دقة وموثوقية على شدة ضيق الصمام الميترالي (Severe Mitral Stenosis)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي (Hemodynamics):</b>
المريضة عندها متلازمة ضيق الصمام الميترالي الروماتيزمي الكلاسيكية (Rheumatic MS).
ليه قصر المسافة بين الصوت التاني وطقة الانفتاح (Short A2-OS interval) هو أدق علامة لشدة الضيق؟
• في الانبساط، الصمام الميترالي بيفتح لما ضغط الأذين الأيسر (LA) يبقى أعلى من ضغط البطين (LV).
• كل ما الصمام يضيق أكتر، الدم يتحبس في الأذين أكتر والضغط جواه يوصل لأرقام فلكية (High LA Pressure)!
• أول ما البطين يخلص انقباضه (S2)، ضغط الأذين العالي جداً يفرقع شرفات الصمام المتيبسة ويجبرها تفتح بسرعة بدري جداً، فتقصر المسافة بين S2 و OS لأقل من 80 مللي ثانية (هنا 60 ms دلالة قاطعة على Severe MS)!
• تنبيه سريري حاسم: البطين الأيسر (LV) في ضيق الميترالي سليم ومحمي؛ لأن الدم اللي بيوصله قليل، مفيش تضخم في الـ LV، وبالتالي ضربة القمة (Apex) بتفضل في مكانها ومستحيل تنزاح للشمال (No apex displacement).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Shorter interval between S2 and opening snap - A2-OS):</b> كلما كان الضيق شديداً، كان ضغط الأذين الأيسر مرتفعاً جداً فيتغلب على ضغط البطين مبكراً جداً في الانبساط، وتحدث طقة الانفتاح سريعاً بعد S2 (أقل من 80 مللي ثانية يدل على Severe MS).
• <b>خيار إزاحة ضربة القمة للجهة اليسرى (Displacement of apex beat - غير صحيح):</b> إزاحة ضربة القمة تدل على تضخم البطين الأيسر (LV dilatation/hypertrophy)، والبطين الأيسر في ضيق الميترالي النقي محمي وطبيعي تماماً (LV is normal in isolated MS)، الإزاحة تحدث في ارتجاع الميترالي (MR) أو هبوط القلب.
• <b>خيار وجود اشتداد ما قبل الانقباض (Presystolic accentuation - غير صحيح):</b> هذا الاشتداد ينتج عن عصرة انقباض الأذين (Atrial kick) ولا يعكس شدة الضيق، بل يختفي تماماً وبسرعة إذا أصيب المريض بالرجفان الأذيني (AF).
• <b>خيار علو شدة صوت اللغط (Louder murmur intensity - غير صحيح):</b> شدة صوت اللغط في MS لا تعكس شدة الضيق إطلاقاً؛ لأن الصمام المتكلس بشدة قد يقل تدفق الدم عبره جداً فيصبح اللغط خافتاً وضعيفاً (Silent MS).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الميترالي لو ضاق.. دحرجة وطقة واختناق! والـ AF يطير الـ Presystolic على الإطلاق!»
🎯 <b>إسكيمة الامتحان:</b>
«كل ما الميترالي يضيق أكتر.. طقة الانفتاح تلزق في S2 وتظهر أبدر!» (Short A2-OS = Severe MS)

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>A2-OS interval:</b> الفارق الزمني بالمللي ثانية بين الصوت الثاني (A2) وطقة انفتاح الميترالي (Opening Snap). الطبيعي فوق 100 ms، وأقل من 80 ms يعني ضيق حرج وشديد.
• <b>Tapping apex beat:</b> خبطة قمة القلب النقرية تحت اليد الناتجة عن رقعة الصمام المتصلب (Palpable S1)، وتُميز ضيق الميترالي عن باقي أمراض الصمامات.
• <b>Opening Snap (OS):</b> طقة انفتاح حادة وعالية النبرة بعد S2 مباشرة تحدث نتيجة فتح شرفات الصمام المتليفة والمتيبسة بعنف.
• <b>Low-pitched mid-diastolic rumbling murmur:</b> لغط دحرجي منخفض النبرة في منتصف الانبساط لا يُسمع إلا بـ "جرس السماعة" (Bell) وليس الغشاء (Diaphragm).
• <b>Left lateral decubitus position:</b> وضعية استلقاء المريض مائلاً على جنبه الأيسر، وهي وضعية إجبارية في امتحان الكلينيكال لتقريب قمة القلب من جدار الصدر لسماع لغط الميترالي.
• <b>Presystolic accentuation:</b> زيادة علو اللغط قبل الانقباض مباشرة بسبب انقباض الأذين (يختفي فوراً مع الـ Atrial Fibrillation).
• <b>Orthopnea:</b> عدم القدرة على التنفس أثناء الاستلقاء فلات، نتيجة زيادة رجوع الدم للقلب واحتقان الرئة.
• <b>Silent MS:</b> ضيق الميترالي الصامت حيث يختفي اللغط تماماً بسبب شدة التكلس وانعدام حركة الدم تقريباً.`
  },

  // 2. Mitral Regurgitation (MR)
  {
    filterCol: 'id',
    filterVal: '5b47ad8a-3f66-41fe-957c-0d757fa2eb41',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 56-year-old man with chronic severe mitral regurgitation comes for routine follow-up. He feels completely asymptomatic and exercises regularly without chest pain or dyspnea. Transthoracic echocardiography reveals an LV ejection fraction (LVEF) of 55% and an LV end-systolic diameter (LVESD) of 42 mm. What is the most appropriate management plan for this patient?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 56 سنة عنده ارتجاع مزمن شديد في الصمام الميترالي (chronic severe MR) جاي المتابعة الدورية في العيادة. الراجل مش حاسس بأي أعراض خالص وبيلعب رياضة بانتظام ومفيش وجع في الصدر ولا كرشة نفس (completely asymptomatic).
عملنا له إيكو على القلب (TTE) لقينا كفاءة طرد البطين الأيسر (LVEF) نزلت لـ 55%، وقطر البطين في نهاية الانقباض (LVESD) اتسع لـ 42 مم.
السؤال بيسأل: إيه الإجراء الطبي والخطوة الأنسب لحالة المريض ده؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي (Hemodynamics):</b>
الخدعة الكبرى في ارتجاع الميترالي (The EF Illusion in MR):
• في الارتجاع الميترالي، البطين الأيسر (LV) لما بينقبض بيضخ الدم في سكتين: سكة الأورطي (مقاومة عادية)، وسكة الأذين الأيسر المفتوح اللي ضغطه واطي جداً (Low-pressure sink).
• بسبب السكة السهلة دي، الـ EF الظاهرية في الإيكو بتكون خادعة وعالية جداً (> 65%) حتى لو العضلة بدأت تتعب!
• فلما تلاقي مريض Severe MR كفاءة قلبه (EF) نزلت لـ 55% (رغم إن 55% طبيعي في شخص عادي)، ده معناه في مريض الارتجاع إن عضلة القلب دخلت في مرحلة الانهيار المبكر (Occult LV Dysfunction)!
• ومع اتساع قطر نهاية الانقباض (LVESD ≥ 40 mm)، ده معناه إن البطين بدأ يفقد مرونته ومش عارف يفرغ.
• القاعدة الإرشادية العالمية (ACC/AHA Guidelines): التدخل الجراحي الفوري (Surgical repair or replacement) إلزامي فوراً حتى لو المريض مش حاسس بأي أعراض نهائياً (Asymptomatic)! لأن لو استنينا لما تظهر أعراض، عضلة القلب هتتلف تلف دائم لا رجعة فيه (Irreversible LV failure).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Refer for surgical mitral valve repair or replacement immediately):</b> تنص التوصيات العالمية على تحويل المريض للجراحة فوراً بدون انتظار؛ لأن معايير الجراحة في المريض اللاعرضي استوفيت بالكامل (EF ≤ 60% أو LVESD ≥ 40 mm).
• <b>خيار طمأنة المريض وإعادة الإيكو بعد سنة (Reassure and repeat echo in 1 year - كارثي وغير صحيح):</b> الانتظار سنة في مريض بدأت عضلته تتوسع سينتهي بفشل قلبي مزمن غير قابل للإصلاح.
• <b>خيار بدء أدوية ACE inhibitors و beta-blockers بدون جراحة (Oral medications alone - غير صحيح):</b> الأدوية لا تصلح الخلل الميكانيكي في الصمام ولا تغني عن الجراحة عند استيفاء معايير تدهور البطين.
• <b>خيار عمل اختبار إجهاد وتأجيل الجراحة حتى ظهور الأعراض (Exercise stress testing and delay - غير صحيح):</b> تأخير الجراحة حتى ظهور الأعراض يجعل خطورة العملية عالية جداً وكفاءة القلب بعد العملية ضعيفة.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«ارتجاع الميترالي رايح للإبط.. بنسوستوليك على الظبط! ومعاه S3 وبطين منفوخ ومش مظبوط!»
🎯 <b>إسكيمة أرقام جراحة الـ MR في الامتحان:</b>
«لو الـ EF نزلت عن 60، أو قطر البطين عدى الـ 40.. افتح جراحة ومتستناش السنين!» (EF ≤ 60% or LVESD ≥ 40 mm = Surgery Now)

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>LVEF (Left Ventricular Ejection Fraction):</b> نسبة الدم اللي بيضخها البطين الأيسر في كل عصرة. في الـ MR، النسبة الطبيعية تكون عالية (> 65%)، وأي رقم 60% أو أقل يُعتبر هبوطاً حاداً في الكفاءة.
• <b>LVESD (Left Ventricular End-Systolic Diameter):</b> قطر تجويف البطين الأيسر بالملليمتر في أقصى لحظة انقباض. الطبيعي أقل من 40 مم، لو وصل 40 مم فما فوق يعني البطين مش عارف يلم نفسه ولازم جراحة.
• <b>Asymptomatic severe MR:</b> مريض مصاب بارتجاع شديد لكن لا يشتكي من أي أعراض لأن القلب بيعوّض مؤقتاً، وتوقيت الجراحة فيه يعتمد حصرياً على أرقام الإيكو.
• <b>Mitral valve repair vs replacement:</b> تصليح شرفات الصمام الميترالي (Repair) هو الخيار الأفضل والمقدم عالمياً على استبدال الصمام بصمام صناعي (Replacement) لأنه يحافظ على تشريح البطين والحبال الوترية.
• <b>Irreversible myocardial dysfunction:</b> تلف وتليف ألياف عضلة القلب الدائم الذي لا يعود لطبيعته حتى لو قمنا بتغيير الصمام لاحقاً.`
  },

  // 3. Aortic Stenosis Triad (AS)
  {
    filterCol: 'id',
    filterVal: '1ab40729-3135-4c70-8dae-6358fdddf5d8',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"An 82-year-old male with severe calcific aortic stenosis collapses while walking up a flight of stairs. Upon examination, his carotid upstrokes are delayed and diminished in amplitude. Auscultation reveals a grade 4/6 harsh late-peaking ejection systolic murmur at the right upper sternal border radiating bilaterally to the carotid arteries, with a soft single second heart sound. What is the single most effective therapeutic intervention to improve his long-term survival?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل مسن عنده 82 سنة عنده ضيق تكلسي شديد في الصمام الأورطي (severe calcific AS) أغمى عليه ووقع وهو طالع السلم (syncope).
لما كشفنا عليه:
1. نبض الشريان السباتي في الرقبة بطيء وضعيف ومتأخر في الطلوع (delayed and diminished carotid upstroke = pulsus parvus et tardus).
2. بالسماعة: لغط قذفي انقباضي خشن وقوي جداً (درجة 4/6) ذروته متأخرة في أعلى يمين عظمة القص وبينتشر للشرايين السباتية في الرقبة في الناحيتين (ejection systolic murmur radiating to carotids).
3. الصوت الثاني خافت جداً ومفرد (soft single S2).
السؤال بيسأل: إيه هو التدخل العلاجي الوحيد الحاسم والأكثر فاعلية لإنقاذ حياة المريض ده وإطالة بقائه على قيد الحياة وتفادي الوفاة المفاجئة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي (Hemodynamics):</b>
• ثالوث ضيق الأورطي الكلاسيكي الشهير (SAD Triad):
  1. الإغماء الجهدي (Syncope): بيحصل لما المريض يبذل مجهود فتتوسع شرايين عضلاته، لكن القلب مش قادر يزود نتاجه بسبب ضيق الصمام (Fixed Cardiac Output) ➔ الدم يقل عن المخ ويغمى عليه فوراً!
  2. الذبحة الصدرية (Angina): تضخم جدار البطين الهائل يحتاج دم وأكسجين أكتر من قدرة الشرايين التاجية.
  3. هبوط القلب وضيق التنفس (Dyspnea).
• الخطر القاتل: بمجرد ما مريض ضيق الأورطي يشتكي من إغماء (Syncope)، متوسط عمره بدون تغيير الصمام بيكون أقل من 3 سنين، مع احتمالية موت مفاجئ في أي لحظة!
• في سن 82 سنة، جراحة القلب المفتوح عالية الخطورة جداً، والحل الذهبي القياسي المعتمد هو تغيير الصمام بالقسطرة عبر الفخذ (TAVI / TAVR).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (TAVI / TAVR بالقسطرة):</b> استبدال الصمام هو العلاج الحاسم والوحيد الذي يطيل العمر ويمنع الموت المفاجئ، وفي سن 82 سنة يعتبر TAVI هو المعيار القياسي المعتمد والأكثر أماناً بنسبة 100%.
• <b>خيار أدوية Beta-blockers (غير صحيح):</b> لا تعالج الانسداد الميكانيكي، بل تقلل انقباض القلب وتفاقم هبوط نتاج القلب وممكن تؤدي للوفاة.
• <b>خيار أقراص النيتروجليسرين تحت اللسان (Nitroglycerin - كارثي وقاتل!):</b> موسعات الأوردة والشرايين محظورة تماماً في AS لأنها بتقلل ضغط الامتلاء (Preload)، وضغط الدم يهبط للصفر ويغمى على المريض فوراً.
• <b>خيار توسيع الصمام بالبالون كعلاج نهائي (Balloon valvuloplasty alone - غير صحيح):</b> إجراء مؤقت تلطيفي فقط لأن الصمام المتكلس بيرجع يضيق تاني خلال 6 شهور ولا يطيل العمر.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الأورطي ثالوثه SAD.. لغطه في الرقبة جاد.. ونبضه بارفوس وتاردوس معتاد!
لو الذبحة ظهرت يعيش 5 سنين.. لو الإغماء 3 سنين.. لو الدسبنيا سنتين!»
🎯 <b>إسكيمة الامتحان:</b>
«الأورطي العرضي علاجه مش دوا وحبوب.. استبدال الصمام بالـ TAVI هو المطلوب!»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>TAVI / TAVR:</b> (Transcatheter Aortic Valve Implantation) تغيير الصمام الأورطي عن طريق القسطرة بدون فتح صدر ولا ماكينة قلب ورئة، وهو الخيار رقم 1 لكبار السن.
• <b>Pulsus parvus et tardus:</b> نبض ضعيف الشدة (parvus) وبطيء ومتأخر الوصول للقمة (tardus)، مميز حصرياً لضيق الأورطي.
• <b>Fixed cardiac output:</b> عجز القلب عن ضخ أي دم إضافي عند المجهود بسبب الصمام المتضيق.
• <b>Harsh late-peaking ejection murmur:</b> لغط انقباضي خشن يزداد صوته تدريجياً ثم ينخفض، وتأخر ذروته يدل على شدة الضيق.
• <b>Radiation to carotids:</b> انتقال صوت اللغط مع مجرى الدم للشرايين السباتية في الرقبة، وهي بصمة ضيق الأورطي بالسماعة.`
  },

  // 4. Aortic Regurgitation (AR)
  {
    filterCol: 'id',
    filterVal: '123d3a64-da2e-4fc0-99fb-8c75f4445a9f',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 42-year-old tall man with Marfanoid habitus presents with throbbing headaches and palpitations. Physical examination reveals a blood pressure of 165/45 mmHg. Palpation of the radial pulse with the arm elevated reveals a sudden rapid distension followed by immediate collapse. Auscultation at the left sternal border reveals a high-pitched, blowing, early diastolic murmur. Which of the following peripheral signs is most characteristically associated with this patient's underlying condition?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل طويل القامة عمره 42 سنة وملامحه ملامح متلازمة مارفان (Marfanoid habitus: طويل وأطرافه طويلة وأصابعه رفيعة)، بيشتكي من صداع نابض في الرأس وخفقان سريع في القلب (palpitations).
لما قسنا ضغط دمه لقيناه: 165/45 مم زئبق (فارق هائل بين الانقباض والانبساط = 120 مم زئبق!).
لما مسكنا نبض الكعبرة ورفعنا دراعه لفوق، حسينا بنبض بيندفع بقوة هائلة وفجأة ينهار ويتلاشى تحت الصوابع (Water-hammer pulse).
بالسماعة على الحافة الشمال للقص: سمعنا لغط انبساطي مبكر عالي النبرة ونافخ زي النسيم (high-pitched blowing early diastolic murmur).
السؤال بيسأل: مين في العلامات الطرفية الشهيرة دي يرتبط كلاسيكياً وبصورة مميزة بحالة هذا المريض (Aortic Regurgitation)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي (Hemodynamics):</b>
• الفسيولوجيا المرضية لارتجاع الأورطي:
  1. في الانبساط، الدم يهرب راجعاً من الأورطي للبطين الأيسر ➔ الضغط الانبساطي يهبط هبوط حاد (Diastolic BP = 45 mmHg).
  2. في الانقباض، البطين يضخ كل الدم العادي + الدم اللي رجعله ➔ الضغط الانقباضي يعلى جداً (Systolic BP = 165 mmHg).
  3. النتيجة الذهبية: اتساع هائل في الضغط النبضي (Wide Pulse Pressure > 100 mmHg)، وده اللي بيخلي كل شرايين الجسم تنبض بعنف وتعمل مهرجان العلامات الطرفية الشهير!
• علامة كوينكي (Quincke's sign): نبضان شعيري واضح في سرير الظفر لما تضغط ضغطة خفيفة على طرف الظفر.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Capillary pulsations in nail bed - Quincke's sign):</b> علامة طرفية كلاسيكية لارتجاع الأورطي بسبب اتساع الضغط النبضي وفرط حركة الشرايين.
• <b>خيار Pulsus parvus et tardus (غير صحيح):</b> مميز لضيق الأورطي (Aortic Stenosis)، أما هنا في الارتجاع النبض عكسه تماماً (Water-hammer / Bounding pulse).
• <b>خيار Prominent giant 'a' wave in JVP (غير صحيح):</b> موجة 'a' العملاقة في الوريد الوداجي تعكس مقاومة امتلاء البطين الأيمن (مثل ضيق الصمام الرئوي أو ارتفاع ضغط الشريان الرئوي).
• <b>خيار Malar flush (غير صحيح):</b> حمرة الوجنتين الزرقاوية علامة كلاسيكية لضيق الصمام الميترالي (Mitral Stenosis) بسبب احتقان الأوعية ونقص الأكسجين.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الأورطي لو رجّع.. ضغط النبض يفرقع! وكوينكي في الضوافر يلّمع، والمطرقة في النبض بتسمع!»
🎯 <b>إسكيمة الامتحان لأشهر 3 علامات:</b>
• كوينكي (Quincke) = في الضوافر (Nails).
• دي موسيه (de Musset) = هزة ونبض الراس (Head nodding).
• كوريجان (Corrigan) = رقص ونبض السباتي في الرقبة (Carotid dance).

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Marfanoid habitus:</b> ملامح متلازمة مارفان (خلل جيني في ألياف الكولاجين يسبب تمدد جذر الأورطي وارتجاع الصمام).
• <b>Wide pulse pressure:</b> اتساع الفارق بين الضغط الانقباضي والانبساطي (أكتر من 60-80 مم زئبق).
• <b>Water-hammer pulse (Corrigan's pulse):</b> نبض سريع الامتلاء يرتفع بقوة هائلة ثم ينهار فجأة (يظهر بوضوح عند رفع ذراع المريض للأعلى).
• <b>Early diastolic blowing murmur:</b> لغط انبساطي يبدأ فوراً مع S2 ويكون نافخاً كصوت الرياح، يُسمع والمريض جالس ويميل للأمام بعد زفير كامل.
• <b>Quincke's sign:</b> احمرار وابيضاض نابض في سرير الظفر متزامن مع ضربات القلب.`
  }
];

async function runUpdates() {
  console.log('🚀 Upgrading quizzes in Supabase with Full 5-Part Explanations...');
  for (const item of FULL_5PART_UPDATES) {
    const { data: rows } = await supabase
      .from('medical_spaced_quizzes')
      .select('id, doctor_pearl')
      .eq(item.filterCol, item.filterVal);

    if (rows && rows.length > 0) {
      for (const row of rows) {
        let metaObj = {};
        if (row.doctor_pearl && row.doctor_pearl.includes('<<<QUIZ_META_START>>>')) {
          try {
            const jsonStr = row.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0];
            metaObj = JSON.parse(jsonStr);
          } catch(e) {}
        }
        metaObj.explanation = item.explanation;
        const newPearl = `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${item.explanation}`.trim();

        await supabase
          .from('medical_spaced_quizzes')
          .update({
            answer_and_explanation: item.explanation,
            doctor_pearl: newPearl
          })
          .eq('id', row.id);

        console.log(`✅ Upgraded Quiz ID ${row.id} with complete 5-Part Framework!`);
      }
    } else {
      console.log(`⚠️ Quiz not found for ${item.filterCol}: ${item.filterVal}`);
    }
  }
  console.log('🎉 All selected quizzes now loaded with Full 5-Part Format!');
}

runUpdates().catch(console.error);
