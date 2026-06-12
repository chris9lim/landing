# Christopher Lim — Personal Landing Page

A clean, Apple-inspired personal landing page built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just drop it in a GitHub repo and go live.

## Features

- Sticky frosted-glass navigation
- Hero section with headshot uploader (click the circle to add your photo)
- Experience timeline
- Skills section with pill chips
- Awards & recognition cards
- Contact section
- Smooth scroll-reveal animations
- Fully responsive (mobile-friendly)

## Files

```
christopher-lim-site/
├── index.html   — Page structure & content
├── style.css    — All styles
├── script.js    — Headshot uploader + scroll reveal
└── README.md    — This file
```

## How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `christopherlim` or `my-site`)
2. Upload all four files to the repo root
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/repo-name`

## Customization tips

- **Headshot**: Click the circle in the hero to upload a photo. To set a permanent default, save your photo as `headshot.jpg` in the project folder and add `<img src="headshot.jpg" alt="Christopher Lim">` inside `.headshot-zone` in `index.html`.
- **Colors**: All colors are CSS variables in `:root` inside `style.css`. Change `--blue` to update the accent color everywhere.
- **Content**: All text lives in `index.html` — find and edit each section directly.
- **Add links**: Add a GitHub or LinkedIn by copying a `.contact-chip` element and updating the `href`.

## License

Feel free to use and modify for personal use.
