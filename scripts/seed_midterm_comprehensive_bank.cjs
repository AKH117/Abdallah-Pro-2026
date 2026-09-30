const { supabase } = require('../lib/supabase.js');

const ADMIN_ID = 1191760477;

// Definition of 9 Midterm Blueprint Topics
// 1. Introduction to Cardiology (2 MCQs)
// 2. Valvular heart diseases & prosthetic (4 MCQs)
// 3. Infective endocarditis (3 MCQs)
// 4. Epidemiology / Clinical pathology (2 MCQs)
// 5. Atherosclerosis & dyslipidemia (3 MCQs)
// 6. Chronic stable angina (3 MCQs)
// 7. Normal ECG (3 MCQs)
// 8. Pharmacology: antiischemic (3 MCQs)
// 9. ACS (NSTEMI & STEMI) (4 MCQs)

const midtermQuizzes = [
  // ==========================================
  // TOPIC 3: INFECTIVE ENDOCARDITIS (3 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_IE] Infective Endocarditis - Microorganisms & Valve Predilection`,
    question: 'A 28-year-old male with a history of intravenous drug use presents to the emergency department with high-grade fever, chills, and pleuritic chest pain. Chest radiography reveals multiple bilateral nodular cavitary pulmonary infiltrates. Cardiac auscultation demonstrates a soft early systolic murmur best heard at the left lower sternal border that increases in intensity during inspiration. Which of the following microorganisms is the most probable causative pathogen?',
    options: [
      'Staphylococcus aureus',
      'Streptococcus viridans',
      'Staphylococcus epidermidis',
      'Enterococcus faecalis'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 28-year-old male with a history of intravenous drug use presents to the emergency department with high-grade fever, chills, and pleuritic chest pain. Chest radiography reveals multiple bilateral nodular cavitary pulmonary infiltrates. Cardiac auscultation demonstrates a soft early systolic murmur best heard at the left lower sternal border that increases in intensity during inspiration. Which of the following microorganisms is the most probable causative pathogen?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«شاب عنده 28 سنة ومدمن حقن وريدية (IV drug user)، جه الطوارئ بحرارة عالية ورعشة ووجع في الصدر مع النفس. أشعة الصدر أظهرت بؤر كهفية متعددة في الرئتين (Cavitary pulmonary infiltrates). بالسماعة، اتسمع لغط انقباضي مبكر عند أسفل عظمة القص وبيزيد مع الشهيق (Carvallo sign - ارتجاع صمام ثلاثي الشرفات Tricuspid Regurgitation). مين الميكروب الأكثر احتمالاً للتسبب في الحالة دي؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في مدمني الحقن الوريدية (IVDU)، البكتيريا بتدخل مباشرة عبر الأوردة للجانب الأيمن من القلب، والصمام رقم 1 اللي بيتضرب هو الصمام ثلاثي الشرفات (Tricuspid Valve). الميكروب رقم 1 والأعنف هنا هو <b>Staphylococcus aureus</b> (بكتيريا شرسة تهاجم حتى الصمامات السليمة مسببة Acute IE). ولأن الصمام في الجانب الأيمن، فالفجيتشنز لما تتفتت بتبعت جلطات إنتانية للرئة (Septic pulmonary emboli) تظهر كخراريج وتجاويف في أشعة الصدر، ولغط الـ TR بيزيد مع الشهيق بسبب زيادة رجوع الدم الوريدي للبطين الأيمن (Inspiratory accentuation - Carvallo's sign).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Staphylococcus aureus):</b> المسبب الرئيسي لـ Acute Endocarditis في مدمني الحقن الوريدية والصمام الترايكسبد (Tricuspid valve) ومسؤول عن الجلطات الرئوية الإنتانية.
• <b>خيار (Streptococcus viridans - غير صحيح):</b> أشهر سبب لـ Subacute IE على الصمامات الطبيعية المصابة مسبقاً (Native damaged valves) بعد إجراءات الأسنان، ويصيب الجانب الأيسر غالباً (Mitral/Aortic).
• <b>خيار (Staphylococcus epidermidis - غير صحيح):</b> السبب رقم 1 لعدوى الصمامات الصناعية المبكرة (Early Prosthetic Valve Endocarditis < 12 months).
• <b>خيار (Enterococcus faecalis - غير صحيح):</b> يصيب كبار السن بعد مناظير أو التهابات المسالك البولية والبروستاتا (GU/GI procedures).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«حقن وريدية وسرنجات (IVDU) = استاف أوريوس (S. aureus) تضرب الترايكسبد وتبعت خراجات للرئات!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Intravenous drug use (IVDU):</b> تعاطي المخدرات عبر الحقن بالوريد.
• <b>Septic pulmonary emboli:</b> صمات رئوية إنتانية متفتتة من صمامات القلب اليمنى.
• <b>Cavitary infiltrates:</b> ارتشاحات كهفية بالرئة دالة على خراريج إنتانية.`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_IE] Infective Endocarditis - Modified Duke Criteria & Clinical Signs`,
    question: 'A 54-year-old woman with a history of rheumatic mitral stenosis presents with low-grade fever, malaise, and night sweats for 4 weeks. Examination reveals painful, violaceous nodules on the pads of her fingers and painless erythematous macules on her palms. Funduscopic exam reveals exudative, pale retinal lesions surrounded by hemorrhage. Which of the following combinations correctly categorizes these clinical findings under the Modified Duke Criteria for Infective Endocarditis?',
    options: [
      'Janeway lesions are vascular, Osler nodes are immunologic, and Roth spots are immunologic (all minor criteria)',
      'Osler nodes are vascular, Janeway lesions are immunologic, and Roth spots are major criteria',
      'All three findings represent major Duke criteria for endocardial involvement',
      'Roth spots are vascular, while Osler nodes and Janeway lesions are clinical major criteria'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 54-year-old woman with a history of rheumatic mitral stenosis presents with low-grade fever, malaise, and night sweats for 4 weeks. Examination reveals painful, violaceous nodules on the pads of her fingers and painless erythematous macules on her palms. Funduscopic exam reveals exudative, pale retinal lesions surrounded by hemorrhage. Which of the following combinations correctly categorizes these clinical findings under the Modified Duke Criteria for Infective Endocarditis?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«سيدة عندها 54 سنة وعندها تاريخ ضيق ميترالي روماتيزمي، بتشتكي من سخونية خفيفة وخمول وعرق ليلي بقالها 4 أسابيع. الفحص أظهر عقد مؤلمة بنفسجية على أطراف أصابعها (Osler nodes)، وبقع حمراء غير مؤلمة في راحة اليد (Janeway lesions)، وفحص قاع العين أظهر بقع شبكية بيضاء محاطة بنزيف (Roth spots). أي من التصنيفات التالية يطابق معايير ديوك المعدلة (Modified Duke Criteria) بدقة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في معايير ديوك المعدلة (Modified Duke Criteria) لتشخيص التهاب الشغاف الإنتاني (IE):
المعايير الكبرى (Major Criteria) اثنان فقط:
1. إيجابية مزارع الدم بميكروب نمطي (Positive blood cultures).
2. دليل إيكو على تضرر الشغاف (Echocardiographic evidence: vegetation, abscess, new dehiscence).
أما العلامات الطرفية فتندرج تحت المعايير الصغرى (Minor criteria):
• <b>Janeway lesions:</b> بقع غير مؤلمة سببها جلطات ميكروية وعائية (Vascular phenomenon).
• <b>Osler's nodes:</b> عقد مؤلمة جداً سببها ترسب معقدات مناعية (Immunologic phenomenon: Immune complex vasculitis).
• <b>Roth's spots:</b> بقع شبكية مناعية (Immunologic phenomenon).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Janeway vascular, Osler immunologic, Roth immunologic - all minor):</b> توصيف علمي دقيق لمعايير ديوك؛ جينواي وعائية، وأوسلر وروث مناعية، وجميعها تندرج تحت الـ Minor criteria.
• <b>خيار (Osler vascular, Janeway immunologic... - غير صحيح):</b> عكس بين أوسلر (مناعية مؤلمة) وجينواي (وعائية إنتانية غير مؤلمة).
• <b>خيار (All represent major Duke criteria - غير صحيح):</b> العلامات الطرفية معايير صغرى (Minor criteria) وليست كبرى.
• <b>خيار (Roth spots are vascular... - غير صحيح):</b> بقع روث هي معقدات مناعية بالشبكية (Immunologic).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«أوسلر بتوجع (Ouch = Osler = Immune)! وجينواي مش بتوجع (Janeway = No pain = Vascular)! والاثنين مع روث ماينور مش ميجور!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Osler's nodes:</b> عقد أوسلر المؤلمة في أطراف الأصابع (ترسبات مناعية).
• <b>Janeway lesions:</b> بقع جينواي غير المؤلمة في راحة اليد أو باطن القدم (صمات وعائية إنتانية).
• <b>Roth's spots:</b> بقع روث النزفية ذات المركز الشاحب بالشبكية.`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_IE] Infective Endocarditis - Prophylaxis Guidelines`,
    question: 'A 62-year-old male who underwent mechanical aortic valve replacement 3 years ago is scheduled for a dental extraction involving extensive gingival manipulation. He has no known drug allergies. According to current cardiology guidelines, what is the most appropriate prophylactic strategy for this patient?',
    options: [
      'Oral Amoxicillin 2 grams administered 30 to 60 minutes before the procedure',
      'No antibiotic prophylaxis is indicated for dental procedures',
      'Oral Ciprofloxacin 500 mg administered 2 hours before the procedure',
      'Intravenous Vancomycin 1 gram started 24 hours prior to the procedure'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 62-year-old male who underwent mechanical aortic valve replacement 3 years ago is scheduled for a dental extraction involving extensive gingival manipulation. He has no known drug allergies. According to current cardiology guidelines, what is the most appropriate prophylactic strategy for this patient?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 62 سنة مركب صمام أورطي ميكانيكي (Mechanical Aortic Valve) من 3 سنين، ومحدد له خلع ضرس مع تداخل في اللثة (Gingival manipulation). معندوش أي حساسية من الأدوية. بناءً على إرشادات القلب المعتمدة بالمنهج، إيه الإجراء الوقائي الأنسب للمريض ده؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
إرشادات الوقاية من التهاب الشغاف (IE Prophylaxis) أصبحت مقصورة فقط على المرضى ذوي الخطورة الأعلى (Highest Risk Category)، وهم:
1. المرضى أصحاب الصمامات الصناعية (Prosthetic valves or prosthetic material).
2. المرضى الذين أصيبوا بالتهاب شغاف سابق (Previous episode of IE).
3. بعض أمراض القلب الخلقية الزرقاء (Cyanotic Congenital Heart Diseases).
وعند خضوعهم لإجراءات الأسنان التي تتضمن اختراق الغشاء المخاطي أو التلاعب باللثة (Gingival manipulation)، البروتوكول المعتمد هو:
• <b>Amoxicillin 2g فموياً قبل الإجراء بـ 30 إلى 60 دقيقة</b>.
• في حال وجود حساسية بنسلين يُعطى: Clindamycin 600 mg.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Oral Amoxicillin 2g, 30-60 min before procedure):</b> خط الدفاع الوقائي الأول المعتمد عالمياً وفي كتاب القسم.
• <b>خيار (No antibiotic prophylaxis is indicated - غير صحيح):</b> المريض مركب صمام صناعي ميكانيكي (Prosthetic valve) وهو فئة عالية الخطورة تستدعي الوقاية حتماً.
• <b>خيار (Oral Ciprofloxacin 500 mg - غير صحيح):</b> الفلوروكينولونات ليست ضمن بروتوكولات الوقاية من بكتيريا الفم viridans streptococci.
• <b>خيار (IV Vancomycin 24h prior - غير صحيح):</b> الفانكومايسين لا يُستخدم كوقاية روتينية قبل خلع الأسنان لمرضى العيادات الخارجية.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«صمام صناعي رايح لدكتور السنان.. قرصين أموكسيسيللين 2 جرام قبل الميعاد بساعة في التمام!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Prosthetic valve:</b> صمام قلب تعويضي/صناعي.
• <b>Gingival manipulation:</b> التلاعب باللثة وإجراءات الأسنان النافذة.
• <b>Antibiotic prophylaxis:</b> المضادات الحيوية الوقائية الاستباقية.`
  },

  // ==========================================
  // TOPIC 5: ATHEROSCLEROSIS & DYSLIPIDEMIA (3 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ATHERO] Atherosclerosis & Dyslipidemia - Secondary Prevention LDL Targets`,
    question: 'A 58-year-old diabetic male who suffered an acute anterior STEMI 6 weeks ago and underwent drug-eluting stent placement comes for lipid follow-up. He is strictly adherent to Atorvastatin 80 mg daily. His repeat lipid profile reveals: Total Cholesterol 160 mg/dL, Triglycerides 140 mg/dL, HDL 42 mg/dL, and LDL-C 78 mg/dL. According to ESC/ACC guidelines in the cardiology curriculum, what is the target LDL-C and the next best step in management?',
    options: [
      'Target LDL-C is < 55 mg/dL; add oral Ezetimibe 10 mg daily',
      'Target LDL-C is < 100 mg/dL; maintain current statin monotherapy without change',
      'Target LDL-C is < 70 mg/dL; replace Atorvastatin with Fenofibrate',
      'Target LDL-C is < 55 mg/dL; immediately stop Atorvastatin and initiate PCSK9 inhibitor monotherapy'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 58-year-old diabetic male who suffered an acute anterior STEMI 6 weeks ago and underwent drug-eluting stent placement comes for lipid follow-up. He is strictly adherent to Atorvastatin 80 mg daily. His repeat lipid profile reveals: Total Cholesterol 160 mg/dL, Triglycerides 140 mg/dL, HDL 42 mg/dL, and LDL-C 78 mg/dL. According to ESC/ACC guidelines in the cardiology curriculum, what is the target LDL-C and the next best step in management?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 58 سنة ومريض سكر وجاتله جلطة قلبية حادة (STEMI) من 6 أسابيع وركب دعامة دوائية. منتظم بدقة على أتورفاستاتين 80 مجم يومياً (High-intensity statin). تحليل الدهون أظهر إن الـ LDL-C عنده 78 mg/dL. بناءً على إرشادات القلب بالكتاب، إيه هو الـ Target LDL المطلوب للحالة دي وإيه الخطوة العلاجية التالية؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
المريض لديه مرض وعائي قلبي مثبت سريرياً (Established ASCVD / Post-MI)، وبالتالي يندرج تحت فئة <b>الخطورة الشديدة جداً (Very High-Risk Category)</b>.
هدف الـ LDL-C في هذه الفئة بالكتاب هو:
<b>LDL < 55 mg/dL AND ≥ 50% reduction from baseline</b>.
الـ LDL عند المريض 78 mg/dL (أعلى من الـ 55)، وهو بالفعل يأخذ الجرعة القصوى من الستاتين عالي الكفاءة (Atorvastatin 80 mg).
الخطوة التالية المعتمدة بالخوارزمية (Stepwise approach in book page 36) هي:
<b>إضافة إزيتيميب (Ezetimibe 10 mg daily)</b> الذي يمنع امتصاص الكوليسترول من الأمعاء ويخفض الـ LDL بنسبة إضافية تتراوح حول 20%. ولو لم يصل للهدف يُضاف بعد ذلك مثبطات PCSK9 أو Inclisiran.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Target < 55 mg/dL; add Ezetimibe 10 mg):</b> يطابق البروتوكول العلاجي بحذافيره؛ الهدف أقل من 55 والخطوة التالية هي إضافة الإزيتيميب.
• <b>خيار (Target < 100 mg/dL - غير صحيح):</b> هدف قديم لا ينطبق على مرضى الجلطات والشرايين التاجية المثبتة.
• <b>خيار (Replace with Fenofibrate - غير صحيح):</b> الفينوفايبرات يُستخدم لفرط دهون ثلاثية شديد (> 500) وليس بديلاً للستاتين لخفض الـ LDL.
• <b>خيار (Stop Atorvastatin and initiate PCSK9 mono - غير صحيح):</b> لا نوقف الستاتين طالما المريض يتحمله، وPCSK9 يُضاف كخطوة ثالثة بعد الستاتين والإزيتيميب.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«مركب دعامة أو جاله احتشاء = الـ LDL لازم ينزل تحت الـ 55 بلا استثناء! وأول إضافة جنب الستاتين: إزيتيميب 10 ملجم في الشريان!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Established ASCVD:</b> مرض قلبي وعائي تصلبي مثبت.
• <b>High-intensity statin:</b> ستاتين عالي الكثافة (أتورفا 80 أو روسوفا 40) يخفض الـ LDL بنسبة ≥ 50%.
• <b>Cholesterol absorption inhibitor:</b> مثبط امتصاص الكوليسترول المعوي (إزيتيميب).`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ATHERO] Atherosclerosis & Dyslipidemia - Novel Lipid Lowering Therapies`,
    question: 'A 60-year-old male with established coronary artery disease and statin-associated severe myopathy requires alternative lipid-lowering therapy. His physician considers prescribing Bempedoic acid. Which of the following statements regarding the mechanism of action and adverse effect profile of Bempedoic acid is correct according to the curriculum?',
    options: [
      'It inhibits ATP-citrate lyase upstream of HMG-CoA reductase, is activated selectively in the liver avoiding skeletal muscle toxicity, but may cause hyperuricemia',
      'It irreversibly blocks the intestinal NPC1L1 transporter and frequently causes rhabdomyolysis',
      'It is an injectable PCSK9 monoclonal antibody administered every 6 months that causes urinary tract infections',
      'It acts by stimulating lipoprotein lipase in adipose tissue and is contraindicated in patients with gout'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 60-year-old male with established coronary artery disease and statin-associated severe myopathy requires alternative lipid-lowering therapy. His physician considers prescribing Bempedoic acid. Which of the following statements regarding the mechanism of action and adverse effect profile of Bempedoic acid is correct according to the curriculum?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 60 سنة وعنده قصور شرايين تاجية وجاله التهاب عضلي شديد بسبب الستاتين (Statin-associated myopathy). الطبيب قرر يعالجه بعقار Bempedoic acid. أي العبارات التالية صحيحة عن آلية عمله وآثاره الجانبية حسب كتاب القسم؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
عقار <b>Bempedoic acid</b> (صفحة 36 بالكتاب):
• الميكانيزم: بيقفل إنزيم ATP-citrate lyase اللي بيشتغل في تصنيع الكوليسترول بخطوة تسبق إنزيم HMG-CoA reductase.
• الميزة الذهبية: هو Prodrug بيحتاج إنزيم للتنشيط (Very long-chain acyl-CoA synthetase-1) وهذا الإنزيم موجود في الكبد فقط ومش موجود في العضلات الهيكلية! بالتالي الدواء مش بيتنشط في العضلات ولا يسبب آلام أو اعتلال العضلات، وده يخليه بديل مثالي لمرضى Statin intolerance.
• العيب الجانبي الأهم: بيرفع حمض اليوريك (Hyperuricemia) وقد يحفز نوبات النقرس.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Inhibits ATP-citrate lyase upstream, liver selective, causes hyperuricemia):</b> نص صريح ومباشر من صفحة 36 في كتاب الكارديو.
• <b>خيار (Blocks NPC1L1 transporter - غير صحيح):</b> هذا ميكانيزم الإزيتيميب (Ezetimibe) وليس البيمبيدويك أسيد.
• <b>خيار (Injectable PCSK9 every 6 months - غير صحيح):</b> هذا توصيف عقار إنكليسيران (Inclisiran) بتقنية RNA interference.
• <b>خيار (Stimulates lipoprotein lipase - غير صحيح):</b> هذا ميكانيزم الفايبرات (Fibrates).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«بيمبيدويك أسيد (Bempedoic) يشتغل في الكبد والعضلة تسيب.. مفيش وجع عضلات بس يرفع اليوريك أسيد في التحاليل!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Bempedoic acid:</b> دواء فموي لخفض الكوليسترول بديل للستاتين في حالة ألم العضلات.
• <b>Hyperuricemia:</b> ارتفاع نسبة حمض البوليك/اليوريك في الدم.
• <b>Statin intolerance:</b> عدم تحمل الستاتين بسبب الآلام العضلية.`
  },

  // ==========================================
  // TOPIC 6: CHRONIC STABLE ANGINA (3 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ANGINA] Chronic Stable Angina - Exercise Stress Test Interpretation & Target`,
    question: 'A 50-year-old male presents with recurrent retrosternal chest tightness provoked by walking uphill and relieved by 5 minutes of rest. Baseline resting 12-lead ECG is entirely normal. An Exercise Stress Test (EST) using the Bruce treadmill protocol is planned for diagnostic confirmation. Which of the following parameters represents the minimum Target Heart Rate required for a conclusive diagnostic test, and what ECG finding defines a positive test for myocardial ischemia?',
    options: [
      'Target HR is 85% of (220 - Age); positive test is horizontal or downsloping ST-segment depression ≥ 1 mm (0.1 mV)',
      'Target HR is 100% of (220 - Age); positive test is T-wave inversion alone in lead aVR',
      'Target HR is 70% of (200 - Age); positive test is transient ST-segment elevation in lead III only',
      'Target HR is 85% of (220 - Age); positive test is PR interval prolongation > 0.24 seconds'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 50-year-old male presents with recurrent retrosternal chest tightness provoked by walking uphill and relieved by 5 minutes of rest. Baseline resting 12-lead ECG is entirely normal. An Exercise Stress Test (EST) using the Bruce treadmill protocol is planned for diagnostic confirmation. Which of the following parameters represents the minimum Target Heart Rate required for a conclusive diagnostic test, and what ECG finding defines a positive test for myocardial ischemia?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 50 سنة بيشتكي من نوبات ثقل وضغط خلف عظمة القص بتجيله لما يمشي في مطلع وتفك بعد 5 دقايق راحة. رسم القلب العادي وقت الراحة سليم تماماً. تقرر عمل رسم قلب بالمجهود على السير (Treadmill Exercise Stress Test). إيه هو معدل نبضات القلب المستهدف (Target Heart Rate) لاعتبار الاختبار تشخيصياً، وإيه التغير في رسم القلب اللي بيعتبر الاختبار إيجابياً لوجود قصور شرايين تاجية؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في اختبار المجهود (EST - صفحة 43 بالكتاب):
1. <b>Target Heart Rate:</b> يجب أن يصل المريض إلى 85% على الأقل من أقصى معدل متوقع لنبضات القلب حسب سنه:
Max Predicted HR = (220 - Age) ➔ للمريض ده: (220 - 50) = 170 bpm ➔ الهدف 85% = 145 bpm. لو موقفناش الاختبار عشان ألم شديد وموصلناش لـ 85% بيكون الاختبار غير حاسم (Inconclusive).
2. <b>Positive Test Criteria:</b> يعتبر الاختبار إيجابياً للقصور إذا حدث:
• هبوط أفقي أو هابط في قطعة ST بمقدار 1 ملليمتر أو أكثر (Horizontal or downsloping ST depression ≥ 1 mm measured 80 ms after J point) مع أو بدون حدوث ألم الذبحة الصدرية.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Target HR 85% of [220-Age]; ST depression ≥ 1 mm):</b> القاعدة الذهبية المعتمدة في كتاب كارديو قصر العيني وجامعة 6 أكتوبر.
• <b>خيار (Target HR 100%; T wave inversion in aVR - غير صحيح):</b> لا نشترط 100% بل 85% تكفي، وموجة T في aVR طبيعي تكون مقلوبة.
• <b>خيار (Target HR 70% of [200-Age] - غير صحيح):</b> معادلة خاطئة ونسبة غير كافية.
• <b>خيار (PR prolongation > 0.24s - غير صحيح):</b> إطالة PR تعني إحصار قلب درجة أولى (First-degree AV block) وليست علامة إيجابية لنقص تروية الشرايين التاجية.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«في السير الكهربائي.. 85% من (220 - السن) ده الهدف التمام! ونزول ST مربع صغير أفقي أو نازل = شرايينه فيها زحام!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Exercise Stress Test (EST):</b> اختبار رسم القلب بالمجهود على السير.
• <b>Target Heart Rate:</b> معدل نبض القلب المستهدف (85% من الحد الأقصى).
• <b>ST-segment depression:</b> انخفاض قطعة ST عن الخط المتساوي الكهربية الدال على نقص تروية عضلة القلب تحت الشغاف.`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ANGINA] Chronic Stable Angina - Revascularization CABG vs PCI Indications`,
    question: 'A 64-year-old diabetic male with chronic stable angina refractory to optimal medical therapy undergoes diagnostic coronary angiography. The angiogram demonstrates severe 85% stenosis of the Left Main Coronary Artery (LMCA) and diffuse three-vessel disease involving proximal LAD, LCx, and RCA. Left ventricular ejection fraction is 38%. According to cardiology guidelines, what is the preferred revascularization strategy and which conduit offers the highest long-term patency rate?',
    options: [
      'Coronary Artery Bypass Grafting (CABG); Left Internal Thoracic Artery (LITA/LIMA) offers the best patency rate',
      'Percutaneous Coronary Intervention (PCI) with multiple bare metal stents; Great Saphenous Vein offers the best patency',
      'Medical therapy alone with high-dose nitrates; surgical intervention is strictly contraindicated with EF < 40%',
      'Coronary Artery Bypass Grafting (CABG); Great Saphenous Vein graft has superior patency compared to arterial grafts'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 64-year-old diabetic male with chronic stable angina refractory to optimal medical therapy undergoes diagnostic coronary angiography. The angiogram demonstrates severe 85% stenosis of the Left Main Coronary Artery (LMCA) and diffuse three-vessel disease involving proximal LAD, LCx, and RCA. Left ventricular ejection fraction is 38%. According to cardiology guidelines, what is the preferred revascularization strategy and which conduit offers the highest long-term patency rate?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 64 سنة ومريض سكر وعنده ذبحة مستقرة غير مستجيبة للأدوية. عمل قسطرة تشخيصية بينت ضيق 85% في الجذع الرئيسي للشريان التاجي الأيسر (Left Main Stem) مع ضيق منتشر في الثلاثة شرايين التاجية الرئيسية (Three-vessel disease) وكفاءة القلب 38%. إيه هو التدخل الجراحي الأفضل للحالة دي، ومين هو الوريد أو الشريان الترقيعي اللي ليه أعلى وأطول نسبة بقاء مفتوحاً (Highest patency rate)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 46):
دواعي تفضيل جراحة القلب المفتوح وتغيير الشرايين (CABG) على القسطرة والدعامات (PCI) هي:
1. <b>Left Main Coronary Artery (LMCA) disease</b> (تضيق الجذع الرئيسي ≥ 50%).
2. <b>Three-vessel disease</b> (إصابة الثلاث شرايين الرئيسية)، خاصة في مرضى السكر وضعف كفاءة البطين الأيسر (EF < 50%).
3. الشرايين المنتشرة التي لا تصلح للقسطرة.
أما بالنسبة للوصلات الترقيعية (Grafts):
• <b>شريان الثدي الداخلي الأيسر (LITA / LIMA):</b> هو الخيار الذهبي الأول بأعلى نسبة بقاء وسريان مفتوح على المدى الطويل (> 90% patency at 10 years).
• بينما الوريد الصافن من الساق (Great Saphenous Vein) له أسوأ نسبة بقاء بسبب سرعة تعرضه لتصلب الشرايين والتجلط الوريدي بعد سنوات.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (CABG; LITA/LIMA offers best patency):</b> الخيار الأكاديمي المثالي والمطابق لصفحة 46 بالكتاب.
• <b>خيار (PCI with bare metal stents - غير صحيح):</b> إصابة الجذع الرئيسي والثلاث شرايين مع السكر وضعف العضلة تفضل جراحة CABG قطعاً، والدعامات المعدنية العارية لم تعد تستخدم.
• <b>خيار (Medical therapy alone... - غير صحيح):</b> الجراحة ليست ممنوعة مع ضعف العضلة بل هي التي تنقذ حياة المريض وتحسن البقاء.
• <b>خيار (Great Saphenous Vein has superior patency - غير صحيح):</b> الوريد الصافن له أسوأ نسبة بقاء مقارنة بالشرايين (LITA أفضل بكثير).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«ليفت مين (Left Main) وسكر وثلاث شرايين = جراحة كابج (CABG) على طول يا دكاترة وتعيش سنين! والـ LIMA هو الملك اللي يفضل سالك على مر السنين!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Coronary Artery Bypass Grafting (CABG):</b> جراحة مجازة الشريان التاجي (قلب مفتوح).
• <b>Left Main Coronary Artery (LMCA):</b> الجذع الرئيسي للشريان التاجي الأيسر.
• <b>LIMA / LITA:</b> شريان الصدر الداخلي الأيسر المستخدم كأفضل وصلة شريانية.`
  },

  // ==========================================
  // TOPIC 8: PHARMACOLOGY ANTIISCHEMIC (3 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_PHARMA] Antiischemic Pharmacology - Nitrates Mechanism, Tolerance & Contraindications`,
    question: 'A 66-year-old male with chronic stable angina is prescribed oral Isosorbide Mononitrate for long-term prophylaxis and sublingual nitroglycerin for acute attacks. Which of the following instructions is essential to prevent pharmacodynamic nitrate tolerance, and which clinical scenario represents an absolute, life-threatening contraindication to nitrate administration?',
    options: [
      'Provide a daily nitrate-free interval of 8 to 12 hours (e.g., overnight); absolute contraindication is concurrent use of PDE-5 inhibitors (e.g., Sildenafil within 24 hours)',
      'Administer the medication continuously every 4 hours around the clock; absolute contraindication is bronchial asthma',
      'Combine nitrates with high-dose potassium supplements; absolute contraindication is mild essential hypertension',
      'Take nitrates immediately after heavy carbohydrate meals; absolute contraindication is a history of penicillin allergy'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 66-year-old male with chronic stable angina is prescribed oral Isosorbide Mononitrate for long-term prophylaxis and sublingual nitroglycerin for acute attacks. Which of the following instructions is essential to prevent pharmacodynamic nitrate tolerance, and which clinical scenario represents an absolute, life-threatening contraindication to nitrate administration?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 66 سنة بيتعالج من ذبحة مستقرة ومكتوب له أقراص إيزوسوربيد أحادي النترات للوقاية ونتروجليسرين تحت اللسان عند النوبة. إيه هي التوصية الحتمية لمنع حدوث ظاهرة تعود النترات (Nitrate Tolerance)، وإيه الموقف الإكلينيكي اللي بيعتبر مانعاً مطلقاً وقاتلاً لاستخدام النترات؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في فارماكولوجي النترات (صفحة 48 بالكتاب):
1. <b>ظاهرة تعود النترات (Nitrate Tolerance):</b> مع الاستخدام المستمر للنيترات على مدار 24 ساعة، تنفد مجموعات السلفهيدريل (-SH groups / Aldehyde dehydrogenase-2) من جدران الأوعية، فيفقد الدواء قدرته على التحول إلى أكسيد النيتريك (NO) ويفقد مفعوله! الحل الإجباري هو إعطاء فترة خالية من النترات يومياً <b>(Nitrate-free interval for 8-12 hours)</b> وغالباً تكون أثناء النوم ليلاً.
2. <b>الموانع المطلقة والخطيرة للنترات:</b>
• <b>تناول منشطات الفياجرا ومثبطات الـ PDE-5 (مثل Sildenafil خلال 24 ساعة، أو Tadalafil خلال 48 ساعة):</b> لأن كلاهما يرفع cGMP فيحدث توسع وعائي كارثي وهبوط حاد قاتل في ضغط الدم (Severe refractory hypotension).
• <b>احتشاء البطين الأيمن (Right Ventricular Infarction):</b> لأن البطين الأيمن يعتمد كلياً على الـ Preload، والنترات موسع وريدي فتسبب هبوطاً حاداً في النتاج القلبي.
• <b>ضيق الأورطي الشديد (Severe Aortic Stenosis) وتضخم الحاجز القلبي (HOCM).</b>

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Nitrate-free interval 8-12 hours; contraindication Sildenafil within 24h):</b> مطابق بالمللي لجدول صفحة 48 في كتاب القسم.
• <b>خيار (Continuous around the clock; asthma - غير صحيح):</b> الاستخدام على مدار 24 ساعة هو السبب الرئيسي لـ Tolerance، والربو ليس مانعاً للنترات بل مانع للبيتا بلوكرز.
• <b>خيار (Combine with potassium... - غير صحيح):</b> النترات لا تستنزف البوتاسيوم وارتفاع الضغط دلالة استخدام للنترات وليس مانعاً.
• <b>خيار (Take after heavy meals... - غير صحيح):</b> لا علاقة للنترات بوجبات الكربوهيدرات أو حساسية البنسلين.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«نترات طول اليوم تفقد مفعولها في أسبوع! سيب 8 ساعات فاضيين بالليل ترجع تفوق! وإياك والنترات مع الفياجرا.. ضغط المريض يقع في القاع وميطلعش فوق!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Nitrate tolerance:</b> تعود النترات وفقدان الفاعلية نتيجة نفاد مجموعات الـ SH.
• <b>Nitrate-free interval:</b> فترة الراحة اليومية الخالية من النترات (8-12 ساعة).
• <b>PDE-5 inhibitors:</b> مثبطات إنزيم فوسفو دايستريز 5 (مثل الفياجرا وسيلدينافيل).`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_PHARMA] Antiischemic Pharmacology - Novel Antianginals Ivabradine & Ranolazine`,
    question: 'A 68-year-old male with severe COPD and chronic stable angina cannot tolerate beta-blockers due to bronchospasm. His resting heart rate is 88 bpm in regular sinus rhythm. His cardiologist decides to initiate a selective sinus node inhibitor that reduces myocardial oxygen demand purely by slowing heart rate without affecting cardiac inotropy, blood pressure, or intracardiac conduction. Which medication is this, and what is its most characteristic visual side effect?',
    options: [
      'Ivabradine; causes transient visual brightness and luminous phenomena (phosphenes)',
      'Ranolazine; causes bilateral optic neuritis and color blindness',
      'Nicorandil; causes severe visual field constriction',
      'Trimetazidine; causes mydriasis and acute angle-closure glaucoma'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 68-year-old male with severe COPD and chronic stable angina cannot tolerate beta-blockers due to bronchospasm. His resting heart rate is 88 bpm in regular sinus rhythm. His cardiologist decides to initiate a selective sinus node inhibitor that reduces myocardial oxygen demand purely by slowing heart rate without affecting cardiac inotropy, blood pressure, or intracardiac conduction. Which medication is this, and what is its most characteristic visual side effect?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 68 سنة وعنده سدة رئوية مزمنة (COPD) وذبحة مستقرة ومش قادر ياخد بيتا بلوكر عشان ضيق الشعب الهوائية. نبضه في الراحة 88 في الدقيقة (Sinus rhythm). طبيب القلب قرر يديله دواء يثبط العقدة الجيبية (SA Node) تحديداً ويقلل استهلاك الأكسجين عن طريق تبطيء النبض فقط دون التأثير على قوة انقباض القلب ولا ضغط الدم ولا كهربية القلب. مين هو الدواء ده، وإيه هو العرض الجانبي البصري المميز ليه؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو صفحة 50:
عقار <b>إيفابرادين (Ivabradine)</b>:
• الميكانيزم: بيقفل قنوات الصوديوم والبوتاسيوم المسماة "قنوات التيار المضحك" (HCN / Funny current If channels) في العقدة الجيبية الأذينية (SA node).
• التأثير: بيقلل ضربات القلب فقط (Pure bradycardic agent)، بدون أي تأثير سلبي على قوة الانقباض (No negative inotropy) وبدون خفض لضغط الدم، مما يجعله بديلاً رائعاً لمرضى الربو والسدة الرئوية عند وجود موانع للبيتا بلوكر. شرط عمله: أن يكون المريض في إيقاع جيبي (Sinus rhythm).
• العرض الجانبي المميز جداً: <b>Luminous phenomenon (Phosphenes)</b> ومضات ونوبات ضوئية في المجال البصري بسبب وجود قنوات مشابهة في شبكية العين.
أما عقار <b>رانولازين (Ranolazine)</b>: فيثبط تيار الصوديوم الداخلي المتأخر (Late inward Na+ current) مما يقلل الكالسيوم داخل الخلايا دون التأثير على النبض أو الضغط، ويعيبه إطالة الـ QT interval.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Ivabradine; luminous phenomena / phosphenes):</b> مطابق حرفياً للنص في صفحة 50 بالكتاب.
• <b>خيار (Ranolazine; optic neuritis - غير صحيح):</b> رانولازين يثبط Late Na+ ويطيل QT ولا يثبط قنوات SA node.
• <b>خيار (Nicorandil; visual constriction - غير صحيح):</b> نيكورانديل فاتح لقنوات البوتاسيوم K-ATP ومانح للنيتريك، وأشهر مشاكله تقرحات الفم والشرج.
• <b>خيار (Trimetazidine; glaucoma - غير صحيح):</b> تريميتازيدين معدل لتمثيل الطاقة في الميتوكوندريا (يحول الحرق من أحماض دهنية إلى جلوكوز).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«إيفابرادين (Ivabradine) يقفل الـ Funny If current في الـ SA node.. يبطأ النبض ويهدي القلب ويخلي العين تشوف فلاشات ونور!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Ivabradine:</b> مثبط نوعي لقنوات If في العقدة الجيبية لتهدئة النبض في الذبحة.
• <b>Luminous phenomena (Phosphenes):</b> ظواهر ضوئية عابرة في العين ناتجة عن تثبيط قنوات شبكية العين.
• <b>Negative inotropy:</b> تثبيط قوة انقباض العضلة القلبية.`
  },

  // ==========================================
  // TOPIC 9: ACUTE CORONARY SYNDROMES (4 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - ECG STEMI Localization & Culprit Coronary Artery`,
    question: 'A 56-year-old male presents to the ED with severe, crushing retrosternal chest pain of 90 minutes duration associated with diaphoresis and nausea. An immediate 12-lead ECG demonstrates 3 mm ST-segment elevation in leads II, III, and aVF with reciprocal ST-segment depression in leads I and aVL. His blood pressure drops precipitously from 135/85 mmHg to 80/50 mmHg immediately following a single dose of sublingual nitroglycerin. Which coronary artery is occluded, what additional ECG leads must be obtained immediately, and what is the primary initial hemodynamic resuscitation?',
    options: [
      'Right Coronary Artery (RCA); obtain Right-Sided Leads (V3R-V4R); administer intravenous normal saline boluses to restore preload',
      'Left Anterior Descending artery (LAD); obtain posterior leads (V7-V9); administer high-dose intravenous furosemide',
      'Left Circumflex artery (LCx); obtain lead aVR only; initiate urgent intravenous diltiazem infusion',
      'Left Main Coronary Artery; obtain esophageal ECG; administer sublingual nifedipine'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 56-year-old male presents to the ED with severe, crushing retrosternal chest pain of 90 minutes duration associated with diaphoresis and nausea. An immediate 12-lead ECG demonstrates 3 mm ST-segment elevation in leads II, III, and aVF with reciprocal ST-segment depression in leads I and aVL. His blood pressure drops precipitously from 135/85 mmHg to 80/50 mmHg immediately following a single dose of sublingual nitroglycerin. Which coronary artery is occluded, what additional ECG leads must be obtained immediately, and what is the primary initial hemodynamic resuscitation?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 56 سنة وصل الطوارئ بألم عصر شديد خلف عظمة القص بقاله 90 دقيقة مع عرق غزير وغثيان. رسم القلب الفوري أظهر ارتفاع قطعة ST بمقدار 3 ملم في اتجاهات II و III و aVF (جلطة سفلية Inferior STEMI) مع تغيرات تبادلية في I و aVL. بمجرد ما أخد قرص نتروجليسرين تحت اللسان، ضغطه نهار فجأة من 135/85 إلى 80/50 mmHg. مين الشريان التاجي المسدود، وإيه اللييدات الإضافية اللي لازم تتعمل فوراً، وإيه هو العلاج الأولي لإنقاذ ضغط الدم؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 58 و 62):
1. <b>تحديد موضع الجلطة والشريان:</b> ارتفاع ST في الاتجاهات السفلية (II, III, aVF) يعني <b>Inferior STEMI</b>، والشريان المسؤول في 85-90% من الحالات هو <b>الشريان التاجي الأيمن (Right Coronary Artery - RCA)</b>.
2. <b>احتشاء البطين الأيمن (RV Infarction):</b> الجلطة السفلية كثيراً ما تمتد للبطين الأيمن. المريض هنا أصيب بهبوط حاد في الضغط فور أخذ النترات! هذا هو السيناريو الكلاسيكي لاحتشاء البطين الأيمن لأن البطين الأيمن المتضرر يفقد قدرته الانقباضية ويعتمد كلياً على حجم الدم الراجع (Preload-dependent) ليدفع الدم للرئة ومنها للبطين الأيسر. النترات بتوسع الأوردة وتقلل الـ Preload، فينهار الضغط فوراً!
3. <b>التشخيص والعلاج:</b>
• يجب فوراً عمل اتجاهات الجانب الأيمن (Right-sided leads V3R - V4R) والتي ستظهر ارتفاعاً في ST (خاصة V4R).
• العلاج الفوري: <b>إيقاف النترات ومدرات البول، وإعطاء محاليل وريدية (IV Normal Saline bolus)</b> لرفع الـ Preload استناداً لقانون ستارلينج (Starling's law).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (RCA; Right-sided leads V3R-V4R; IV normal saline):</b> يجمع التشخيص التشريحي والكهربائي والعلاجي بدقة متناهية ومطابق لصفحة 62 بالكتاب.
• <b>خيار (LAD; posterior leads; furosemide - غير صحيح):</b> LAD يغذي الجدار الأمامي (V1-V4)، والفروسيمايد مدر بول يدمر مريض احتشاء البطين الأيمن بإنقاص الـ Preload.
• <b>خيار (LCx; lead aVR; diltiazem - غير صحيح):</b> LCx يغذي الجدار الجانبي (I, aVL, V5, V6)، والديلتيازيم يثبط القلب ويفاقم الهبوط.
• <b>خيار (Left Main; nifedipine - غير صحيح):</b> الجذع الرئيسي يسبب تغيرات شاملة في كل الاتجاهات مع ارتفاع في aVR، ونيفيديبين قصير المفعول ممنوع في الجلطات.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«جلطة سفلية II, III, aVF = الشريان الأيمن RCA! وضغط وقع بعد النيتروجلسرين = البطين الأيمن مضروب ومحتاج محاليل وسوائل مش مدرات ولا نيتروجلسرين!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Inferior STEMI:</b> احتشاء الجدار السفلي لعضلة القلب (Leads II, III, aVF).
• <b>Right ventricular infarction:</b> احتشاء البطين الأيمن التابع لانسداد الشريان الأيمن.
• <b>Preload-dependent:</b> الاعتماد الحرج على حجم الامتلاء الوريدي لضخ الدم.`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - STEMI Reperfusion Window & Thrombolysis Contraindications`,
    question: 'A 60-year-old female presents to a community hospital without percutaneous coronary intervention (PCI) capability with an acute anterior STEMI of 2 hours duration. The estimated transport time to the nearest catheterization facility is 2.5 hours (150 minutes). She has a past medical history of an ischemic stroke 2 months ago. What is the most appropriate reperfusion strategy according to STEMI management guidelines?',
    options: [
      'Transfer for Primary PCI despite the transfer delay, because an ischemic stroke within 3 months is an absolute contraindication to fibrinolytic therapy',
      'Administer intravenous Alteplase immediately because the transfer time to PCI exceeds 120 minutes',
      'Administer Streptokinase combined with full-dose unfractionated heparin, as Streptokinase carries no stroke risk',
      'Manage conservatively with dual antiplatelet therapy only; all reperfusion is strictly contraindicated'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 60-year-old female presents to a community hospital without percutaneous coronary intervention (PCI) capability with an acute anterior STEMI of 2 hours duration. The estimated transport time to the nearest catheterization facility is 2.5 hours (150 minutes). She has a past medical history of an ischemic stroke 2 months ago. What is the most appropriate reperfusion strategy according to STEMI management guidelines?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«سيدة عندها 60 سنة وصلت مستشفى ريفي مفيهاش قسطرة بجلطة قلبية حادة (Anterior STEMI) بقالها ساعتين. الوقت المقدر لنقلها لأقرب مركز قسطرة هو ساعتان ونصف (150 دقيقة). السيدة دي جالها جلطة مخية إقفارية (Ischemic stroke) من شهرين. إيه هو الإجراء الأنسب لإعادة التروية (Reperfusion strategy) حسب إرشادات علاج الـ STEMI؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 60 و 61):
القاعدة الذهبية لإعادة التروية في الـ STEMI:
1. إذا كان المريض في مستشفى بدون قسطرة وكان وقت النقل لعمل القسطرة (Primary PCI) سيتجاوز 120 دقيقة، فالخيار الموصى به عادة هو إعطاء مذيبات التجلط (Thrombolytics / Fibrinolytics) فوراً خلال 30 دقيقة.
2. <b>لكن هناك استثناء مطلق وحاسم:</b>
إذا كان لدى المريض <b>مانع مطلق لمذيبات التجلط (Absolute Contraindication to Thrombolysis)</b>، تصبح القسطرة (Primary PCI) هي الخيار الوحيد لإنقاذ حياة المريض، حتى لو استغرق النقل وقتاً أطول من 120 دقيقة! (نص صريح صفحة 61: "If there is contraindication to thrombolysis, then PCI is the only available reperfusion option even if transfer will take longer than 120 min").
3. حدوث جلطة مخية خلال آخر 3 أشهر (Ischemic stroke within 3 months) يعتبر مانعاً مطلقاً لمذيبات التجلط لأن إعطاء المذيب سيحول جلطة المخ إلى نزيف دماغي قاتل (Fatal intracerebral hemorrhage).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Transfer for Primary PCI; stroke < 3 months is absolute contraindication):</b> تطبيق مثالي لقاعدة الاستثناء المذكورة بنصها في صفحة 61 من كتاب القسم.
• <b>خيار (Administer IV Alteplase immediately - غير صحيح):</b> كارثة طبية؛ ستؤدي لنزيف مميت في المخ بسبب المانع المطلق (Stroke < 3 months).
• <b>خيار (Administer Streptokinase... - غير صحيح):</b> ستربتوكينيز مذيب تجلط ويحمل نفس الخطورة وممنوع قطعاً.
• <b>خيار (Manage conservatively without reperfusion - غير صحيح):</b> المريض في أول ساعتين من جلطة أمامية كبيرة ومحتاج فتح شريان عاجل بالقسطرة لإنقاذ عضلة القلب.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«جلطة مخ من شهرين = مذيب التجلط ممنوع نهائيين! ويبقى الـ PCI هو الحل الوحيد للتروية حتى لو المشوار بعيد بالساعتين!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Primary PCI:</b> القسطرة التداخلية العاجلة كخيار أول لإعادة التروية في الجلطة الحادة.
• <b>Absolute contraindication:</b> مانع طبي مطلق يمنع إعطاء الدواء تحت أي ظرف.
• <b>Ischemic stroke:</b> سكتة دماغية إقفارية ناتجة عن انسداد شرياني بالمخ.`
  },
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ACS] ACS - Mechanical Complications Post-MI Papillary Rupture vs VSR`,
    question: 'A 65-year-old male on day 4 following an acute inferior STEMI suddenly develops acute severe dyspnea, orthopnea, and pink frothy sputum. Physical examination reveals blood pressure 85/55 mmHg, heart rate 115 bpm, cold clammy extremities, and bilateral extensive lung crackles. Cardiac auscultation reveals a new, harsh pansystolic murmur loudest at the cardiac apex radiating to the axilla. Transthoracic echocardiography confirms rupture of the posteromedial papillary muscle. Why is the posteromedial papillary muscle significantly more vulnerable to ischemic rupture than the anterolateral papillary muscle?',
    options: [
      'The posteromedial papillary muscle has a solitary blood supply from the Right Coronary Artery (PDA branch), whereas the anterolateral papillary muscle has dual blood supply from both the LAD and LCx',
      'The posteromedial papillary muscle receives dual blood supply making it subject to reperfusion injury',
      'The posteromedial papillary muscle is attached to the aortic valve and experiences higher systolic shear stress',
      'The posteromedial papillary muscle has higher metabolic demand and lower capillary density than the myocardium'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 65-year-old male on day 4 following an acute inferior STEMI suddenly develops acute severe dyspnea, orthopnea, and pink frothy sputum. Physical examination reveals blood pressure 85/55 mmHg, heart rate 115 bpm, cold clammy extremities, and bilateral extensive lung crackles. Cardiac auscultation reveals a new, harsh pansystolic murmur loudest at the cardiac apex radiating to the axilla. Transthoracic echocardiography confirms rupture of the posteromedial papillary muscle. Why is the posteromedial papillary muscle significantly more vulnerable to ischemic rupture than the anterolateral papillary muscle?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 65 سنة في اليوم الرابع بعد إصابته بجلطة سفلية حادة (Inferior STEMI)، فجأة حصله كرشة نفس شديدة جداً وخنقة وميقدرش ينام مستوي وبيكح بلغم رغوي وردي (Acute Pulmonary Edema). الفحص أظهر ضغط 85/55 ونبض 115 وأطراف باردة وتزييق وتطقطقة واسعة في الرئتين. بالسماعة ظهر لغط انقباضي شامل جديد خشن (New Pansystolic Murmur) عند قمة القلب ومسمع في الإبط. الإيكو أكد حدوث قطع في العضلة الحليمية الخلفية الإنسية (Posteromedial papillary muscle rupture). ليه العضلة دي بالذات أكثر عرضة بكثير للقطع بعد الجلطة مقارنة بالعضلة الأمامية الوحشية (Anterolateral)?»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
المضاعفات الميكانيكية للجلطة (Mechanical complications of MI - صفحة 61 بالكتاب) تحدث كلاسيكياً بين اليوم 3 إلى 7 بعد الجلطة بسبب نخر وتفتت النسيج (Coagulative necrosis).
ارتجاع الصمام الميترالي الحاد الناتج عن قطع العضلة الحليمية (Acute MR due to Papillary Muscle Rupture) يسبب طوفاناً مفاجئاً من الدم يرتد للأذين الأيسر والرئتين مسبباً صدمة قلبية (Cardiogenic shock) وارتشاحاً رئوياً حاداً (Pulmonary edema).
<b>السر التشريحي وراء تمزق الـ Posteromedial Papillary Muscle:</b>
• العضلة الخلفية الإنسية (Posteromedial) تتغذى بشريان وحيد فقط (Single blood supply) وهو الشريان الخلفي النازل (Posterior Descending Artery - PDA) المتفرع غالباً من الشريان الأيمن (RCA). إذا انسد الـ RCA تنقطع عنها التروية تماماً فتتمزق.
• بينما العضلة الأمامية الوحشية (Anterolateral) محمية لأنها تتغذى بمصدرين دمويين مزدوجين (Dual blood supply) من شريان LAD وشريان LCx معاً!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Solitary blood supply from RCA/PDA vs dual supply from LAD & LCx):</b> التفسير التشريحي والفسيولوجي الدقيق المعتمد في امتحانات الباطنة والكارديو.
• <b>خيار (Posteromedial receives dual blood supply - غير صحيح):</b> العكس تماماً، هي التي تتغذى بشريان فردي وحيد ولهذا تتمزق بسهولة.
• <b>خيار (Attached to aortic valve - غير صحيح):</b> العضلات الحليمية متصلة بالصمام الميترالي عبر الأحبال الوترية (Chordae tendineae) وليس بالصمام الأورطي.
• <b>خيار (Higher metabolic demand... - غير صحيح):</b> السبب تشريحي بحت متعلق بإمداد الدم الشرياني (Vascular supply).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«عضلة الميترالي الخلفية غلبانة بريان واحد (Posteromedial = Single RCA).. تنقطع مع الجلطة السفلية وتعمل ارتجاع مفاجئ ورئتين غرقانين مياه!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Papillary muscle rupture:</b> تمزق العضلة الحليمية المثبتة للصمام الميترالي.
• <b>Acute pulmonary edema:</b> ارتشاح وتجمع السوائل الحاد بالحويصلات الرئوية.
• <b>Dual blood supply:</b> تروية شريانية مزدوجة تحمي العضلة من الاحتشاء المعزول.`
  },

  // ==========================================
  // TOPIC 4: EPIDEMIOLOGY & CARDIAC BIOMARKERS (2 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_EPI_MARKERS] Cardiac Biomarkers - Re-infarction Detection CK-MB vs Troponin`,
    question: 'A 59-year-old male was admitted 4 days ago with an uncomplicated non-ST elevation myocardial infarction (NSTEMI). He underwent successful medical stabilization. On hospital day 4, he suddenly develops severe, crushing retrosternal chest pain identical to his initial presentation, accompanied by new ST-segment depression in leads V4-V6. Cardiac troponin I levels remain markedly elevated from his initial infarction. Which cardiac biomarker is the gold standard diagnostic tool to confirm acute RE-INFARCTION at this specific time point, and what is its physiological basis?',
    options: [
      'CK-MB; because CK-MB normalizes within 48 to 72 hours, a secondary elevation reliably confirms re-infarction, whereas troponins remain elevated for 10 to 14 days',
      'Cardiac Troponin T; because it peaks immediately at 4 days post-infarction',
      'Total Creatine Kinase (Total CK); because it is 100% specific to myocardial tissue and does not cross-react with skeletal muscle',
      'Myoglobin alone; because myoglobin stays elevated for 3 weeks following myocardial necrosis'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A 59-year-old male was admitted 4 days ago with an uncomplicated non-ST elevation myocardial infarction (NSTEMI). He underwent successful medical stabilization. On hospital day 4, he suddenly develops severe, crushing retrosternal chest pain identical to his initial presentation, accompanied by new ST-segment depression in leads V4-V6. Cardiac troponin I levels remain markedly elevated from his initial infarction. Which cardiac biomarker is the gold standard diagnostic tool to confirm acute RE-INFARCTION at this specific time point, and what is its physiological basis?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«راجل عنده 59 سنة محجوز في المستشفى من 4 أيام بجلطة قلبية (NSTEMI) واستقرت حالته. في اليوم الرابع جاله فجأة ألم شديد في الصدر مطابق لنفس ألم الجلطة الأولى مع انخفاض جديد في قطعة ST. تحليل التروبونين لسه عالي جداً من أثر الجلطة الأولى اللي حصلت من 4 أيام. مين هو الإنزيم القلبي اللي بيعتبر المعيار الذهبي لتشخيص حدوث جلطة جديدة متكررة (Re-infarction) في التوقيت ده تحديداً، وإيه الأساس الفسيولوجي لاختياره؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 51 - قسم الباثولوجيا الإكلينيكية):
• <b>التروبونين (Cardiac Troponins I & T):</b> هو المعيار الذهبي لتشخيص الجلطة الأولى لدقته ونوعيته المطلقة للقلب، لكنه يرتفع ويظل عالياً في الدم لمدة <b>10 إلى 14 يوماً</b>! لذلك، إذا شعر المريض بألم جديد بعد 3 أو 4 أيام، لن يفيدنا التروبونين لأنه لا يزال عالياً من الجلطة السابقة ولا نستطيع التمييز هل هذا الارتفاع قديم أم جديد.
• <b>إنزيم CK-MB:</b> يبدأ في الارتفاع خلال 4-6 ساعات، ويصل للذروة عند 24 ساعة، <b>ويعود للمستوى الطبيعي تماماً بعد 48 إلى 72 ساعة (2-3 أيام)</b>!
وبالتالي، في اليوم الرابع (Day 4)، يكون الـ CK-MB قد عاد لطبيعته؛ فإذا حللنا ووجدناه قد ارتفع مجدداً (Re-elevation)، فهذا دليل قاطع ومؤكد على حدوث جلطة جديدة متجددة <b>(Re-infarction)</b>!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (CK-MB; normalizes in 48-72h, confirming re-infarction while troponin stays 10-14d):</b> النص الحرفي المعتمد في صفحة 51 من كتاب القسم: "Because CK-MB returns to normal after 48 to 72 hours, its re-elevation could be helpful in diagnosis of reinfarction".
• <b>خيار (Cardiac Troponin T - غير صحيح):</b> التروبونين يظل عالياً لغاية أسبوعين ولا يستطيع التمييز بين الجلطة الأولى والجلطة المتكررة بعد 4 أيام.
• <b>خيار (Total CK is 100% specific - غير صحيح):</b> الـ Total CK غير نوعي نهائياً للقلب ويرتفع مع أي كدمة أو حقن عضلي.
• <b>خيار (Myoglobin stays for 3 weeks - غير صحيح):</b> الميوجلوبين يختفي خلال 24 ساعة ولا يبقى لثلاثة أسابيع.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«التروبونين يقعد أسبوعين ينسى يروح.. لكن CK-MB يرجع طبيعي في يومين وتلاتة، ولو رجع علي تاني في اليوم الرابع = جلطة جديدة اتفتحت فيها الجروح!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Re-infarction:</b> احتشاء وتجلط قلبي متكرر حديث.
• <b>CK-MB kinetics:</b> حركية إنزيم الكرياتين كاينيز (يرتفع في 4-6 ساعات ويختفي في 48-72 ساعة).
• <b>Troponin window:</b> نافذة بقاء التروبونين الممتدة من 10 إلى 14 يوماً.`
  },

  // ==========================================
  // TOPIC 7: NORMAL ECG (3 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_ECG] Normal ECG - Calibration, Paper Speed & Interval Measurements`,
    question: 'A fourth-year medical student is analyzing a standard 12-lead ECG recorded at the standard paper speed of 25 mm/sec and voltage calibration of 10 mm/mV. Which of the following combinations correctly reflects the normal duration of 1 small square, the upper limit of normal for the PR interval, and the clinical implication of a QTc interval exceeding 500 milliseconds?',
    options: [
      '1 small square = 0.04 seconds (40 ms); normal PR interval upper limit is 0.20 seconds (5 small squares); QTc > 500 ms carries a dangerous risk of Torsades de Pointes',
      '1 small square = 0.20 seconds (200 ms); normal PR interval upper limit is 0.12 seconds; QTc > 500 ms is completely benign in young adults',
      '1 small square = 0.10 seconds; normal PR interval upper limit is 0.30 seconds; QTc > 500 ms indicates acute digitalis toxicity',
      '1 small square = 0.04 seconds; normal PR interval upper limit is 0.10 seconds; QTc > 500 ms defines Wolff-Parkinson-White syndrome'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A fourth-year medical student is analyzing a standard 12-lead ECG recorded at the standard paper speed of 25 mm/sec and voltage calibration of 10 mm/mV. Which of the following combinations correctly reflects the normal duration of 1 small square, the upper limit of normal for the PR interval, and the clinical implication of a QTc interval exceeding 500 milliseconds?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«طالب في سنة رابعة طب بيحلل رسم قلب قياسي 12-Lead مسجل بالسرعة القياسية 25 mm/s ومعايرة الفولت 10 mm/mV. أي التوافقات التالية يمثل بدقة زمن المربع الصغير الواحد، والحد الأقصى الطبيعي للمسافة بين P و R (الـ PR interval)، والمدلول الإكلينيكي لزيادة مسافة الـ QTc المصححة عن 500 مللي ثانية؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 37 و 40):
1. <b>معايرة ورقة رسم القلب (Standard Calibration):</b>
• سرعة الورقة = 25 mm/sec ➔ المربع الصغير (1 مم) = <b>0.04 ثانية (40 مللي ثانية)</b>. المربع الكبير (5 مم) = 0.20 ثانية (200 مللي ثانية).
• معايرة الجهد = 10 mm/mV ➔ المربع الصغير = 0.1 mV، والمربع الكبير = 0.5 mV.
2. <b>مسافة PR Interval:</b>
• تعبر عن زمن التوصيل من الأذينين عبر العقدة الأذينية البطينية (AV node).
• الطبيعي: من 0.12 إلى <b>0.20 ثانية (من 3 إلى 5 مربعات صغيرة)</b>. إذا زادت عن 0.20 ثانية (مربع كبير كامل) فهذا يعني وجود إحصار قلب درجة أولى (First-degree AV block).
3. <b>مسافة QT / QTc Interval:</b>
• تعبر عن زمن إزالة الاستقطاب وإعادة الاستقطاب البطيني بالكامل.
• الطبيعي للـ QTc أقل من 440 مللي ثانية في الرجال و 460 في النساء.
• <b>إذا تجاوزت 500 مللي ثانية (0.50 ثانية):</b> يدخل المريض في منطقة الخطر الشديد لاضطراب النبض البطيني القاتل المسمى <b>Torsades de Pointes (Polymorphic VT)</b> والرجفان البطيني.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (1 small square = 0.04s; PR upper limit = 0.20s; QTc > 500 ms risks Torsades de Pointes):</b> مطابق حرفياً لكل أرقام وقواعد صفحة 37-40 بكتاب القسم.
• <b>خيار (1 small square = 0.20s - غير صحيح):</b> 0.20 ثانية هو زمن المربع الكبير وليس الصغير.
• <b>خيار (PR upper limit = 0.30s - غير صحيح):</b> 0.30 ثانية يعتبر إحصاراً غير طبيعي مطولاً جداً.
• <b>خيار (QTc > 500 ms defines WPW - غير صحيح):</b> متلازمة WPW تتميز بقصر PR interval (< 0.12s) مع موجة دلتا دلتا (Delta wave)، ولا علاقة لها بإطالة QTc.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«المربع الصغير 40 ملي ثانية بالتمام.. والـ PR آخره مربع كبير (200 ملي ثانية) والسلام! ولو الـ QTc عدت الـ 500.. التورساد دي بوانتس (TdP) تودي المريض في غيبوبة وظلام!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Paper speed 25 mm/s:</b> سرعة الورقة القياسية (1 مم = 40 مللي ثانية).
• <b>PR interval:</b> زمن التوصيل الأذيني البطيني (3-5 مربعات صغيرة).
• <b>Torsades de Pointes:</b> تسارع بطيني متعدد الأشكال مميت مرتبط بإطالة فترة الـ QT.`
  },

  // ==========================================
  // TOPIC 1: INTRODUCTION & PHYSIOLOGY (2 MCQs)
  // ==========================================
  {
    course_code: 'CAD402',
    topic: `[UID:${ADMIN_ID}] [MIDTERM_INTRO] Introduction & Physiology - Cardiac Cycle Phases & Heart Sounds`,
    question: 'During which phase of the cardiac cycle are all four cardiac valves strictly closed while left ventricular pressure rises steeply from approximately 10 mmHg to 80 mmHg without any change in intraventricular blood volume, and which physiological event immediately precedes this phase?',
    options: [
      'Isovolumetric Contraction Phase; preceded immediately by closure of the Mitral and Tricuspid valves (producing the First Heart Sound - S1)',
      'Isovolumetric Relaxation Phase; preceded immediately by opening of the Aortic and Pulmonary valves',
      'Rapid Ventricular Ejection Phase; preceded immediately by the Third Heart Sound (S3)',
      'Atrial Systole; preceded immediately by the Opening Snap of the mitral valve'
    ],
    correct_index: 0,
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"During which phase of the cardiac cycle are all four cardiac valves strictly closed while left ventricular pressure rises steeply from approximately 10 mmHg to 80 mmHg without any change in intraventricular blood volume, and which physiological event immediately precedes this phase?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«في أي مرحلة من مراحل الدورة القلبية (Cardiac Cycle) بتكون الصمامات الأربعة مغلقة تماماً بينما ضغط البطين الأيسر يرتفع ارتفاعاً رأسياً حاداً من 10 إلى 80 مم زئبق دون أي تغير في حجم الدم داخل البطين، وإيه الحدث الفسيولوجي اللي بيسبق المرحلة دي مباشرة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في كتاب الكارديو (صفحة 3 و 4 - مدخل فسيولوجيا الدورة القلبية):
1. بمجرد امتلاء البطين بالدم في نهاية الانبساط، يبدأ انقباض البطين فيرتفع ضغطه ليتجاوز ضغط الأذينين، مما يؤدي إلى قفل الصمامين الميترالي وثلاثي الشرفات فجأة محدثاً <b>الصوت الأول للقلب (First Heart Sound - S1)</b>.
2. في هذه اللحظة، يصبح الصمام الميترالي مقفولاً، وصمام الأورطي لم يفتح بعد (لأن ضغط البطين 10 وضغط الأورطي 80 mmHg).
3. ينقبض البطين كغرفة مغلقة بالكامل (All 4 valves closed) فيرتفع الضغط داخله بشدة وسرعة فائقة من 10 إلى 80 مم زئبق دون أن يخرج أي دم أو يتغير حجمه! وتسمى هذه المرحلة بمرحلة <b>الانقباض متساوي الحجم (Isovolumetric Contraction Phase)</b>.
4. بمجرد أن يتجاوز ضغط البطين 80 مم زئبق، ينفتح صمام الأورطي ويبدأ تدفق الدم السريع (Rapid Ejection Phase).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Isovolumetric Contraction; preceded by closure of AV valves / S1):</b> يصف المرحلة بدقة علمية وفسيولوجية مطابقة لصفحة 3-4 بالكتاب.
• <b>خيار (Isovolumetric Relaxation - غير صحيح):</b> مرحلة الاسترخاء متساوي الحجم تحدث بعد قفل الصمام الأورطي والرئوي (S2) وينخفض فيها الضغط وليس يرتفع.
• <b>خيار (Rapid Ejection - غير صحيح):</b> في مرحلة القذف السريع يكون صمام الأورطي مفتوحاً ويقل حجم الدم بالبطين.
• <b>خيار (Atrial Systole - غير صحيح):</b> انقباض الأذين يسبق الانقباض البطيني وتكون صمامات AV مفتوحة وليست مغلقة.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«أول ما الميترالي والترايكسبد يقفلوا ويعملوا S1.. الأربعة صمامات مقفولين والبطين يضغط الدم كالمكبس ويرفع الضغط لـ 80 في مرحلة متساوية الحجم Isovolumetric Contraction!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Isovolumetric contraction:</b> مرحلة الانقباض متساوي الحجم (جميع الصمامات مغلقة).
• <b>First heart sound (S1):</b> الصوت القلبي الأول الناتج عن قفل الصمامات الأذينية البطينية.
• <b>End-diastolic volume (EDV):</b> حجم الدم النهائي بالبطين عند نهاية الامتلاء الانبساطي.`
  }
];

async function seedMidtermBank() {
  console.log('🚀 Seeding High-Yield Midterm Question Bank from Cardiology Book...');
  let inserted = 0;
  for (const q of midtermQuizzes) {
    const metaObj = {
      options: q.options,
      correct_index: q.correct_index,
      explanation: q.explanation
    };

    const pearlString = `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${q.explanation}`;

    const { data, error } = await supabase.from('medical_spaced_quizzes').insert({
      course_code: q.course_code,
      topic: q.topic,
      question: q.question,
      answer_and_explanation: q.explanation,
      doctor_pearl: pearlString,
      repetition_level: 0,
      next_review_at: new Date().toISOString(),
      is_mastered: false
    }).select('id');

    if (error) {
      console.error('Error inserting quiz:', q.topic, error.message);
    } else {
      inserted++;
      console.log(`✅ [${inserted}/${midtermQuizzes.length}] Inserted: ${q.topic}`);
    }
  }
  console.log(`🎉 Successfully seeded ${inserted} exam-grade Midterm quizzes into Supabase!`);
}

seedMidtermBank();
