# ARSHI — GitHub Pages Starter

This folder contains a minimal, editorial-style starter you can upload to a GitHub repository and publish with GitHub Pages.

## Files
- `index.html` — your homepage with sections for Writing and Projects.
- `styles.css` — basic magazine-like styles.
- `assets/` — put your images here.

## How to publish
1. Create a public repository on GitHub (e.g. `arshi-site`).
2. Upload all these files to the repo root.
3. In the repo: **Settings → Pages → Build and deployment**: select `main` branch and `/ (root)` folder → Save.
4. After a minute, your site will be live at `https://<your-username>.github.io/<repo>/`.

## Custom domain (e.g. arshi.studio)
- In repo **Settings → Pages → Custom domain**: type `arshi.studio` and save.
- In your domain DNS, create 4 A records for the apex (arshi.studio) to:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Create a CNAME record for `www` pointing to `<your-username>.github.io`.
- Wait for DNS to propagate, then enforce HTTPS in GitHub Pages.

## Notes
- Replace placeholder text and links in `index.html` with your real content.
- You can add more pages (e.g. `essay.html`) and link to them from the cards.
- For images, place files in `assets/` and reference them in `index.html` (e.g. `assets/cover.jpg`).

