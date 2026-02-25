# LAI Lab Website

**Language & Adaptive Intelligence Lab** — Hankuk University of Foreign Studies (HUFS)

A static website for Prof. Yeachan Kim's research lab.

## Project Structure

```
llilab-website/
├── index.html          ← Main HTML shell (rarely needs editing)
├── css/style.css       ← All styles
├── data/               ← CONTENT LIVES HERE — edit these to update the site
│   ├── site.js         ← Lab info, PI details, welcome message, recruitment
│   ├── publications.js ← Publication entries (auto-grouped by year)
│   ├── news.js         ← News items on the homepage
│   ├── research.js     ← Research areas with SVG illustrations
│   ├── projects.js     ← Project entries
│   └── applications.js ← Tools & demos
├── js/app.js           ← SPA router & page renderers
└── assets/             ← Images and other static assets
```

## How to Update Content

### Add a publication
Open `data/publications.js` and add a new entry to the array:
```js
{
  title: 'Your Paper Title',
  authors: 'Author One, Yeachan Kim, Author Three',
  venue: 'Conference Name, Year',
  year: 2026,
  type: 'conf',        // conf | journal | findings | industry | preprint
  links: [
    { label: 'PDF', url: 'https://...' },
    { label: 'Code', url: 'https://github.com/...' },
  ],
  featured: true,       // true = show on homepage "Recent Research"
}
```

### Add news
Open `data/news.js` and add at the **top** of the array:
```js
{
  date: 'Mar 2026',
  content: 'Your news HTML here. <strong>Bold</strong> and <a href="#">links</a> supported.',
  highlight: false,     // true = blue featured banner
}
```

### Add a project / application
Same pattern — open the corresponding `data/*.js` file and add an object.

## Deployment (GitHub Pages)

1. Create a GitHub repository
2. Push this folder to the `main` branch
3. Go to **Settings → Pages → Source** and select `main` branch
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Local Development

Just open `index.html` in a browser. No build step required.

For live reload during development, you can use any static server:
```bash
npx serve .
# or
python3 -m http.server 8000
```
