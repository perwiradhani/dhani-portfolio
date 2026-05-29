# Perwira Dzakwan Ramadhani — Portfolio

A minimal dark-mode personal portfolio site built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── components/
│   ├── Navbar.jsx       # Fixed top navigation with mobile menu
│   ├── Hero.jsx         # Full-screen hero with animated intro
│   ├── About.jsx        # About section with stats
│   ├── Experience.jsx   # Work & internship timeline
│   ├── Projects.jsx     # Project cards with links
│   ├── Skills.jsx       # Grouped skill tags
│   ├── Contact.jsx      # Contact cards
│   ├── Footer.jsx       # Footer
│   └── useReveal.js     # Scroll-triggered reveal hook
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css      # Tailwind + custom styles + fonts
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Design System

- **Display Font**: Syne (headings)
- **Body Font**: DM Sans
- **Mono Font**: DM Mono (labels, tags, code)
- **Accent Color**: `#c8f35a` (lime green)
- **Background**: `#0a0a0a`
- **Surface**: `#111111`

## Sections

1. **Hero** — Name, title, CTA buttons, social links
2. **About** — Bio, key stats, tech tags
3. **Experience** — Timeline of work and internships
4. **Projects** — Featured project cards with tech and links
5. **Skills** — Categorized hard & soft skills
6. **Contact** — Clickable contact cards

## Customization

- Edit content directly in each component file
- Colors are defined in `tailwind.config.js` and `globals.css`
- Fonts can be swapped via the Google Fonts import in `globals.css` and `pages/index.js`
