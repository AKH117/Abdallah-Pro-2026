const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const quizzes = [
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] دورة عمل القلب - بداية الانقباض (Isovolumetric Contraction Phase)',
    question: 'أي من الأحداث الفسيولوجية التالية يمثل البداية الحقيقية لانقباض البطين (Beginning of Systole) بدقة؟',
    options: [
      'قفل الصمام الميترالي وظهور صوت S1 مع بقاء جميع الصمامات مقفولة وثبات حجم الدم (Isovolumetric Contraction)',
      'فتح الصمام الأورطي وبدء اندفاع أول دفعة دم إلى الشريان (Rapid Ejection Phase)',
      'وصول الضغط داخل البطين إلى أقصى ذروة له (Peak Systolic Pressure)',
      'انقباض الأذينين وضخ آخر 20% من الدم إلى البطين (Atrial Kick)'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'انقباض البطين (Systole) يبدأ بالمللي ثانية لحظة انقباض جدار البطين وانغلاق الصمام الميترالي مسبباً الصوت الأول S1. في هذه المرحلة (Isovolumetric Contraction Phase) تكون كافة صمامات القلب مقفولة تماماً وحجم الدم ثابت ومش بيتحرك. أما لحظة فتح الأورطي وخروج أول دفعة دم، فهذه ليست بداية الانقباض، بل هي بداية مرحلة القذف السريع (Rapid Ejection Phase) التي تحدث في منتصف الانقباض (Mid-systole).',
    doctor_pearl: '💡 زتونة الامتحان: بداية الـ Systole = قفل الـ Mitral وصوت S1 مع ثبات الحجم (Isovolumetric). خروج الدم = بداية الـ Ejection phase وليس بداية الانقباض!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أمراض الصمامات - سبب توقيت الـ Click في MVP',
    question: 'لماذا يتأخر ظهور صوت الطقة الانقباضية (Mid-to-late systolic click) في ارتخاء الصمام الميترالي (MVP) إلى منتصف الانقباض ولا يظهر في أوله؟',
    options: [
      'لصغر حجم تجويف البطين بعد قذف الدم مما يرخي الحبال الوترية فتسمح بانقلاب الشرفة فجأة للأذين',
      'لأن الصمام الميترالي لا ينغلق إطلاقاً في بداية الانقباض',
      'لعدم وجود ضغط دم كافٍ داخل البطين الأيسر في أول الانقباض',
      'لأن الحبال الوترية تكون مرتخية في بداية الانقباض وتتشد في آخره'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'في بداية الانقباض (Early Systole) يكون البطين ممتلئاً بالكامل بالدم (End-diastolic volume)، مما يبقي الحبال الوترية (Chordae tendineae) مشدودة تمنع انقلاب الصمام، فيبدو الصمام سليماً ومقفولاً. لكن بعد استمرار الانقباض وقذف الدم يصغر تجويف البطين ويكش، فتقترب أرضية البطين من السقف وترتخي الحبال الوترية، فيسمح الضغط العالي بانقلاب شرفة الصمام فجأة داخل الأذين وتتشد حبالها في منتصف الانقباض مسببة Mid-to-late systolic click يتبعها لغط متأخر (Late systolic murmur).',
    doctor_pearl: '💡 قاعدة ذهبية: في الـ MVP: أول الانقباض البطين مليان فالصمام ممسوك ومشدود -> لا صوت. لما البطين يكش في منتصف الانقباض الحبال ترتخي والصمام يقلب -> Mid-systolic click!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أمراض الصمامات - Aortic Ejection Click وعيب Bicuspid Valve',
    question: 'شاب يبلغ 25 عاماً يعاني من نفخة تضيق الصمام الأورطي، وسُمعت بالسماعة نقرة حادة في بداية الانقباض (Ejection Click) لحظة فتح الصمام. ما هو التفسير السريري الأكثر دقة؟',
    options: [
      'عيب خلقي لصمام أورطي ثنائي الشرفات متيبس ومتكلس يفتح فجأة برزعة حادة مع اندفاع الدم (Bicuspid Aortic Valve)',
      'ارتخاء في شرفة الصمام الميترالي وانقلابها داخل الأذين الأيسر (Mitral Valve Prolapse)',
      'صوت فسيولوجي طبيعي ينتج عن التدفق الدموي الطبيعي داخل الشريان الأورطي',
      'انغلاق مفاجئ لصمام صناعي معدني مزروع (Mechanical Prosthetic Valve)'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'الصمام الأورطي الطبيعي رقيق وناعم ويفتح بسلاسة وصمت تام وبدون أي صوت. في حالة العيب الخلقي (Bicuspid Aortic Valve) يكون الصمام بشرفتين ويتكلس ويتيبس مع السنين، فعندما ينقبض البطين بقوة في بداية الانقباض لا يفتح بسلاسة بل يُجبر على الفتح فجأة برزعة أو نقرة حادة (Ejection click) لحظة قذف الدم.',
    doctor_pearl: '💡 زتونة الامتحان المباشرة: مريض شاب + ضيق أورطي + Ejection Click في بداية الانقباض = التشخيص فوراً Bicuspid Aortic Valve!'
  },
  {
    course_code: 'CAD402',
    topic: '[UID:1191760477] [USER_INPUT] أصوات القلب الإضافية - تمييز أصوات الـ CLICK في الامتحان والراوند',
    question: 'فتاة شابة تبلغ 20 عاماً حضرت للفحص الروتيني، وبالتسمع على قمة القلب (Apex) وُجد صوت نقرة حادة في منتصف الانقباض يليها لغط متأخر (Mid-systolic click followed by late systolic murmur). ما التشخيص الأكيد؟',
    options: [
      'ارتخاء الصمام الميترالي (Mitral Valve Prolapse - MVP)',
      'ضيق الصمام الأورطي ثنائي الشرفات (Bicuspid Aortic Valve)',
      'ارتجاع الصمام الأورطي الحاد (Aortic Regurgitation)',
      'انغلاق صمام قلبي معدني صناعي (Mechanical Valve Closure)'
    ],
    correct_option_index: 0,
    answer_and_explanation: 'سماع صوت Mid-to-late systolic click في قمة القلب يليه Late systolic murmur في فتاة شابة هو المفتاح الكلاسيكي لارتخاء الصمام الميترالي (MVP). تذكر خريطة الـ Click: الـ Mid-systolic click للميترالي MVP، والـ Ejection click في أول الانقباض للأورطي Bicuspid، والـ Metallic closing click للصمام الصناعي المعدني.',
    doctor_pearl: '💡 ثلاثية الـ Click في الامتحان: 1. فتاة شابة + Mid-systolic click = MVP. 2. بداية الانقباض + Ejection click = Bicuspid Aortic Valve. 3. تكة معدنية صريحة عند القفل = Mechanical Valve!'
  }
];

async function insertQuizzes() {
  console.log('Inserting', quizzes.length, 'high-yield medical quizzes into medical_spaced_quizzes...');
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
      console.log(`✅ [${i + 1}/4] Inserted quiz ID: ${data[0].id} -> "${q.question.slice(0, 45)}..."`);
    }
  }

  console.log('🎉 All high-yield cardiology quizzes inserted into Spaced Repetition queue successfully!');
}

insertQuizzes().catch(console.error);
