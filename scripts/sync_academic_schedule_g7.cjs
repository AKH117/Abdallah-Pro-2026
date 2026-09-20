// 🏛️ سكريبت تغذية وتحديث جدول سكاشن ومحاضرات جروب 7 (د. عبدالله)
// يربط المواعيد والقاعات المعتمدة في كلية الطب - الفرقة الرابعة (Block 7)

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const ADMIN_CHAT_ID = 1191760477;

const G7_SCHEDULE = [
  // ─── الأحد ────────────────────────────────────────────────────────
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة مقدمة الكارديولوجي (CAD Intro to Cardiology)',
    day_of_week: 'الأحد',
    start_time: '08:45',
    end_time: '10:25',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 30,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة رسم القلب القياسي (CAD Normal ECG Blueprint)',
    day_of_week: 'الأحد',
    start_time: '10:30',
    end_time: '12:10',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 20,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '💬 سكشن SGD CAD (مناقشة الحالات السريرية لجروب 7)',
    day_of_week: 'الأحد',
    start_time: '12:30',
    end_time: '14:10',
    location: 'المستشفى — قاعة 14',
    type: 'سكشن SGD (جروب 7)',
    reminder_mins_before: 25,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🩺 راوند SGT CAD الإكلينيكي (تدريس سريري بالأقسام والعيادات)',
    day_of_week: 'الأحد',
    start_time: '14:15',
    end_time: '15:55',
    location: 'المستشفى — الأقسام الداخلية والعيادات الخارجية',
    type: 'راوند إكلينيكي SGT (جروب 7)',
    reminder_mins_before: 20,
    is_active: true
  },

  // ─── الإثنين (يوم المهارات والاستذكار الحر) ────────────────────────
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'SKL 7',
    title: '🧪 معمل المهارات المفتوح (Open Lab) وجلسة استذكار القلب الحر',
    day_of_week: 'الإثنين',
    start_time: '12:30',
    end_time: '14:10',
    location: 'المستشفى — قاعة 1 (معمل المهارات المفتوح)',
    type: 'تدريب مهارات عملي مفتوح',
    reminder_mins_before: 30,
    is_active: true
  },

  // ─── الثلاثاء ─────────────────────────────────────────────────────
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة أمراض الصمام الميترالي (CAD Mitral Valve Diseases)',
    day_of_week: 'الثلاثاء',
    start_time: '08:45',
    end_time: '10:25',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 30,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'PED',
    title: '👶 محاضرة نمو وتقييم الأطفال (PED Growth & Assessment)',
    day_of_week: 'الثلاثاء',
    start_time: '10:30',
    end_time: '12:10',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 20,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🏥 سكشن Alex CAD (سكشن الإسكندرية والتدريب التطبيقي)',
    day_of_week: 'الثلاثاء',
    start_time: '12:30',
    end_time: '14:10',
    location: 'المستشفى — قاعة 15',
    type: 'سكشن Alex (جروب 7)',
    reminder_mins_before: 25,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🩺 راوند كلينيكال باطنة وقلب (Clinical CAD Round)',
    day_of_week: 'الثلاثاء',
    start_time: '14:15',
    end_time: '15:55',
    location: 'المستشفى — قاعة 10 (المجموعات الفردية 7)',
    type: 'كلينيكال سريري (جروب 7)',
    reminder_mins_before: 20,
    is_active: true
  },

  // ─── الأربعاء ────────────────────────────────────────────────────
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'PED',
    title: '👶 محاضرة اضطرابات النمو الجسدي للأطفال (PED Growth Disorders)',
    day_of_week: 'الأربعاء',
    start_time: '08:45',
    end_time: '10:25',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 30,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة أمراض الصمام الأورطي (CAD Aortic Valve Diseases)',
    day_of_week: 'الأربعاء',
    start_time: '10:30',
    end_time: '12:10',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 20,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'SKL 7',
    title: '🔬 سكشن معمل المهارات المعتمد (Skill Lab 7 - Group 7)',
    day_of_week: 'الأربعاء',
    start_time: '12:30',
    end_time: '14:10',
    location: 'المستشفى — قاعة 4',
    type: 'معمل مهارات إكلينيكي (جروب 7)',
    reminder_mins_before: 25,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '📋 مناقشة الحالات السريرية المتقدمة (Cases 7&8 Round)',
    day_of_week: 'الأربعاء',
    start_time: '14:15',
    end_time: '15:55',
    location: 'مبنى 3 — قاعة 3103',
    type: 'مناقشة حالات سريرية (جروب 7)',
    reminder_mins_before: 20,
    is_active: true
  },

  // ─── الخميس ──────────────────────────────────────────────────────
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة الصمامات الثلاثية والصناعية (Tricuspid & Prosthetic Valves)',
    day_of_week: 'الخميس',
    start_time: '08:45',
    end_time: '10:25',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 30,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'CAD',
    title: '🫀 محاضرة تصلب الشرايين والدهون (Atherosclerosis & Dyslipidemia)',
    day_of_week: 'الخميس',
    start_time: '10:30',
    end_time: '12:10',
    location: 'مدرج الكلية الرئيسي',
    type: 'محاضرة مدرج',
    reminder_mins_before: 20,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'PED',
    title: '👶 سكشن وحالات طب الأطفال (SGT & SGD PED - Group 7)',
    day_of_week: 'الخميس',
    start_time: '12:30',
    end_time: '14:10',
    location: 'مبنى 2 — قاعة 2018',
    type: 'سكشن أطفال (جروب 7)',
    reminder_mins_before: 25,
    is_active: true
  },
  {
    telegram_id: ADMIN_CHAT_ID,
    course_code: 'PED',
    title: '👶 راوند طب الأطفال السريري (Clinical PED Round - Group 7)',
    day_of_week: 'الخميس',
    start_time: '14:15',
    end_time: '15:55',
    location: 'المستشفى — قاعة 12 (المجموعات الفردية 7)',
    type: 'كلينيكال أطفال (جروب 7)',
    reminder_mins_before: 20,
    is_active: true
  }
];

async function syncG7Schedule() {
  console.log('🏛️ Starting Group 7 Academic Schedule Synchronization to Supabase...');

  // 1. Delete previous schedule for admin to prevent duplicates
  const { error: delErr } = await supabase
    .from('academic_schedule')
    .delete()
    .eq('telegram_id', ADMIN_CHAT_ID);

  if (delErr) {
    console.error('Error clearing old schedule:', delErr.message);
  } else {
    console.log('🗑️ Cleaned previous schedule rows for admin.');
  }

  // 2. Insert new official G7 timetable
  const { data, error: insErr } = await supabase
    .from('academic_schedule')
    .insert(G7_SCHEDULE)
    .select();

  if (insErr) {
    console.error('❌ Failed to insert G7 schedule:', insErr.message);
    process.exit(1);
  }

  console.log(`✅ Successfully synced ${data.length} official lectures and sections for Group 7!`);
  data.forEach((row, i) => {
    console.log(`  ${i + 1}. [${row.day_of_week}] ${row.start_time} - ${row.end_time} | ${row.course_code}: ${row.title} 📍 ${row.location}`);
  });
}

syncG7Schedule();
