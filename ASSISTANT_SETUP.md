# AI Assistant Setup Guide

This guide sets up the live AI travel assistant for your Japan trip site.
Total time: ~20 minutes. Total cost: ~$5–10 for the entire trip (Perplexity credit).

---

## What you'll set up

1. A **Perplexity API key** — powers the AI with live web search
2. A **Cloudflare Worker** — secure proxy that holds your API keys (free tier)
3. A **GitHub Personal Access Token** — lets the assistant commit changes to your itinerary
4. Paste the Worker URL into **assistant.html**

---

## Step 1 — Get a Perplexity API key

1. Go to [perplexity.ai](https://perplexity.ai) → Sign up or Log in
2. Click your avatar (top right) → **Settings** → **API**
3. Click **Generate** → copy the key (starts with `pplx-`)
4. Add $5 credit under **Billing** — this covers ~5,000 questions, more than enough for trip planning

---

## Step 2 — Get a GitHub Personal Access Token

1. Go to [github.com](https://github.com) → Log in as **bansac1981**
2. Click your avatar → **Settings** → scroll down → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
4. Name it: `japan-trip-assistant`
5. Expiration: **90 days** (or custom to cover your trip)
6. Scopes: tick ✅ **repo** (gives read/write access to your repos)
7. Click **Generate token** → copy it immediately (you won't see it again)

---

## Step 3 — Deploy the Cloudflare Worker

1. Go to [cloudflare.com](https://cloudflare.com) → Sign up (free) or Log in
2. In the left sidebar, click **Workers & Pages**
3. Click **Create** → **Create Worker**
4. Name it: `japan-trip-assistant`
5. Click **Deploy** (ignore the default code for now)
6. Click **Edit code**
7. **Delete all the default code** in the editor
8. Open the file `cloudflare-worker.js` from your `japan-trip-2026` folder
9. Copy all its contents and paste into the Cloudflare editor
10. Click **Deploy** (top right)
11. Copy the Worker URL shown at the top — it looks like:
    `https://japan-trip-assistant.YOURNAME.workers.dev`

---

## Step 4 — Add environment variables to the Worker

Still in the Cloudflare dashboard for your Worker:

1. Click **Settings** tab → **Variables**
2. Under **Environment Variables**, click **Add variable** for each of these:

| Variable name    | Value                                      |
|------------------|--------------------------------------------|
| `PERPLEXITY_KEY` | Your Perplexity API key (`pplx-...`)       |
| `GITHUB_TOKEN`   | Your GitHub Personal Access Token          |
| `GITHUB_OWNER`   | `bansac1981`                               |
| `GITHUB_REPO`    | `japan-2026`                               |
| `ALLOWED_ORIGIN` | `https://bansac1981.github.io`             |

3. For `PERPLEXITY_KEY` and `GITHUB_TOKEN` — click **Encrypt** to keep them secret
4. Click **Save and deploy**

---

## Step 5 — Paste the Worker URL into assistant.html

1. Open `japan-trip-2026/assistant.html` in any text editor
2. Find this line near the top (line ~65):
   ```javascript
   const WORKER_URL = 'YOUR_WORKER_URL_HERE';
   ```
3. Replace `YOUR_WORKER_URL_HERE` with your Worker URL, e.g.:
   ```javascript
   const WORKER_URL = 'https://japan-trip-assistant.bansac1981.workers.dev';
   ```
4. Save the file
5. Run in your terminal (from the `japan-trip-2026` folder):
   ```
   git add assistant.html
   git commit -m "Configure AI assistant Worker URL"
   git push origin main
   ```

---

## Step 6 — Test it!

Go to: `https://bansac1981.github.io/japan-2026/assistant.html`

Try asking:
- "What are the best vegetarian restaurants near Arashiyama?"
- "Add a hack about getting the early train to Fushimi Inari on Day 9"
- "Is the Hakone ropeway likely to be open in late May 2026?"

When you ask it to add something, it will show a **Apply to Itinerary** button.
Clicking it commits the change directly to GitHub — your site updates in ~60 seconds.

---

## Troubleshooting

**"Worker returned 403"** — Check ALLOWED_ORIGIN matches your GitHub Pages URL exactly (no trailing slash).

**"Could not locate date + field in data.js"** — The AI may have used the wrong date format. Ask again and specify the date clearly, e.g. "Day 9 (27 May)".

**"GitHub commit failed: 422"** — Your GitHub token may have expired. Regenerate it (Step 2).

**"Perplexity error: 401"** — Your Perplexity key is invalid or has no credit. Check Step 1.
