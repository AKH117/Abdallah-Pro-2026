// 🩺 موسوعة ما لا يسع الطبيب جهله (Doctor's Bedside & Emergency Protocol Pearls)
// كبسولات سريرية عملية فائقة الأهمية للتعامل الفوري مع الطوارئ والحالات الحرجة في الاستقبال والشارع
// تشمل: خطوات الإنقاذ، المحاذير الكارثية، الشرح بالمصري، التحشيشات والأسئلة التطبيقية بنظام الجامعة

export const MEDICAL_ESSENTIALS = [
  {
    id: "choking_foreign_body_heimlich",
    title: "الغصة وانسداد مجرى الهواء المفاجئ (Choking & Heimlich Maneuver)",
    emergency_scenario: "شخص كان بياكل وفجأة مسك رقبته بإيديه الاتنين (Universal Sign of Choking)، وشه بدأ يزرق ومش قادر يتكلم ولا يكح ولا ياخد نفسه.",
    immediate_action: [
      "1. اسأله فوراً: 'هل أنت بتشرق ومش قادر تتكلم؟' لو شاور برأسه نعم ومش قادر يخرج صوت، ده انسداد كامل (Complete Airway Obstruction).",
      "2. قف خلف المريض، لف دراعاتك حوالين وسطه، واعمل قبضة بإيدك وضعها بين السرة وعظمة القص (Subxiphoid abdominal thrusts).",
      "3. اضغط بقوة للداخل وللأعلى (Inward & Upward) بحركة مباغتة متكررة لزيادة ضغط الصدر وطرد الجسم الغريب.",
      "4. للرضيع (Infant < 1 yr): امنع الضغط على البطن منعاً لتمزق الكبد؛ اعطه 5 ضربات على الظهر (Back slaps) متبوعة بـ 5 ضغطات على الصدر (Chest thrusts).",
      "5. لو المريض فقد الوعي وسقط على الأرض: ابدأ فوراً الإنعاش القلبي الرئوي (CPR 30:2) وافحص الفم قبل إعطاء النفس لطرد الجسم إن كان مرئياً."
    ],
    fatal_mistake_warning: "إياك أن تضع إصبعك في فم المريض عشوائياً (Blind finger sweep) لأنك قد تدفع الجسم الغريب لأسفل وتغلق القصبة الهوائية تماماً!",
    clinical_pearl_egyptian: "لو بيكح بصوت أو بيتكلم، دا انسداد جزئي؛ شجعه يكح ومتضربوش على ضهره وهو واقف. لو سكت ووشه أزرق، دا هيمليك فوراً: قبضة فوق السرة واضغط لجوة وفوق بقوة!",
    key_medical_terms: [
      { term: "Heimlich Maneuver", translation: "مناورة هيمليك لطرد الأجسام الغريبة من مجرى التنفس" },
      { term: "Complete Airway Obstruction", translation: "انسداد كامل للمجرى الهوائي" },
      { term: "Universal Choking Sign", translation: "علامة الاختناق العالمية (مسك الرقبة باليدين)" },
      { term: "Blind Finger Sweep", translation: "المسح العشوائي بالأصابع داخل الفم (محظور)" }
    ],
    quiz: {
      question: "A 45-year-old man suddenly clutches his throat while eating steak at a restaurant. He is cyanotic and cannot speak or cough. What is the most appropriate next step?",
      question_ar_translation: "رجل عمره 45 سنة، وأثناء تناوله شريحة لحم في مطعم، أمسك بحلقه فجأة، ووجهه مزرق (cyanotic) وعاجز تماماً عن التحدث أو السعال. ما هو الإجراء الأنسب فوراً؟",
      clinical_stem_explanation: "المريض يعاني من علامة الاختناق الكلاسيكية (انسداد كلي لمجرى الهواء بجسم غريب) مع ازرقاق وفقدان القدرة على إصدار أي صوت، وهو ما يهدد بتوقف التنفس والقلب خلال ثوانٍ.",
      options: [
        "Perform subxiphoid abdominal thrusts (Heimlich maneuver)",
        "Perform a blind finger sweep inside his mouth",
        "Offer him a glass of water to swallow the food",
        "Lay him on his back and start chest compressions immediately"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (Heimlich maneuver) هو الصحيح: لأن المريض ما زال واعياً ويعاني من انسداد كلي؛ الضغطات فوق السرة وللأعلى تزيد الضغط داخل الصدر كالمكبس الهوائي وتطرد اللقمة فوراً.",
        distractors: [
          "الخيار الثاني غلط: الـ Blind finger sweep ممنوع منعاً باتاً لأنه بيزق اللقمة أعمق في الحنجرة ويسدها للأبد.",
          "الخيار الثالث غلط: شرب الماء لشخص مسدود مجرى تنفسه هيسبب استنشاق فوري (Aspiration) ويزيد الطين بلة.",
          "الخيار الرابع غلط: الإنعاش القلبي بالضغط على الصدر مخصص للشخص فاقد الوعي (Unresponsive)، بينما المريض هنا ما زال واقفاً وواعياً."
        ]
      },
      mnemonic_scheme: "تحشيشة هيمليك: 'فوق السرة بزاوية حادة.. تطرد اللقمة السادة!' (Inward & Upward subxiphoid)",
      terms_to_memorize: "Cyanotic = مزرق | Subxiphoid = أسفل عظم القص / فوق السرة | Thrusts = دفعات قوية"
    }
  },
  {
    id: "syncope_vasovagal_vs_cardiac",
    title: "الإغماء وهبوط الوعي المفاجئ (Syncope & Transient Loss of Consciousness)",
    emergency_scenario: "شخص واقف في طابور أو في الشمس أو شاف دم وفجأة وقع في الأرض واغمى عليه لبضع ثوانٍ ثم استعاد وعيه.",
    immediate_action: [
      "1. تأمين مجرى التنفس والتأكد من وجود نبض في الشريان السباتي (Carotid Pulse).",
      "2. ارفع رجليه لأعلى بزاوية 45 درجة (Trendelenburg position / Leg elevation) لإعادة الدم من الساقين إلى المخ والقلب فوراً.",
      "3. فك أي ملابس ضيقة حول الرقبة والصدر لتحسين التهوية، وتجنب تجمهر الناس حوله.",
      "4. قس السكر العشوائي (Random Blood Sugar) وضغط الدم فور إفاقته.",
      "5. استفسر: هل شعر بزغللة وعرق وغثيان قبل الوقوع (Prodrome = Vasovagal)، ولا وقع فجأة وهو جالس أو بيبذل مجهود (Exertional / Cardiac syncope = خطير جداً يحتاج رسم قلب ECG عاجل)؟"
    ],
    fatal_mistake_warning: "إياك أن تسقيه ماء أو عصير وهو مائل أو شبه واعي، لأن الماء سيدخل الرئة ويسبب اختناقاً والتهاباً رئوياً استنشاقياً (Aspiration Pneumonia).",
    clinical_pearl_egyptian: "المغشى عليه متقومهوش يقعد ولا ترش عليه مية وتغرقه! نيمه على ضهره وارفع رجليه فوق الكرسي.. الدم هيرجع للمخ ويفوق في أقل من دقيقة لو كان إغماء عصبي عادي.",
    key_medical_terms: [
      { term: "Vasovagal Syncope", translation: "الإغماء الوعائي المبهمي (أشهر سبب للإغماء البسيط)" },
      { term: "Orthostatic Hypotension", translation: "هبوط ضغط الدم الانتصابي (عند الوقوف المفاجئ)" },
      { term: "Prodromal Symptoms", translation: "الأعراض البادرية التحذيرية (دوخة، عرق، شحوب، زغللة)" },
      { term: "Aspiration Pneumonia", translation: "الالتهاب الرئوي الاستنشاقي الناتج عن دخول سوائل للرئة" }
    ],
    quiz: {
      question: "A 21-year-old medical student feels lightheaded, warm, and nauseous while observing blood drawing, then experiences brief loss of consciousness for 30 seconds. What is the immediate first-aid intervention?",
      question_ar_translation: "طالب طب عمره 21 سنة شعر بدوار وسخونة وغثيان أثناء مشاهدة سحب عينة دم، ثم فقد وعيه لمدة 30 ثانية. ما هو التدخل الإسعافي الفوري الأنسب؟",
      clinical_stem_explanation: "الشاب تعرض لحالة Vasovagal Syncope كلاسيكية (محفز عاطفي ورؤية دم مع أعراض بادرية كالغثيان والعرق واستعادة وعي سريعة خلال 30 ثانية).",
      options: [
        "Place the patient supine and elevate the lower extremities",
        "Force him to sit up and drink concentrated sugar syrup immediately",
        "Administer intramuscular Epinephrine 1:1000",
        "Perform immediate electrical cardioversion"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (وضع الاستلقاء مع رفع الساقين) هو الصحيح: يضمن رجوع الدم الوريدي للقلب والدماغ (Venous return) ويستعيد المريض وعيه التام في ثوانٍ.",
        distractors: [
          "الخيار الثاني غلط: إجباره على الجلوس وسقايته سوائل وهو شبه واعي قد يسبب Aspiration ويزيد نقص تدفق الدم للدماغ.",
          "الخيار الثالث غلط: الأدرينالين علاج الصدمة التحسسية (Anaphylaxis) وتوقف القلب، وليس للإغماء البسيط.",
          "الخيار الرابع غلط: الصدمة الكهربائية مخصصة لاضطرابات نظم القلب القاتلة (VF/VT) في مريض بلا نبض."
        ]
      },
      mnemonic_scheme: "إسكيمة الإغماء: 'نيم وارفع رجليه.. الدم يرجع لعينيه!' (Supine + Elevate legs)",
      terms_to_memorize: "Lightheaded = دوخة وخفة بالرأس | Supine = مستلقٍ على ظهره | Extremities = الأطراف"
    }
  },
  {
    id: "hypoglycemia_vs_dka_coma",
    title: "غيبوبة السكر: نقص السكر الحاد مقابل الحموضة الكيتونية (Hypoglycemia vs DKA)",
    emergency_scenario: "مريض سكر وجد في حالة غيبوبة وتشوش ذهني، وأهله مش عارفين هل سكره عالي ولا واطي، ومفيش جهاز قياس سكر متوفر فوراً.",
    immediate_action: [
      "1. القاعدة الذهبية السريرية: أي مريض سكر فاقد للوعي ولم يتم قياس سكره يُعامل فوراً على أنه 'نقص سكر' (Hypoglycemia) حتى يثبت العكس!",
      "2. لماذا؟ لأن نقص السكر يدمر خلايا المخ بشكل لا رجعة فيه (Irreversible Brain Death) خلال دقائق معدودة، بينما ارتفاع السكر لا يقتل في دقائق.",
      "3. لو المريض فاقد للوعي: ممنوع أي أكل أو شرب بالفم! ركب كانيولا وريدية وأعطه 50 مل جلوكوز وريدي مركز 25% أو 50% (Dextrose) فوراً أو حقنة جلوكاجون عضل (Glucagon 1mg IM).",
      "4. علامات نقص السكر: جلد بارد ومعرق بشدة (Cold & Clammy sweat)، رعشة، نبض سريع، جوع شديد، ارتباك وهذيان.",
      "5. علامات الـ DKA: تنفس سريع وعميق جداً (Kussmaul breathing)، رائحة فم كالتفاح العفن/الأسيتون (Fruity acetone breath)، جفاف شديد باللسان، وجلد دافئ وجاف."
    ],
    fatal_mistake_warning: "إياك أن تعطي مريض غيبوبة إنسولين من باب التجربة أو التخمين! لو كان سكره منخفضاً، الإنسولين سينهي حياته فوراً!",
    clinical_pearl_egyptian: "القاعدة بتقول: 'Cold and clammy, give some candy.. Warm and dry, sugar is high'. لو مفيش جهاز، ادي جلوكوز وريدي فوراً، مش هيضر مريض السكر العالي، لكن هينقذ مريض السكر الواطي من موت خلايا المخ!",
    key_medical_terms: [
      { term: "Hypoglycemia", translation: "هبوط حاد في مستوى سكر الدم (< 70 mg/dL)" },
      { term: "Diabetic Ketoacidosis (DKA)", translation: "الحماض الكيتوني السكري" },
      { term: "Kussmaul Breathing", translation: "تنفس كوسماول (تنفس عميق وسريع لطرد ثاني أكسيد الكربون الحامضي)" },
      { term: "Cold and Clammy", translation: "بارد ورطب بالعرق (العلامة المميزة لهبوط السكر)" }
    ],
    quiz: {
      question: "A known type 1 diabetic is found unresponsive at home with profuse sweating, trembling, and pale cold skin. Fingerstick glucometer is not functioning. What is the single most urgent management step?",
      question_ar_translation: "مريض معروف بإصابته بسكر النوع الأول وُجد فاقداً للوعي بالمنزل، مع عرق غزير، ورعشة، وجلد بارد وشاحب. جهاز قياس السكر معطل. ما هي الخطوة الأكثر إلحاحاً لإنقاذه؟",
      clinical_stem_explanation: "العرق الشديد والجلد البارد والشاحب مع فقدان الوعي في مريض سكر هي أعراض نقص سكر حاد (Severe Hypoglycemia) يهدد حياة خلايا المخ بالموت الإقفاري ما لم يتم رفع السكر بالدم فوراً.",
      options: [
        "Administer 50 mL of 50% Dextrose (IV) immediately",
        "Administer 10 units of regular insulin subcutaneously",
        "Wait for laboratory serum glucose results before intervention",
        "Force him to drink 200 mL of sweetened orange juice"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (جلوكوز وريدي 50% فوراً) هو الصحيح: رفع سكر الدم ينقذ خلايا القشرة المخية من التلف، ولا ننتظر المعمل لأن كل دقيقة تأخير تعني تلفاً عصبياً دائماً.",
        distractors: [
          "الخيار الثاني غلط وقاتل: إعطاء إنسولين لمريض يعاني من هبوط السكر يؤدي لتوقف القلب والوفاة الفورية.",
          "الخيار الثالث غلط: الانتظار للمعمل في حالة غيبوبة حادة خطأ طبي جسيم.",
          "الخيار الرابع غلط: إعطاء سوائل بالفم لمريض غير مستجيب وفاقد الوعي يؤدي لاختناق فوري وموت بالرئة."
        ]
      },
      mnemonic_scheme: "تحشيشة السكر: 'العرقان السقعان.. اديله جلوكوز في الشريان' (Cold + Sweaty = IV Glucose)",
      terms_to_memorize: "Profuse sweating = عرق غزير | Unresponsive = فاقد للاستجابة | Fingerstick = وخز الإصبع لقياس السكر"
    }
  },
  {
    id: "anaphylaxis_adrenaline_first",
    title: "الصدمة التحسسية المفرطة ودور الأدرينالين (Anaphylaxis & Adrenaline)",
    emergency_scenario: "مريض أخذ حقنة مضاد حيوي (مثل البنسلين أو السيفالوسبورين) أو قرصته نحلة، وخلال 5 دقائق بدأ يهرش في جسمه كله وظهر طفح جلدي (Urticaria)، مع تورم في الشفتين واللسان، وبدأ يختنق ويزرق وضغطه وقع.",
    immediate_action: [
      "1. أوقف الدواء المسبب للتحسس فوراً لو كان محقوناً في وريد.",
      "2. العلاج الوحيد المنقذ للحياة بالدرجة الأولى هو: **أدرينالين عضلي فوراً** (Epinephrine / Adrenaline 1:1000).",
      "3. الجرعة للبالغ: 0.5 مل (0.5 mg) عضلياً في الجزء الخارجي من منتصف الفخذ (Anterolateral thigh / Vastus lateralis).",
      "4. لماذا الفخذ؟ لأن الامتصاص فيه أسرع بكثير من عضلة الكتف (Deltoid). يمكن تكرار الجرعة كل 5-15 دقيقة إذا لم يتحسن.",
      "5. الخطوات المكملة: أكسجين عالي التدفق، محاليل وريدية ملحية سريعة (Normal Saline 1-2 Liters) لمقاومة هبوط الضغط، ثم إعطاء الكورتيزون (Hydrocortisone 200mg IV) ومضاد الهيستامين (Chlorpheniramine/Avil)."
    ],
    fatal_mistake_warning: "الخطأ القاتل الشائع هو البدء بالكورتيزون أو مضادات الهيستامين وتأخير الأدرينالين! الكورتيزون يحتاج من 4 إلى 6 ساعات ليبدأ مفعوله، بينما الأدرينالين يعمل في ثوانٍ لفتح الشعب الهوائية ورفع الضغط ومنع توقف القلب.",
    clinical_pearl_egyptian: "الأدرينالين في الحساسية المفرطة هو الملك، ومكانه عضلة الفخذ الخارجية مش الكتف! الكورتيزون والأفيل أدوية مساعدة بتمنع ارتداد النوبة بعد ساعات، لكن اللي بينقذ من الموت في أول دقيقة هو حقنة الأدرينالين!",
    key_medical_terms: [
      { term: "Anaphylaxis", translation: "الصدمة التحسسية الحادة المهددة للحياة" },
      { term: "Epinephrine (Adrenaline)", translation: "الإبينفرين / الأدرينالين (مضيق للأوعية وموسع للشعب الهوائية)" },
      { term: "Anterolateral Thigh", translation: "الجزء الأمامي الخارجي من الفخذ (موقع حقن الأدرينالين الأسرع امتصاصاً)" },
      { term: "Laryngeal Edema", translation: "وذمة الحنجرة (تورم يسد مجرى الهواء تماماً)" }
    ],
    quiz: {
      question: "A 30-year-old female develops generalized hives, stridor, lip swelling, and a blood pressure of 75/40 mmHg five minutes after a cephalosporin injection. What is the immediate first-line drug of choice?",
      question_ar_translation: "سيدة عمرها 30 سنة ظهر عليها ارتكاريا عامة، صوت صفير واختناق تنفسي (stridor)، تورم بالشفاه، وهبوط بالضغط إلى 75/40 بعد 5 دقائق من حقنة سيفالوسبورين. ما هو الدواء الأول الفوري المنقذ للحياة؟",
      clinical_stem_explanation: "المريضة تعاني من صدمة تحسسية كاملة (Anaphylactic Shock) مع تورم مجرى الهواء العلوي (Stridor) وهبوط حاد في ضغط الدم، مما يمثل حالة طوارئ قصوى تتطلب دواء يعاكس كلا التأثيرين فورياً.",
      options: [
        "Intramuscular Epinephrine (1:1000) in the anterolateral thigh",
        "Intravenous Hydrocortisone 200 mg",
        "Oral Diphenhydramine 50 mg",
        "Inhaled Salbutamol alone without systemic drugs"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (الأدرينالين العضلي بالفخذ) هو الخيار الذهبي الأول: يضيق الأوعية لرفع الضغط (Alpha-1)، يوسع الشعب لفك الاختناق (Beta-2)، ويثبط إفراز الهيستامين فوراً.",
        distractors: [
          "الخيار الثاني غلط كعلاج أولي: الهيدروكورتيزون بطيء جداً (يبدأ بعد 4-6 ساعات) ولا ينقذ من الاختناق الحاد.",
          "الخيار الثالث غلط: مضادات الهيستامين بالفم لا تعالج تورم الحنجرة ولا هبوط الضغط.",
          "الخيار الرابع غلط: السالبوتامول يوسع الشعب الهوائية السفلية لكنه لا يعالج تورم الحنجرة ولا انخفاض الضغط الشرياني."
        ]
      },
      mnemonic_scheme: "تحشيشة الحساسية: 'تورم وهبوط وتزييق.. أدرينالين في الفخذ على الريق!' (IM Adrenaline in thigh)",
      terms_to_memorize: "Stridor = صوت صرير تنفسي عالي النبرة | Hives / Urticaria = طفح جلدي تحسسي | First-line = الخط العلاجي الأول"
    }
  },
  {
    id: "hypertensive_emergency_vs_urgency",
    title: "طوارئ ارتفاع ضغط الدم (Hypertensive Emergency vs Urgency)",
    emergency_scenario: "مريض ضغطه تم قياسه في البيت أو الطوارئ ووجد 210/120 mmHg. الأهل مرعوبين وعايزين ينزلوه لـ 120/80 فوراً.",
    immediate_action: [
      "1. السؤال الحاسم: هل يوجد دليل على تلف حاد في الأعضاء الحيوية (Target Organ Damage)؟",
      "2. ابحث عن: صداع شديد مصحوب بتشوش رؤية أو تشنجات (Encephalopathy)، ألم حاد بالصدر (ACS / Aortic Dissection)، ضيق نفس وفقاقيع بالصدر (Pulmonary Edema)، أو دم بالبول (Acute Renal Failure).",
      "3. لو مفيش أي تلف في الأعضاء (Hypertensive Urgency): لا تعطه أدوية وريدية سريعة ولا حبوب تحت اللسان؛ العلاج يكون بأقراص فموية وخفض الضغط تدريجياً على مدار 24 إلى 48 ساعة في العيادة.",
      "4. لو فيه تلف حاد في الأعضاء (Hypertensive Emergency): دخول عناية مركزة فوراً وإعطاء أدوية وريدية خافضة للضغط (مثل Labetalol أو Nicardipine أو Nitroprusside).",
      "5. القاعدة الذهبية الحيوية: اخفض الضغط الشرياني المتوسط (MAP) بنسبة **20% إلى 25% فقط** في أول ساعة، وليس إلى المستوى الطبيعي!"
    ],
    fatal_mistake_warning: "الخطأ الطبي القاتل: استخدام كبسولات الـ Adalat (Nifedipine) تحت اللسان أو خفض الضغط بسرعة إلى 120/80! هذا يسبب هبوطاً مفاجئاً في تدفق الدم للدماغ ويؤدي إلى جلطة دماغية إقفارية مروعة (Cerebral Infarction) أو عمى مفاجئ!",
    clinical_pearl_egyptian: "اوعى تعصر كبسولة ادالات تحت لسان عيان ضغطه عالي! الضغط العالي بقاله شهور والمخ متعود عليه.. لو نزلته فجأة، الدم مش هيوصل للمخ ويجيله جلطة في ثواني. نزل 20-25% بس بالراحة!",
    key_medical_terms: [
      { term: "Hypertensive Emergency", translation: "طوارئ ارتفاع الضغط (ضغط شديد مصحوب بتلف حاد في الأعضاء)" },
      { term: "Target Organ Damage", translation: "تلف الأعضاء المستهدفة (المخ، القلب، الرئة، الكلى، الشرايين)" },
      { term: "Hypertensive Urgency", translation: "ارتفاع ضغط شديد بدون أي تلف في الأعضاء (يعالج بأقراص بهدوء)" },
      { term: "Cerebral Hypoperfusion", translation: "نقص تدفق الدم الحاد إلى الدماغ" }
    ],
    quiz: {
      question: "A 58-year-old male with long-standing hypertension presents with BP 210/120 mmHg, severe headache, confusion, and papilledema on fundoscopy. What is the initial target for blood pressure reduction in the first hour?",
      question_ar_translation: "رجل عمره 58 سنة يعاني من ضغط دم مزمن، حضر بضغط 210/120 مع صداع شديد وتشوش ذهني ووذمة حليمة العصب البصري (papilledema). ما هو الهدف الأولي لخفض ضغط الدم خلال الساعة الأولى؟",
      clinical_stem_explanation: "المريض يعاني من Hypertensive Encephalopathy (طوارئ ضغط دم مع تلف حاد في المخ والعصب البصري). الهدف الطبي هو تقليل الخطر دون إحداث جلطة إقفارية في المخ.",
      options: [
        "Reduce mean arterial pressure by no more than 20% to 25%",
        "Immediately normalize blood pressure to 120/80 mmHg",
        "Give sublingual Nifedipine to drop systolic BP below 100 mmHg",
        "Withhold all antihypertensives until an MRI brain is completed"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (خفض الضغط الشرياني بنسبة لا تتعدى 20-25%) هو الصحيح عالمياً: يحمي الدماغ من النزيف ويحافظ في نفس الوقت على تدفق الدم الدماغي (Cerebral Autoregulation).",
        distractors: [
          "الخيار الثاني غلط وخطير: التنزيل الفوري إلى 120/80 يؤدي إلى إسقاط تروية المخ ويسبب جلطة دماغية واسعة.",
          "الخيار الثالث غلط وقاتل: كبسولات النيفيديبين تحت اللسان محظورة دولياً في الطوارئ لتسببها في سكتات دماغية وهبوط حاد مفاجئ.",
          "الخيار الرابع غلط: تأخير خفض الضغط في وجود تلف دماغي يعرض المريض لنزيف مخي وتشنجات مستمرة."
        ]
      },
      mnemonic_scheme: "إسكيمة الضغط المرتفع: 'الربع في أول ساعة.. أكتر من كدة ضياعة!' (Max 20-25% drop in first hour)",
      terms_to_memorize: "Papilledema = تورم قرص العصب البصري | Encephalopathy = اعتلال دماغي | Sublingual = تحت اللسان"
    }
  },
  {
    id: "chest_pain_acs_mona_protocol",
    title: "ألم الصدر واشتباه الجلطة القلبية الحادة (Acute Coronary Syndrome & ECG)",
    emergency_scenario: "رجل فوق الأربعين مدخن، يشكو فجأة من ألم ضاغط كالصخرة في منتصف صدره ممتعاً إلى كتفه الأيسر والفك السفلي، مع عرق بارد وغثيان شديد.",
    immediate_action: [
      "1. القاعدة الذهبية: أي ألم صدر مشبوه = رسم قلب (12-Lead ECG) خلال **10 دقائق** من وصوله، وسحب إنزيمات قلب (Troponin).",
      "2. البروتوكول الفوري الحاسم (MONA):",
      "   - **A (Aspirin):** مضغ 300 مجم أسبرين فوراً (Chewable) لتثبيط الصفائح الدموية بسرعة.",
      "   - **N (Nitroglycerin):** قرص تحت اللسان لتوسيع الشرايين وتخفيف الألم (بشرط ألا يقل الضغط الانقباضي عن 90 mmHg).",
      "   - **O (Oxygen):** يعطى فقط إذا كانت نسبة تشبع الأكسجين (SpO2) أقل من 90%، ولا يعطى روتينياً لمنع إنتاج الشوارد الحرة المسببة لتقلص الشرايين.",
      "   - **M (Morphine):** مسكن للألم الوريدي لو استمر الألم الشديد رغم النتروجليسرين.",
      "3. أضف مثبط P2Y12 (مثل Clopidogrel 300-600mg أو Ticagrelor) والتجهيز لقسطرة القلب العاجلة (Primary PCI) لو كان STEMI."
    ],
    fatal_mistake_warning: "إياك أن تعطي النترات (Nitroglycerin) في حالتين قاتلتين: 1) لو كان المريض واخد منشطات جنسية (Viagra / Sildenafil) خلال آخر 24-48 ساعة (هبوط ضغط مميت)، 2) لو كانت الجلطة في الجدار السفلي ممتدة للبطين الأيمن (Inferior STEMI with RV Infarction) لأن البطين الأيمن يعتمد على الـ Preload والنترات ستوقفه فوراً!",
    clinical_pearl_egyptian: "أي عيان يجيلك بألم في فم المعدة أو ضغط على صدره وعرقان، متقولش دا قولون ولا حموضة! اعمل رسم قلب فوراً خلال 10 دقائق واديه أسبرين يمضغه.. النترات ممنوعة لو جلطة بطين أيمن أو واخد فياجرا!",
    key_medical_terms: [
      { term: "Acute Coronary Syndrome (ACS)", translation: "متلازمة الشريان التاجي الحادة (ذبحة غير مستقرة أو احتشاء قلبي)" },
      { term: "Inferior STEMI", translation: "جلطة الجدار السفلي للقلب (تظهر في Leads II, III, aVF)" },
      { term: "Preload Dependent", translation: "معتمد على الامتلاء الوريدي (خاصية البطين الأيمن التي تدمرها النترات)" },
      { term: "Chewable Aspirin", translation: "أسبرين يمضغ بالفم لتسريع الامتصاص وتثبيط التجلط" }
    ],
    quiz: {
      question: "A 55-year-old male presents with crushing retrosternal chest pain and diaphoresis. ECG shows ST-segment elevation in leads II, III, and aVF with clear lungs and BP 100/60 mmHg. Which medication is strictly contraindicated?",
      question_ar_translation: "رجل عمره 55 سنة يعاني من ألم ساحق خلف عظمة القص وعرق غزير. رسم القلب أظهر ارتفاع ST في الاتجاهات II و III و aVF مع رئة نقية وضغط 100/60. ما هو الدواء الممنوع تماماً في هذه الحالة؟",
      clinical_stem_explanation: "الاتجاهات II, III, aVF تدل على Inferior STEMI (جلطة الشريان التاجي الأيمن RCA)، ومع غياب احتقان الرئة وضغط على الحافة، غالباً ما تكون مصحوبة بـ RV Infarction شديدة الحساسية لنقص الامتلاء الوريدي.",
      options: [
        "Sublingual Nitroglycerin",
        "Chewable Aspirin 300 mg",
        "Intravenous unfractionated heparin",
        "Oral Clopidogrel 300 mg"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (النتروجليسرين) ممنوع تماماً ومضاد استطباب: لأن النترات توسع الأوردة وتقلل الـ Preload، مما يؤدي لهبوط حاد وكارثي في النتاج القلبي لجلطة البطين الأيمن.",
        distractors: [
          "الخيار الثاني مطلوب فوراً: الأسبرين حجر الزاوية في علاج جميع جلطات القلب ولا غنى عنه.",
          "الخيار الثالث مطلوب: مضادات التخثر كالـ Heparin جزء أساسي من بروتوكول القسطرة والجلطة.",
          "الخيار الرابع مطلوب: مضادات الصفائح المزدوجة (Dual antiplatelet) ضرورية لتثبيط التخثر."
        ]
      },
      mnemonic_scheme: "تحشيشة النترات: 'جلطة اليمين والفياجرا.. النترات معاهم مقبرة!' (No Nitrates in RV Infarct or Sildenafil)",
      terms_to_memorize: "Retrosternal = خلف عظمة القص | Diaphoresis = تعرق بارد غزير | Contraindicated = مضاد استطباب / ممنوع تماماً"
    }
  },
  {
    id: "epistaxis_emergency_first_aid",
    title: "نزيف الأنف الحاد والإسعاف السليم (Acute Epistaxis First Aid)",
    emergency_scenario: "شخص ينزف دماً غزيراً من أنفه، والأهل بيطلبوا منه يرجع رأسه لورا ويحط قطنة وخل أو يرفع إيده لفوق.",
    immediate_action: [
      "1. اجعل المريض يجلس منتصباً ويميل رأسه **للأمام قليلاً** (Lean Forward)، وليس للخلف أبداً!",
      "2. اضغط بإحكام بواسطة الإبهام والسبابة على **الجزء الغضروفي اللين من الأنف** (Pinch the soft cartilaginous part) أسفل عظمة الأنف لمدة 10 إلى 15 دقيقة متواصلة دون فتحها للتأكد.",
      "3. اطلب منه أن يتنفس من فمه ويبصق أي دم ينزل في حلقه دون ابتلاعه (Spit out blood).",
      "4. ضع كمادات ثلج أو ماء بارد على جسر الأنف لتقليص الأوعية الدموية.",
      "5. إذا استمر النزيف بعد 15-20 دقيقة من الضغط المستمر: توجه للطوارئ لعمل دك أمامي للأنف (Anterior Nasal Packing) أو الكي الكيميائي بنترات الفضة (Silver Nitrate cautery)."
    ],
    fatal_mistake_warning: "إرجاع الرأس للخلف خطأ شائع خطير؛ لأنه يجعل الدم يتدفق للمريء والمعدة فيسبب قيئاً دموياً شديداً، أو يدخل القصبة الهوائية ويسبب اختناقاً وتشنج الحنجرة!",
    clinical_pearl_egyptian: "أوعى ترجع راسك لورا في الرعاف! دا هيبلعك الدم ويخليك ترجع أو تشرق. ميل راسك لقدام، واضغط على الجزء الطري من مناخيرك 10 دقايق بإحكام من غير ما تسيب.. 90% من النزيف في منطقة كيسلباخ (Kiesselbach) وهيقف فوراً!",
    key_medical_terms: [
      { term: "Epistaxis", translation: "الرعاف (نزيف الأنف)" },
      { term: "Kiesselbach's Plexus / Little's Area", translation: "ضفيرة كيسلباخ الوعائية (أشهر موقع لنزيف الأنف الأمامي)" },
      { term: "Anterior Nasal Packing", translation: "الدك الأنفي الأمامي (شاش مضاد حيوي لوقف النزيف)" },
      { term: "Lean Forward", translation: "الميل للأمام (الوضعية الصحيحة لمنع بلع الدم)" }
    ],
    quiz: {
      question: "An 8-year-old boy presents with brisk anterior epistaxis after minor trauma. What is the most appropriate initial management in the clinic?",
      question_ar_translation: "طفل عمره 8 سنوات حضر بنزيف أنفي أمامي نشط بعد خبطة بسيطة. ما هو الإجراء الأولي الأنسب في العيادة؟",
      clinical_stem_explanation: "نزيف الأنف الأمامي في الأطفال من ضفيرة Little's area يتطلب ضغطاً ميكانيكياً مباشراً على الأوعية المتضررة مع حماية مجرى التنفس من ابتلاع الدم.",
      options: [
        "Tilt head forward and pinch the soft part of the nose for 10-15 minutes",
        "Tilt head backward and instruct the child to swallow trickling blood",
        "Pack both nostrils immediately with dry cotton without applying pressure",
        "Administer IV Tranexamic Acid before applying any physical pressure"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (الميل للأمام والضغط على الجزء الغضروفي اللين 10-15 دقيقة) هو الإجراء القياسي الفعال بنسبة تفوق 90% لوقف النزيف الأمامي.",
        distractors: [
          "الخيار الثاني غلط تماماً: إمالة الرأس للخلف تسبب بلع الدم والقيء أو الشردقة التنفسية.",
          "الخيار الثالث غلط: القطن الجاف يلتصق بالأغشية التالفة وعند نزعه يعيد النزيف بشكل أسوأ.",
          "الخيار الرابع غلط: الأدوية الوريدية لا تسبق الإسعافات الميكانيكية البسيطة في الرعاف البسيط."
        ]
      },
      mnemonic_scheme: "تحشيشة الرعاف: 'ميل لقدام واضغط على الطري.. والدم في الباسكت يتجري!' (Forward + Pinch soft part)",
      terms_to_memorize: "Epistaxis = نزيف أنفي | Cartilaginous = غضروفي | Brisk = نشط وسريع"
    }
  },
  {
    id: "status_epilepticus_seizure_safety",
    title: "نوبة الصرع والتشنجات المستمرة (Seizures & Status Epilepticus)",
    emergency_scenario: "شخص سقط فجأة في الشارع أو الاستقبال يتشنج بعنف (Generalized tonic-clonic)، يخرج زبداً من فمه، وعيناه شاخصتان لأعلى.",
    immediate_action: [
      "1. احمِ المريض من الإصابات الجسدية: أبعد أي أدوات حادة أو صلبة من حوله، وضع وسادة أو جاكت تحت رأسه.",
      "2. لا تحاول تقييد حركته بالقوة (Do not restrain)، وضعه على جانبه فور هدوء التشنج العنيف (Recovery Position) لمنع رجوع اللسان وسد مجرى الهواء ولتصريف اللعاب.",
      "3. احسب وقت النوبة بدقة: إذا استمر التشنج لأكثر من **5 دقائق**، أو تكررت نوبتان دون استعادة الوعي بينهما، فهذه حالة **حالة صرعية مستمرة (Status Epilepticus)** تهدد بتلف الدماغ وتتطلب تدخلاً دوائياً فورياً.",
      "4. خط العلاج الدوائي الأول: إعطاء بنزوديازيبين (Benzodiazepines) سريع المفعول:",
      "   - وريدياً: **Lorazepam 4mg IV** أو **Diazepam 10mg IV** ببطء.",
      "   - لو تعذر تركيب كانيولا: **Midazolam 10mg IM** في العضل، أو **Diazepam rectal gel** عبر الشرج.",
      "5. الخط الثاني لو لم تتوقف: تحميل مضاد صرع طويل المفعول مثل Levetiracetam (Keppra) أو Phenytoin وريدياً."
    ],
    fatal_mistake_warning: "إياك إياك أن تضع أي شيء داخل فم المريض المتشنج (كالملعقة أو القلم أو أصابعك لمنع 'بلع اللسان')! هذا يؤدي إلى كسر أسنانه، واختناقه بقطع الأسنان، أو بتر إصبعك بقوة انقباض الفك التشنجية اللاإرادية!",
    clinical_pearl_egyptian: "أسطورة 'بلع اللسان' ووضع معلقة في بؤ المريض المتشنج دي جريمة! فك اللسان مستحيل يتبلع، والملعقة هتكسر سنانه وتسد نفسه. ابعد العفش، نيمه على جنبه، واحسب 5 دقايق.. لو مطولش هيفوق لوحده، لو طول اديله ديازيبام وريدي فوراً!",
    key_medical_terms: [
      { term: "Status Epilepticus", translation: "الحالة الصرعية المستمرة (تشنج مستمر لأكثر من 5 دقائق)" },
      { term: "Recovery Position", translation: "وضعية الإفاقة (الاستلقاء على الجانب مع ثني الركبة)" },
      { term: "Tonic-Clonic Seizure", translation: "نوبة التشنج التوتري الرمعي الكبرى" },
      { term: "Benzodiazepines", translation: "البنزوديازيبينات (الخط الدوائي الأول لإيقاف التشنجات)" }
    ],
    quiz: {
      question: "A 24-year-old man is brought to the emergency department actively seizing. His brother states the continuous generalized shaking started 8 minutes ago without stopping. What is the initial drug of choice?",
      question_ar_translation: "شاب عمره 24 سنة أُحضر للطوارئ وهو في حالة تشنج نشطة. أخوه يذكر أن التشنجات المعممة بدأت منذ 8 دقائق متواصلة دون توقف. ما هو دواء الخيار الأول الفوري؟",
      clinical_stem_explanation: "تشنج استمر لأكثر من 5 دقائق يُعرف طبياً بـ Status Epilepticus، وتأخير إيقافه يؤدي لارتفاع حموضة الدم ونقص أكسجة الدماغ وتلف الخلايا العصبية الدائم.",
      options: [
        "Intravenous Lorazepam or Diazepam",
        "Oral Carbamazepine suspension via nasogastric tube",
        "Intravenous Calcium Gluconate bolus",
        "Subcutaneous regular insulin"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (لورازيبام أو ديازيبام وريدياً) هو العلاج القياسي الأول لكسر النوبة الصرعية فوراً من خلال تحفيز مستقبلات GABA.",
        distractors: [
          "الخيار الثاني غلط تماماً: إعطاء أدوية فموية عبر الرايل في حالة تشنج نشط غير مجدٍ وبطيء الامتصاص.",
          "الخيار الثالث غلط: كالسيوم جلوكونات مخصص لحماية القلب في فرط البوتاسيوم وليس لعلاج الصرع.",
          "الخيار الرابع غلط: الإنسولين يخفض السكر ويسبب تشنجات مميتة."
        ]
      },
      mnemonic_scheme: "تحشيشة الصرع: 'عد 5 دقايق ع التمام.. لو مهدتش اديله لورازيبام!' (Status = >5 mins -> Lorazepam)",
      terms_to_memorize: "Actively seizing = في حالة تشنج نشطة | Generalised shaking = اهتزاز ونفضات معممة | Drug of choice = دواء الخيار الأول"
    }
  },
  {
    id: "hyperkalemia_cardiac_protection",
    title: "طوارئ ارتفاع البوتاسيوم وحماية عضلة القلب (Hyperkalemia Emergency)",
    emergency_scenario: "مريض فشل كلوي غسيل (End-stage renal disease) فاتته جلسة الغسيل، عمل تحاليل ووجد البوتاسيوم 7.2 mEq/L، وبدأ يشعر بضعف شديد في عضلاته وخفقان.",
    immediate_action: [
      "1. اطلب رسم قلب (ECG) فوراً! ارتفاع البوتاسيوم قاتل صامت يسبب توقف القلب في ثوانٍ.",
      "2. تدرج تغيرات رسم القلب: موجة T مدببة وعالية كالخيمة (Tall peaked T wave)، ثم اتساع مركب QRS وتسطح موجة P، ثم المنحنى الجيبي القاتل (Sine wave) يعقبه توقف القلب (Asystole / VF).",
      "3. **الخطوة رقم 1 الحيوية قبل أي علاج آخر**: حماية غشاء عضلة القلب بإعطاء **10 مل كالسيوم جلوكونات 10% وريدياً** (IV Calcium Gluconate 10%) على مدار 2-3 دقائق.",
      "4. تنبيه: الكالسيوم جلوكونات لا يخفض نسبة البوتاسيوم في الدم إطلاقاً! بل يرفع عتبة استثارة غشاء القلب فيمنع الرجفان البطيني القاتل مؤقتاً لمدة 30-60 دقيقة.",
      "5. خطوات إدخال البوتاسيوم داخل الخلايا (Shifting): إعطاء 10 وحدات إنسولين مائي سريع (Regular Insulin) مع 50 مل جلوكوز 25-50%، واستنشاق سالبوتامول بجرعات عالية (Salbutamol nebulization 10-20mg).",
      "6. طرد البوتاسيوم نهائياً من الجسم (Elimination): مدرات البول (Furosemide)، راتنجات التبادل الكلوي، أو الغسيل الكلوي العاجل (Hemodialysis)."
    ],
    fatal_mistake_warning: "إياك أن تبدأ بالإنسولين أو السالبوتامول وتنسى الكالسيوم جلوكونات عندما تجد تغيرات في رسم القلب! بدون الكالسيوم لحماية القلب، قد يتوقف قلب المريض في لحظة قبل أن يبدأ الإنسولين في العمل!",
    clinical_pearl_egyptian: "لقيت البوتاسيوم عالي ورسم القلب فيه Peaked T wave؟ ارمي في وريده أمبول كالسيوم جلوكونات فوراً! الكالسيوم مش بينزل البوتاسيوم، الكالسيوم بيحط درع حماية على عضلة القلب عشان ميموتش منك لحد ما تنزل البوتاسيوم بالإنسولين والجلوكوز والغسيل!",
    key_medical_terms: [
      { term: "Hyperkalemia", translation: "فرط بوتاسيوم الدم (> 5.5 mEq/L)" },
      { term: "Peaked T Wave", translation: "موجة T المدببة المرتفعة (أول علامة ECG لارتفاع البوتاسيوم)" },
      { term: "Calcium Gluconate", translation: "جلوكونات الكالسيوم (مثبت الغشاء القلبي والدرع الواقي)" },
      { term: "Membrane Stabilization", translation: "تثبيت استقطاب الغشاء الخلوي القلبي" }
    ],
    quiz: {
      question: "A 62-year-old dialysis patient has a serum potassium of 7.4 mEq/L. The ECG reveals tall, tented T waves and a widening QRS complex. What is the very first drug that must be administered?",
      question_ar_translation: "مريض غسيل كلوي عمره 62 سنة، مستوى البوتاسيوم في دمه 7.4 mEq/L. رسم القلب أظهر موجات T طويلة ومدببة مع اتساع مركب QRS. ما هو أول دواء يجب إعطاؤه فوراً؟",
      clinical_stem_explanation: "البوتاسيوم 7.4 مع تغيرات تخطيطية يعني أن عضلة القلب على حافة اضطراب نظم بطيني قاتل. الأولوية المطلقة هي استقرار الغشاء القلبي لمنع توقف القلب المفاجئ.",
      options: [
        "Intravenous Calcium Gluconate 10%",
        "Intravenous Regular Insulin with Dextrose",
        "Nebulized Albuterol (Salbutamol)",
        "Oral Sodium Polystyrene Sulfonate (Kayexalate)"
      ],
      correct_option_index: 0,
      options_analysis: {
        correct: "الخيار الأول (كالسيوم جلوكونات وريدياً) هو الإجراء الأول الحاسم لتثبيت غشاء القلب ومنع السكتة القلبية خلال دقائق.",
        distractors: [
          "الخيار الثاني يعطى بعد الكالسيوم: الإنسولين والجلوكوز يخفضان البوتاسيوم لكنهما يحتاجان 15-30 دقيقة لبدء التأثير.",
          "الخيار الثالث علاج مساعد يعطى بعد الكالسيوم لإدخال البوتاسيوم للخلايا.",
          "الخيار الرابع بطيء جداً: يستغرق ساعات طويلة في القناة الهضمية ولا مكان له كخطوة إسعافية أولى في طوارئ مهددة للحياة."
        ]
      },
      mnemonic_scheme: "تحشيشة البوتاسيوم: 'البوتاسيوم لو هدّد.. الكالسيوم هو اللي يصدّد!' (K+ ECG changes -> Calcium Gluconate First)",
      terms_to_memorize: "Dialysis = غسيل كلوي | Tented T waves = موجات T خيمية الشكل | Widening QRS = اتساع مركب QRS"
    }
  }
];

