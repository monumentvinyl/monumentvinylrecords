Monument Vinyl - Vercel-ready Next.js site
==========================================

What's included:
- A simple Next.js (pages) site that:
  - Loads listings from /public/listings.csv (if present)
  - Provides an /admin page to upload a CSV in-browser (client-side) and preview listings
  - Footer and header with social links and the provided logo
- A sample `public/listings.csv` you can replace with your own
- Instructions for deploying to Vercel

Important notes about file persistence on Vercel:
- Vercel's serverless runtime is ephemeral and you cannot persist uploaded files to the filesystem at runtime.
- To have a permanent `listings.csv` available at `https://your-site.com/listings.csv`, upload the CSV into your repo's `public/` folder (commit & push), or use Vercel's dashboard file manager / static assets.
- The admin upload page stores the CSV in browser localStorage so you can preview it and use it while you or your staff are editing. To publish changes permanently, replace the `public/listings.csv` file in your repo.

Admin key:
- The admin page accepts an ADMIN_KEY via an environment variable. Set `ADMIN_KEY` in Vercel (Project → Settings → Environment Variables).
- Default (for local/dev only): vinyl2025

How to use:
1. Install dependencies:
   npm install
2. Run locally:
   npm run dev
3. Deploy to Vercel: connect the repo and deploy. Add ADMIN_KEY in Vercel env if you want to protect the admin page.

CSV format (place in public/listings.csv):
Action,ItemID,Category,Title,Description,PictureURL,URL to eBay listing

