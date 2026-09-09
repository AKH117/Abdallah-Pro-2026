const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const rawUrl = process.env.SUPABASE_URL || '';
const supabaseUrl = (rawUrl && !rawUrl.includes('iluvbcadeteawbyrlqmo')) ? rawUrl : 'https://rkpkjilrsylgoomqxouq.supabase.co';
const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
const supabaseKey = (rawKey && !rawUrl.includes('iluvbcadeteawbyrlqmo')) ? rawKey : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcGtqaWxyc3lsZ29vbXF4b3VxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODQ5MDc4MCwiZXhwIjoyMTA0MDY2NzgwfQ.JRYzMZS400S456v3dbmZ5sxp-87DzIa-_gPyq7r6zzk';

const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

// The 25 cards in exact chronological order from user's view (Card 1 = grating cheese, Card 25 = dad's web app)
const cardsToUpdate = [
  {
    id: "137403c6-6177-48ec-9a10-0ff0f614f730",
    term_or_sentence: "I am grating the cheese.",
    expected_ar: "أنا ببشر الجبنة"
  },
  {
    id: "f69ca9b9-f47b-4eb7-81cd-eee344f88c44",
    term_or_sentence: "I am stirring the sauce.",
    expected_ar: "أنا بقلب الصلصة"
  },
  {
    id: "f20a70c8-1279-4649-a543-9e65f00eb76e",
    term_or_sentence: "I am pouring the water.",
    expected_ar: "أنا بصب المية"
  },
  {
    id: "07026e2d-9be8-4931-9c5d-7c20422eb01d",
    term_or_sentence: "I am whisking the egg.",
    expected_ar: "أنا بضرب البيضة بالمضرب"
  },
  {
    id: "14f9b7f6-7ccd-4ae7-833c-2438f1444671",
    term_or_sentence: "I am peeling the potato.",
    expected_ar: "أنا بقشر البطاطسية"
  },
  {
    id: "5179cb39-2b0b-45dd-9159-ac640caf2b11",
    term_or_sentence: "I am squeezing the lemon.",
    expected_ar: "أنا بعصر الليمونة"
  },
  {
    id: "56d35492-f1d1-4bf9-9520-9066477c6efa",
    term_or_sentence: "Even with all these ideas, I still can't figure out how to make money.",
    expected_ar: "كل الأفكار دي وبرضه مش عارف أجيب فلوس إزاي."
  },
  {
    id: "2f1f33da-9950-42a4-80e6-1d946b16dd06",
    term_or_sentence: "I even tried talking to my dad, my uncle, and my cousin to see what ideas they had.",
    expected_ar: "وجربت أتكلم مع والدي وخالي وابن خالتي في أفكار يقولوهالي."
  },
  {
    id: "72b8a9b3-77f8-4522-bcba-4bdd86dbd243",
    term_or_sentence: "I even tried chatting with AI to brainstorm.",
    expected_ar: "جربت أتكلم مع الذكاء الاصطناعي."
  },
  {
    id: "adc4e1a8-83df-45da-a6db-b2947c8683a6",
    term_or_sentence: "I've tried everything and looked everywhere, but I still can't find anything to make money.",
    expected_ar: "عملت كل حاجة ودورت في كل النواحي ومش عارف ألاقي حاجة تجيب لي فلوس."
  },
  {
    id: "00f95141-f241-4b3f-b7ad-093d9e7bd671",
    term_or_sentence: "Right now, I'm honestly looking for a way to make money, but I'm just not finding anything.",
    expected_ar: "أما حالياً بقى فانا حقيقة بدور على حاجة تجيب لي فلوس بس مش لاقي."
  },
  {
    id: "4a29fe41-eccf-4d93-b559-b2eba8f2daf6",
    term_or_sentence: "So we can restore the lost photos and upload them to the new version.",
    expected_ar: "عشان نعرف نرجع الصور اللي تم فقدها ونحطها في النسخة الجديدة."
  },
  {
    id: "ed9fe4ce-a893-4ea3-9346-801098effd8f",
    term_or_sentence: "Which resets at the beginning of every month.",
    expected_ar: "اللي هو بينزل كل أول شهر."
  },
  {
    id: "a2ceaf91-2ecb-401b-b407-b0a09af3689b",
    term_or_sentence: "Now of course, we're waiting for the new month to start so we get our new free limit.",
    expected_ar: "دلوقتي طبعاً مستنيين بداية الشهر الجديد عشان الليمت المجاني الجديد ينزل لنا."
  },
  {
    id: "fcb9e633-8729-43a4-9fb0-ab07a3fc0a9d",
    term_or_sentence: "We had to create another account for now.",
    expected_ar: "اضطرينا إننا نعمل حساب تاني دلوقتي."
  },
  {
    id: "9c866d2e-05cf-45d1-9d8f-5123e1e35068",
    term_or_sentence: "And it had a specific limit of around 5 GB a month.",
    expected_ar: "وكان ليها ليمت معين تقريباً 5 جيجا كل شهر."
  },
  {
    id: "1aca6a2b-87cb-439e-8fdc-11ca02e15d67",
    term_or_sentence: "The problem was that the database version we were using on Supabase was the free tier.",
    expected_ar: "المشكلة كانت إن النسخة اللي بنتعامل بيها على موقع سوبيز بتاعة قاعدة البيانات كانت مجانية."
  },
  {
    id: "04b62c65-5491-485c-b49c-bef7a7dbd101",
    term_or_sentence: "And secondly, thanks to AI, we were able to pinpoint exactly where the problem was.",
    expected_ar: "وثانياً بفضل الذكاء الاصطناعي عرفنا نلاقي المشكلة فين بالضبط."
  },
  {
    id: "38528dd0-b6e8-454e-a926-ce2832c163d4",
    term_or_sentence: "He says one thing, and we say another.",
    expected_ar: "هو بيقول حاجة واحنا بنقول حاجة تاني."
  },
  {
    id: "7e2ec224-d361-4b47-9b78-f8319c42ca80",
    term_or_sentence: "For example, there was a difference of about 200,000 pounds between us and a merchant named Tawfiq Salem.",
    expected_ar: "يعني مثلاً في تاجر اسمه توفيق سالم كان فيه فرق ما بينه وبيننا حوالي 200 ألف جنيه."
  },
  {
    id: "9fbd5fd0-8fb2-40f2-9536-15e968219986",
    term_or_sentence: "Of course, there were huge discrepancies in the accounts of suppliers and merchants.",
    expected_ar: "طبعاً كان فيه فروقات كبيرة جداً في حسابات الموردين والتجار."
  },
  {
    id: "a2145d72-abc2-4422-bed1-3f013585cf67",
    term_or_sentence: "Like photos of contracts, release vouchers, and all that stuff.",
    expected_ar: "زي صور العقود وصور الإذون والكلام ده كله."
  },
  {
    id: "659b911f-6c45-45b1-9c26-c818d0225730",
    term_or_sentence: "But unfortunately, of course, some things were lost.",
    expected_ar: "بس للأسف طبعاً في حاجات تم فقدها."
  },
  {
    id: "ab2a04e4-f588-4f93-b1fd-e2c8eecf7415",
    term_or_sentence: "Thank God, I figured out a way to work around the problem and build a second version of it.",
    expected_ar: "الحمد لله عرفت أتفادى المشكلة وأعمل نسخة تانية منه."
  },
  {
    id: "4fcfb40b-3a62-465d-b671-b9ee657a039e",
    term_or_sentence: "Plus, my dad's entire business and all the clients are on this web app.",
    expected_ar: "كمان شغل أبويا وكل العملاء موجودين على الويب أب ده."
  }
];

