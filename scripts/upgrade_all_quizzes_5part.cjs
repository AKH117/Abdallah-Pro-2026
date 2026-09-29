const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const ADMIN_CHAT_ID = 1191760477;

const UPDATED_5PART_QUIZZES = [
  {
    topicKey: 'Isovolumetric Contraction Phase Dynamics',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
أي من الأحداث الفسيولوجية التالية يمثل البداية الحقيقية الدقيقة لانقباض البطين (Onset of Ventricular Systole)؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
انقباض البطين (Systole) يبدأ بالمللي ثانية لحظة انقباض جدار البطين وانغلاق الصمام الميترالي مسبباً الصوت الأول S1. في هذه المرحلة (Isovolumetric Contraction Phase) تكون كافة صمامات القلب مقفولة تماماً وحجم الدم ثابت ومش بيتحرك لمنع ارتجاع الدم وتجميع ضغط كافٍ. أما خروج أول دفعة دم فيحدث لاحقاً عند فتح الأورطي في مرحلة القذف السريع (Rapid Ejection Phase) في منتصف الانقباض.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Mitral valve closure and S1 with constant blood volume):</b> هو البداية الحقيقية للانقباض بمرحلة الـ Isovolumetric Contraction.
• <b>خيار (Aortic valve opening and rapid blood ejection - غير صحيح):</b> فتح الأورطي وخروج الدم يمثل بداية مرحلة القذف في منتصف الانقباض وليس بدايته.
• <b>خيار (Peak systolic pressure generation - غير صحيح):</b> ذروة الضغط تحدث في منتصف الانقباض مع أقصى عصرة للبطين.
• <b>خيار (Atrial contraction delivering atrial kick - غير صحيح):</b> انقباض الأذين يحدث في أواخر الانبساط (End-diastole) قبل الانقباض الجديد.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«بداية الـ Systole = قفل الميترالي وصوت S1 مع ثبات الحجم (Isovolumetric).
أول نقطة دم تخرج = بداية الـ Ejection في نص الانقباض مش بدايته!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Isovolumetric Contraction:</b> انقباض البطين وكافة الصمامات مغلقة وحجم الدم ثابت.
• <b>Rapid Ejection Phase:</b> مرحلة القذف السريع فور فتح الصمام الأورطي.
• <b>Atrial Kick:</b> انقباض الأذين لضخ آخر 20% من الدم في أواخر الانبساط.`
  },
  {
    topicKey: 'Mitral Valve Prolapse (MVP) - Auscultatory Timing Mechanism',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
شابة 22 سنة، فحص قمة القلب أظهر Mid-systolic click يليه Late systolic murmur. لماذا تظهر الطقة في منتصف الانقباض تحديداً وليس مع بدايته؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في ارتخاء الصمام الميترالي (MVP):
1. <b>بداية الانقباض (Early Systole):</b> البطين ممتلئ بالكامل (EDV)، اتساع التجويف يبقي الحبال الوترية مشدودة، فتمنع الشرفة من الانقلاب (لا صوت).
2. <b>منتصف الانقباض (Mid-Systole):</b> يضخ البطين الدم فيكش ويصغر حجم التجويف، فتقترب أرضية البطين وترتخي الحبال الوترية، فينقلب الصمام فجأة للأذين وتتشد حباله فجأة مصدرة صوت الطقة الحادة (Mid-systolic Click)!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Ejection decreases LV volume, slacking chordae):</b> صغر حجم البطين يرخي الحبال الوترية فيسمح بانقلاب الشرفة فجأة.
• <b>خيار (Intraventricular pressure is inadequate - غير صحيح):</b> ضغط البطين في أول الانقباض مرتفع جداً ويتجاوز الأذين.
• <b>خيار (Mitral valve remains completely open - غير صحيح):</b> الميترالي ينغلق فوراً في بداية الانقباض مسبباً S1.
• <b>خيار (Chordae contract actively - غير صحيح):</b> الحبال الوترية ألياف كولاجينية غير قابلة للانقباض النشط.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«البطين لما يكش في النص.. الحبال ترتخي والصمام يقلب ويديك كليك!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Mid-systolic click:</b> طقة انقباضية بمنتصف الانقباض ناتجة عن انقلاب شرفة الميترالي.
• <b>Chordae tendineae:</b> الحبال الوترية الصمامية.
• <b>Leaflet prolapse:</b> تدلي أو انقلاب شرفة الصمام نحو الأذين.`
  },
  {
    topicKey: 'Bicuspid Aortic Valve - Ejection Click Pathophysiology',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
شاب 24 سنة يعاني من لغط قلبي، وسُمعت نقرة حادة بعد S1 في أعلى يمين عظمة القص (Ejection click) يعقبها لغط انقباضي. ما ميكانيكية هذا الصوت؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
الصمام الأورطي الطبيعي ثلاثي الشرفات ناعم ويفتح بصمت تام. في حالة العيب الخلقي (Bicuspid Aortic Valve)، يكون الصمام بشرفتين ويتصلب ويتكلس مع السنين. عند بداية الانقباض وقذف الدم، يفتح الصمام المتصلب فجأة بقوة وبرزعة حادة مع اندفاع الدم مسبباً صوت الـ Aortic Ejection Click في بداية الانقباض.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Sudden abrupt doming and opening of calcified bicuspid aortic valve):</b> الفتح المفاجئ بعنف لصمام ثنائي متيبس هو سبب الـ Ejection click.
• <b>خيار (Prolapse of posterior mitral leaflet - غير صحيح):</b> هذا يصف كليك الـ MVP في منتصف الانقباض عند قمة القلب وليس الأورطي.
• <b>خيار (Physiological turbulence in normal aorta - غير صحيح):</b> التدفق الطبيعي في الشريان السليم صامت تماماً.
• <b>خيار (Closure of mechanical prosthetic valve - غير صحيح):</b> يسبب تكة إغلاق معدنية (Metallic closing click).

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«شاب + لغط ضيق أورطي + كليك في أول الانقباض = Bicuspid Aortic Valve فوراً!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Ejection click:</b> طقة قذف انقباضية مبكرة عند فتح الصمام الأورطي المتصلب.
• <b>Bicuspid aortic valve:</b> صمام أورطي ثنائي الشرفات (عيب خلقي شائع).
• <b>Doming:</b> تقبب الشرفات المتصلبة قبل فتحها فجأة.`
  },
  {
    topicKey: 'Cardiac Clicks Clinical Differentiation',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
أي من الحالات السريرية التالية متطابقة بدقة مع صوت النقر الإضافي المميز لها؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
خريطة أصوات الـ Clicks الثلاثة في القلب:
1. <b>Mid-to-late systolic click:</b> خاص بـ Mitral Valve Prolapse (MVP) في منتصف الانقباض عند قمة القلب (Apex).
2. <b>Aortic ejection click:</b> خاص بـ Bicuspid Aortic Valve في بداية الانقباض عند الفضاء الضلعي الثاني الأيمن.
3. <b>Metallic closing click:</b> خاص بالصمامات الصناعية المعدنية (Mechanical Prosthetic Valves) عند الإغلاق.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Young female with apical mid-to-late systolic click ➔ MVP):</b> المطابقة الكلاسيكية الذهبية في امتحانات البكالوريوس والـ USMLE.
• <b>خيار (Aortic ejection click in mid-diastole - غير صحيح):</b> الـ Ejection click انقباضي في أول الانقباض وليس في الانبساط.
• <b>خيار (Opening snap before S1 - غير صحيح):</b> الـ Opening snap يحدث في أول الانبساط بعد S2 وليس قبل S1.
• <b>خيار (Metallic closing click in isovolumetric contraction - غير صحيح):</b> تكة الصمام المعدني تحدث عند القفل الطبيعي للصمام.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>ثلاثية الـ Click للامتحان:</b>
«بنت شابة + كليك في النص = MVP.
أول الانقباض + كليك قذف = Bicuspid Valve.
تكة معدن عند القفل = Mechanical Valve.»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Auscultatory clicks:</b> أصوات النقر الإضافية المسموعة بالسماعة.
• <b>Mechanical prosthetic valve:</b> الصمام الصناعي المعدني المزروع.
• <b>Opening Snap:</b> طقة انفتاح الصمام الميترالي المتضيق.`
  },
  {
    topicKey: 'Mitral Regurgitation - Pan-systolic Murmur Dynamics',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
رجل 58 سنة، لغط Pansystolic عند القمة ممتد للإبط. لماذا يستمر هذا اللغط طوال فترة الانقباض من S1 إلى S2؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في ارتجاع الميترالي (Mitral Regurgitation - MR)، الصمام مخروم ولا يغلق بإحكام؛ وطوال فترة انقباض البطين (من لحظة إغلاق الصمامات عند S1 وحتى إغلاق الأورطي عند S2)، يظل الضغط داخل البطين الأيسر أعلى بكثير من ضغط الأذين الأيسر، مما يولد فرق ضغط مستمراً يسرب الدم للخلف طوال فترة الانقباض كاملة (Pansystolic / Holosystolic).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (LV pressure exceeds LA pressure throughout the entire systolic cycle):</b> استمرار فرق الضغط طوال الانقباض هو السبب المباشر لاستمرار اللغط من S1 إلى S2.
• <b>خيار (Aortic stenosis impedes forward ejection - غير صحيح):</b> ضيق الأورطي يسبب لغطاً قذفياً في منتصف الانقباض (Mid-systolic) وليس شاملاً.
• <b>خيار (Leaflets prolapse only during terminal third - غير صحيح):</b> هذا يصف لغط الـ MVP المتأخر (Late systolic) وليس الـ Pansystolic.
• <b>خيار (Diastolic pressure forces retrograde flow - غير صحيح):</b> الانقباض ظاهرة انقباضية وليست انبساطية.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«Pan يعني شامل.. الميترالي مخروم والبطين بيعصر، الدم يسرب من S1 لحد S2 بدون توقف!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Pansystolic (Holosystolic) murmur:</b> لغط انقباضي شامل يمتد من S1 إلى S2.
• <b>Axillary radiation:</b> انتشار اللغط للإبط الأيسر (العلامة الفارقة للـ MR).
• <b>Pressure gradient:</b> فرق الضغط المستمر بين الحجرتين.`
  },
  {
    topicKey: 'Aortic Stenosis - Ejection Systolic Crescendo-Decrescendo Murmur',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
رجل 68 سنة مع ذبحة وإغماء مجهودي، وسُمع لغط Crescendo-decrescendo mid-systolic عند الفضاء الضلعي الثاني الأيمن ممتداً للرقبة. ما تفسير هذا الشكل الصوتي المعيني؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في ضيق الأورطي (Aortic Stenosis - AS)، لا يبدأ خروج الدم عند S1 لأن الصمامات تكون مقفولة (Isovolumetric contraction)، بل يندفع الدم عند فتح الأورطي في منتصف الانقباض (Mid-systole). مع تسارع قذف الدم يعلو الصوت تدريجياً (Crescendo) ليصل لذروته مع أقصى سرعة تدفق، ثم يخفت تدريجياً (Decrescendo) مع تراجع كمية الدم قبل انغلاق الصمام عند S2.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Murmur intensity parallels transvalvular ejection velocity):</b> شدة اللغط تطابق تماماً منحنى سرعة قذف الدم عبر الصمام الضيق (يعلو ثم يهبط).
• <b>خيار (Regurgitant flow begins at S1 - غير صحيح):</b> هذا وصف لغط الارتجاع (MR) وليس التضيق.
• <b>خيار (Rapid LV filling causes turbulence - غير صحيح):</b> الامتلاء السريع يحدث في الانبساط وليس الانقباض.
• <b>خيار (Atrial contraction forces turbulent flow - غير صحيح):</b> انقباض الأذين يسبق الانقباض ولا يضخ في الأورطي.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«الأورطي خرمه ضيق.. يعصر في النص، الصوت يعلى مع أقصى زقة ويوطى لما الدم يخلص (شكل المعين)!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Crescendo-Decrescendo:</b> تصاعدي تنازلي (شكل المعين Diamond-shaped).
• <b>Carotid radiation:</b> انتشار صوت لغط ضيق الأورطي لشرايين الرقبة السباتية.
• <b>Pulsus parvus et tardus:</b> نبض ضعيف وبطيء مصاحب لضيق الأورطي الشديد.`
  },
  {
    topicKey: 'Aortic Regurgitation - Early Diastolic Auscultatory Timing',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
مريض 45 سنة، سُمع لغط Early diastolic decrescendo على حافة القص اليسرى. ما السبب في أن اللغط يبلغ ذروته القصوى فوراً بعد S2؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في ارتجاع الصمام الأورطي (Aortic Regurgitation - AR)، بمجرد انتهاء الانقباض وإغلاق الأورطي عند S2، يسترخي البطين وينخفض ضغطه إلى الصفر تقريباً، بينما الشريان الأورطي مليان دم بضغط 80 إلى 120 mmHg. هذا الفارق الهائل في الضغط يدفع الدم ليرتد كالشلال إلى البطين فوراً بعد S2 بأقصى شدة، ويهدأ الصوت تدريجياً (Decrescendo) مع تقارب الضغوط وتناقص الدم المرتد.

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Retrograde pressure gradient between aorta and LV is maximal immediately after S2):</b> أقصى فارق ضغط انحداري يحدث فور إغلاق الأورطي.
• <b>خيار (LV pressure rises above aorta in relaxation - غير صحيح):</b> ضغط البطين ينخفض للصفر ولا يعلو فوق الأورطي.
• <b>خيار (Stenotic mitral snaps open producing retrograde flow - غير صحيح):</b> الميترالي يمرر الدم للأمام وليس للخلف.
• <b>خيار (Atrial contraction produces regurgitant jet - غير صحيح):</b> انقباض الأذين يحدث في أواخر الانبساط ولا علاقة له بارتجاع الأورطي المبكر.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«أول ما الأورطي قفل عند S2.. الأورطي 120 والبطين صفر، الدم شلال ارتداد فوري تنازلي!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Early diastolic decrescendo:</b> لغط انبساطي مبكر متناقص الشدة فور صوت S2.
• <b>Water-hammer pulse:</b> نبض مطرقي متهاوٍ مميز لارتجاع الأورطي.
• <b>Wide pulse pressure:</b> اتساع الفارق بين الضغط الانقباضي والانبساطي (مثل 160/40).`
  },
  {
    topicKey: 'Mitral Stenosis - Diastolic Sequence: Opening Snap and Rumble',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
مريضة 34 سنة، سُمعت طقة انفتاح (OS) بعد S2 يعقبها لغط دحرجي خشن في منتصف الانبساط. ما الميكانيكية الفسيولوجية لهذا اللغط؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في ضيق الصمام الميترالي (Mitral Stenosis - MS):
1. بعد إغلاق الأورطي (S2)، يحاول الميترالي المتصلب أن يفتح لنزول الدم، فيصدر طقة انفتاح حادة مفاجئة اسمها Opening Snap (OS).
2. أثناء مرحلة الامتلاء السريع السلبي في منتصف الانبساط (Mid-diastole)، يعافر الدم ليمر عبر الصمام الضيق المتحجر، مما يولد دوامات واضطراب تدفق يصدر صوت الكركبة الدحرجية الخشنة (Mid-diastolic rumbling murmur).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Passive rapid ventricular filling causing turbulent flow across narrowed mitral orifice):</b> التدفق عبر الفتحة الضيقة في منتصف الانبساط هو مصدر الكركبة.
• <b>خيار (Retrograde leakage from LV to LA - غير صحيح):</b> هذا يصف ارتجاع الميترالي الانقباضي وليس الضيق الانبساطي.
• <b>خيار (High-velocity flow through aortic valve - غير صحيح):</b> تدفق الأورطي انقباضي في منتصف الانقباض.
• <b>خيار (Vigorous atrial contraction prior to S1 - غير صحيح):</b> انقباض الأذين يسبب الـ Presystolic accentuation في أواخر الانبساط وليس الـ Mid-diastolic rumble.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>زتونة الراوند:</b>
«ضيق الميترالي في الانبساط: طقة انفتاح OS بعد S2 ➔ تليها كركبة ودحرجة الدم في الفتحة الضيقة في النص!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Opening Snap (OS):</b> طقة انفتاح الصمام الميترالي المتضيق بعد S2.
• <b>Mid-diastolic rumble:</b> لغط دحرجي منخفض النبرة يُسمع بقمة القلب بالسماعة (Bell).
• <b>Tapping apex beat:</b> ضربة قمة القلب النقرية المميزة لضيق الميترالي.`
  },
  {
    topicKey: 'Mitral Stenosis - Presystolic Accentuation & Loss in Atrial Fibrillation',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
مريضة ضيق ميترالي أصيبت برجفان أذيني (Atrial Fibrillation - AF). أي من العلامات السريرية لضيق الميترالي ستختفي تماماً بعد حدوث الـ AF؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
في أواخر الانبساط وقبل الانقباض الجديد مباشرة (Pre-systolic)، ينقبض الأذين بقوة (Atrial Kick) ليعصر آخر 20% من الدم في البطين. مرور هذه الدفعة بقوة عبر الصمام الميترالي الضيق يرفع سرعة الدم فجأة، فيعلو ويشتد صوت اللغط (Presystolic accentuation). عند حدوث الرجفان الأذيني (AF)، يرتجف الأذين عشوائياً ويفقد قدرته على الانقباض الميكانيكي الفعال، فتضيع الـ Atrial Kick ويختفي الـ Presystolic accentuation تماماً!

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (Presystolic accentuation of the diastolic murmur):</b> يختفي حتماً لأن مصدره الوحيد هو انقباض الأذين النشط (Atrial kick).
• <b>خيار (The opening snap - غير صحيح):</b> الـ OS يظل مسموعاً لأنه ناتج عن فتح الصمام المتصلب بفارق الضغط بعد S2.
• <b>خيار (Mid-diastolic rumbling murmur - غير صحيح):</b> يظل موجوداً لأن نزول الدم في منتصف الانبساط سلبي بالجاذبية.
• <b>خيار (Accentuated loud S1 - غير صحيح):</b> الصوت الأول يظل عالياً لتصلب الشرفات وبقائها مفتوحة حتى بداية الانقباض.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>سؤال امتحانات متكرر جداً:</b>
«لو مريض Mitral Stenosis واختفى منه علو الصوت الأخير (Presystolic accentuation) ➔ اعرف فوراً إنه دخل في AF لأن الأذين بطل ينقبض!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Presystolic accentuation:</b> اشتداد وعلو صوت اللغط قبل الانقباض الجديد مباشرة.
• <b>Atrial kick:</b> انقباض الأذين الفعال لدفع آخر 20% من حجم الدم.
• <b>Atrial Fibrillation (AF):</b> الرجفان الأذيني وفقدان الانقباض الميكانيكي المنتظم للأذين.`
  },
  {
    topicKey: 'Cardiac Murmurs Auscultatory Timing Master Matrix',
    explanation: `📋 <b>الشرح السريري والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>

📝 <b>أولاً - ترجمة رأس السؤال السريري:</b>
أي من التوافقات التالية يربط بدقة كل اعتلال صمامي بتوقيته ووصفه الصوتي في دورة عمل القلب؟

🔍 <b>ثانياً - شرح الحالة والسيناريو الإكلينيكي والميكانيكي:</b>
الربط الرباعي الشامل للنفخات الأساسية في امتحانات البكالوريوس:
1. <b>Mitral Regurgitation (MR):</b> لغط انقباضي شامل (Pan-systolic / Holosystolic) من S1 إلى S2 لأن ضغط البطين أعلى من الأذين طوال الانقباض.
2. <b>Aortic Stenosis (AS):</b> لغط قذفي في منتصف الانقباض (Mid-systolic crescendo-decrescendo) مع تدفق الدم للأورطي.
3. <b>Aortic Regurgitation (AR):</b> لغط انبساطي مبكر متناقص (Early diastolic decrescendo) فور S2 بسبب ارتداد شلال الدم.
4. <b>Mitral Stenosis (MS):</b> لغط دحرجي في منتصف الانبساط (Mid-diastolic rumble) مع علو واشتداد قبل الانقباض (Presystolic accentuation).

⚖️ <b>ثالثاً - مناقشة وتحليل كل خيار:</b>
• <b>الخيار الصحيح (MR: Holosystolic | AS: Crescendo-decrescendo | AR: Early diastolic | MS: Mid-diastolic & Presystolic):</b> الخريطة الزمنية الصحيحة 100% لحركة الصمامات.
• <b>باقي الخيارات (غير صحيحة):</b> تخلط بين التوقيت الانقباضي والانبساطي وبين الميترالي والأورطي.

🧠 <b>رابعاً - تحشيشة وإسكيمة التثبيت (Mnemonic Hook):</b>
💡 <b>الخريطة الذهنية الذهبية للنفخات:</b>
«MR: انقباض كامل من أوله لآخره.
AS: نص انقباض وهو بيضخ للأورطي.
AR: أول الانبساط أول ما الأورطي قفل.
MS: نص الانبساط وهو نازل يعافر، ويعلى في آخره مع زقة الأذين!»

🇬🇧 <b>خامساً - مصطلحات السؤال الهامة للحفظ:</b>
• <b>Holosystolic (Pansystolic):</b> شامل لكامل فترة الانقباض.
• <b>Crescendo-decrescendo:</b> متصاعد متنازل (شكل المعين).
• <b>Early diastolic decrescendo:</b> متناقص في بداية الانبساط.
• <b>Presystolic accentuation:</b> مشتد قبل الانقباض.`
  }
];

async function update5Part() {
  console.log('🚀 Updating all 10 quizzes with full 5-Part Explanations...');
  for (const item of UPDATED_5PART_QUIZZES) {
    const { data: rows } = await supabase
      .from('medical_spaced_quizzes')
      .select('id, doctor_pearl')
      .ilike('topic', `%${item.topicKey}%`);

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

        console.log(`✅ Updated quiz ID ${row.id} for topic: "${item.topicKey}"`);
      }
    }
  }
  console.log('🎉 All 10 quizzes now have the complete, formal 5-Part Explanation loaded!');
}

update5Part().catch(console.error);
