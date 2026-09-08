// 🔄 محرك التدوير الحلقي التراكمي للمناهج والكبسولات التعليمية (Anti-Duplication Circular Queue Rotation Engine)
// يضمن عدم تكرار أي كبسولة أو صحابي أو درس تاريخي أو حديث أو مسألة فقهية حتى تنتهي القائمة بالكامل لكل مستخدم.

import { supabase, ADMIN_CHAT_ID } from './supabase.js';
import { 
  SAHABA_SPOTLIGHTS, formatSahabiItem,
  SCIENTIFIC_DISCIPLINE_INSIGHTS, formatDisciplineItem,
  QURAN_AYAHS_WITH_ASBAB, formatAyahItem,
  BUKHARI_HADITHS, formatBukhariItem,
  PROPHETIC_SITUATIONS, formatProphetItem
} from './admin_curriculum.js';
import { SHARIA_CAPSULES, formatShariaItem } from './sharia_sciences.js';
import { 
  PAST_RULERS_MISTAKES, 
  STATESMAN_PILLARS, 
  formatStatesmanMistake, 
  formatStatesmanPearl 
} from './statesman_engine.js';
import { PURITY_SPIRITUAL_CAPSULES, formatPurityCapsule } from './purity_spiritual_fuel.js';

// In-Memory Fast Cache for Rotations
// Map<`${userId}_${category}`, { seen_ids: string[], cycle_count: number, last_served_id: string, last_served_at: number }>
const rotationMemoryCache = new Map();
let isInitializedFromDb = false;
let dbSyncTimer = null;
let lastLoadedDbData = null;

// Pre-seeded items already seen by Dr. Abdullah so they are never repeated immediately
const PRESEEDED_SEEN = {
  [ADMIN_CHAT_ID]: {
    sahaba: ['bilal_ibn_rabah'],
    past_rulers: ['andalus_taifa_kings'],
    sharia: ['fiqh_sahu_prostration']
  }
};

/**
 * Loads persistent rotation states from Supabase bot_sessions (called once or on demand)
 */
async function loadRotationStatesFromDb() {
  if (isInitializedFromDb) return;
  try {
    const { data: row } = await supabase
      .from('bot_sessions')
      .select('data')
      .eq('chat_id', 888888)
      .maybeSingle();

    lastLoadedDbData = row?.data || {};
    const rotationStore = lastLoadedDbData?.curriculum_rotation;
    if (rotationStore && typeof rotationStore === 'object') {
      for (const [userId, userCats] of Object.entries(rotationStore)) {
        if (userCats && typeof userCats === 'object') {
          for (const [category, state] of Object.entries(userCats)) {
            const key = `${userId}_${category}`;
            rotationMemoryCache.set(key, {
              seen_ids: Array.isArray(state.seen_ids) ? state.seen_ids : [],
              cycle_count: Number(state.cycle_count) || 1,
              last_served_id: state.last_served_id || null,
              last_served_at: Number(state.last_served_at) || Date.now()
            });
          }
        }
      }
    }
    isInitializedFromDb = true;
  } catch (err) {
    console.warn('[CurriculumRotator Load Warn]:', err.message);
  }
}

/**
 * Gets the rotation state for a specific user and category
 */
async function getRotationState(userId, category) {
  if (!isInitializedFromDb) {
    await loadRotationStatesFromDb();
  }
  const key = `${userId}_${category}`;
  
  if (rotationMemoryCache.has(key)) {
    return rotationMemoryCache.get(key);
  }

  // Check pre-seeded seen items
  const preseen = PRESEEDED_SEEN[Number(userId)]?.[category] || [];
  const newState = {
    seen_ids: [...preseen],
    cycle_count: 1,
    last_served_id: preseen[preseen.length - 1] || null,
    last_served_at: Date.now()
  };

  rotationMemoryCache.set(key, newState);
  return newState;
}

/**
 * Debounced DB sync: persists dirty in-memory cache to Supabase
 * without blocking request processing or overloading Supabase with roundtrips.
 */
function scheduleDbSync() {
  if (dbSyncTimer) return;
  dbSyncTimer = setTimeout(async () => {
    dbSyncTimer = null;
    try {
      const payload = { ...(lastLoadedDbData || {}) };
      if (!payload.curriculum_rotation || typeof payload.curriculum_rotation !== 'object') {
        payload.curriculum_rotation = {};
      }

      for (const [key, state] of rotationMemoryCache.entries()) {
        const [userId, category] = key.split('_');
        if (!payload.curriculum_rotation[userId]) {
          payload.curriculum_rotation[userId] = {};
        }
        payload.curriculum_rotation[userId][category] = {
          seen_ids: state.seen_ids,
          cycle_count: state.cycle_count,
          last_served_id: state.last_served_id,
          last_served_at: state.last_served_at
        };
      }

      await supabase.from('bot_sessions').upsert({
        chat_id: 888888,
        state: 'notification_tracker',
        data: payload,
        updated_at: new Date().toISOString()
      });
      lastLoadedDbData = payload;
    } catch (err) {
      console.warn('[CurriculumRotator Async Sync Warn]:', err.message);
    }
  }, 1000);
}

/**
 * Saves rotation state in memory and schedules background sync to Supabase
 */
