/**
 * Japan Trip AI Assistant — Cloudflare Worker
 * ─────────────────────────────────────────────────────────────────────────────
 * Deploy this file as a Cloudflare Worker (see SETUP.md for instructions).
 *
 * Required environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   PERPLEXITY_KEY   — Your Perplexity API key (from perplexity.ai/settings/api)
 *   GITHUB_TOKEN     — GitHub Personal Access Token (repo scope)
 *   GITHUB_OWNER     — Your GitHub username, e.g. "bansac1981"
 *   GITHUB_REPO      — Repo name, e.g. "japan-2026"
 *   ALLOWED_ORIGIN   — Your GitHub Pages URL, e.g. "https://bansac1981.github.io"
 */

// ── Trip context injected into every Perplexity request ──────────────────────
const TRIP_CONTEXT = `
You are a personal Japan travel assistant for the Bansal-Jain family.

FAMILY: 4 people — Achin & Snigdha (adults), Anagha & Sharanya (children).
DIET: STRICTLY PURE VEGETARIAN. No meat, no fish, no eggs. This is critical.
TRIP: Japan, 18 May – 8 June 2026 (22 days across 3 cities).

ITINERARY OVERVIEW:
• Days 0–7  | 18–25 May  | TOKYO    | Staying at AO103 apartment, Aoto Station, Katsushika
• Days 8–14 | 26 May–1 Jun | KYOTO  | Staying near Kyoto Station (hotel TBC)
• Days 15–21| 1–8 Jun    | OSAKA    | Staying near Namba (hotel TBC)
• Return flight: 8 June from Osaka/Kansai

KEY ACTIVITIES ALREADY PLANNED:
Tokyo — Senso-ji, Ueno Park, TeamLab Planets, Shibuya crossing, Akihabara, DisneySea, Harajuku, Nikko day trip, Hakone day trip
Kyoto — Arashiyama Bamboo Grove, Fushimi Inari (early morning), Kinkaku-ji, Gion Geisha district, Philosopher's Path, Nishiki Market, Nara day trip
Osaka — Dotonbori, Osaka Castle, Universal Studios Japan, Kuromon Market, Shinsekai

TRANSPORT PASSES: JR Pass for shinkansen. IC card (Suica) for local transit.

HOW TO RESPOND:
1. For travel questions: give accurate, current web-sourced answers. Include opening hours, prices (in ¥), tips, and citations. Always mention vegetarian options where relevant.
2. For itinerary change requests (add/update/remove an activity, restaurant, shopping tip, fact, or hack):
   - Give your recommendation with reasoning and web-sourced details
   - Then append a JSON block in EXACTLY this format (no deviation):

\`\`\`json
{
  "type": "itinerary_change",
  "date": "YYYY-MM-DD",
  "field": "food|activities|shopping|hacks|facts",
  "action": "add",
  "item": <see formats below>
}
\`\`\`

ITEM FORMATS by field:
• food / shopping: { "name": "...", "where": "...", "price": "¥...", "notes": "..." }
• activities: { "name": "...", "time": "...", "cost": "¥...", "notes": "...", "location": "...", "ticket": "..." }
• hacks: "💡 hack text here" (a plain string)
• facts: "Interesting fact here" (a plain string)

DATE REFERENCE:
2026-05-18=Day0(Depart), 05-19=Day1(Tokyo), 05-20=Day2, 05-21=Day3, 05-22=Day4, 05-23=Day5, 05-24=Day6, 05-25=Day7,
05-26=Day8(Kyoto), 05-27=Day9, 05-28=Day10, 05-29=Day11, 05-30=Day12, 05-31=Day13,
06-01=Day14(Osaka), 06-02=Day15, 06-03=Day16, 06-04=Day17, 06-05=Day18, 06-06=Day19, 06-07=Day20, 06-08=Day21(Return)
`;

// ── Helpers ───────────────────────────────────────────────────────────────────

function corsHeaders(env) {
  const origin = env.ALLOWED_ORIGIN || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status = 200, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env) },
  });
}

