const fs = require('fs');

let code = fs.readFileSync('lib/handlers.js', 'utf8');
code = code.replace(/\r\n/g, '\n');

const search = `      const fullExplanation = result.quiz?.explanation || result.quiz?.answer_and_explanation;
      if (fullExplanation) {
        const rtlExplanation = fullExplanation
          .split('\\n')
          .map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            if (/^[a-zA-Z0-9\\[\\(]/.test(trimmed)) {
              return \`🔹 \\u200F\${trimmed}\`;
            }
            return \`\\u200F\${trimmed}\`;
          })
          .join('\\n');
        msg += \`📋 <b>الشرح الإكلينيكي والتشريحي الكامل للخمس نقاط:</b>\\n\\n\`;
        msg += \`\${rtlExplanation}\\n\\n\`;
      }`;

const replace = `      let fullExplanation = result.quiz?.explanation || result.quiz?.answer_and_explanation || '';
      if (fullExplanation) {
        if (!fullExplanation.includes('📋 <b>الشرح')) {
          msg += \`📋 <b>الشرح الإكلينيكي والتشريحي الكامل بالطريقة الخماسية المعتمدة:</b>\\n\\n\`;
        }
        if (!fullExplanation.includes('English Clinical Stem') && !fullExplanation.includes('رأس السؤال') && result.quiz?.question) {
          msg += \`📝 <b>أولاً - رأس السؤال السريري:</b>\\n• <b>English Clinical Stem:</b>\\n<i>\"\${result.quiz.question}\"</i>\\n\\n\`;
        }
        msg += \`\${fullExplanation}\\n\\n\`;
      }`;

if (code.includes(search)) {
  code = code.replace(search, replace);
  fs.writeFileSync('lib/handlers.js', code, 'utf8');
  console.log('✅ Successfully patched lib/handlers.js explanation formatting!');
} else {
  console.error('❌ Search block not found in lib/handlers.js');
}
