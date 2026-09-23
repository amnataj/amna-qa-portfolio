# Amna Taj — QA Portfolio

A React + Vite portfolio site, built around a QA "test report" framing:
test cases (projects), a bug log, tools, and background — instead of a
generic about/projects/contact layout.

## Structure

```
src/
  data/content.js       # ALL the copy lives here — edit this first
  components/
    Header.jsx
    Hero.jsx
    TestCases.jsx        # section 01 — your projects
    BugLog.jsx            # section 02 — real bugs you found
    Environment.jsx       # section 03 — tools/skills
    Coverage.jsx           # section 04 — education/background
    Footer.jsx             # contact links
  index.css              # all styling — CSS variables at the top
```

## Before you deploy

1. Edit `src/data/content.js` — replace the email, LinkedIn, and GitHub
   placeholders in the `profile` object with your real links.
2. Decide your repo name. If you'll host this at
   `https://<username>.github.io/<repo-name>/`, set that repo name in
   **two places**:
   - `vite.config.js` → `base: "/<repo-name>/"`
   - `package.json` → `"homepage"` field
   If instead your repo is named exactly `<username>.github.io` (a
   personal/user site), set `base: "/"` in `vite.config.js`.

## Run it locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, auto-deploys on every push):**

1. Push this project to a GitHub repo.
2. In the repo: Settings → Pages → Source → set to **GitHub Actions**.
3. Push to `main`. The included workflow
   (`.github/workflows/deploy.yml`) builds and deploys automatically.
   Your site will be live at the URL shown in the Pages settings.

**Option B — `gh-pages` package (manual, one command):**

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in
Settings → Pages → Source, select the `gh-pages` branch.

## Editing content later

Everything text-based (project descriptions, bug write-ups, skills,
timeline) lives in `src/data/content.js`. You shouldn't need to touch
any component file just to update copy.
