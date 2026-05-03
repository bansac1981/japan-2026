# 🗾 Japan Family Vacation 2026 — Website

Interactive itinerary website for the Bansal–Jain family Japan trip (18 May – 8 Jun 2026).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Calendar view + booking status + quick day links |
| `day.html?date=YYYY-MM-DD` | Day detail page (single file handles all 21 days dynamically) |
| `add.html` | Intake form to add new activities/notes |
| `data.js` | All itinerary data (edit this to update any day) |
| `style.css` | Shared styles |

## How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `japan-2026`)
2. Upload all files in this folder to the repo root
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site will be live at `https://YOUR_USERNAME.github.io/japan-2026/`

## How to add a new activity

**Option A — Via the web form:**  
Open `add.html` and fill in the form. Items are saved locally in your browser.

**Option B — Edit `data.js` directly:**  
Find the day in the `days` array and add an activity object to the `activities` array:

```js
{
  name: "New Activity Name",
  time: "14:00",
  cost: "¥500",
  notes: "Any notes about this activity",
  mapsQuery: "Place Name Tokyo Japan"   // used to generate Google Maps link
}
```

Then re-upload `data.js` to GitHub — the site updates automatically.

## How to connect Formspree (intake form)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID (e.g. `xpzgabcd`)
3. In `add.html`, replace `YOUR_FORM_ID` with your actual form ID:
   ```
   action="https://formspree.io/f/xpzgabcd"
   ```
4. Form submissions will be emailed to `bansalachin@gmail.com`

## Apartment GPS (for Google Maps links)

Aoto apartment: **35.748°N, 139.857°E** (near Aoto Station, Keisei Line)  
All Google Maps links in the day pages route from this location.

## Trip Overview

- **Flights:** ANA · PNR 8GXZOP · Booking ID IN1B1774591691421
- **Tokyo:** AO103 Tokyo Stay Spacious Apt, Katsushika · Conf: 6802.586.981
- **Kyoto:** 26 May–1 Jun · 6N · ⚠️ BOOK ASAP (with kitchen)
- **Osaka:** 1–7 Jun · 6N · ⚠️ BOOK ASAP (with kitchen)  
- **HND Hotel:** 7 Jun · 1N · ⚠️ BOOK ASAP
