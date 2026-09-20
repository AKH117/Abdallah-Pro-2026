// 🩺 سكريبت تغذية شروح المنهج وأسئلة الكويزات السريرية المعتمدة
// د. عبدالله - Block 7 (Cardiology & Pediatrics)

import { MEDICAL_CURRICULUM } from '../lib/medical_curriculum.js';
import { saveNativeQuizPoll, ADMIN_CHAT_ID, supabase } from '../lib/supabase.js';

async function ingestCurriculum() {
  console.log('🚀 Starting Medical Curriculum & Quizzes Ingestion for Dr. Abdallah...');
  console.log(`Found ${MEDICAL_CURRICULUM.length} high-yield lessons with clinical vignette quizzes.\n`);

  let insertedCount = 0;
  for (const lesson of MEDICAL_CURRICULUM) {
    console.log(`Processing: [${lesson.course_code}] ${lesson.title}...`);

    const q = lesson.quiz;
    const fullExplanation = `${lesson.summary_card}\n\n🔍 <b>تحليل السؤال والخيارات:</b>\n• <b>الصحيح:</b> ${q.options_analysis.correct}\n• <b>المشتتات:</b>\n  ${q.options_analysis.distractors.join('\n  ')}\n\n💡 <b>التحشيشة:</b> ${q.mnemonic_scheme}\n📚 <b>المصطلحات:</b> ${q.terms_to_memorize}`;

    const saved = await saveNativeQuizPoll(ADMIN_CHAT_ID, {
      course_code: lesson.course_code,
      topic: lesson.topic,
      question: q.question,
      options: q.options,
      correct_option_index: q.correct_option_index,
      explanation: fullExplanation,
      repetition_level: 0,
      next_review_at: new Date().toISOString()
    });

    if (saved && !saved.skipped) {
      insertedCount++;
      console.log(`  ✅ Saved quiz for lesson: ${lesson.title}`);
    } else {
      console.log(`  ⚪ Skipped / updated: ${lesson.title}`);
    }
  }

  // Check total medical quizzes now in DB
  const { count, error } = await supabase
    .from('medical_spaced_quizzes')
    .select('*', { count: 'exact', head: true })
    .ilike('topic', `%[UID:${ADMIN_CHAT_ID}]%`);

  console.log(`\n🎉 Ingestion complete! Total active quizzes for Dr. Abdallah in DB: ${count} (Error: ${error?.message || 'none'})`);
}

ingestCurriculum().catch(err => {
  console.error('Fatal ingestion error:', err);
  process.exit(1);
});
