const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const ADMIN_ID = 1191760477;

const finalQuizzes = [
  // 1. ARRHYTHMIAS (Page 115) - 10 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_ARRHYTHMIA] Atrial Fibrillation - Anticoagulation & Rate vs Rhythm Strategy`,
    question: 'A 68-year-old male with a history of hypertension and type 2 diabetes presents for a routine check-up. He is completely asymptomatic, but physical examination reveals an irregularly irregular pulse at 115 bpm. A standard 12-lead ECG confirms atrial fibrillation with absent P waves and variable R-R intervals. Echocardiography shows a normal left ventricular ejection fraction (58%) and mild left atrial enlargement. What is the most appropriate initial management strategy for this patient?',
    explanation: 'المريض يعاني من رجفان أذيني غير مصحوب بأعراض سريرية حادة، ودرجة مقياس الخطورة CHA2DS2-VASc لديه = 2 (Hypertension + Diabetes)، مما يستوجب البدء فوراً بمضادات التخثر الفموية (Oral Anticoagulants مثل DOACs أو Warfarin) لمنع السكتة الدماغية الانصمامية، مع التحكم في سرعة نبضات القلب (Rate Control) باستخدام حاصرات بيتا (Beta-blockers) أو محصرات قنوات الكالسيوم غير ثنائية الهيدروبيريدين (Diltiazem).',
    options: [
      'Initiate oral anticoagulation (DOAC) and a beta-blocker for rate control',
      'Immediate synchronized electrical DC cardioversion',
      'Aspirin 81 mg daily and observation without rate control',
      'Intravenous amiodarone loading followed by catheter ablation'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_ARRHYTHMIA] Ventricular Tachycardia vs SVT with Aberrancy - Diagnostic Hallmarks`,
    question: 'A 62-year-old male with a prior history of anterior myocardial infarction presents to the emergency department with severe palpitation, lightheadedness, and diaphoresis. Blood pressure is 95/60 mmHg. ECG demonstrates a wide-QRS complex tachycardia (QRS duration 160 ms) at a rate of 175 bpm. On careful examination of the rhythm strip, independent P waves are identified at a slower rate (AV dissociation), along with occasional fusion beats. What is the definitive diagnosis and primary therapy?',
    explanation: 'وجود تسرع قلب عريض المركب (Wide-QRS complex tachycardia) لدى مريض لديه سوابق احتشاء عضلة القلب، مع وجود تفارق أذيني بطيني (AV dissociation) وضربات الاندماج (Fusion beats)، هو علامة قطعية ومميزة لتسرع القلب البطيني (Ventricular Tachycardia - VT). ونظراً لوجود علامات نقص التروية وعدم الاستقرار النسبي، يجب التدخل الفوري بتقويم النظم بالصدمة الكهربائية المتزامنة (Synchronized DC cardioversion) أو إعطاء الأميودارون IV.',
    options: [
      'Ventricular Tachycardia (VT); synchronized DC cardioversion or IV amiodarone',
      'AVNRT with bundle branch block; rapid IV adenosine 6 mg',
      'Atrial fibrillation with WPW pre-excitation; IV verapamil',
      'Sinus tachycardia with aberrant conduction; IV metoprolol'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_ARRHYTHMIA] Complete Third-Degree AV Block - Clinical Hallmarks & PPI Indication`,
    question: 'A 74-year-old female presents with recurrent episodes of sudden syncope without any warning prodrome (Stokes-Adams attacks). Her pulse rate is regular at 36 bpm, and blood pressure is 150/60 mmHg. Physical examination reveals prominent, intermittent large pulsations in the jugular venous waveform (cannon \'a\' waves). ECG shows regular P waves at 80/min and regular QRS complexes at 36/min, with complete lack of relationship between P waves and QRS complexes. What is the definitive management indicated?',
    explanation: 'المريضة تعاني من حصار أذيني بطيني تام من الدرجة الثالثة (Complete 3rd-Degree Heart Block) مع نوبات إغماء ستوكس-آدامز (Stokes-Adams attacks). وتظهر موجات المدفع (Cannon \'a\' waves) في الوريد الوداجي نتيجة انقباض الأذين الأيمن ضد صمام ثلاثي الشرفات مغلق. هذا الحصار غير قابل للعكس ويشكل استطباباً مطلقاً من الدرجة الأولى (Class I indication) لزرع منظم ضربات قلب دائم (Permanent Pacemaker PPI).',
    options: [
      'Permanent pacemaker implantation (PPI)',
      'Long-term oral atropine and observation',
      'Catheter ablation of the AV nodal re-entrant pathway',
      'Oral theophylline therapy for chronotropic support'
    ],
    correct_index: 0
  },

  // 2. CONGESTIVE HEART FAILURE & SHOCK (Page 81) - 8 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_HEART_FAILURE] HFrEF vs HFpEF - Pathophysiological Distinction`,
    question: 'A 71-year-old female with long-standing poorly controlled hypertension presents with exertional dyspnea (NYHA Class III) and lower extremity edema. Blood pressure is 155/90 mmHg. Cardiac auscultation reveals a prominent S4 gallop and normal S1/S2. Echocardiography demonstrates a left ventricular ejection fraction of 56%, marked concentric left ventricular hypertrophy, and elevated left ventricular filling pressures (E/e\' > 15). Which of the following pathophysiological mechanisms primarily underlies this clinical condition?',
    explanation: 'المريضة تعاني من فشل القلب مع الحفاظ على كسر القذف (Heart Failure with Preserved Ejection Fraction - HFpEF)، والذي ينجم بالأساس عن ضعف واعتلال ارتخاء البطين الأيسر وامتلاءه في مرحلة الانبساط (Impaired diastolic relaxation and increased ventricular stiffness) نتيجة التضخم المركز للبطين (Concentric LVH) الناجم عن ارتفاع ضغط الدم، مما يولد صوت القلب الرابع (S4 gallop).',
    options: [
      'Impaired ventricular diastolic relaxation and decreased compliance (diastolic dysfunction)',
      'Primary loss of myocardial contractility with reduced end-systolic elastance',
      'Severe acute volume overload secondary to papillary muscle rupture',
      'Dynamic left ventricular outflow tract systolic obstruction'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_HEART_FAILURE] Cardiogenic Shock - Hemodynamic Profile & Inotropic Support`,
    question: 'A 59-year-old male is admitted to the CCU 24 hours following a large anterior STEMI. He is confused, oliguric, and cold to the touch. Blood pressure is 78/50 mmHg, heart rate is 118 bpm, and respiratory rate is 28 bpm with diffuse bilateral crackles throughout both lung fields. Pulmonary artery catheterization confirms cardiac index of 1.6 L/min/m² (severely reduced) and pulmonary capillary wedge pressure (PCWP) of 24 mmHg (markedly elevated). What is the initial pharmacological hemodynamic support of choice?',
    explanation: 'المريض في حالة صدمة قلبية المنشأ (Cardiogenic Shock) تتسم بهبوط حاد في الضغط ونقص التروية مع ارتفاع ضغط الامتلاء (PCWP > 18 mmHg) ونقص النتاج القلبي (Cardiac Index < 2.2 L/min/m²). خط العلاج الأول لدعم ضغط التروية التاجية والأعضاء الحيوية هو النورإبينفرين (Norepinephrine) لرفع الضغط، بالتزامن مع الدوبوتامين (Dobutamine) لتحسين انقباض العضلة القلبية وتقليل الاحتقان.',
    options: [
      'Norepinephrine to restore coronary perfusion pressure, combined with dobutamine',
      'Rapid intravenous fluid bolus of 2 liters of normal saline',
      'High-dose intravenous beta-blocker to decrease myocardial oxygen demand',
      'Oral verapamil to control sinus tachycardia'
    ],
    correct_index: 0
  },

  // 3. PHARMACOLOGY: ANTI-FAILURE DRUGS (Page 89) - 4 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PHARMA_FAILURE] ARNI (Sacubitril/Valsartan) - ACEI Washout Period Rule`,
    question: 'A 64-year-old male with chronic HFrEF (LVEF 28%) remains symptomatic on Ramipril 10 mg daily and Bisoprolol 10 mg daily. The cardiologist decides to switch Ramipril to an Angiotensin Receptor-Neprilysin Inhibitor (ARNI; Sacubitril/Valsartan). What critical pharmacological guideline must be strictly followed before starting the first dose of Sacubitril/Valsartan?',
    explanation: 'عند التحويل من مثبطات الإنزيم المحول للأنجيوتنسين (ACE inhibitors مثل Ramipril/Enalapril) إلى دواء الـ ARNI (Sacubitril/Valsartan)، يجب إيقاف الـ ACEI والانتظار لمدة 36 ساعة على الأقل كفترة غسيل دوائي (36-hour washout period) قبل بدء أول جرعة من الـ ARNI، وذلك لتجنب التراكم التآزري للبراديكينين (Bradykinin) الذي يسبب وذمة وعائية مهددة للحياة (Life-threatening Angioedema).',
    options: [
      'Stop Ramipril and wait for a mandatory 36-hour washout period to prevent angioedema',
      'Administer the first dose of ARNI immediately with the last dose of Ramipril',
      'Double the dose of Ramipril for 1 week before switching to ARNI',
      'Pre-treat with oral calcium gluconate to prevent severe hypocalcemia'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PHARMA_FAILURE] Digoxin Toxicity - Electrolyte Trigger & Characteristic Manifestations`,
    question: 'A 70-year-old female with HFrEF and atrial fibrillation taking Digoxin and high-dose Furosemide presents with fatigue, nausea, blurred vision with yellow-green color halos (xanthopsia), and palpitation. Serum digoxin level is markedly elevated at 3.2 ng/mL. Serum potassium is 2.9 mEq/L (hypokalemia). What is the primary cellular mechanism by which hypokalemia exacerbates digoxin toxicity?',
    explanation: 'نقص بوتاسيوم الدم (Hypokalemia) الناتج عن مدرات البول مثل الفيروسيميد يسهل ويرفع من ارتباط الديجوكسين بمستقبله على مضخة الصوديوم/بوتاسيوم (Na+/K+ ATPase pump) في خلايا العضلة القلبية، حيث يتنافس البوتاسيوم والديجوكسين على نفس الموقع الرابط، فنقص البوتاسيوم يفسح المجال لارتباط مفرط للديجوكسين مسبباً سمية شديدة (Digoxin toxicity) مع اضطرابات نظم ورؤية صفراء مميزة (Xanthopsia).',
    options: [
      'Hypokalemia increases digoxin binding to the myocardial Na+/K+ ATPase pump',
      'Hypokalemia accelerates hepatic metabolism of digoxin into active metabolites',
      'Hypokalemia blocks renal tubular excretion of digoxin',
      'Hypokalemia directly stimulates myocardial beta-1 adrenergic receptors'
    ],
    correct_index: 0
  },

  // 4. HYPERTENSION & EMERGENCIES (Page 67) - 4 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_HYPERTENSION] Secondary Hypertension - Renovascular Stenosis Clues`,
    question: 'A 60-year-old male with generalized atherosclerosis presents with resistant hypertension (BP 175/105 mmHg despite triple therapy including a diuretic, CCB, and beta-blocker). On physical examination, a continuous epigastric and flank systolic-diastolic bruit is audible. His physician initiates Lisinopril, but one week later, routine lab testing reveals that his serum creatinine has risen acutely from 1.1 mg/dL to 2.2 mg/dL. What is the most likely underlying secondary cause of hypertension?',
    explanation: 'ارتفاع ضغط الدم المقاوم مع وجود نفخة وعائية بطنية (Abdominal systolic-diastolic bruit) وتدهور حاد في وظائف الكلى (ارتفاع الكرياتينين > 30-50%) عقب بدء مثبطات الإنزيم المحول للأنجيوتنسين (ACEI) هو العرض الكلاسيكي لتضيق الشريان الكلوي الثنائي (Bilateral Renal Artery Stenosis)؛ حيث يعتمد الترشيح الكبيبي على تضيق الشريان الصادر بفعل الأنجيوتنسين 2 للحفاظ على ضغط الترشيح، ويثبط الـ ACEI هذه الآلية التعويضية.',
    options: [
      'Bilateral renal artery stenosis (Renovascular hypertension)',
      'Primary hyperaldosteronism (Conn syndrome)',
      'Pheochromocytoma of the adrenal medulla',
      'Coarctation of the aorta'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_HYPERTENSION] Hypertensive Emergency - Target BP Reduction Protocol`,
    question: 'A 52-year-old male is rushed to the emergency department with severe headache, confusion, blurred vision, and a blood pressure of 230/135 mmHg. Fundoscopic examination reveals bilateral papilledema, flame hemorrhages, and cotton wool spots (Hypertensive Encephalopathy). What is the recommended target blood pressure reduction strategy in the first hour of management using intravenous medications?',
    explanation: 'في حالات طوارئ ارتفاع ضغط الدم (Hypertensive Emergency) مع إصابة الأعضاء المستهدفة الحادة، تنص الإرشادات العالمية على خفض الضغط الشرياني الوسطي (MAP) بحذر وتدرج بنسبة لا تتجاوز 20% إلى 25% خلال الساعة الأولى (أو خفض الضغط الانبساطي إلى نحو 100-110 mmHg)، وذلك باستخدام أدوية وريدية قابلة للمعايرة (مثل Labetalol أو Nicardipine)، لتجنب حدوث إقفار ونقص تروية دماغي أو تاجي حاد (Cerebral/Coronary hypoperfusion).',
    options: [
      'Reduce mean arterial pressure (MAP) by no more than 20% to 25% in the first hour',
      'Immediately normalize blood pressure to 120/80 mmHg within 15 minutes',
      'Give sublingual nifedipine capsule immediately to drop BP by 50%',
      'Withhold all antihypertensives for 24 hours to observe cerebral autoregulation'
    ],
    correct_index: 0
  },

  // 5. PERICARDIAL DISEASES & AORTIC DISSECTION (Pages 101, 106) - 3 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PERICARDIAL_AORTIC] Acute Pericarditis - Clinical & Electrocardiographic Hallmarks`,
    question: 'A 27-year-old male presents with sharp retrosternal chest pain of 2 days duration. The pain radiates to the left trapezius ridge, is aggravated by deep inspiration and coughing, and is distinctly relieved by sitting up and leaning forward. On auscultation, a scratchy, high-pitched superficial sound is heard over the left lower sternal border. ECG reveals widespread diffuse concave-upward ST-segment elevation across leads I, II, aVF, and V2-V6, accompanied by PR-segment depression. What is the first-line medical therapy?',
    explanation: 'الحالة نموذجية لالتهاب التامور الحاد (Acute Pericarditis) السريري والكهربائي: ألم جنبي موضعي يخف بالجلوس للأمام، صوت احتكاك التامور (Pericardial friction rub)، وارتفاع مقعر منتشر لقطعة ST مع انخفاض قطعة PR. العلاج الأساسي من الخط الأول هو مضادات الالتهاب غير الستيرويدية بجرعات عالية (High-dose NSAIDs مثل Ibuprofen) مع الكولشيسين (Colchicine) لتسريع الشفاء ومنع الانتكاس.',
    options: [
      'High-dose NSAIDs (e.g., Ibuprofen) combined with Colchicine',
      'Immediate administration of IV thrombolytic therapy (Alteplase)',
      'Emergency coronary angiography and stent placement',
      'Immediate systemic broad-spectrum intravenous antibiotic therapy'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PERICARDIAL_AORTIC] Cardiac Tamponade - Beck\'s Triad & Pulsus Paradoxus`,
    question: 'A 45-year-old female with metastatic breast cancer presents with acute dyspnea, lightheadedness, and tachycardia. On examination, blood pressure is 85/65 mmHg (narrow pulse pressure), heart sounds are distant and muffled, and jugular venous distension is marked up to the angle of the jaw. Automated blood pressure monitoring demonstrates that systolic blood pressure drops by 18 mmHg during quiet inspiration. ECG shows low voltage QRS with electrical alternans. What is the most immediate lifesaving intervention required?',
    explanation: 'المريضة تعاني من اندحاس قلبي حاد (Cardiac Tamponade) مع ثالوث بيك الكلاسيكي (Beck\'s triad: هبوط الضغط، خفوت أصوات القلب، واحتقان أوردة العنق)، مع نبض متناقض شديد (Pulsus Paradoxus > 10 mmHg) وتناوب كهربي (Electrical alternans) في رسم القلب. هذا يتطلب على الفور بذل التامور الإسعافي (Emergency Pericardiocentesis) لتخفيف الضغط داخل التامور واستعادة النتاج القلبي.',
    options: [
      'Emergency bedside pericardiocentesis',
      'High-dose intravenous loop diuretics (Furosemide 80 mg IV)',
      'Synchronized electrical cardioversion',
      'Urgent surgical pleurodesis'
    ],
    correct_index: 0
  },
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PERICARDIAL_AORTIC] Acute Aortic Dissection - Stanford Classification & Management`,
    question: 'A 58-year-old male with chronic uncontrolled hypertension suddenly develops excruciating, tearing retrosternal chest pain radiating directly through to the interscapular region of his back. Blood pressure is 185/100 mmHg in the right arm and 145/85 mmHg in the left arm (pulse and BP differential). A new early diastolic murmur of aortic regurgitation is noted. Urgent CT angiography of the chest confirms an intimal tear originating in the ascending aorta. What is the definitive management?',
    explanation: 'المريض يعاني من تسلخ الشريان الأورطي الصاعد (Stanford Type A Aortic Dissection) مع اختلاف النبض بين الذراعين وقصور صمام أورطي حاد. تصنيف ستانفورد أ (Type A) الذي يشمل الأورطي الصاعد يحمل خطورة وفاة تفوق 1-2% لكل ساعة تأخير، مما يستلزم جراحة طوارئ فورية (Emergency Open Surgical Repair)، مع التحكم الفوري في الضغط الشرياني ومعدل النبض بـ IV Beta-blockers قبيل الجراحة.',
    options: [
      'Immediate emergency cardiothoracic surgical repair (Stanford Type A)',
      'Medical management alone with oral antihypertensives in the outpatient clinic (Stanford Type B)',
      'Immediate systemic thrombolytic therapy with Alteplase',
      'Transcatheter aortic valve replacement (TAVR) under local anesthesia'
    ],
    correct_index: 0
  },

  // 6. PULMONARY EMBOLISM & PHTN (Pages 108, 113) - 3 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PE_PHTN] Massive Pulmonary Embolism - Hemodynamic Collapse & Thrombolysis`,
    question: 'A 54-year-old female undergoes total knee replacement surgery 4 days ago. She suddenly collapses while walking in the hospital corridor and develops severe pleuritic chest pain, tachypnea (RR 32/min), and cyanosis. Blood pressure is 75/45 mmHg (persistent hypotension), heart rate is 128 bpm, and SpO2 is 82% on room air. Bedside echocardiography demonstrates acute right ventricular dilation and hypokinesis with D-shaped left ventricle. What is the immediate treatment of choice?',
    explanation: 'المريضة تعاني من صمة رئوية كتلية عالية الخطورة (Massive High-Risk Pulmonary Embolism) مصحوبة بانهيار ديناميكي دموي (هبوط الضغط المستمر SBP < 90 mmHg) وإجهاد بطيني أيمن حاد. في حالات الصمة الرئوية الكتلية، يعتبر حل الخثرة الفوري بمحللات الفبرين (Systemic Thrombolysis مثل IV Alteplase / tPA) الخيار الأول المنقذ للحياة لاستعادة التروية الرئوية وعكس فشل البطين الأيمن.',
    options: [
      'Immediate systemic thrombolytic therapy (e.g., IV Alteplase / recombinant tPA)',
      'Subcutaneous low-molecular-weight heparin (LMWH) monotherapy',
      'Oral Warfarin with a target INR of 2.0-3.0',
      'Inhalation of hyperbaric oxygen without anticoagulation'
    ],
    correct_index: 0
  },

  // 7. CARDIOMYOPATHIES (Page 95) - 2 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_CARDIOMYOPATHY] Hypertrophic Obstructive Cardiomyopathy (HOCM) - Dynamic Auscultation`,
    question: 'A 20-year-old collegiate basketball player experiences an episode of near-syncope during strenuous training. Family history reveals that his uncle died suddenly at age 24. Physical examination reveals a harsh, crescendo-decrescendo systolic murmur heard best along the left sternal border without radiation to the carotids. When the patient performs the Valsalva maneuver (strain phase) or suddenly stands from a squatting position, the intensity of the murmur increases noticeably. What is the underlying mechanism of this murmur augmentation?',
    explanation: 'المريض يعاني من اعتلال عضلة القلب الضخامي الانسدادي (HOCM). يتميز لغط الـ HOCM بأنه يزداد شدة مع مناورة فالسافا (Valsalva strain) أو الوقوف السريع، لأن هذه الحركات تقلل العائد الوريدي وحجم امتلاء البطين الأيسر (Decreased LV preload)، مما يؤدي إلى اقتراب الحاجز المتضخم من الصمام المترالي (SAM) وتضييق مسار خروج البطين الأيسر بشكل أكبر، مما يفاقم الانسداد الديناميكي ويرفع شدة اللغط.',
    options: [
      'Decreased left ventricular preload causes increased dynamic left ventricular outflow tract (LVOT) obstruction',
      'Increased systemic vascular resistance increases afterload and opens the LVOT',
      'Sympathetic stimulation directly increases venous return and enlarges the ventricular cavity',
      'Reduced right ventricular filling decreases pulmonary capillary wedge pressure'
    ],
    correct_index: 0
  },

  // 8. SYNCOPE (Page 77) - 2 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_SYNCOPE] Cardiac vs Neurocardiogenic Syncope - Red Flag Features`,
    question: 'A 65-year-old male presents to the clinic reporting two distinct blackout episodes in the past month. The first episode occurred while he was walking up a flight of stairs and happened suddenly without any preceding nausea, warmth, or visual changes. The second episode occurred while he was seated watching television. Physical examination reveals a late-peaking systolic ejection murmur at the right upper sternal border with delayed carotid pulse upstroke (pulsus parvus et tardus). Which category of syncope does this patient represent, and what is the primary danger?',
    explanation: 'الإغماء الذي يحدث أثناء الجهد البدني (Exertional syncope) أو أثناء الجلوس/الاستلقاء دون أعراض إنذارية (Prodrome) مع وجود لغط قذفي متأخر ونبض ضعيف وبطيء (Pulsus parvus et tardus) هو إغماء قلبي المنشأ (Cardiogenic Syncope) ناجم عن تضيق الصمام الأورطي الشديد (Severe Aortic Stenosis). الإغماء القلبي يمثل علامة خطر حرجة تستلزم تدخلاً عاجلاً لاستبدال الصمام لتفادي خطر الموت المفاجئ.',
    options: [
      'Cardiogenic syncope secondary to severe aortic stenosis; high risk of sudden cardiac death requiring urgent valve replacement',
      'Neurocardiogenic (vasovagal) syncope; benign condition requiring reassurance and salt tablets',
      'Orthostatic hypotension; managed solely by compression stockings',
      'Carotid sinus hypersensitivity; managed by loose neck collars'
    ],
    correct_index: 0
  },

  // 9. PATHOLOGY OF CARDIOVASCULAR DISEASES (Page 63) - 3 Marks
  {
    topic: `[UID:${ADMIN_ID}] [FINAL_PATHOLOGY] Myocardial Infarction - Chronological Histopathology & Rupture Window`,
    question: 'A 58-year-old male who suffered an acute transmural anterior myocardial infarction 5 days ago suddenly develops severe shortness of breath, profound hypotension (BP 60/40), and dies within minutes despite resuscitation. Autopsy reveals extensive hemopericardium (cardiac tamponade) due to an acute rupture of the anterior left ventricular free wall. What is the predominant histopathological microscopic finding characteristically present in the infarcted myocardial tissue at 3 to 7 days post-MI?',
    explanation: 'في الفترة الزمنية بين اليوم الثالث والسابع (3 to 7 days post-MI)، يكون الارتشاح الخلوي النسيجي خاضعاً لسيطرة البلاعم (Macrophage infiltration and early phagocytosis of necrotic myocytes) لإزالة الأنسجة الميتة قبل بدء تكون نسيج التحبب. في هذه المرحلة بالذات تكون جدران القلب أضعف وأهش ما يمكن (Soft, yellow-tan necrotic core)، مما يجعل هذه النافذة الزمنية هي الأعلى خطورة لحدوث التمزق الميكانيكي (Free wall, septal, or papillary muscle rupture).',
    options: [
      'Extensive macrophage infiltration with phagocytosis of dead necrotic myocytes (peak tissue weakening and rupture window)',
      'Dense, mature collagenous fibrous scar tissue with complete cellular healing',
      'Wavy myocardial fibers with intact نسيج and minimal edema only',
      'Predominant intense neutrophilic infiltration without any macrophage activity'
    ],
    correct_index: 0
  }
];

async function seed() {
  console.log('Seeding ' + finalQuizzes.length + ' Final Exam questions into medical_spaced_quizzes...');
  for (const q of finalQuizzes) {
    const metaObj = {
      poll_id: null,
      options: q.options,
      correct_index: q.correct_index,
      explanation: q.explanation
    };
    const doctorPearl = '<<<QUIZ_META_START>>>' + JSON.stringify(metaObj) + '<<<QUIZ_META_END>>> ' + q.explanation;
    const { error } = await supabase.from('medical_spaced_quizzes').insert({
      course_code: 'CAD402',
      topic: q.topic,
      question: q.question,
      answer_and_explanation: q.explanation,
      doctor_pearl: doctorPearl,
      repetition_level: 0,
      next_review_at: new Date().toISOString(),
      last_reviewed_at: null,
      is_mastered: false
    });
    if (error) console.error('Insert error for:', q.topic, error.message);
    else console.log('✅ Inserted:', q.topic);
  }
  console.log('🎉 Done seeding all final exam topics!');
}

seed();