// Convert a JS value into a JS source literal (single-quoted strings, nested objects)
function toJsLiteral(val, indent = '        ') {
  if (typeof val === 'string') {
    const escaped = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `'${escaped}'`;
  }
  if (typeof val === 'object' && val !== null) {
    const entries = Object.entries(val)
      .filter(([, v]) => v !== null && v !== undefined && v !== '')
      .map(([k, v]) => `${indent}  ${k}: ${toJsLiteral(v, indent + '  ')}`);
    return `{\n${entries.join(',\n')}\n${indent}}`;
  }
  return String(val);
}

// Inject a new item at the START of a named array within the day block for `date`
function applyAddChange(content, date, field, item) {
  // Find the date occurrence
  const dateMarker = `date: '${date}'`;
  const dateIdx = content.indexOf(dateMarker);
  if (dateIdx === -1) return null;

  // Find the field array opening after that date
  const fieldMarker = `${field}: [`;
  const fieldIdx = content.indexOf(fieldMarker, dateIdx);
  if (fieldIdx === -1) return null;

  const insertPos = fieldIdx + fieldMarker.length;
  const itemLiteral = toJsLiteral(item);
  const insertion = `\n        ${itemLiteral},`;

  return content.slice(0, insertPos) + insertion + content.slice(insertPos);
}

// ── Route handlers ────────────────────────────────────────────────────────────

async function handleAsk(request, env) {
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, env); }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'messages array required' }, 400, env);
  }

  const perplexityRes = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.PERPLEXITY_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'sonar',
      system: TRIP_CONTEXT,
      messages,
      max_tokens: 1800,
      temperature: 0.2,
    }),
  });

  if (!perplexityRes.ok) {
    const err = await perplexityRes.text();
    return json({ error: `Perplexity error: ${err}` }, 502, env);
  }

  const data = await perplexityRes.json();
  return json(data, 200, env);
}

async function handleApply(request, env) {
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, env); }

  const { date, field, action, item } = body;
  if (!date || !field || !action || item === undefined) {
    return json({ error: 'Missing required fields: date, field, action, item' }, 400, env);
  }
  if (action !== 'add') {
    return json({ error: 'Only action=add is supported currently' }, 400, env);
  }

  // Fetch current data.js from GitHub
  const ghUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/data.js`;
  const ghFetch = await fetch(ghUrl, {
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`,
      'User-Agent': 'japan-trip-assistant',
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!ghFetch.ok) {
    return json({ error: `GitHub fetch failed: ${ghFetch.status}` }, 502, env);
  }

  const ghData = await ghFetch.json();
  const currentContent = atob(ghData.content.replace(/\n/g, ''));
  const sha = ghData.sha;

  // Apply the change
  const updated = applyAddChange(currentContent, date, field, item);
  if (!updated) {
    return json({ error: `Could not locate date "${date}" + field "${field}" in data.js` }, 422, env);
  }

  // Encode and commit back to GitHub
  // btoa on its own breaks for non-Latin1 characters (Japanese text) — use TextEncoder approach
  const encoder = new TextEncoder();
  const bytes = encoder.encode(updated);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  const encoded = btoa(binary);

  const commitRes = await fetch(ghUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'japan-trip-assistant',
    },
    body: JSON.stringify({
      message: `AI assistant: add ${field} to ${date}`,
      content: encoded,
      sha,
    }),
  });

  if (!commitRes.ok) {
    const err = await commitRes.text();
    return json({ error: `GitHub commit failed: ${err}` }, 502, env);
  }

  const commitData = await commitRes.json();
  return json({
    success: true,
    commit: commitData.commit?.sha?.substring(0, 7),
    message: `Added to ${field} on ${date}. GitHub Pages will rebuild in ~60 seconds.`,
  }, 200, env);
}

// ── Main entry ────────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    const url = new URL(request.url);

    if (url.pathname === '/ask'  && request.method === 'POST') return handleAsk(request, env);
    if (url.pathname === '/apply' && request.method === 'POST') return handleApply(request, env);

    return new Response('Japan Trip Worker — endpoints: POST /ask, POST /apply', { status: 200 });
  },
};
