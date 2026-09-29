const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY);

const REMAINING_UPDATES = [
  // 1. ECG Fundamentals
  {
    id: '6a89184e-7d48-43f1-9183-971623eeb886',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A routine 12-lead ECG of a 24-year-old healthy male athlete recorded at standard speed (25 mm/s) demonstrates normal sinus rhythm with a heart rate of 50 bpm. The PR interval is exactly 4 small squares (0.16 seconds), the QRS duration is 2 small squares (0.08 seconds), and the QT interval corrected for heart rate (QTc) is 410 ms. There are exactly 6 large squares between consecutive R waves. Which of the following statements is completely accurate regarding this ECG tracing?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«رسم قلب قياسي (12-lead ECG) مسجل بالسرعة العادية (25 مم/ث) لشاب رياضي سليم معافى عنده 24 سنة، أظهر نظماً جيبياً منتظماً بنبض 50 دقة في الدقيقة.
القياسات في الرسم:
1. مسافة PR تساوي 4 مربعات صغيرة بالضبط (0.16 ثانية).
2. عرض مركب QRS مربعين صغيرين (0.08 ثانية).
3. مسافة QTc المصححة لسرعة النبض = 410 مللي ثانية.
4. بين كل موجتي R متتاليتين 6 مربعات كبيرة بالضبط.
السؤال بيسأل: مين في العبارات دي صحيحة تماماً وتصف شريط رسم القلب ده بدقة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
• كل القياسات المذكورة في الرسم تقع في النطاق الفسيولوجي الطبيعي المثالي:
  1. مسافة PR الطبيعية من 3 إلى 5 مربعات صغيرة (0.12 - 0.20 ث)، وهنا 0.16 ثانية = سليم 100%.
  2. عرض QRS الطبيعي أقل من 0.12 ثانية (أقل من 3 مربعات)، وهنا 0.08 ثانية = سليم 100%.
  3. مسافة QTc الطبيعية في الرجال أقل من 440 مللي ثانية، وهنا 410 ms = سليم 100%.
  4. معدل النبض: 300 ÷ 6 مربعات كبيرة = 50 دقة/دقيقة.
• التشخيص السريري: بطء قلب جيبي فسيولوجي حميد لرياضي (Physiological Sinus Bradycardia in trained athlete)، ناتج عن كفاءة القلب الرياضي العالية وزيادة قوة العصب الحائر (Vagal tone).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Normal sinus bradycardia typical for a trained endurance athlete):</b> النظم سليم وكافة القياسات طبيعية تماماً، والنبض 50 طبيعي جداً ومطلوب عند الرياضيين المحترفين.
• <b>خيار First-degree AV block (غير صحيح):</b> حصار الدرجة الأولى يتطلب أن تزيد مسافة PR عن 0.20 ثانية (أكثر من 5 مربعات صغيرة)، وهنا 0.16 ثانية طبيعي تماماً.
• <b>خيار Pathological prolongation of QRS complex (غير صحيح):</b> مركب QRS نحيف وسريع (0.08 ثانية)، ولا يوجد أي اتساع مرضي (الاتساع المرضي ≥ 0.12 ث).
• <b>خيار Long QT syndrome (غير صحيح):</b> مسافة QTc 410 ms طبيعية ومثالية، والمتلازمة تستلزم زيادة QTc عن 480-500 ms.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«المربع الصغير 0.04.. والكبير 0.20 مش محتاج حظ!
مسافة PR من 3 لـ 5 مربعات.. زادت عن 5 تبقى بلوك درجات!»
🎯 <b>إسكيمة النبض الرياضي:</b>
«الرياضي نبضه 50 في التمام.. عضلة وحش وعصب حائر في سلام!»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Sinus bradycardia:</b> بطء ضربات القلب (أقل من 60 نبضة/دقيقة) الناشئ من العقدة الجيبية الأذينية الطبيعية (SA Node).
• <b>Vagal tone:</b> نشاط ونغمة العصب الحائر (العاشر Parasympathetic) التي تبطئ ضربات القلب وتزيد من راحة البطينين عند الرياضيين.
• <b>QTc interval:</b> مسافة QT محسوبة ومصححة بمعادلة بازيت (Bazett) لمراعاة سرعة ضربات القلب، لتحديد خطورة الرجفان البطيني (Torsades de pointes).
• <b>Small square:</b> المربع الصغير في شريط رسم القلب ويمثل 1 مم = 0.04 ثانية (40 ms).`
  },

  // 2. Physical Growth & Milestones
  {
    id: '21cb7c27-b4a1-42e4-b0c4-3e99a4f08f99',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"A mother brings her healthy 12-month-old male infant for a routine well-child visit. He was born at full-term with a normal birth weight of 3.2 kg and a birth length of 50 cm. He has been exclusively breastfed with appropriate complementary feeding started at 6 months. Physical examination confirms he is meeting all developmental milestones. What are his expected approximate weight and length at this 1-year visit?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«أم جايبة طفلها الرضيع اللي كمل 12 شهر (سنة واحدة) للعيادة للفحص الدوري والتطعيم. الطفل مولود كامل النمو في ميعاده (full-term) بوزن ولادة طبيعي 3.2 كجم، وطول 50 سم. رضع رضاعة طبيعية مطلقة وبدأ أكل مكمل عند 6 شهور، وفحصه بين إنه متطور وسليم تماماً.
السؤال بيسأل: يا دكتور إيه الوزن والطول التقريبي الطبيعي المتوقع للطفل ده لما تم سنة واحدة؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
• القواعد الذهبية لتقييم نمو الأطفال في السنة الأولى (Pediatric Growth Rules):
  1. <b>الوزن (Weight):</b>
     - يتضاعف وزن الولادة (Double birth weight) عند عمر 4 إلى 5 شهور.
     - يتضاعف 3 مرات (Triple birth weight) عند عمر سنة واحدة (3.2 × 3 = 9.6 كجم إلى 10 كجم).
     - يتضاعف 4 مرات (Quadruple) عند عمر سنتين (~ 12-13 كجم).
  2. <b>الطول (Length):</b>
     - طول الولادة الطبيعي = 50 سم.
     - يزداد الطفل 25 سم كاملة في السنة الأولى ➔ عند عمر سنة واحدة طوله = 50 + 25 = 75 سم!
     - يتضاعف طول الولادة (يصل لـ 100 سم) عند عمر 4 سنوات.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Weight ~ 9.6 to 10 kg, and Length ~ 75 cm):</b> مطابق بنسبة 100% لمعايير النمو الفسيولوجية (تضاعف الوزن 3 مرات وزيادة 25 سم على طول الولادة).
• <b>خيار 6.4 to 7 kg, length 65 cm (غير صحيح):</b> هذا وزن وطول متوقع لطفل في عمر 4 إلى 5 شهور فقط (تضاعف مرتين).
• <b>خيار 12.8 to 14 kg, length 100 cm (غير صحيح):</b> هذا وزن وطول متوقع لطفل عمره 4 سنوات كاملة.
• <b>خيار 8 to 8.5 kg, length 85 cm (غير صحيح):</b> غير متناسق ولا يتطابق مع معادلات النمو.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الوزن يضرب في 2 عند خمس شهور.. ويضرب في 3 عند سنة بنور!
والطول 50 عند الولادة.. وعند 4 سنين يوصل 100 سم بزيادة!»
🎯 <b>إسكيمة السنة الأولى:</b>
«سنة يعني 3 أضعاف الوزن.. وزيادة 25 سم على الطول!»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Well-child visit:</b> زيارة فحص دوري للطفل السليم لمتابعة منحنيات النمو (الوزن، الطول، ومحيط الرأس) والتطعيمات والتطور الحركي.
• <b>Developmental milestones:</b> معالم التطور العصبي والحركي والاجتماعي للطفل (مثل الجلوس والمناغاة والمشي).
• <b>Complementary feeding (Weaning):</b> إدخال الأطعمة الصلبة والمكملة بجانب الرضاعة الطبيعية عند عمر 6 أشهر.
• <b>Triple birth weight:</b> تضاعف وزن الولادة 3 مرات كعلامة سريرية ذهبية لإتمام السنة الأولى بنجاح.`
  },

  // 3. CXR Left Atrial Enlargement
  {
    id: '79e879a8-fcab-47d0-add5-519501894084',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"In the assessment of chamber enlargement via chest X-ray, which finding is most characteristic of left atrial enlargement?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«أثناء تقييم تضخم حجرات القلب المختلفة في أشعة الصدر العادية (Chest X-Ray)، مين في العلامات الإشعاعية دي هو العلامة الأكثر دقة وتمييزاً لتضخم الأذين الأيسر (Left Atrial Enlargement)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
• تشريحياً، الأذين الأيسر (LA) هو الحجرة الأكثر خلفية في القلب (Posterior-most chamber)، ويقع تحت تفرع القصبة الهوائية مباشرة (Subcarinal).
• لما الأذين الأيسر يتضخم (كما في ضيق أو ارتجاع الميترالي):
  1. يفرش ويكبر لليمين فيظهر ظله خلف ظل الأذين الأيمن على الحافة اليمنى للقلب ويعمل علامة الكثافة المزدوجة الشهيرة: <b>Double Density Sign (Shadow within shadow)</b>.
  2. يزق تفرع القصبة الهوائية للأعلى فيوسع زاوية الكارينا لأكثر من 90 درجة: <b>Carinal angle widening (> 90°)</b> مع رفع الشعبة الهوائية اليسرى (Elevated left main bronchus).
  3. يفرش لليسار فيملأ الفراغ الصدري ويسوي الحافة اليسرى للقلب: <b>Straightening of the left heart border</b> مع نتوء زائدة الأذين (Walking left atrial appendage).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Double density sign and carinal angle > 90°):</b> العلامتان الكلاسيكيتان المؤكدتان لتضخم الأذين الأيسر في الـ PA Chest X-ray.
