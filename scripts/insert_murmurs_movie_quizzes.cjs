const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const quizzes = [
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - ميكانيكية الـ Pan-systolic Murmur',
    question: 'مريض يعاني من نفخة انقباضية شاملة (Pan-systolic murmur) تبدأ مباشرة مع صوت S1 وتستمر بكامل شدتها حتى صوت S2. ما هو التفسير الميكانيكي الدقيق لحدوث هذا اللغط على مدار الانقباض بأكمله؟',
    options: [
      'ارتجاع الصمام الميترالي (MR) حيث يظل ضغط البطين أعلى من الأذين طوال فترة الانقباض فيسرب الدم باستمرار',
      'ضيق الصمام الأورطي (AS) حيث يستمر قذف الدم عبر الصمام طوال فترة الانقباض والانبساط',
      'ارتخاء الصمام الميترالي (MVP) حيث تنقلب الشرفة فقط في منتصف الانقباض',
      'ارتجاع الصمام الأورطي (AR) نتيجة ارتداد الدم من الشريان الأورطي للبطين أثناء الانقباض'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في ارتجاع الصمام الميترالي (Mitral Regurgitation)، الصمام لا ينغلق بإحكام؛ وبمجرد أن يبدأ البطين في الانقباض مع صوت S1 وحتى نهايته عند S2، يكون الضغط داخل البطين الأيسر أعلى بكثير من ضغط الأذين الأيسر، وبالتالي يستمر الدم في التسريب والرجوع للأذين طوال فترة الانقباض كاملة (Pan-systolic).',
    doctor_pearl: '💡 زتونة الامتحان: Pan-systolic = الميترالي مخروم وبيسرب والبطين عمال يعصر من أول S1 لحد S2!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - ميكانيكية لغط ضيق الأورطي (AS)',
    question: 'لماذا يوصف لغط ضيق الصمام الأورطي (Aortic Stenosis) بأنه Mid-systolic وذو شكل معيني يعلو ثم يهبط (Crescendo-Decrescendo)؟',
    options: [
      'لأنه لا يبدأ إلا بعد فتح الأورطي في منتصف الانقباض، ويعلو مع ذروة سرعة قذف الدم ثم يهدأ بنقصان التدفق',
      'لأنه يبدأ مع إغلاق الصمام الميترالي فوراً ويزداد مع اتساع تجويف البطين',
      'لأن الصمام الأورطي يسرب الدم باستمرار أثناء فترة الامتلاء السريع',
      'لأن انقباض الأذين في نهاية الانبساط هو الذي يحدد شدة صوت ضيق الأورطي'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في ضيق الأورطي (AS)، الدم لا يخرج في بداية الانقباض (حيث تكون الصمامات مقفولة في مرحلة الـ Isovolumetric Contraction)، وإنما يندفع في منتصف الانقباض (Mid-systole) عند فتح الأورطي. مع تدفق الدم السريع يعلو الصوت تدريجياً (Crescendo) ليصل لذروته مع أقصى سرعة قذف، ثم ينخفض ويهدأ (Decrescendo) مع تراجع كمية الدم وقرب انغلاق الصمام عند S2.',
    doctor_pearl: '💡 زتونة الامتحان: Mid-systolic = بيحصل في نص الانقباض وهو بيضخ للأورطي، يعلو مع أقصى عصرة ويهدى لما الدم يخلص (Crescendo-Decrescendo).'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - ميكانيكية ارتجاع الأورطي (AR)',
    question: 'مريض أظهر الفحص السريري لديه نفخة انبساطية مبكرة متناقصة الشدة (Early diastolic decrescendo murmur) تُسمع بأوضح ما يكون فوراً بعد صوت S2. ما السبب الفسيولوجي المباشر؟',
    options: [
      'ارتجاع الأورطي (AR)؛ ففور إغلاق الأورطي يكون ضغطه عالياً (80-120) والبطين مسترخياً بصفر ضغط فيرتد شلال دم فوراً',
      'ضيق الصمام الميترالي (MS)؛ حيث يتدفق الدم بصعوبة عبر الصمام في بداية الانبساط',
      'انقباض الأذينين المفاجئ لدفع آخر 20% من حجم الدم إلى البطين',
      'ارتخاء الصمام الميترالي مما يسبب تسريباً متأخراً في بداية الانبساط'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في ارتجاع الأورطي (Aortic Regurgitation)، بمجرد انتهاء الانقباض وانغلاق الأورطي عند S2، يدخل البطين مرحلة الانبساط وينخفض ضغطه إلى الصفر تقريباً، بينما الشريان الأورطي ممتلئ بضغط مرتفع (80-120 mmHg). هذا الفارق الهائل في الضغط يدفع الدم ليرتد كالشلال إلى البطين عبر الصمام المرتجع فوراً بعد S2، ويهدأ الصوت تدريجياً (Decrescendo) مع تقارب الضغوط وتناقص الدم المرتد.',
    doctor_pearl: '💡 زتونة الامتحان: Early diastolic = أول ما الأورطي قفل عند S2 في بداية الانبساط، ضغط الأورطي 120 والبطين صفر فالدم شلال ارتداد فوري!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - ميكانيكية ضيق الميترالي و Opening Snap',
    question: 'في مريض مصاب بضيق الصمام الميترالي الروماتيزمي (Mitral Stenosis)، ما هو الترتيب الصوتي الدقيق للأحداث المسموعة بالسماعة أثناء فترة الانبساط (Diastole)؟',
    options: [
      'صوت S2 يعقبه طقة انفتاح حادة (Opening Snap) ثم كركبة خشنة في منتصف الانبساط (Mid-diastolic rumble)',
      'نفخة انقباضية شاملة تعقبها مباشرة طقة انفتاح بدون أصوات أخرى',
      'كركبة في أول الانبساط ثم صوت نقرة قذف انقباضية (Ejection click) عند قمة القلب',
      'صوت S1 يعقبه مباشرة لغط انقباضي ذو شكل معيني ثم هدوء تام في الانبساط'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في ضيق الميترالي (MS)، بمجرد انغلاق الأورطي وسماع S2، يحاول الصمام الميترالي المتصلب أن يفتح لنزول الدم؛ فتحدث طقة حادة مفاجئة تسمى Opening Snap (OS). بعد ذلك، وأثناء مرحلة الامتلاء السريع في منتصف الانبساط (Mid-diastole)، يعافر الدم للمرور عبر الفتحة الضيقة مسبباً لغطاً خشناً دحرجياً يسمى Mid-diastolic rumbling murmur.',
    doctor_pearl: '💡 زتونة الامتحان: ضيق الميترالي في الانبساط = S2 يليه طقة انفتاح الصمام المتصلب (Opening Snap) ثم كركبة الدم في الفتحة الضيقة (Mid-diastolic rumble)!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - سر ظاهرة Presystolic Accentuation',
    question: 'ما هو السبب الفسيولوجي لاشتداد وعلو صوت لغط ضيق الميترالي قبل الانقباض الجديد مباشرة (Presystolic accentuation)، ولماذا يختفي هذا الصوت تماماً عند حدوث الرجفان الأذيني (Atrial Fibrillation)؟',
    options: [
      'ناتج عن انقباض الأذين (Atrial Kick) لضخ آخر 20% دم عبر الصمام الضيق؛ ويختفي في الـ AF لفقدان الأذين قدرته على الانقباض الميكانيكي',
      'ناتج عن زيادة الضغط داخل الشريان الأورطي قبل انغلاق الصمام؛ ويختفي في الـ AF لبطء ضربات القلب',
      'ناتج عن ارتجاع الدم من البطين للأذين؛ ويختفي في الـ AF بسبب زيادة ارتخاء الصمام',
      'ناتج عن انقباض عضلات الحليمات؛ ويختفي في الـ AF بسبب التكلس الشديد للشرفات'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في أواخر فترة الانبساط وقبل الانقباض الجديد مباشرة (Pre-systolic)، ينقبض الأذين بقوة (Atrial Kick) ليعصر آخر 20% من الدم في البطين. هذا الاندفاع العنيف عبر الفتحة الضيقة للصمام الميترالي يرفع سرعة الدم فجأة فيعلو صوت اللغط (Accentuation). وفي حالة الرجفان الأذيني (AF)، يرتجف الأذين عشوائياً بدون أي انقباض ميكانيكي حقيقي، فتضيع الـ Atrial Kick ويختفي الـ Presystolic accentuation تماماً!',
    doctor_pearl: '💡 سؤال امتحانات متكرر: لو مريض Mitral Stenosis وفجأة اختفى منه الـ Presystolic accentuation ➔ السبب فوراً حدوث Atrial Fibrillation (AF) لغياب الـ Atrial Kick!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات ونفخات القلب - خريطة التلخيص الذهني الشاملة للنفخات',
    question: 'طبيب امتياز يقوم بمراجعة توقيت نفخات القلب الأربعة الرئيسية في الراوند. أي من المطابقات التالية صحيحة تماماً وفق خريطة حركة الصمامات؟',
    options: [
      'MR = Pan-systolic، و AS = Mid-systolic، و AR = Early diastolic، و MS = Mid-diastolic & Pre-systolic',
      'MR = Early diastolic، و AS = Pan-systolic، و AR = Mid-systolic، و MS = Late systolic',
      'MR = Mid-systolic، و AS = Pre-systolic، و AR = Pan-systolic، و MS = Early diastolic',
      'MR = Pre-systolic، و AS = Early diastolic، و AR = Mid-systolic، و MS = Pan-systolic'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'الخريطة الذهنية الذهبية للنفخات: 1. Pan-systolic: الميترالي مخروم بيسرب والبطين بيعصر طوال الانقباض (Mitral Regurgitation). 2. Mid-systolic: الأورطي ضيق والدم يضخ في ذروة الانقباض (Aortic Stenosis). 3. Early diastolic: الأورطي غير محكم والدم يرتد شلالاً فور إغلاقه عند S2 (Aortic Regurgitation). 4. Mid-diastolic & Pre-systolic: الميترالي ضيق والدم يعافر في منتصف الانبساط ويعلو مع زقة الأذين الأخيرة (Mitral Stenosis).',
    doctor_pearl: '💡 تلخيص الحفظ الفوري للامتحان: (MR: انقباض كامل | AS: نص انقباض | AR: أول انبساط | MS: نص وأواخر انبساط).'
  }
];

async function insertQuizzes() {
  console.log('Inserting', quizzes.length, 'high-yield movie & murmurs quizzes into medical_spaced_quizzes...');
  const now = new Date().toISOString();

  for (let i = 0; i < quizzes.length; i++) {
    const q = quizzes[i];
    const metaObj = {
      options: q.options,
      correct_index: q.correct_option_index,
      explanation: q.answer_and_explanation
    };
    const doctorPearlWithMeta = `<<<QUIZ_META_START>>>${JSON.stringify(metaObj)}<<<QUIZ_META_END>>> ${q.doctor_pearl}`.trim();

    const { data, error } = await supabase.from('medical_spaced_quizzes').insert({
      course_code: q.course_code,
      topic: q.topic,
      question: q.question,
      answer_and_explanation: q.answer_and_explanation,
      doctor_pearl: doctorPearlWithMeta,
      repetition_level: 0,
      next_review_at: now,
      is_mastered: false
    }).select('id');

    if (error) {
      console.error(`❌ Error inserting quiz ${i + 1}:`, error.message);
    } else {
      console.log(`✅ [${i + 1}/6] Inserted quiz ID: ${data[0].id} -> "${q.question.slice(0, 45)}..."`);
    }
  }

  console.log('🎉 All 6 Murmurs Movie quizzes inserted into Spaced Repetition queue successfully!');
}

insertQuizzes().catch(console.error);
