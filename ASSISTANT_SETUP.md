# AI Assistant Setup Guide

Sets up the live AI travel assistant using **Google Gemini 2.0 Flash** with Google Search grounding.
**Total cost: £0 / $0.** Free tier covers 1,500 queries per day — far more than you'll ever need.

Total time: ~15 minutes.

---

## What you'll set up

1. A **Google AI Studio API key** — powers the AI with live Google Search (free)
2. A **Cloudflare Worker** — secure proxy that holds your API key (free tier, 100k req/day)
3. A **GitHub Personal Access Token** — lets the assistant auto-commit itinerary changes
4. Paste the Worker URL into **assistant.html**

---

## Step 1 — Get a free Google AI Studio API key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Click **Get API key** (top left) → **Create API key**
4. Select **Create API key in new project**
5. Copy the key (starts with `AIza...`)

That's it — no billing, no credit card, nothing to pay.

---

## Step 2 — Get a GitHub Personal Access Token

1. Go to [github.com](https://github.com) → Log in as **bansac1981**
2. Click your avatar (top right) → **Settings**
3. Scroll all the way down → **Developer settings** (left sidebar)
4. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
5. Fill in:
   - Note: `japan-trip-assistant`
   - Expiration: **90 days** (covers your full trip + planning)
   - Scopes: tick ✅ **repo** (full repo access)
6. Click **Generate token** → copy it immediately (you won't see it again)

---

## Step 3 — Deploy the Cloudflare Worker

1. Go to [cloudflare.com](https://cloudflare.com) → Sign up (free) or Log in
2. Left sidebar → **Workers & Pages** → **Create** → **Create Worker**
3. Name it: `japan-trip-assistant` → click **Deploy**
4. Click **Edit code**
5. **Select all the default code and delete it** (Ctrl+A, Delete)
6. Open the file `cloudflare-worker.js` from your `japan-trip-2026` folder in any text editor
7. Copy everything → paste into the Cloudflare editor
8. Click **Deploy** (top right of the editor)
9. At the top of the page, copy your Worker URL — it looks like:
   `https://japan-trip-assistant.YOURNAME.workers.dev`

---

## Step 4 — Add environment variables to the Worker

Still on the Cloudflare Worker page:

1. Click the **Settings** tab → **Variables**
2. Under **Environment Variables**, add these one by one (click **Add variable** for each):

| Variable name    | Value                                |
|------------------|--------------------------------------|
| `GEMINI_KEY`     | Your Google AI Studio key (`AIza...`)|
| `GITHUB_TOKEN`   | Your GitHub Personal Access Token    |
| `GITHUB_OWNER`   | `bansac1981`                         |
| `GITHUB_REPO`    | `japan-2026`                         |
| `ALLOWED_ORIGIN` | `https://bansac1981.github.io`       |

3. For `GEMINI_KEY` and `GITHUB_TOKEN` → click **Encrypt** before saving (keeps them secret)
4. Click **Save and deploy**

---

## Step 5 — Paste the Worker URL into assistant.html

1. Open `japan-trip-2026/assistant.html` in any text editor (Notepad, VS Code, etc.)
2. Find this line near the top:
   ```javascript
   const WORKER_URL = 'YOUR_WORKER_URL_HERE';
   ```
3. Replace `YOUR_WORKER_URL_HERE` with your Worker URL from Step 3, e.g.:
   ```javascript
   const WORKER_URL = 'https://japan-trip-assistant.bansac1981.workers.dev';
   ```
4. Save the file
5. In PowerShell (from your `japan-trip-2026` folder):
   ```powershell
   git add assistant.html
   git commit -m "Configure AI assistant with Gemini Worker URL"
   git push origin main
   ```

---

## Step 6 — Test it!

Open: **https://bansac1981.github.io/japan-2026/assistant.html**

Try these queries:
- *"What are the best vegetarian restaurants near Arashiyama?"*
- *"Add a hack about booking DisneySea tickets early to Day 6"*
- *"Is the Hakone ropeway likely to be open in late May?"*
- *"Add Shigetsu temple restaurant to food on Day 10"*

When you ask it to **add something**, it shows a **"Proposed Itinerary Change"** card with an **Apply to Itinerary** button. Click it → the change commits to GitHub → your site updates in ~60 seconds.

---

## Free tier limits

| Service         | Free allowance          | Your expected usage       |
|-----------------|-------------------------|---------------------------|
| Gemini 2.0 Flash| 1,500 queries/day       | ~10–30 queries/day max    |
| Cloudflare Workers | 100,000 req/day      | ~10–30 req/day max        |
| GitHub API      | 5,000 req/hour          | ~5 req/day max            |

You will never hit any of these limits for personal trip planning.

---

## Upgrading to Perplexity later (optional)

If you decide Gemini's results aren't quite what you want, switching to Perplexity Sonar takes one minute:
1. Add a `PERPLEXITY_KEY` environment variable in Cloudflare (your Perplexity API key)
2. In `cloudflare-worker.js`, replace the `handleAsk` function with the Perplexity version
3. Redeploy the Worker

---

## Troubleshooting

**"Worker returned 403"** — Check ALLOWED_ORIGIN in Cloudflare matches `https://bansac1981.github.io` exactly (no trailing slash).

**"Gemini error: 400"** — Usually means the API key is wrong or the request format is off. Double-check your `GEMINI_KEY` in Cloudflare Settings → Variables.

**"Could not locate date + field in data.js"** — The AI used the wrong date. Ask again with the explicit date, e.g. *"Add this to Day 10, 28 May (Kyoto)"*.

**"GitHub commit failed: 401"** — Your GitHub token expired. Go back to Step 2 and generate a new one.

**Apply button does nothing** — Open your browser DevTools (F12 → Console) and look for the error message. Most common cause: Worker URL has a typo in assistant.html.