async function run() {
  console.log('🚀 Starting Database Update for 25 English Spaced Flashcards...');
  const now = Date.now();

  for (let i = 0; i < cardsToUpdate.length; i++) {
    const card = cardsToUpdate[i];
    // First card due right now! Following cards staggered by 30 mins, 1 hr, etc.
    const delayMinutes = i === 0 ? 0 : Math.min(24 * 60, 20 + i * 35);
    const nextReview = new Date(now + delayMinutes * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from('english_spaced_flashcards')
      .update({
        term_or_sentence: card.term_or_sentence,
        usage_context: `[UID:1191760477] conversation`,
        next_review_at: nextReview,
        is_mastered: false,
        repetition_level: 0,
        last_reviewed_at: null
      })
      .eq('id', card.id)
      .select('id, term_or_sentence, egyptian_translation');

    if (error) {
      console.error(`❌ Error updating card ${card.id}:`, error.message);
    } else {
      console.log(`✅ [${i + 1}/25] Updated: "${card.term_or_sentence}" ➔ "${card.expected_ar}" (Review in ${delayMinutes}m)`);
    }
  }

  // Also tag older 12:48 cards so they have [UID:1191760477]
  const { data: olderCards } = await supabase
    .from('english_spaced_flashcards')
    .select('id')
    .lt('created_at', '2026-09-08T13:00:00Z');

  if (olderCards && olderCards.length > 0) {
    for (const oc of olderCards) {
      await supabase
        .from('english_spaced_flashcards')
        .update({ usage_context: `[UID:1191760477] conversation` })
        .eq('id', oc.id);
    }
    console.log(`✅ Tagged ${olderCards.length} older cards with [UID:1191760477]`);
  }

  // Clear stale daily locks from bot_sessions (chat_id: 888888)
  const { data: trackerRow } = await supabase
    .from('bot_sessions')
    .select('data')
    .eq('chat_id', 888888)
    .maybeSingle();

  if (trackerRow?.data) {
    const tracker = trackerRow.data;
    let modified = false;
    for (const k of Object.keys(tracker)) {
      if (k.startsWith('eng_spaced_user_1191760477') || k.startsWith('eng_spaced_user_')) {
        delete tracker[k];
        modified = true;
      }
    }
    if (modified) {
      await supabase
        .from('bot_sessions')
        .update({ data: tracker, updated_at: new Date().toISOString() })
        .eq('chat_id', 888888);
      console.log('✅ Cleared stale eng_spaced_user locks from notification tracker!');
    }
  }

  console.log('🎉 Database update finished successfully!');
}

run().catch(console.error);
