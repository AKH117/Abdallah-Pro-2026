const fs = require('fs');

let content = fs.readFileSync('lib/supabase.js', 'utf8');

const oldCode = `export function extractArabicQuestionTranslation(explanation) {
  if (!explanation) return null;
  const match = explanation.match(/(?:📝\\s*)?(?:<b>)?أولاً\\s*-\\s*ترجمة رأس السؤال السريري:(?:<\\/b>)?\\s*([\\s\\S]*?)(?=\\n\\n(?:🔍|⚖️|🧠|🇬🇧|$))/i);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}`;

const newCode = `export function extractArabicQuestionTranslation(explanation) {
  if (!explanation) return null;

  // Style 1: • (flag) <b>الترجمة والتوضيح بالمصري:</b> ...
  const m1 = explanation.match(/•\\s*(?:[^\\w\\s<>]{1,4}\\s*)?(?:<b>)?الترجمة\\s*والتوضيح\\s*(?:بالمصري|السريري)?:?(?:<\\/b>)?\\s*[«"“]?([\\s\\S]*?)(?:[»"”])?\\s*(?=\\n\\n(?:🔍|⚖️|🧠|🇬🇧|•|$))/i);
  if (m1 && m1[1] && m1[1].trim()) {
    let clean = m1[1].trim();
    if (clean.startsWith('«') || clean.startsWith('"') || clean.startsWith('“')) clean = clean.substring(1).trim();
    if (clean.endsWith('»') || clean.endsWith('"') || clean.endsWith('”')) clean = clean.substring(0, clean.length - 1).trim();
    return clean;
  }

  // Style 2: أولاً - ترجمة رأس السؤال السريري:
  const m2 = explanation.match(/(?:📝\\s*)?(?:<b>)?أولاً\\s*-\\s*ترجمة\\s*رأس\\s*السؤال\\s*السريري:?(?:<\\/b>)?\\s*([\\s\\S]*?)(?=\\n\\n(?:🔍|⚖️|🧠|🇬🇧|$))/i);
  if (m2 && m2[1] && m2[1].trim()) {
    return m2[1].trim();
  }

  return null;
}`;

const normalized = content.replace(/\r\n/g, '\n');
if (normalized.includes(oldCode)) {
  const updated = normalized.replace(oldCode, newCode);
  fs.writeFileSync('lib/supabase.js', updated, 'utf8');
  console.log('✅ Successfully updated extractArabicQuestionTranslation in lib/supabase.js');
} else {
  console.error('❌ oldCode not found in lib/supabase.js');
}