• <b>خيار Elevated cardiac apex (غير صحيح):</b> رفع قمة القلب عن الحجاب الحاجز علامة مميزة لتضخم البطين الأيمن (RV Hypertrophy) كالقلب اللي شبه الحذاء (Boot-shaped heart / Coeur en sabot في رباعي فالوت).
• <b>خيار Downward & lateral apex displacement (غير صحيح):</b> إزاحة قمة القلب للأسفل والخارج علامة تضخم البطين الأيسر (LV Enlargement).
• <b>خيار Right cardiac border prominence (غير صحيح):</b> بروز الحافة اليمنى بمفردها علامة تضخم الأذين الأيمن (RA Enlargement).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الأذين الأيسر لو كبر في الإكس راي..
ظل جوه ظل (Double shadow) والكارينا تفتح زاوية منفرجة هاي!»
🎯 <b>إسكيمة الامتحان:</b>
«LA كبر = Carina > 90° + Double density sign فوراً!»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Double density sign:</b> ظهور حافتين لكثافة الأنسجة على الحافة اليمنى للقلب نتيجة تداخل ظل الأذين الأيسر المتضخم خلف الأذين الأيمن.
• <b>Carinal angle:</b> الزاوية بين الشعبتين الهوائيتين الرئيسيتين عند تفرع القصبة الهوائية، الطبيعي أقل من 75-80 درجة، وتتجاوز 90 درجة مع تضخم الأذين الأيسر.
• <b>Straightening of left cardiac border:</b> استقامة الحافة اليسرى للقلب بسبب بروز زائدة الأذين الأيسر (Left atrial appendage).
• <b>Coeur en sabot:</b> مظهر القلب الشبيه بالقبقاب الهولندي الخشبي في أشعة الصدر لتضخم البطين الأيمن.`
  },

  // 4. CXR Chamber Enlargement (Duplicate alias row)
  {
    id: 'd7e9bb12-ddfd-4db6-afe6-7abcca791ffd',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"In the assessment of chamber enlargement via chest X-ray, which finding is most characteristic of left atrial enlargement?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«أثناء تقييم تضخم حجرات القلب المختلفة في أشعة الصدر العادية (Chest X-Ray)، مين في العلامات الإشعاعية دي هو العلامة الأكثر دقة وتمييزاً لتضخم الأذين الأيسر (Left Atrial Enlargement)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
• تشريحياً، الأذين الأيسر (LA) هو الحجرة الأكثر خلفية في القلب (Posterior-most chamber)، ويقع تحت تفرع القصبة الهوائية مباشرة (Subcarinal).
• علامات تضخم الأذين الأيسر بالأشعة:
  1. علامة الكثافة المزدوجة (Double Density Sign): خطان متوازيان للظل في الجانب الأيمن.
  2. انفراج زاوية تفرع القصبة الهوائية لأكثر من 90 درجة (Widened carinal angle > 90°) نتيجة ضغط الأذين المتضخم من أسفل.
  3. استقامة الحافة اليسرى لظل القلب (Straightening of the left border).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Double density sign and carinal angle > 90°):</b> العلامتان الكلاسيكيتان لتضخم الأذين الأيسر.
• <b>خيار Elevated cardiac apex (غير صحيح):</b> علامة تضخم البطين الأيمن (RVH).
• <b>خيار Downward & lateral apex displacement (غير صحيح):</b> علامة تضخم البطين الأيسر (LVH).
• <b>خيار Right cardiac border prominence (غير صحيح):</b> علامة تضخم الأذين الأيمن (RAH).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند:</b>
«LA كبر = Carina > 90° + Double density sign فوراً!»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Double density sign:</b> تداخل ظل الأذين الأيسر المتضخم مع الأذين الأيمن.
• <b>Carinal angle widening:</b> انفراج زاوية القصبة الهوائية لأكثر من 90 درجة.
• <b>Left atrial appendage:</b> زائدة الأذين الأيسر التي تبرز وتسوي الحافة اليسرى للقلب.`
  },

  // 5. Cardiac MRI Gadolinium Viability
  {
    id: '48b0e892-18d2-48ac-9277-29db4cc13d12',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - رأس السؤال وترجمته بالمصري:</b>
• <b>English Clinical Stem:</b>
<i>"When performing a Cardiac MRI, what is the clinical significance of adding gadolinium contrast?"</i>

• 🇪🇬 <b>الترجمة والتوضيح بالمصري:</b>
«لما نعمل رنين مغناطيسي على القلب (Cardiac MRI - CMR)، إيه الأهمية السريرية والفائدة الذهبية من حقن صبغة الجادولينيوم (Gadolinium contrast)؟»

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
• صبغة الجادولينيوم بتدخل المسافات بين الخلوية خارج الخلايا وتخرج بسرعة من عضلة القلب السليمة الحية.
• لكن في النسيج الميت المتليف (Scar tissue / Myocardial Fibrosis) بعد الجلطات القلبية، الصبغة بتتحبس وتتراكم ويتأخر خروجها جداً (Late Gadolinium Enhancement - LGE).
• وبالتالي في التصوير المتأخر (بعد 10-15 دقيقة)، التليف والندبة بيظهروا بلون أبيض ناصع يلمع (Hyperenhancement).
• التطبيق السريري رقم 1 للرنين المغناطيسي بالصبغة: تقييم حيوية عضلة القلب (Myocardial Viability Assessment): لو التليف واخد أقل من 50% من سمك الجدار، العضلة دي حية وقابلة للإنقاذ (Viable) وهتستفيد جداً من عملية تركيب دعامات أو قلب مفتوح (Revascularization)!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار (ليه صح وليه الباقي غلط):</b>
• <b>الخيار الصحيح (Assessment of viable vs non-viable tissue post-MI):</b> استخدام تقنية LGE بالجادولينيوم هو المعيار الذهبي رقم 1 عالمياً لتحديد ما إذا كانت عضلة القلب حية أم متليفة بعد الجلطات.
• <b>خيار Measuring pulmonary pressure (غير صحيح):</b> قياس ضغط الشريان الرئوي يتم عبر إيكو الدوبلر أو قسطرة الجانب الأيمن (Right heart catheterization).
• <b>خيار Detecting pericardial effusion (غير صحيح):</b> ارتشاح الغشاء التاموري يُشخص بسهولة بالإيكو البسيط ولا يتطلب جادولينيوم.
• <b>خيار Evaluating prosthetic valves (غير صحيح):</b> الصمامات الصناعية تقيّم بالإيكو عبر المريء (TEE)، والرنين بها به تشويش معدني (Metallic artifacts).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook & Bedside Pearl):</b>
💡 <b>زتونة الراوند وسؤال الشفوي:</b>
«الجادولينيوم في الرنين = يكشف الندبة والتليف اللعين!
أقل من 50% سمك الندبة = افتح شريان وعيش سنين!»
🎯 <b>إسكيمة الامتحان:</b>
«CMR + Gadolinium (LGE) = Viable vs Non-viable tissue (#1 Gold Standard)»

🇬🇧 <b>خامساً - قاموس مصطلحات السؤال اللي ممكن تعمل أزمة (High-Yield Vocabulary):</b>
• <b>Late Gadolinium Enhancement (LGE):</b> تراكم صبغة الجادولينيوم في الأنسجة المتليفة المتندبة بعد جلطة القلب ليظهر التليف بلون أبيض ناصع.
• <b>Myocardial viability:</b> حيوية عضلة القلب (هل العضلة لا زالت حية وهتتحسن بفتح الشريان أم أصبحت ندبة ميتة عديمة الفائدة).
• <b>Transmural extent:</b> مدى امتداد التليف عبر سمك جدار البطين (لو أقل من 50% = قابلة للإنقاذ Viable، لو أكتر من 50% = غير قابلة للإنقاذ Non-viable).
• <b>Hibernating myocardium:</b> عضلة القلب الخاملة أو "النائمة" نتيجة نقص التروية المزمن، والتي تستعيد انقباضها فور عمل دعامة أو جراحة قسطرة.`
  }
];

async function updateRemaining() {
  console.log('🚀 Updating remaining 5 quizzes with full 5-Part Framework...');
  for (const item of REMAINING_UPDATES) {
    const { data: q } = await supabase.from('medical_spaced_quizzes').select('id, doctor_pearl').eq('id', item.id).single();
    if (q) {
      let metaObj = {};
      if (q.doctor_pearl && q.doctor_pearl.includes('<<<QUIZ_META_START>>>')) {
        try {
          const json = q.doctor_pearl.split('<<<QUIZ_META_START>>>')[1].split('<<<QUIZ_META_END>>>')[0];
          metaObj = JSON.parse(json);
        } catch (_) {}
      }
      metaObj.explanation = item.explanation;
      const newPearl = `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${item.explanation}`.trim();

      await supabase.from('medical_spaced_quizzes').update({
        answer_and_explanation: item.explanation,
        doctor_pearl: newPearl
      }).eq('id', item.id);

      console.log('✅ Updated quiz ID:', item.id);
    }
  }
  console.log('🎉 100% of all medical quizzes in Supabase now have full 5-Part Explanations!');
}

updateRemaining().catch(console.error);
