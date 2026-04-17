# CreatorMetrics — Google Ads Bridge Landing Page

Static HTML site designed as a Google Ads–compliant landing page that provides genuine value (earnings calculator, platform comparison, creator guide) and naturally drives traffic to fanvuemodels.com via CTAs.

## Structure

```
index.html        — Homepage: overview of tools + CTA
calculator.html   — Interactive earnings calculator (vanilla JS)
compare.html      — Platform comparison table (Fanvue vs OF vs Fansly vs Patreon)
guide.html        — "How to start as a creator in 2026" guide
css/style.css     — Shared styles
js/calculator.js  — Calculator logic
vercel.json       — Vercel deployment config
```

## Setup

### 1. Buy a neutral domain

Something like `creatormetrics.com`, `creatortools.io`, etc. **Avoid** words like "fanvue", "onlyfans", "adult".

### 2. Replace Google Ads IDs

Search for `AW-XXXXXXXXXX` across all HTML files and replace with your actual:
- Google Ads conversion ID: `AW-1234567890`
- Conversion label: `AW-1234567890/AbCdEfGh` (in CTA onclick handlers)
- Optional GA4 ID: `G-XXXXXXXXXX`

### 3. Deploy

**Vercel (recommended):**
```bash
cd CreatorEarnings
npx vercel
```

**Netlify:**
Just drag & drop the folder to netlify.com/drop

**Any static host:** Upload all files. No build step needed.

### 4. Set up Google Ads

1. Create a **Search campaign** targeting keywords like:
   - "creator earnings calculator"
   - "how much do creators make"
   - "best creator platform 2026"
   - "fanvue vs onlyfans" (careful — test if allowed)
   - "content creator income"

2. Set your landing page to `https://yourdomain.com/calculator` or `/compare`

3. Add conversion tracking for the CTA button clicks (already wired with gtag)

### 5. Google Ads compliance checklist

- ✅ Real, original content (not just a redirect)
- ✅ No adult/explicit content
- ✅ No misleading claims
- ✅ Clear privacy & purpose
- ✅ Fast loading (static HTML)
- ✅ Mobile responsive
- ✅ SSL/HTTPS (automatic on Vercel/Netlify)

## Customization

- **Colors:** Edit CSS variables in `css/style.css` `:root` block
- **Brand name:** Search & replace "CreatorMetrics" across all files
- **CTA URLs:** Search for `fanvuemodels.com` — all CTA links include UTM params
- **Calculator logic:** `js/calculator.js` — identical math model to the production calculator