function saveRotationState(userId, category, state) {
  const key = `${userId}_${category}`;
  rotationMemoryCache.set(key, state);
  scheduleDbSync();
}

/**
 * Core Rotation Function: Returns the next unseen item in sequence.
 * Guarantees zero repetition until ALL items in the category have been consumed.
 */
export async function getNextRotatingCurriculumItem(category, items, userId = ADMIN_CHAT_ID, idKey = 'id') {
  if (!items || items.length === 0) return null;

  try {
    const numId = Number(userId) || ADMIN_CHAT_ID;
    const state = await getRotationState(numId, category);
    const seenSet = new Set(state.seen_ids || []);

    // Filter unseen items
    let unseen = items.filter(item => {
      const id = item[idKey] || item.id || item.title;
      return !seenSet.has(id);
    });

    let chosen;
    if (unseen.length === 0) {
      // 🌟 Full cycle completed! All items in this category have been delivered.
      state.cycle_count = (state.cycle_count || 1) + 1;
      // Reset cycle and start with the first item
      chosen = items[0];
      const chosenId = chosen[idKey] || chosen.id || chosen.title;
      state.seen_ids = [chosenId];
      state.last_served_id = chosenId;
      state.last_served_at = Date.now();
      console.log(`[Curriculum Rotation] User ${numId} finished complete cycle of [${category}]! Starting cycle #${state.cycle_count}.`);
    } else {
      // Pick the next unseen item in order
      chosen = unseen[0];
      const chosenId = chosen[idKey] || chosen.id || chosen.title;
      state.seen_ids.push(chosenId);
      state.last_served_id = chosenId;
      state.last_served_at = Date.now();
    }

    // Persist updated state (in-memory + debounced DB sync)
    saveRotationState(numId, category, state);
    return chosen;
  } catch (err) {
    console.warn(`[getNextRotatingCurriculumItem Error in ${category}]:`, err.message);
    return items[0];
  }
}

// ==============================================================================
// 👑 Specialized Category Getters (Plug & Play for Scheduler and Handlers)
// ==============================================================================

/**
 * 🌟 1. Sahaba Spotlight (صحابي اليوم وصناعة رجال الدولة)
 */
export async function getNextSahabiSpotlight(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('sahaba', SAHABA_SPOTLIGHTS, userId);
  return { item: chosen, formattedText: formatSahabiItem(chosen), quiz: chosen.quiz };
}

/**
 * 🧠 2. Scientific Discipline (علم الأعصاب والانضباط الذاتي والدوبامين)
 */
export async function getNextScientificDiscipline(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('discipline', SCIENTIFIC_DISCIPLINE_INSIGHTS, userId);
  return { item: chosen, formattedText: formatDisciplineItem(chosen), quiz: chosen.quiz };
}

/**
 * 📖 3. Quran Ayah with Asbab al-Nuzul (آية وقصة وسبب نزولها)
 */
export async function getNextAyahWithAsbab(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('ayah_asbab', QURAN_AYAHS_WITH_ASBAB, userId);
  return { item: chosen, formattedText: formatAyahItem(chosen), quiz: chosen.quiz };
}

/**
 * 📜 4. Sahih Bukhari Hadith (درر صحيح البخاري والتربية القيادية)
 */
export async function getNextBukhariHadith(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('bukhari', BUKHARI_HADITHS, userId);
  return { item: chosen, formattedText: formatBukhariItem(chosen), quiz: chosen.quiz };
}

/**
 * ⚔️ 5. Prophetic Situation (مواقف القيادة والاستراتيجية النبوية)
 */
export async function getNextPropheticSituation(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('prophet', PROPHETIC_SITUATIONS, userId);
  return { item: chosen, formattedText: formatProphetItem(chosen), quiz: chosen.quiz };
}

/**
 * 📖 6. Sharia Capsule (كبسولات العلم الشرعي وما لا يسع المسلم جهله)
 */
export async function getNextShariaCapsule(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('sharia', SHARIA_CAPSULES, userId);
  return { ...chosen, formattedText: formatShariaItem(chosen) };
}

/**
 * 🏛️ 7. Past Ruler Mistake (فقرة أخطاء الذين مضوا للخليفة)
 */
export async function getNextPastRulerMistake(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('past_rulers', PAST_RULERS_MISTAKES, userId);
  return { ...chosen, formattedText: formatStatesmanMistake(chosen) };
}

/**
 * 👑 8. Statesman Pearl (كبسولة صناعة رجل الدولة والخليفة)
 */
export async function getNextStatesmanPearl(userId = ADMIN_CHAT_ID) {
  const chosen = await getNextRotatingCurriculumItem('statesman_pearls', STATESMAN_PILLARS, userId);
  return { ...chosen, formattedText: formatStatesmanPearl(chosen) };
}

/**
 * 🛡️ 9. Purity Spiritual Fuel (وقود النقاء والسيادة الإيمانية)
 */
export async function getNextPuritySpiritualFuel(userId = ADMIN_CHAT_ID, userName = 'د. عبدالله') {
  const chosen = await getNextRotatingCurriculumItem('purity_fuel', PURITY_SPIRITUAL_CAPSULES, userId);
  return { ...chosen, formattedText: formatPurityCapsule(chosen, userName) };
}