/**
 * Formats a medical essential pearl into a high-yield visual Telegram message
 */
export function formatMedicalEssential(item) {
  if (!item) return '';

  let text = `🩺 <b>ما لا يسع الطبيب جهله • بروتوكول طوارئ سريري 🚨</b>\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📌 <b>الحالة:</b> <b>${item.title}</b>\n\n`;

  text += `⚠️ <b>السيناريو الواقعي:</b>\n<i>"${item.emergency_scenario}"</i>\n\n`;

  text += `⚡ <b>خطوات الإنقاذ الفوري (Action Protocol):</b>\n`;
  item.immediate_action.forEach(step => {
    text += `${step}\n`;
  });

  text += `\n🚫 <b>احذر الخطأ الكارثي (Fatal Mistake):</b>\n`;
  text += `❌ <i>${item.fatal_mistake_warning}</i>\n\n`;

  text += `💡 <b>كبسولة الطبيب السريرية بالمصري 🇪🇬:</b>\n`;
  text += `<i>${item.clinical_pearl_egyptian}</i>\n\n`;

  if (item.key_medical_terms && item.key_medical_terms.length > 0) {
    text += `🇬🇧 <b>مصطلحات طبية للحفظ (Medical Vocabulary):</b>\n`;
    item.key_medical_terms.forEach(t => {
      text += `• <b>${t.term}</b>: ${t.translation}\n`;
    });
  }

  return text;
}
