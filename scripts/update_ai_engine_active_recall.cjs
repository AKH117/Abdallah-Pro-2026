const fs = require('fs');

let raw = fs.readFileSync('./lib/ai_engine.js', 'utf8');
const isCrlf = raw.includes('\r\n');
let lines = raw.split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('شروحات ومذكرات المذاكرة الخاصة بالطالب'));
const endIdx = lines.findIndex(l => l.includes('التحشيشات والـ Medical Pearls والنيمونيك'));

console.log('Found startIdx:', startIdx, 'endIdx:', endIdx);

if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
  const newLines = [
    `    - 🩺📖 شروحات ومذكرات المذاكرة وتثبيت المفاهيم بالتكرار المتباعد (Study Explanations & Active Recall Engine):`,
    `      - إذا أرسل الطالب جزء شرح دراسي، أو نص محادثة شرح فيها الذكاء الاصطناعي مفهوماً طبياً كان ملتبساً عليه، أو قال عبارات مثل: ("ثبت لي الشرح ده", "احفظني ده عشان بنساه", "مش عايز أنسى الكلام ده", "حول ده لكويزات وتكرار متباعد", "اختبرني في ده بأسئلة عشان يثبت في دماغي"):`,
    `        ➔ استخرج تفاصيل الشرح المركز في data.study_explanations كمصفوفة كائنات:`,
    `           [`,
    `             {`,
    `               "course_code": "CAD402" أو كود الموديول المناسب حسب السياق,`,
    `               "topic": "عنوان المفهوم الطبي الدقيق",`,
    `               "explanation_text": "نص الشرح الفسيولوجي/السريري الممتع",`,
    `               "key_takeaway": "الزتونة المركزة للحفظ المباشر",`,
    `               "notes": "المغالطة أو سوء الفهم الذي تم تصحيحه"`,
    `             }`,
    `           ]`,
    `        ➔ ⚠️ محوري وإلزامي (Active Retrieval Practice): قم فوراً بتحويل الشرح إلى (2 إلى 4) أسئلة وكويزات تفاعلية MCQs ذكية في data.medical_quizzes!`,
    `           - ركز الأسئلة على النقطة التي كان الطالب متلخبطاً فيها أو سوء الفهم الشائع وتريكة الامتحان.`,
    `           - املأ الحقول بدقة:`,
    `             * "course_code": "CAD402" أو كود الموديول`,
    `             * "topic": "عنوان الموضوع بدقة"`,
    `             * "question": "نص السؤال بصيغة كيس سريرية أو سؤال فسيولوجي دقيق"`,
    `             * "options": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"] (4 خيارات واضحة وقوية)`,
    `             * "correct_option_index": 0 (رقم الإجابة الصحيحة من 0 إلى 3)`,
    `             * "answer_and_explanation": "الشرح الفسيولوجي الميكانيكي لسبب الإجابة الصحيحة ونفي الخطأ"`,
    `             * "doctor_pearl": "💡 زتونة الراوند والامتحان في سطر واحد"`,
    `             * "is_user_submitted": true`,
    `        ➔ إذا ذكر مدة المذاكرة استخرج جلسة تحصيل في data.study، وإن لم يذكر فلا تشترطها.`,
    `    - ❓🩺 أسئلة وكويزات الطالب المباشرة للتثبيت (User-Submitted Medical Quizzes & MCQs):`,
    `      - إذا أرسل الطالب سؤالاً، كويزاً، مسألة سريرية، أو سؤال MCQ للمراجعة والتثبيت:`,
    `        ➔ استخرج السؤال في data.medical_quizzes كمصفوفة كائنات بالهيكل المذكور أعلاه (options، correct_option_index، answer_and_explanation، doctor_pearl).`
  ];

  lines.splice(startIdx, endIdx - startIdx, ...newLines);
  const updatedCode = lines.join(isCrlf ? '\r\n' : '\n');
  fs.writeFileSync('./lib/ai_engine.js', updatedCode, 'utf8');
  console.log('✅ Successfully updated lib/ai_engine.js with Active Recall instructions!');
} else {
  console.error('❌ Could not locate line markers');
}
