const fs = require('fs');

let raw = fs.readFileSync('./lib/ai_engine.js', 'utf8');
const isCrlf = raw.includes('\r\n');
let lines = raw.split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('Active Retrieval Practice): قم فوراً بتحويل الشرح إلى'));
const endIdx = lines.findIndex(l => l.includes('أسئلة وكويزات الطالب المباشرة للتثبيت'));

if (startIdx !== -1 && endIdx !== -1) {
  const replacementLines = [
    `        ➔ ⚠️ محوري وإلزامي (Active Retrieval Practice - English Exam Standard):`,
    `           قم فوراً بتحويل الشرح إلى (2 إلى 4) أسئلة وكويزات تفاعلية MCQs ذكية في data.medical_quizzes!`,
    `           - 🚨 قاعدة لغوية صارمة: امتحانات كليات الطب البشري بالكامل باللغة الإنجليزية؛ لذا يجب إجبارياً أن يكون رأس السؤال ("question") وجميع الخيارات الأربعة ("options") وعنوان الموضوع ("topic") باللغة الإنجليزية الطبية السريرية الأكاديمية بنسبة 100% (USMLE / College Exam Vignette Style) بدون أي كلمة عربية داخل رأس السؤال أو الخيارات!`,
    `           - في حقل "answer_and_explanation": ضع ترجمة رأس السؤال للعربية + الشرح الفسيولوجي الميكانيكي لسبب الإجابة الصحيحة ونفي الخيارات الأخرى.`,
    `           - في حقل "doctor_pearl": ضع زتونة وتريكة الراوند للامتحان.`,
    `           - املأ الحقول بدقة:`,
    `             * "course_code": "CAD402" أو كود الموديول`,
    `             * "topic": "Medical English Topic Title (e.g. Mitral Stenosis Auscultation)"`,
    `             * "question": "Full clinical vignette question strictly in 100% Medical English"`,
    `             * "options": ["English Option 1", "English Option 2", "English Option 3", "English Option 4"]`,
    `             * "correct_option_index": 0 (رقم الإجابة الصحيحة من 0 إلى 3)`,
    `             * "answer_and_explanation": "ترجمة السؤال + الشرح التحليلي وتريكة الراوند"`,
    `             * "doctor_pearl": "💡 زتونة الامتحان بالعامية المصرية"`,
    `             * "is_user_submitted": true`,
    `        ➔ إذا ذكر مدة المذاكرة استخرج جلسة تحصيل في data.study، وإن لم يذكر فلا تشترطها.`
  ];

  lines.splice(startIdx, endIdx - startIdx, ...replacementLines);
  const updatedCode = lines.join(isCrlf ? '\r\n' : '\n');
  fs.writeFileSync('./lib/ai_engine.js', updatedCode, 'utf8');
  console.log('✅ Successfully updated lib/ai_engine.js with STRICT 100% Medical English Exam Rule!');
} else {
  console.error('❌ Could not find line markers in lib/ai_engine.js');
}
