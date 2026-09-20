// 🩺 موسوعة شروح المنهج الطبي وبنك الأسئلة السريرية الجامعية المعتمدة
// د. عبدالله - كلية الطب (الفرقة الرابعة - الفصل الدراسي السابع Block 7)
// موديول القلب (Cardiology - CAD 402) وطب الأطفال الممتد (Pediatrics - PED 401)

export const MEDICAL_CURRICULUM = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 🫀 موديول القلب (Cardiology CAD 402)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cad_mitral_stenosis",
    course_code: "CAD",
    category: "Cardiology",
    title: "ضيق الصمام الميترالي (Mitral Stenosis - MS)",
    topic: "Mitral Valve Diseases & Auscultation",
    summary_card: `\u200F🫀 <b>شرح المنهج الماسي • ضيق الصمام الميترالي (Mitral Stenosis) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. التعريف والسبب الرئيسي (Etiology):</b>
\u200F• السبب رقم 1 عالمياً وفي مصر: <b>الحمى الروماتيزمية (Rheumatic Heart Disease)</b> بنسبة 99%، وغالباً تصيب الإناث (Female predominance) بعد 10-20 سنة من النوبة الروماتيزمية.
\u200F• المساحة الطبيعية للصمام الميترالي: <b>4 - 6 سم²</b>. يبدأ التأثير السريري لما تقل عن <b>2 سم²</b>، وتصبح شديدة (Severe MS) لما تقل عن <b>1.5 سم²</b>.

\u200F⚙️ <b>2. ديناميكا الدم والفسيولوجيا المرضية (Hemodynamics):</b>
\u200F• الصمام مش بيفتح كويس في الانبساط (Diastole) ➔ الدم محبوس في الأذين الأيسر (LA) ➔ ارتفاع هائل في ضغط الأذين (LA Hypertension) ➔ تمدد الأذين (LA Dilatation).
\u200F• انعكاس الضغط للخلف على الأوردة الرئوية (Pulmonary Venous Congestion) ➔ احتقان الرئة وضيق التنفس (Dyspnea, Orthopnea, Hemoptysis).
\u200F• لو زاد الضغط جداً ينتقل للشريان الرئوي (Pulmonary HTN) ➔ فشل الجانب الأيمن من القلب (Right-Sided Heart Failure) مع تضخم الكبد وتورم الساقين.
\u200F• ⚠️ <i>تنبيه سريري: البطين الأيسر (LV) في ضيق الميترالي سليم ومحمي؛ لأن الدم اللي بيوصله قليل، مفيش تضخم في LV!</i>

\u200F👂 <b>3. الفحص الإكلينيكي وسماعة الطبيب (Bedside Auscultation):</b>
\u200F• <b>فحص ضربة القمة (Apex Beat):</b> ضربة نقرية محددة (Tapping Apex) نتيجة خبطة الصوت الأول العالي.
\u200F• <b>علو الصوت الأول (Loud First Heart Sound - S1):</b> صوت أول عالي ومفاجئ لأن الصمام المتصلب بيقفل فجأة كالباب المصفوع.
\u200F• <b>طقة الانفتاح (Opening Snap - OS):</b> طقة انفتاح حادة بعد الصوت الثاني S2 مباشرة نتيجة فتح الصمام المتليف المتيبس (كلما قصرت المسافة بين S2 و OS دل ذلك على شدة الضيق!).
\u200F• <b>لغط منتصف الانبساط (Mid-Diastolic Rumbling Murmur):</b> لغط دحرجي رخيم منخفض النبرة يُسمع بقمة القلب (Apex) بالسماعة الجرس (Bell) والمريض مائل على جنبه الأيسر (Left lateral position).
\u200F• <b>اشتداد ما قبل الانقباض (Presystolic Accentuation):</b> اشتداد صوت اللغط قبل الانقباض بسبب انقباض الأذين.. ⚠️ <i>يختفي هذا الاشتداد فوراً إذا أصيب المريض بالرجفان الأذيني (AF)!</i>

\u200F🔬 <b>4. الفحوصات وترتيبها الذهبي (Investigations):</b>
\u200F1. <b>فحص الإيكو والدوبلر (Echocardiography #1 Gold Standard):</b> يقيس مساحة الصمام (MVA)، فرق الضغط (Pressure Gradient)، ويحسب سكور ويلكينز (Wilkins Score) لتحديد مدى ملائمة القسطرة بالبالون.
\u200F2. <b>تخطيط رسم القلب (ECG):</b> تضخم الأذين الأيسر (P mitrale: موجة P عريضة ومشطوفة في Lead II)، أو رجفان أذيني (AF).
\u200F3. <b>أشعة الصدر السينية (Chest X-Ray):</b> استقامة الحافة اليسرى للقلب (Straight left cardiac border)، وخطوط كيرلي (Kerley B lines) الدالة على احتقان الرئة.

\u200F💊 <b>5. العلاج والتدخل (Management):</b>
\u200F• <b>العلاج الدوائي:</b> مدرات البول (Diuretics) لتقليل احتقان الرئة، ومثبطات بيتا (Beta-blockers) لتقليل ضربات القلب وزيادة وقت امتلاء الانبساط، ومضادات التخثر (Warfarin) لمنع الجلطات خاصة مع الـ AF.
\u200F• <b>التدخل بالقسطرة وتوسيع الصمام بالبالون (PTMC):</b> العلاج الأفضل لو الصمام مرن ومفيش تكلس شديد ولا ارتجاع (Wilkins score ≤ 8).
\u200F• <b>التدخل الجراحي واستبدال الصمام (Mitral Valve Replacement - MVR):</b> لو الصمام متكلس وفيه ارتجاع شديد مصاحب.

\u200F💡 <b>6. تحشيشة الراوند وسؤال الشفوي (Bedside Pearl):</b>
\u200F<i>"الميترالي لو ضاق.. دحرجة وطقة واختناق! والـ AF يطير الـ Presystolic على الإطلاق!"</i>`,
    quiz: {
      question: "A 32-year-old female presents with progressive exertional dyspnea and orthopnea. Physical examination reveals a tapping apex beat, a loud S1, an opening snap 60 ms after S2, and a low-pitched mid-diastolic rumbling murmur heard best at the apex with the bell in the left lateral decubitus position. Which of the following findings most reliably indicates severe mitral stenosis?",
      question_ar_translation: "شابة عمرها 32 سنة تعاني من ضيق تنفس جهدي متصاعد وعدم تحمل الاستلقاء. الفحص أظهر ضربة قمة نقرية، صوتاً أول عالياً، طقة انفتاح بعد 60 مللي ثانية من S2، ولغطاً دحرجياً في منتصف الانبساط عند قمة القلب. أي من التالي يعتبر الدليل الأكثر دقة على شدة ضيق الصمام الميترالي (Severe MS)؟",
      clinical_stem_explanation: "المريضة لديها علامات ضيق الصمام الميترالي الكلاسيكية. تحديد شدة الضيق إكلينيكياً يعتمد على المسافة الزمنية بين الصوت الثاني S2 وطقة الانفتاح Opening Snap (A2-OS interval). كلما زاد الضغط في الأذين الأيسر نتيجة الضيق الشديد، فتح الصمام مبكراً جداً بعد S2، فتقصر المسافة.",
      options: [
        "Shorter interval between the second heart sound and the opening snap (A2-OS interval)",
        "Presence of presystolic accentuation of the murmur",
        "Louder intensity (grade) of the mid-diastolic murmur",
        "Displacement of the apex beat laterally to the anterior axillary line"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (قصر المسافة بين S2 وطقة الانفتاح A2-OS): كلما كان الضيق شديداً، كان ضغط الأذين الأيسر مرتفعاً جداً فيتغلب على ضغط البطين مبكراً جداً في الانبساط وتحدث طقة الانفتاح سريعاً بعد S2 (أقل من 80 مللي ثانية يدل على Severe MS).",
        distractors: [
          "الخيار الثاني غلط: الـ Presystolic accentuation دليل على أن انقباض الأذين ما زال يعمل، ولا تعكس شدة الضيق بدقة كما أنها تختفي تماماً مع الـ AF.",
          "الخيار الثالث غلط: شدة صوت اللغط (Murmur Intensity) في MS لا تعكس شدة الضيق؛ ففي الحالات الشديدة المتكلسة قد يقل تدفق الدم فيصبح اللغط خافتاً جداً (Silent MS).",
          "الخيار الرابع غلط: إزاحة ضربة القمة للجهة اليسرى تدل على تضخم البطين الأيسر، وهو لا يحدث في ضيق الميترالي النقي (LV is normal in isolated MS)."
        ]
      },
      mnemonic_scheme: "إسكيمة الامتحان: 'كل ما الميترالي يضيق أكتر.. طقة الانفتاح تلزق في S2 وتظهر أبدر!' (Short A2-OS = Severe MS)",
      terms_to_memorize: "A2-OS interval = الفارق الزمني بين S2 وطقة الانفتاح | Left lateral decubitus = الاستلقاء على الجانب الأيسر | Silent MS = ضيق الميترالي الصامت"
    }
  },

  {
    id: "cad_mitral_regurgitation",
    course_code: "CAD",
    category: "Cardiology",
    title: "ارتجاع الصمام الميترالي (Mitral Regurgitation - MR)",
    topic: "Mitral Valve Diseases & Auscultation",
    summary_card: `\u200F🫀 <b>شرح المنهج الماسي • ارتجاع الصمام الميترالي (Mitral Regurgitation) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. التعريف والسبب (Etiology):</b>
\u200F• عدم إحكام إغلاق الصمام الميترالي أثناء انقباض البطين (Systole)، مما يؤدي لارتجاع الدم من البطين الأيسر (LV) إلى الأذين الأيسر (LA).
\u200F• <b>أهم أسباب الارتجاع الميترالي:</b>
\u200F  1. <b>الارتجاع المزمن (Chronic MR):</b> الحمى الروماتيزمية (تليف وانكماش الشرفات)، ارتخاء الصمام الميترالي (MVP)، أو توسع حلقة الصمام (Dilated Cardiomyopathy).
\u200F  2. <b>الارتجاع الحاد (Acute MR - طوارئ مميتة):</b> تمزق الحبال الوترية (Chordae rupture)، تمزق العضلة الحليمية بعد جلطة قلبية حادة (Papillary muscle rupture post-MI)، أو التهاب الصمام البكتيري الحاد (Infective Endocarditis).

\u200F⚙️ <b>2. ديناميكا الدم (Hemodynamics):</b>
\u200F• أثناء الانقباض (Systole): الدم يهرب في اتجاهين؛ جزء للأورطي وجزء يرجع للأذين الأيسر.
\u200F• أثناء الانبساط (Diastole): يفرغ الأذين الأيسر هذا الحجم الضخم المرتجع بالإضافة للدم القادم من الرئة داخل البطين الأيسر ➔ <b>حمل حجمي مفرط (Volume Overload على الـ LV)</b>!
\u200F• النتيجة: تضخم وتمدد كبير في البطين الأيسر (Eccentric LV Hypertrophy & Dilatation) مع الوقت، ثم هبوط عضلة القلب الانقباضي.

\u200F👂 <b>3. الفحص الإكلينيكي والسماعة (Bedside Signs):</b>
\u200F• <b>فحص قمة القلب (Apex Beat):</b> مفرطة الحركة ومزاحة للأسفل والخارج (Hyperdynamic, displaced apex) في المساحة البينية السادسة على خط الإبط.
\u200F• <b>خفوت الصوت الأول (Soft S1):</b> صوت أول خافت وضعيف لأن شرفات الصمام مش بتلمس بعضها بإحكام.
\u200F• <b>لغط شامل للانقباض (Pansystolic Murmur):</b> لغط انقباضي شامل عالي النبرة يبدأ فوراً مع S1 ويستمر طوال الانقباض حتى S2.
\u200F• <b>انتشار اللغط (Radiation):</b> ينتشر اللغط بوضوح تام نحو <b>الإبط الأيسر (Left Axilla)</b> وتحت لوح الكتف الأيسر.
\u200F• <b>ظهور الصوت الثالث (Third Heart Sound - S3):</b> صوت ثالث مرضي ينتج عن اندفاع كمية دم ضخمة وسريعة من الأذين للبطين المتسع في بداية الانبساط.

\u200F🔬 <b>4. الفحوصات وترتيبها (Investigations):</b>
\u200F1. <b>فحص الإيكو الملون (Echo & Color Doppler #1 Gold Standard):</b> يحدد شدة الارتجاع (Regurgitant Volume & Fraction)، قطر الـ LV في نهاية الانقباض (LVESD)، وسبب الخلل في شرفات الصمام.
\u200F2. <b>تخطيط رسم القلب (ECG):</b> علامات تضخم البطين الأيسر (Tall R in V5-V6, Deep S in V1) وتضخم الأذين.
\u200F3. <b>أشعة الصدر السينية (Chest X-Ray):</b> تضخم شديد في حجم القلب (Cardiomegaly) مع احتقان الأوردة الرئوية.

\u200F💊 <b>5. العلاج والتوقيت الجراحي الحاسم (Management):</b>
\u200F• <b>العلاج الدوائي للحالات المزمنة:</b> متابعة دورية وعلاج فشل القلب بمثبطات ACE inhibitors ومدرات البول.
\u200F• <b>التدخل الجراحي (Mitral Valve Repair or Replacement):</b>
\u200F  - إلزامي عند ظهور أي أعراض (Symptomatic).
\u200F  - ⚠️ <i>قاعدة إكلينيكية ذهبية للشفوي:</i> في الحالات التي لا تشتكي من أعراض (Asymptomatic)، نتدخل جراحياً فوراً إذا هبطت كفاءة عضلة القلب (EF ≤ 60%) أو تمدد البطين في نهاية الانقباض (LVESD ≥ 40 mm). إصلاح الصمام (Repair) أفضل بكثير من استبداله (Replacement).

\u200F💡 <b>6. تحشيشة الراوند (Bedside Pearl):</b>
\u200F<i>"ارتجاع الميترالي رايح للإبط.. بنسوستوليك على الظبط! ومعاه S3 وبطين منفوخ ومش مظبوط!"</i>`,
    quiz: {
      question: "A 56-year-old man with chronic severe mitral regurgitation comes for routine follow-up. He feels completely asymptomatic and exercises regularly without chest pain or dyspnea. Transthoracic echocardiography reveals an LV ejection fraction (LVEF) of 55% and an LV end-systolic diameter (LVESD) of 42 mm. What is the most appropriate management plan for this patient?",
      question_ar_translation: "رجل عمره 56 سنة يعاني من ارتجاع مزمن شديد في الصمام الميترالي، جاء للمتابعة الدورية. المريض لا يشكو من أي أعراض إطلاقاً ويمارس الرياضة بانتظام. فحص الإيكو أظهر كفاءة البطين الأيسر (EF) = 55%، وقطر البطين في نهاية الانقباض (LVESD) = 42 مم. ما هو الإجراء الطبي الأنسب لحالته؟",
      clinical_stem_explanation: "في حالات الارتجاع الميترالي الشديد المزمن، الـ LV يضخ الدم في مسارين ذوي مقاومة منخفضة (أحدهما الأذين الأيسر)، لذلك فإن كفاءة الطرد (EF) الظاهرية تخدع الطبيب وتكون مرتفعة عادة (> 65%). إذا هبطت الـ EF إلى 55% أو اتسع قطر البطين في نهاية الانقباض (LVESD ≥ 40 mm)، فهذا دليل قاطع على بدء انهيار عضلات البطين ويستلزم التدخل الجراحي فوراً حتى لو كان المريض بدون أعراض تماماً.",
      options: [
        "Refer for surgical mitral valve repair or replacement immediately",
        "Reassure the patient and repeat echocardiography in 1 year since he is asymptomatic",
        "Start oral ACE inhibitors and beta-blockers without surgical intervention",
        "Perform exercise stress testing and delay surgery until symptoms appear"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (إحالته للجراحة فوراً لإصلاح أو استبدال الصمام): تنص التوصيات العالمية (AHA/ACC Guidelines) على أن المريض بدون أعراض يجب إجراء الجراحة له إذا كان EF ≤ 60% أو LVESD ≥ 40 mm؛ لأن تأخير الجراحة سيؤدي لفشل عضلة قلب غير قابل للإصلاح (Irreversible LV dysfunction).",
        distractors: [
          "الخيار الثاني غلط: الانتظار لسنة كارثة حقيقية؛ لأن عضلة القلب بدأت تتلف وتتوسع وتفقد مرونتها.",
          "الخيار الثالث غلط: الأدوية وحدها لا تمنع تدهور البطين في وجود خلل ميكانيكي صمامي شديد استوفى معايير الجراحة.",
          "الخيار الرابع غلط: تأخير الجراحة حتى ظهور الأعراض يجعل خطورة العملية عالية جداً ونتائجها ضعيفة."
        ]
      },
      mnemonic_scheme: "أرقام الجراحة في ارتجاع الميترالي: 'لو الـ EF نزلت عن 60، أو قطر البطين عدى الـ 40.. افتح جراحة ومتستناش السنين!'",
      terms_to_memorize: "LVESD = قطر البطين في نهاية الانقباض | Mitral repair = إصلاح شرفات الصمام | Irreversible LV dysfunction = تلف البطين الدائم"
    }
  },

  {
    id: "cad_aortic_stenosis",
    course_code: "CAD",
    category: "Cardiology",
    title: "ضيق الصمام الأورطي (Aortic Stenosis - AS)",
    topic: "Aortic Valve Diseases & Clinical Triad",
    summary_card: `\u200F🫀 <b>شرح المنهج الماسي • ضيق الصمام الأورطي (Aortic Stenosis) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. التعريف والسبب (Etiology):</b>
\u200F• إعاقة تدفق الدم من البطين الأيسر (LV) إلى الشريان الأورطي نتيجة ضيق فتحة الصمام.
\u200F• المساحة الطبيعية للصمام الأورطي: <b>3 - 4 سم²</b>. الضيق الشديد (Severe AS): مساحة الصمام <b>< 1.0 سم²</b>، أو متوسط فرق الضغط <b>> 40 mmHg</b>، أو سرعة التدفق <b>> 4 م/ث</b>.
\u200F• <b>أهم 3 أسباب بحسب الفئة العمرية (سؤال امتحان متكرر):</b>
\u200F  1. <b>فئة كبار السن (> 70 سنة):</b> تكلس الشيخوخة التنكسي (Senile Degenerative / Calcific AS) - السبب الأكثر شيوعاً حالياً.
\u200F  2. <b>فئة منتصف العمر (40-60 سنة):</b> صمام أورطي ثنائي الشرفات خلقي متكلس (Congenital Bicuspid Aortic Valve).
\u200F  3. <b>فئة الشباب والبلدان النامية:</b> روماتيزمي (Rheumatic Heart Disease) وغالباً مصحوب بمرض ميترالي.

\u200F⚙️ <b>2. ديناميكا الدم (Hemodynamics):</b>
\u200F• البطين الأيسر يواجه مقاومة هائلة لضخ الدم (Pressure Overload) ➔ تضخم تركيبي مركزي في جدار البطين (Concentric LV Hypertrophy) للحفاظ على الضخ.
\u200F• تضخم الجدار يقلل مرونته ويسبب خلل انبساطي (Diastolic Dysfunction) واحتياج عالي للأكسجين ➔ نقص تروية الشرايين التاجية حتى لو الشرايين سليمة!

\u200F👂 <b>3. الثالوث السريري وعلامات الفحص (Clinical Picture):</b>
\u200F• 🌟 <b>ثالوث الأعراض الكلاسيكي الشهير (The SAD Triad):</b>
\u200F  1. <b>الإغماء الجهدي (Syncope - S):</b> انخفاض ضخ الدم للمخ عند بذل مجهود نتيجة عدم قدرة القلب على زيادة النتاج (Fixed Cardiac Output) وتوسع أوعية العضلات.
\u200F  2. <b>الذبحة الصدرية (Angina - A):</b> ناتجة عن التضخم الهائل لعضلة القلب الذي يفوق إمداد الشرايين التاجية.
\u200F  3. <b>ضيق التنفس وهبوط القلب (Dyspnea - D):</b> نتيجة ارتفاع ضغط الانبساط واحتقان الرئة.
\u200F• <b>طبيعة النبض (Pulse):</b> نبض بطيء وضعيف ومتأخر الذروة يسمى <b>Pulsus parvus et tardus</b>.
\u200F• <b>فحص السماعة (Auscultation):</b>
\u200F  - <b>لغط قذفي انقباضي (Ejection Systolic Murmur):</b> لغط قذفي انقباضي خشن متصاعد متنازل (Crescendo-Decrescendo) يُسمع بأعلى شدة في المساحة البينية اليمنى الثانية (Right 2nd ICS / Aortic Area).
\u200F  - <b>انتشار اللغط (Radiation):</b> ينتشر اللغط للأعلى مباشرة باتجاه <b>الشرايين السباتية في الرقبة (Carotid Arteries)</b>.
\u200F  - <b>انقسام الصوت الثاني (Paradoxical S2 Splitting):</b> انقسام عكسي متناقض في الصوت الثاني؛ لأن الأورطي يتأخر جداً في الانغلاق بسبب الضيق فيقفل بعد الصمام الرئوي!

\u200F🔬 <b>4. الفحوصات وترتيبها الذهبي (Investigations):</b>
\u200F1. <b>فحص الإيكو عبر الصدر (TTE #1 Gold Standard):</b> يؤكد التشخيص ويقيس مساحة الصمام وفرق الضغط والسرعة القصوى (Peak Velocity).
\u200F2. <b>تخطيط رسم القلب (ECG):</b> تضخم شديد في البطين الأيسر (LVH with strain pattern: انقلاب موجات T واكتئاب ST في الاتجاهات الجانبية I, aVL, V5-V6).

\u200F💊 <b>5. العلاج والإنقاذ (Management):</b>
\u200F• ⚠️ <i>تحذير كارثي:</i> ممنوع إعطاء موسعات الشرايين القوية كالنترات (Nitrates) لمرضى AS الشديد لأنها تسبب هبوط ضغط حاد وإغماء قاتل!
\u200F• <b>العلاج النهائي هو استبدال الصمام (Aortic Valve Replacement):</b>
\u200F  - <b>جراحة القلب المفتوح (SAVR):</b> للشباب ومنخفضي الخطورة الجراحية.
\u200F  - <b>القسطرة وتغيير الصمام عبر الفخذ (TAVI / TAVR):</b> لكبار السن (> 70-75 سنة) أو ذوي الخطورة الجراحية العالية والمتوسطة.

\u200F💡 <b>6. تحشيشة الراوند وسر البقاء (Prognostic Pearl):</b>
\u200F<i>"الأورطي ثالوثه SAD.. لغطه في الرقبة جاد.. ونبضه بارفوس وتاردوس معتاد!
\u200Fلو ظهرت الذبحة يعيش 5 سنين.. لو الإغماء 3 سنين.. لو الدسبنيا سنتين!"</i>`,
    quiz: {
      question: "An 82-year-old male with severe calcific aortic stenosis collapses while walking up a flight of stairs. Upon examination, his carotid upstrokes are delayed and diminished in amplitude. Auscultation reveals a grade 4/6 harsh late-peaking ejection systolic murmur at the right upper sternal border radiating bilaterally to the carotid arteries, with a soft single second heart sound. What is the single most effective therapeutic intervention to improve his long-term survival?",
      question_ar_translation: "رجل مسن عمره 82 سنة يعاني من ضيق تكلسي شديد بالصمام الأورطي، أصيب بنوبة إغماء وسقوط أثناء صعود الدرج. بالفحص: نبض الشريان السباتي متأخر وضعيف النبرة. بالسماعة: لغط قذفي انقباضي خشن متأخر الذروة عند أعلى يمين عظمة القص وينتشر للشرايين السباتية بالرقبة، مع صوت ثانٍ خافت. ما هو التدخل الطبي الأكثر فعالية لتحسين بقائه على قيد الحياة وتفادي الوفاة؟",
      clinical_stem_explanation: "بمجرد ظهور أعراض الثالوث الكلاسيكي (خاصة الإغماء Syncope) في مريض ضيق الأورطي الشديد، يصبح متوسط البقاء المتوقع بدون استبدال الصمام أقل من 3 سنوات مع خطورة عالية جداً للوفاة المفاجئة (Sudden Cardiac Death). العلاج الدوائي لا يغير المسار؛ التدخل الوحيد المنقذ للحياة هو استبدال الصمام، وفي عمر 82 سنة فإن التغيير بالقسطرة (TAVI) هو الخيار الذهبي.",
      options: [
        "Transcatheter aortic valve implantation (TAVI / TAVR)",
        "Long-term oral beta-blocker therapy to prevent syncope",
        "Sublingual nitroglycerin as needed for exertion-induced symptoms",
        "Percutaneous balloon aortic valvuloplasty as definitive monotherapy"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (TAVI بالقسطرة): استبدال الصمام الأورطي هو العلاج الحاسم والوحيد الذي يطيل العمر ويمنع الموت المفاجئ في AS المصحوب بأعراض، وفي سن 82 سنة يعتبر TAVI هو المعيار القياسي المعتمد والأكثر أماناً.",
        distractors: [
          "الخيار الثاني غلط: مثبطات بيتا لا تعالج الانسداد الميكانيكي وقد تفاقم هبوط نتاج القلب.",
          "الخيار الثالث كارثي وغلط تماماً: النيتروجليسرين وموسعات الأوعية محظورة في AS لأنها تقلل الـ Preload وتسبب هبوطاً حاداً في ضغط الدم وإغماء فوري.",
          "الخيار الرابع غلط: توسيع الصمام بالبالون في كبار السن هو إجراء مؤقت تلطيفي (Palliative bridge) فقط لأن الصمام يضيق مجدداً خلال 6-12 شهراً، ولا يعتبر علاجاً نهائياً."
        ]
      },
      mnemonic_scheme: "قاعدة نجاة الأورطي: 'الأورطي العرضي علاجه مش دوا وحبوب.. استبدال الصمام بالـ TAVI هو المطلوب!'",
      terms_to_memorize: "TAVI = تغيير الصمام الأورطي بالقسطرة | Fixed cardiac output = نتاج قلبي ثابت لا يزيد مع المجهود | Calcific AS = التكلس الصمامي الشيخوخي"
    }
  },

  {
    id: "cad_aortic_regurgitation",
    course_code: "CAD",
    category: "Cardiology",
    title: "ارتجاع الصمام الأورطي (Aortic Regurgitation - AR)",
    topic: "Aortic Valve Diseases & Peripheral Signs",
    summary_card: `\u200F🫀 <b>شرح المنهج الماسي • ارتجاع الصمام الأورطي (Aortic Regurgitation) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. التعريف والأسباب (Etiology):</b>
\u200F• تسرب الدم راجعاً من الشريان الأورطي إلى البطين الأيسر أثناء الانبساط (Diastole).
\u200F• <b>أهم الأسباب:</b>
\u200F  1. <b>مرض في شرفات الصمام نفسها (Valvular):</b> حمى روماتيزمية، صمام ثنائي الشرفات، أو التهاب بكتيري (Infective Endocarditis).
\u200F  2. <b>تمدد واتساع جذر الشريان الأورطي (Aortic Root Dilatation):</b> متلازمة مارفان (Marfan Syndrome)، تمدد الأورطي الصاعد (Aortic Aneurysm)، أو تسلخ الأورطي الحاد (Aortic Dissection).

\u200F⚙️ <b>2. ديناميكا الدم والضغط النبضي (Hemodynamics):</b>
\u200F• الدم يهرب من الأورطي للبطين أثناء الانبساط ➔ هبوط حاد في الضغط الانبساطي (Low Diastolic BP يصل لـ 40-50 mmHg).
\u200F• في الانقباض التالي: يضخ البطين كل الدم العادي بالإضافة للدم المرتجع ➔ ارتفاع الضغط الانقباضي (High Systolic BP يصل لـ 160-180 mmHg).
\u200F• النتيجة الذهبية للشفوي: <b>اتساع هائل في الضغط النبضي (Wide Pulse Pressure > 60-80 mmHg)</b> وفرط حركة الأوعية المحيطية!

\u200F👂 <b>3. علامات السماعة والعلامات الطرفية الشهيرة (Eponymous Signs):</b>
\u200F• <b>فحص السماعة (Auscultation):</b>
\u200F  - <b>لغط انبساطي مبكر (Early Diastolic Decrescendo Murmur):</b> لغط انبساطي مبكر عالي النبرة خافت ينفخ كالنفير (Blowing) يُسمع بأعلى شدة على الحافة اليسرى للقص (Erb's point: 3rd/4th left ICS) والمريض جالس ويميل للأمام بعد زفير كامل.
\u200F  - <b>لغط أوستن فلينت (Austin Flint Murmur):</b> لغط دحرجي وظيفي في منتصف الانبساط عند قمة القلب ناتج عن اصطدام تيار الدم المرتجع بشرفة الصمام الميترالي الأمامية فيضيق مجراه مؤقتاً!
\u200F• 🌟 <b>مهرجان العلامات الطرفية لارتجاع الأورطي (حفظ إلزامي للشفوي والـ OSCE):</b>
\u200F  - <b>نبض المطرقة المائية (Water-hammer / Corrigan's pulse):</b> نبض سريع الامتلاء يرتفع بقوة هائلة ثم ينهار فجأة.
\u200F  - <b>علامة كوريجان ونبض السباتي (Corrigan's sign):</b> رقصة ونبضان عنيف في الشرايين السباتية بالرقبة (Carotid dancing).
\u200F  - <b>علامة دي موسيه ونبض الرأس (de Musset's sign):</b> إيماءة ونبضان الرأس متزامناً مع كل ضربة قلب.
\u200F  - <b>علامة كوينكي ونبض الأظافر (Quincke's sign):</b> نبضان شعيري مرئي في سرير الأظافر عند الضغط الخفيف عليها.
\u200F  - <b>علامة تروب وطلقة المسدس (Traube's Pistol-shot):</b> صوت طلقة مسدس يُسمع بالسماعة فوق الشريان الفخذي.
\u200F  - <b>علامة دوروزيه واللغط المزدوج (Duroziez's sign):</b> لغط مزدوج (انقباضي وانبساطي) فوق الشريان الفخذي عند الضغط بالسماعة.
\u200F  - <b>علامة هيل وفرق ضغط الساق (Hill's sign):</b> فرق ضغط الدم بين الساق والذراع > 20-60 mmHg (ضغط الساق أعلى بكثير).

\u200F🔬 <b>4. الفحوصات والعلاج (Management):</b>
\u200F• <b>فحص الإيكو (Echocardiography):</b> يحدد شدة الارتجاع وقطر جذر الأورطي.
\u200F• <b>العلاج الجراحي النهائي:</b> جراحة استبدال الصمام وجذر الأورطي قبل حدوث هبوط غير مرتجع في البطين.`,
    quiz: {
      question: "A 42-year-old tall man with Marfanoid habitus presents with throbbing headaches and palpitations. Physical examination reveals a blood pressure of 165/45 mmHg. Palpation of the radial pulse with the arm elevated reveals a sudden rapid distension followed by immediate collapse. Auscultation at the left sternal border reveals a high-pitched, blowing, early diastolic murmur. Which of the following peripheral signs is most characteristically associated with this patient's underlying condition?",
      question_ar_translation: "رجل طويل القامة عمره 42 سنة يحمل ملامح متلازمة مارفان، يشتكي من صداع نابض وخفقان بالقلب. ضغط دمه 165/45 مم زئبق. عند فحص نبض الكعبرة مع رفع الذراع للأعلى وُجد نبض سريع الارتفاع ثم يتهاوى فجأة. بالسماعة: لغط انبساطي مبكر عالي النبرة نافخ على حافة عظمة القص اليسرى. أي من العلامات الطرفية التالية يرتبط كلاسيكياً بهذه الحالة؟",
      clinical_stem_explanation: "المريض يعاني من ارتجاع شديد في الصمام الأورطي (Aortic Regurgitation) مع اتساع هائل في الضغط النبضي (165/45 = فارق 120 مم زئبق) ونبض مطرقي (Water-hammer pulse). العلامة الكلاسيكية الشهيرة لارتجاع الأورطي في الأظافر هي علامة كوينكي (Quincke's sign)، وفي الرأس دي موسيه (de Musset)، وفي الفخذ دوروزيه وتروب.",
      options: [
        "Capillary pulsations visible in the nail bed upon light compression (Quincke's sign)",
        "Pulsus parvus et tardus with slow delayed upstroke on radial palpation",
        "Prominent presystolic giant 'a' wave in the jugular venous pulse",
        "Malar flush discoloration over the zygomatic arches"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (نبضان الأوعية الشعرية في سرير الأظافر Quincke's sign): علامة طرفية كلاسيكية ناتجة عن اتساع الضغط النبضي وفرط حركة الشرايين في ارتجاع الأورطي.",
        distractors: [
          "الخيار الثاني غلط: Pulsus parvus et tardus مميز لضيق الأورطي (Aortic Stenosis) وليس الارتجاع.",
          "الخيار الثالث غلط: موجة 'a' العملاقة في الوريد الوداجي تعكس مقاومة امتلاء البطين الأيمن (كما في ضيق الرئوي أو ارتفاع ضغط الرئة).",
          "الخيار الرابع غلط: حمرة الوجنتين (Malar flush) علامة لضيق الصمام الميترالي (Mitral Stenosis)."
        ]
      },
      mnemonic_scheme: "تحشيشة ارتجاع الأورطي: 'الأورطي لو رجّع.. ضغط النبض يفرقع! وكوينكي في الضوافر يلّمع، والمطرقة في النبض بتسمع!'",
      terms_to_memorize: "Water-hammer pulse = نبض مطرقي متهاوي | Wide pulse pressure = اتساع فارق الضغط النبضي | Quincke's pulsation = نبضان شعيرات الأظافر"
    }
  },

  {
    id: "cad_normal_ecg_blueprint",
    course_code: "CAD",
    category: "Cardiology",
    title: "رسم القلب القياسي والقواعد الذهبية (Normal ECG Blueprint)",
    topic: "ECG Fundamentals & Conduction Rules",
    summary_card: `\u200F🫀 <b>شرح المنهج الماسي • رسم القلب القياسي وأسرار القياسات (Normal ECG) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. المعايرة والسرعة القياسية (Paper Speed & Calibration):</b>
\u200F• السرعة القياسية: <b>25 مم/ثانية (25 mm/s)</b>.
\u200F• المعايرة: <b>10 مم = 1 مليفولت (10 mm/mV)</b> (مربعين كبار للأعلى).
\u200F• <b>أبعاد المربعات (قانون حساب الوقت):</b>
\u200F  - المربع الصغير (1 mm) = <b>0.04 ثانية (40 ms)</b>.
\u200F  - المربع الكبير (5 mm) = <b>0.20 ثانية (200 ms)</b>.
\u200F  - 5 مربعات كبيرة = <b>1 ثانية كاملة</b>.

\u200F⚙️ <b>2. الموجات والمسافات الطبيعية (Normal Intervals):</b>
\u200F• <b>موجة P (إزالة استقطاب الأذينين Atrial Depolarization):</b>
\u200F  - الاتساع الطبيعي: < 2.5 مربع صغير (< 0.10 ثانية).
\u200F  - الارتفاع الطبيعي: < 2.5 مربع صغير (< 2.5 mm). معتدلة وموجبة في Lead II.
\u200F• <b>مسافة PR (زمن التوصيل من الأذين حتى بداية البطين):</b>
\u200F  - الطبيعي: <b>من 3 إلى 5 مربعات صغيرة (0.12 - 0.20 ثانية)</b>.
\u200F  - لو زاد عن 0.20 ثانية ➔ <b>حصـار أذيني بطيني من الدرجة الأولى (First-Degree AV Block)</b>.
\u200F  - لو قل عن 0.12 ثانية ➔ <b>متلازمة وولف باركنسون وايت (WPW Pre-excitation)</b> أو مسار جانبي إضافي.
\u200F• <b>مركب QRS (إزالة استقطاب البطينين Ventricular Depolarization):</b>
\u200F  - العرض الطبيعي: <b>من 1.5 إلى 2.5 مربع صغير (< 0.12 ثانية / < 120 ms)</b>.
\u200F  - لو اتسع ≥ 0.12 ثانية ➔ <b>حصار غصن الحزمة (Bundle Branch Block LBBB / RBBB)</b> أو بؤرة بطينية (VT).
\u200F• <b>مسافة QT (زمن النشاط الكهربائي الكامل للبطين انقباضاً وارتخاءً):</b>
\u200F  - يُقاس من بداية Q إلى نهاية T ويُصحح لمعدل ضربات القلب (QTc).
\u200F  - الطبيعي للـ QTc: < 440 ms في الرجال، < 460 ms في النساء.
\u200F  - لو طال QTc > 480-500 ms ➔ خطورة قاتلة لحدوث رجفان بطيني خطير يسمى <b>Torsades de Pointes</b>.

\u200F👂 <b>3. حساب معدل ضربات القلب (Heart Rate Calculation):</b>
\u200F• <b>لو النظم منتظم (Regular Rhythm):</b>
\u200F  - المعدل = <b>300 ÷ عدد المربعات الكبيرة</b> بين موجتي R متتاليتين (RR interval).
\u200F  - أو = <b>1500 ÷ عدد المربعات الصغيرة</b>.
\u200F• <b>لو النظم غير منتظم (Irregular Rhythm كـ AF):</b>
\u200F  - نعد عدد ضربات QRS في شريط مدته 6 ثوانٍ (30 مربع كبير) ونضرب في 10.

\u200F🔬 <b>4. المحور الكهربائي للقلب (Cardiac Axis):</b>
\u200F• <b>قراءة المحور بمقارنة الاتجاهين (Lead I & aVF):</b>
\u200F  - الاتجاه الأول Lead I موجب (+) و aVF موجب (+) ➔ <b>محور طبيعي (Normal Axis: -30° إلى +90°)</b>.
\u200F  - الاتجاه الأول Lead I موجب (+) و aVF سالب (-) ➔ <b>انحراف أيسر (Left Axis Deviation LAD)</b> (لو Lead II سالب أيضاً).
\u200F  - الاتجاه الأول Lead I سالب (-) و aVF موجب (+) ➔ <b>انحراف أيمن (Right Axis Deviation RAD)</b>.

\u200F💡 <b>5. تحشيشة الراوند (Bedside Pearl):</b>
\u200F<i>"المربع الصغير 0.04.. والكبير 0.20 مش محتاج حظ!
\u200Fمسافة PR من 3 لـ 5 مربعات.. زادت عن 5 تبقى بلوك درجات!"</i>`,
    quiz: {
      question: "A routine 12-lead ECG of a 24-year-old healthy male athlete recorded at standard speed (25 mm/s) demonstrates normal sinus rhythm with a heart rate of 50 bpm. The PR interval is exactly 4 small squares (0.16 seconds), the QRS duration is 2 small squares (0.08 seconds), and the QT interval corrected for heart rate (QTc) is 410 ms. There are exactly 6 large squares between consecutive R waves. Which of the following statements is completely accurate regarding this ECG tracing?",
      question_ar_translation: "رسم قلب قياسي لشاب رياضي معافى عمره 24 سنة مسجل بالسرعة القياسية، أظهر نظماً جيبياً مع نبض 50 دقيقة. مسافة PR تساوي 4 مربعات صغيرة (0.16 ثانية)، وعرض QRS مربعين صغيرين (0.08 ثانية)، والـ QTc يساوي 410 مللي ثانية. ويوجد 6 مربعات كبيرة بين كل موجتي R. أي من العبارات التالية صحيحة تماماً وتصف رسم القلب هذا بدقة؟",
      clinical_stem_explanation: "جميع القياسات المذكورة في النطاق الفسيولوجي المثالي تماماً: PR بين 3-5 مربعات (0.16 ث)، QRS أقل من 0.12 ث (0.08 ث)، والـ QTc طبيعي جداً (< 440 ms). معدل النبض 300 ÷ 6 مربعات كبيرة = 50 ن/د، وهو بطء قلب جيبي طبيعي وفسيولوجي معتاد لدى الرياضيين (Physiological Sinus Bradycardia in trained athlete) نتيجة لزيادة نغمة العصب الحائر (Vagal tone).",
      options: [
        "Normal sinus bradycardia typical for a trained endurance athlete",
        "First-degree atrioventricular block due to prolonged PR interval",
        "Pathological prolongation of QRS complex requiring electrophysiological study",
        "Long QT syndrome predisposing the athlete to ventricular arrhythmia"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (بطء قلب جيبي طبيعي لرياضي معتاد): النظم سليم وكافة القياسات طبيعية تماماً، وبطء النبض حتى 45-50 ن/د في الرياضيين ظاهرة صحية حميدة نتيجة كفاءة القلب العالية وزيادة قوة العصب الحائر.",
        distractors: [
          "الخيار الثاني غلط: مسافة PR 0.16 ثانية (4 مربعات) طبيعية جداً؛ حصار الدرجة الأولى يستلزم زيادة PR عن 0.20 ثانية (أكثر من 5 مربعات).",
          "الخيار الثالث غلط: عرض QRS 0.08 ثانية طبيعي ونحيف تماماً (< 0.12 ث).",
          "الخيار الرابع غلط: QTc 410 مللي ثانية طبيعي جداً (المتلازمة تستلزم زيادة QTc عن 480-500 ms)."
        ]
      },
      mnemonic_scheme: "إسكيمة النبض الرياضي: 'الرياضي نبضه 50 في التمام.. عضلة وحش وعصب حائر في سلام!'",
      terms_to_memorize: "Sinus bradycardia = بطء قلب جيبي | Vagal tone = نغمة العصب الحائر | QTc interval = مسافة QT المصححة لسرعة النبض"
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 👶 موديول طب الأطفال (Pediatrics PED 401)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "ped_growth_assessment_rules",
    course_code: "PED",
    category: "Pediatrics",
    title: "قواعد تقييم النمو ومنحنيات الطول والوزن (Growth Assessment & Anthropometry)",
    topic: "Physical Growth & Milestones",
    summary_card: `\u200F👶 <b>شرح المنهج الماسي • تقييم نمو الأطفال والمعادلات الذهبية (Growth Assessment) 🩺</b>
━━━━━━━━━━━━━━━━━━━━━
\u200F📌 <b>1. الوزن والزيادات القياسية في السنة الأولى (Weight Milestones):</b>
\u200F• الوزن الطبيعي عند الولادة (Birth Weight): <b>3.0 - 3.5 كجم</b> (المتوسط الطبيعي 2.5 إلى 4.0 كجم).
\u200F• ⚠️ <i>ملاحظة سريرية:</i> الرضيع يفقد 5-10% من وزنه في أول 3-5 أيام بسبب إخراج العقي والبول ونقص شرب السوائل، ويستعيد وزن الولادة عند <b>اليوم العاشر</b>.
\u200F• 🌟 <b>قواعد تضاعف الوزن (سؤال شفوي متكرر جداً):</b>
\u200F  - يتضاعف وزن الولادة (Double birth weight) عند: <b>4 - 5 أشهر</b> (يصل ~ 7 كجم).
\u200F  - يتضاعف ثلاث مرات (Triple birth weight) عند: <b>سنة واحدة</b> (يصل ~ 10 كجم).
\u200F  - يتضاعف أربع مرات (Quadruple birth weight) عند: <b>سنتين</b> (يصل ~ 12-14 كجم).
\u200F• <b>معادلة تقريب وزن الطفل بعد عمر سنة (عمر الطفل بالسنين):</b>
\u200F  - الوزن التقريبي (كجم) = <b>(العمر بالسنين × 2) + 8</b>. (مثال: طفل 3 سنين = 3×2 + 8 = 14 كجم).

\u200F⚙️ <b>2. الطول والقامة (Length & Height Milestones):</b>
\u200F• الطول عند الولادة (Birth Length): <b>50 سم</b> (المتوسط 48 - 52 سم).
\u200F• الزيادة في السنة الأولى: يزداد <b>25 سم</b> كاملة ليصل إلى <b>75 سم عند عمر سنة</b>!
\u200F• عند عمر سنتين: يصل إلى <b>85-87 سم</b>.
\u200F• يتضاعف طول الولادة (Double birth length ليصل 100 سم) عند: <b>عمر 4 سنوات</b>!
\u200F• <b>معادلة تقريب طول الطفل (من عمر 2 إلى 12 سنة):</b>
\u200F  - الطول (سم) = <b>(العمر بالسنين × 6) + 77</b>.

\u200F👂 <b>3. محيط الرأس ونمو المخ (Head Circumference - HC):</b>
\u200F• محيط الرأس عند الولادة: <b>35 سم</b>.
\u200F• محيط الرأس عند عمر سنة: يصل إلى <b>47 سم</b> (زيادة 12 سم في السنة الأولى: 2 سم/شهر أول 3 شهور، 1 سم/شهر ثاني 3 شهور، 0.5 سم/شهر في النصف الثاني).
\u200F• إغلاق اليافوخ الأمامي (Anterior Fontanelle): يقفل بين <b>9 إلى 18 شهراً</b> (متوسط 14 شهراً).
\u200F• إغلاق اليافوخ الخلفي (Posterior Fontanelle): يقفل مبكراً بين <b>6 إلى 8 أسابيع</b> (أول شهرين).

\u200F🔬 <b>4. قراءة منحنيات النمو (Growth Charts Interpretation):</b>
\u200F• النطاق المئوي الطبيعي: بين الخط المئوي الثالث (3rd percentile) والخط المئوي السابع والتسعين (97th percentile).
\u200F• <b>تعريف قصر القامة (Short Stature):</b> الطول أسفل الخط المئوي الثالث (Height < 3rd percentile) أو أكثر من انحرافين معياريين أسفل المتوسط (-2 SD).
\u200F• <b>علامة الخطر القصوى (Red Flag):</b> انحدار منحنى نمو الطفل وكسره لخطين مئويين رئيسيين للأسفل (Falling across 2 major percentiles) ➔ يستدعي فحصاً شاملاً لفشل النمو (Failure to Thrive).

\u200F💡 <b>5. تحشيشة أرقام الأطفال (Pediatric Mnemonic):</b>
\u200F<i>"الوزن يضرب في 2 عند خمس شهور.. ويضرب في 3 عند سنة بنور!
\u200Fوالطول 50 عند الولادة.. وعند 4 سنين يوصل 100 سم بزيادة!"</i>`,
    quiz: {
      question: "A mother brings her healthy 12-month-old male infant for a routine well-child visit. He was born at full-term with a normal birth weight of 3.2 kg and a birth length of 50 cm. He has been exclusively breastfed with appropriate complementary feeding started at 6 months. Physical examination confirms he is meeting all developmental milestones. What are his expected approximate weight and length at this 1-year visit?",
      question_ar_translation: "أم تحضر رضيعها البالغ من العمر 12 شهراً (سنة واحدة) للفحص الدوري. وُلد بوزن طبيعي عند الولادة 3.2 كجم وطول 50 سم. رضع رضاعة طبيعية مع تغذية تكميلية مناسبة، وتطوره سليم تماماً. ما هو الوزن والطول التقريبي المتوقع لهذا الطفل في زيارة إتمام السنة الأولى؟",
      clinical_stem_explanation: "القواعد الذهبية لنمو الرضيع الطبيعي: عند عمر سنة، يتضاعف وزن الولادة 3 مرات (Triple birth weight: 3.2 × 3 ≈ 9.6 - 10 كجم)، ويزداد طوله بمقدار 25 سم في السنة الأولى (50 + 25 = 75 سم).",
      options: [
        "Weight ~ 9.6 to 10 kg, and Length ~ 75 cm",
        "Weight ~ 6.4 to 7 kg, and Length ~ 65 cm",
        "Weight ~ 12.8 to 14 kg, and Length ~ 100 cm",
        "Weight ~ 8 to 8.5 kg, and Length ~ 85 cm"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (وزن حوالي 9.6 - 10 كجم، وطول 75 سم): يتطابق حرفياً مع قواعد النمو الفسيولوجية المعتمدة؛ تضاعف الوزن 3 مرات عند عمر سنة (3.2 × 3 = 9.6 كجم) وزيادة 25 سم على طول الولادة (50 + 25 = 75 سم).",
        distractors: [
          "الخيار الثاني غلط: وزن 6.4 إلى 7 كجم متوقع عند عمر 4 إلى 5 أشهر فقط (تضاعف مرتين).",
          "الخيار الثالث غلط: وزن 13 كجم وطول 100 سم هما مواصفات طفل في عمر 4 سنوات كاملة.",
          "الخيار الرابع غلط: طول 85 سم يبلغه الطفل عند عمر سنتين وليس سنة واحدة."
        ]
      },
      mnemonic_scheme: "إسكيمة أرقام عمر سنة: 'عند سنة تمسك شمعة.. الوزن 10 كيلو والطول 75 سم بالجمعة!'",
      terms_to_memorize: "Birth weight tripled = تضاعف وزن الولادة 3 مرات | Anterior fontanelle closure = إغلاق اليافوخ الأمامي عند 14 شهراً | Well-child visit = فحص الطفل السليم الدوري"
    }
  }
];

export function getCurriculumLessonsList() {
  return MEDICAL_CURRICULUM;
}

export function getLessonById(id) {
  return MEDICAL_CURRICULUM.find(l => l.id === id);
}
