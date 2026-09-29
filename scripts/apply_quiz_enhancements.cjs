const fs = require('fs');

console.log('=== Step 1: Updating lib/handlers.js ===');
let handlers = fs.readFileSync('./lib/handlers.js', 'utf8');

// Ensure import
if (!handlers.includes('splitTelegramHtml')) {
  handlers = handlers.replace(
    'formatNativePollExplanation,',
    'formatNativePollExplanation,\n  splitTelegramHtml,'
  );
  console.log('Imported splitTelegramHtml');
}

// Replace sendOptions block in bot.on('poll_answer')
const searchHandlers = `      const targetChatId = result.quiz?.chat_id || fromId;
      const targetMessageId = result.quiz?.message_id;

      const sendOptions = {
        parse_mode: 'HTML',
        reply_markup: keyboard
      };
      if (targetMessageId) {
        sendOptions.reply_to_message_id = targetMessageId;
      }

      await bot.telegram.sendMessage(targetChatId, msg, sendOptions).catch(async (err) => {
        console.warn('[poll_answer HTML Send Error]:', err.message);
        delete sendOptions.reply_to_message_id;
        const plainMsg = msg.replace(/<[^>]*>/g, '');
        await bot.telegram.sendMessage(targetChatId, plainMsg, sendOptions).catch(() => {});
      });`;

const replaceHandlers = `      const targetChatId = result.quiz?.chat_id || fromId;
      const targetMessageId = result.quiz?.message_id;

      // 🛡️ Smart Chunking & Reply Guarantee Engine:
      // Prevents Telegram 400 Bad Request (message too long > 4096 chars)
      // Parts are linked to the quiz via reply_to_message_id
      const chunks = splitTelegramHtml(msg, 3600);

      for (let i = 0; i < chunks.length; i++) {
        const isFirst = (i === 0);
        const isLast = (i === chunks.length - 1);
        const chunkText = chunks[i];

        const sendOptions = {
          parse_mode: 'HTML'
        };
        if (isLast) {
          sendOptions.reply_markup = keyboard;
        }
        if (isFirst && targetMessageId) {
          sendOptions.reply_to_message_id = targetMessageId;
        }

        try {
          await bot.telegram.sendMessage(targetChatId, chunkText, sendOptions);
        } catch (sendErr) {
          console.warn(\`[poll_answer Chunk \${i + 1} Error]:\`, sendErr.message);
          // If error was caused by invalid/expired reply_to_message_id, retry without it
          if (sendOptions.reply_to_message_id) {
            delete sendOptions.reply_to_message_id;
            try {
              await bot.telegram.sendMessage(targetChatId, chunkText, sendOptions);
            } catch (retryErr) {
              console.warn(\`[poll_answer Chunk \${i + 1} Retry Error]:\`, retryErr.message);
              const plainMsg = chunkText.replace(/<[^>]*>/g, '');
              await bot.telegram.sendMessage(targetChatId, plainMsg, { reply_markup: isLast ? keyboard : undefined }).catch(() => {});
            }
          } else {
            const plainMsg = chunkText.replace(/<[^>]*>/g, '');
            await bot.telegram.sendMessage(targetChatId, plainMsg, { reply_markup: isLast ? keyboard : undefined }).catch(() => {});
          }
        }
      }`;

const normHandlers = handlers.replace(/\r\n/g, '\n');
const normSearchH = searchHandlers.replace(/\r\n/g, '\n');
const normReplaceH = replaceHandlers.replace(/\r\n/g, '\n');

if (normHandlers.includes(normSearchH)) {
  handlers = normHandlers.replace(normSearchH, normReplaceH);
  fs.writeFileSync('./lib/handlers.js', handlers, 'utf8');
  console.log('✅ Updated lib/handlers.js successfully!');
} else {
  console.error('❌ Could not find search block in lib/handlers.js');
}

console.log('=== Step 2: Updating lib/scheduler.js ===');
let scheduler = fs.readFileSync('./lib/scheduler.js', 'utf8');

