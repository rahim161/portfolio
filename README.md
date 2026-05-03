# Md. Abdur Rahim — Portfolio Website

A static personal portfolio website. No build system, no frameworks, no dependencies.

## File Structure

```
portfolio/
├── index.html        ← Main single-page site
├── style.css         ← All responsive styles (mobile-first)
├── script.js         ← Hamburger menu, scroll effects, animations
├── README.md         ← This file
└── assets/
    ├── photo.jpg     ← Your headshot (ADD THIS)
    └── cv.pdf        ← Your CV PDF (ADD THIS)
```

## Setup: Add Your Assets

Before opening the site:

1. Create an `assets/` folder inside the `portfolio/` folder.
2. Add your headshot as `assets/photo.jpg` (square crop recommended, min 400×400px).
3. Add your CV as `assets/cv.pdf`.

If you skip these, the site still works — a placeholder with your initials "AR" will show instead of the photo, and the CV download button will point to the file when you add it.

---

## Local Testing

### macOS
```bash
# Option 1 — Open directly in browser
open index.html

# Option 2 — Python local server (recommended, avoids any path issues)
cd /path/to/portfolio
python3 -m http.server 8080
# Then open: http://localhost:8080
```

### Windows
```powershell
# Option 1 — Double-click index.html in File Explorer

# Option 2 — PowerShell local server
cd C:\path\to\portfolio
python -m http.server 8080
# Then open: http://localhost:8080

# Option 3 — If Python not installed, use VS Code Live Server extension
```

### Linux
```bash
# Option 1 — Open in browser
xdg-open index.html

# Option 2 — Python local server
cd /path/to/portfolio
python3 -m http.server 8080
# Then open: http://localhost:8080
```

### Testing Responsive Design (Browser DevTools)
1. Open the site in Chrome or Firefox.
2. Press `F12` to open DevTools.
3. Click the **Toggle Device Toolbar** icon (phone/tablet icon) or press `Ctrl+Shift+M`.
4. Select device presets (iPhone SE, iPad, etc.) or drag the viewport width manually.
5. Mobile breakpoint kicks in below **768px** width.

### Common Issues & Fixes
| Issue | Fix |
|---|---|
| Photo not showing | Check `assets/photo.jpg` exists and filename is exact |
| CV download not working | Check `assets/cv.pdf` exists |
| Fonts look different | Normal — uses system fonts by design |
| Animations not playing | Check browser allows JavaScript |
| Layout broken | Hard-refresh with `Ctrl+Shift+R` to clear CSS cache |

---

## GitHub Setup

### Repository Naming
For GitHub Pages, your site will be at:
`https://[username].github.io/[repo-name]/`

**Suggested repo names:**
- `portfolio` → `https://rahim161.github.io/portfolio/`
- `abdur-rahim` → `https://rahim161.github.io/abdur-rahim/`
- `personal-site` → `https://rahim161.github.io/personal-site/`

### Step-by-Step: Create and Push

```bash
# 1. Navigate to your portfolio folder
cd /path/to/portfolio

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Make first commit
git commit -m "Initial commit: portfolio website"

# 5. Rename branch to main
git branch -M main

# 6. Add your GitHub remote (replace USERNAME and REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 7. Push to GitHub
git push -u origin main
```

### Required Repository Settings
- Repository must be **Public** (GitHub Pages is free for public repos)
- All three files (`index.html`, `style.css`, `script.js`) must be in the **root** of the repository (not inside a subfolder)

### File Organization for GitHub Pages
```
[repo root]/
├── index.html     ← Must be at root
├── style.css      ← Must be at root
├── script.js      ← Must be at root
├── README.md
└── assets/
    ├── photo.jpg
    └── cv.pdf
```

---

## GitHub Pages Deployment

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** tab.
3. Scroll down to **Pages** in the left sidebar.
4. Under **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/` (root).
6. Click **Save**.

### Step 2: Wait for Deployment
- GitHub will take 1–3 minutes to deploy.
- A green checkmark will appear at the top of the Pages settings.
- Your URL will be shown: `https://[username].github.io/[repo-name]/`

### Step 3: Verify Deployment
1. Open the URL in a browser.
2. Test on mobile by resizing or using browser DevTools.
3. Check all links work (LinkedIn, GitHub, email, CV download).

### Updating Content After Deployment
```bash
# 1. Make your changes to HTML/CSS/JS files
# 2. Stage changes
git add .

# 3. Commit with a message
git commit -m "Update: [describe what you changed]"

# 4. Push to GitHub
git push origin main

# 5. GitHub Pages auto-redeploys in ~1–2 minutes
```

### Custom Domain (Optional)
If you have a domain (e.g., `abdurrahim.dev`):
1. In GitHub Pages settings, enter your domain under **Custom domain**.
2. Create a `CNAME` file in your repo root with just your domain name.
3. Set up DNS at your registrar per GitHub's documentation.
