# Japan Family Vacation 2026

Interactive itinerary website for the Bansal-Jain family Japan trip (18 May - 8 Jun 2026).

## Live Site

https://bansac1981.github.io/japan-2026/

## How to Edit the Itinerary (from your phone)

1. Open any day page on the live site
2. Tap the **+** button (bottom-right) to add an activity
3. Tap any activity card to expand it, then tap **Edit** or **Del**
4. Changes commit directly to GitHub and the site updates in ~60 seconds

**First-time setup:** The first time you add/edit/delete, you'll be prompted for a GitHub Personal Access Token. Get one at: GitHub > Settings > Developer settings > Tokens (classic) > scope: `repo`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Calendar overview + booking status |
| `day.html` | Day detail page (mobile-first cards with edit/add/delete) |
| `data.js` | All itinerary data (the single source of truth) |
| `github-edit.js` | Handles saving edits directly to GitHub |
| `search.html` | Full-text search across all days |
| `phrases.html` | Japanese phrase guide |
| `style.css` | Shared styles |

## How it Works

- `data.js` holds the complete trip data as a JavaScript object
- Day pages render from this data dynamically
- When you add/edit/delete on mobile, `github-edit.js` commits the updated `data.js` to GitHub via the API
- GitHub Pages rebuilds automatically (~60 seconds)
- New activities auto-slot into the correct time position
- Google Maps directions chain from one activity to the next based on location fields

## Deploy on GitHub Pages

Already deployed. If you need to redeploy: Settings > Pages > Source > main branch > / (root).