const searchScheduler = `            // If the clinical question is long (> 120 chars) or has an Arabic translation, send the full scenario card in introMsg so it NEVER gets cut off!
            if (quiz.question.length > 120 || arabicTr) {
              let introMsg = \`🩺 <b>كويز وتثبيت إكلينيكي [\${quiz.course_code || 'MED'}] 🧠✨</b>\\n\`;
              introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
              introMsg += \`📋 <b>الحالة والسيناريو السريري (Clinical Scenario):</b>\\n\`;
              introMsg += \`<i>\${quiz.question}</i>\\n\\n\`;
              if (arabicTr) {
                const rtlTr = arabicTr.split('\\n').map(l => l.trim() ? \`\\u200F\${l}\` : '').join('\\n');
                introMsg += \`📝 <b>الترجمة والتوضيح السريري للحالة:</b>\\n\`;
                introMsg += \`\${rtlTr}\\n\\n\`;
              }
              introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
              introMsg += \`👇 <i>اختر الإجابة أو السمة السريرية الأنسب من الاستطلاع أدناه (+30 Doctor XP):</i>\`;
              await bot.telegram.sendMessage(chatId, introMsg, { parse_mode: 'HTML' }).catch(() => {});

              // Extract the concise question clause or build a neat prompt
              const sentences = quiz.question.split(/[.?؟]/).map(s => s.trim()).filter(Boolean);
              const lastSentence = sentences.length > 1 ? sentences[sentences.length - 1] : '';
              if (lastSentence.length >= 15 && lastSentence.length <= 250) {
                pollPrompt = \`[\${quiz.course_code || 'MED'}] \${lastSentence}?\`;
              } else {
                pollPrompt = \`[\${quiz.course_code || 'MED'}] ما هو التشخيص أو الإجراء الأنسب للحالة؟\`;
              }
            } else {
              const introMsg = \`🩺 <b>كويز طبي للمراجعة والتثبيت [\${quiz.course_code || 'MED'}] 🧠✨</b>\\n━━━━━━━━━━━━━━━━━━━━━\\n👇 <i>اختر التشخيص أو الإجابة الصحيحة لتثبيت المفهوم (+30 Doctor XP):</i>\`;
              await bot.telegram.sendMessage(chatId, introMsg, { parse_mode: 'HTML' }).catch(() => {});
              pollPrompt = \`[\${quiz.course_code || 'MED'}] \${quiz.question}\`;
            }`;

const replaceScheduler = `            // 🩺 Universal Standardized 2-Step Clinical Quiz Presentation:
            // 1. Message 1: Full Clinical Case Card & Scenario Stem (NO topic spoiler! Up to 4096 chars - NEVER gets cut off!)
            let introMsg = \`🩺 <b>كويز وتثبيت إكلينيكي [\${quiz.course_code || 'MED'}] 🧠✨</b>\\n\`;
            introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
            introMsg += \`📋 <b>الحالة والسيناريو السريري (Clinical Scenario):</b>\\n\`;
            introMsg += \`<i>\${quiz.question}</i>\\n\\n\`;
            if (arabicTr) {
              const rtlTr = arabicTr.split('\\n').map(l => l.trim() ? \`\\u200F\${l}\` : '').join('\\n');
              introMsg += \`📝 <b>الترجمة والتوضيح السريري للحالة:</b>\\n\`;
              introMsg += \`\${rtlTr}\\n\\n\`;
            }
            introMsg += \`━━━━━━━━━━━━━━━━━━━━━\\n\`;
            introMsg += \`👇 <i>اختر الإجابة أو السمة السريرية الأنسب من الاستطلاع أدناه (+30 Doctor XP):</i>\`;
            await bot.telegram.sendMessage(chatId, introMsg, { parse_mode: 'HTML' }).catch(() => {});

            // 2. Message 2: Concise Telegram Quiz Poll with choices
            const sentences = quiz.question.split(/[.?؟]/).map(s => s.trim()).filter(Boolean);
            const lastSentence = sentences.length > 1 ? sentences[sentences.length - 1] : '';
            if (lastSentence.length >= 15 && lastSentence.length <= 250) {
              pollPrompt = \`[\${quiz.course_code || 'MED'}] \${lastSentence}?\`;
            } else {
              pollPrompt = \`[\${quiz.course_code || 'MED'}] ما هو التشخيص أو الإجراء الأنسب للحالة؟\`;
            }`;

const normScheduler = scheduler.replace(/\r\n/g, '\n');
const normSearchS = searchScheduler.replace(/\r\n/g, '\n');
const normReplaceS = replaceScheduler.replace(/\r\n/g, '\n');

if (normScheduler.includes(normSearchS)) {
  scheduler = normScheduler.replace(normSearchS, normReplaceS);
  fs.writeFileSync('./lib/scheduler.js', scheduler, 'utf8');
  console.log('✅ Updated lib/scheduler.js successfully!');
} else {
  console.error('❌ Could not find search block in lib/scheduler.js');
}

console.log('✨ All enhancements applied cleanly!');
