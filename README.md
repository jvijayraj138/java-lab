# Java Lab Academic Portfolio

**J. Vijay Raj | AI & ML**

| | |
|---|---|
| Roll No. | 25EU02080 |
| Branch | AI & ML |
| Faculty | Mr. Dr. Ramesh |
| Academic Year | 2025–29 |
| Subject | Java Lab |

## Description
A static academic portfolio documenting the Java Lab work of J. Vijay Raj: JDK installation, programs and experiments, source code, output screenshots and progress. All academic content is taken from the student's Java Lab Word documents (Weeks 1, 2, 3, 6, 7, 8, 10 and 11).

Features: dashboard statistics, lab-week cards, searchable and filterable program list, syntax-highlighted code viewer with **Copy Code**, output screenshots, progress section, learning journey, dark/light theme (saved in `localStorage`), sticky navigation with mobile menu, back-to-top button.

## Technologies
HTML, CSS, JavaScript (no frameworks). Hosted on GitHub Pages.

## Folder structure
```text
java-lab-academic-portfolio/
├── index.html
├── style.css
├── script.js        # includes LAB_DATA (all academic content) + site logic
├── README.md
└── assets/          # output screenshots (.webp)
```

## Updating content
Open `script.js` and edit the `LAB_DATA` array at the top. Each week has `entries`; each entry has `num`, `title`, `cls`, `topic`, `aim`, `code` and `img` (path inside `assets/`). Stats, filters, search and progress update automatically.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` inside the folder and visit `http://localhost:8000`.

## Upload to GitHub
1. Create (or open) a repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, `README.md` and the `assets/` folder so that `index.html` is at the **repository root**.
3. Commit the changes.

## Deploy with GitHub Pages
1. Repository → **Settings → Pages**.
2. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
3. After a minute the site is live at `https://USERNAME.github.io/REPOSITORY-NAME/`.
