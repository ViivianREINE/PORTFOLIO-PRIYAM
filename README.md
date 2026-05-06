# Priyam Parashar — Portfolio

A luxury, research-grade AI systems developer portfolio built with React + Vite + TailwindCSS + Framer Motion.

**Design Language:** Soft pastel yellow, pastel pink, warm beige, ivory, and muted brown — evoking an Apple × Notion × Luxury AI Research Lab aesthetic.

---

## ⚡ Tech Stack

- **React 18** — Component architecture
- **Vite 5** — Ultra-fast build tool
- **TailwindCSS 3** — Utility-first styling
- **Framer Motion 11** — Premium animations
- **Lucide React** — Beautiful icons
- **Google Fonts** — Cormorant Garamond, Playfair Display, DM Sans, Manrope

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Run Locally
```bash
# Clone / enter the project
cd priyam-portfolio

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

### Build for Production
```bash
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Option A — Vercel CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option B — GitHub Integration:**
1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Build settings are auto-detected (Vite)
5. Click **Deploy**

---

### Deploy to Netlify

**Option A — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

**Option B — Netlify UI:**
1. Push to GitHub
2. Go to https://app.netlify.com
3. New Site → Import from GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy Site**

---

## 📁 Project Structure

```
src/
├── assets/              # Personal photos
├── components/
│   ├── Navbar.jsx       # Sticky responsive navbar
│   ├── Hero.jsx         # Animated landing with floating image
│   ├── About.jsx        # About me with photo mosaic
│   ├── Skills.jsx       # Animated skill cards grid
│   ├── Projects.jsx     # Premium project showcase
│   ├── Research.jsx     # Academic publications
│   ├── Achievements.jsx # Awards & recognition
│   ├── Experience.jsx   # Career timeline
│   ├── GitHub.jsx       # GitHub activity & repos
│   ├── Leadership.jsx   # Community roles
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── App.jsx              # Root component + loading screen
├── main.jsx             # Entry point
└── index.css            # Global styles & design tokens
```

---

## ✨ Features

- 🎨 **Loading Screen** with progress animation
- 🖱️ **Cursor Glow** effect
- 📊 **Scroll Progress** indicator
- 🌊 **Floating Particle** animations in hero
- 🔮 **Glassmorphism** cards
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🎭 **Section Reveal** animations with Framer Motion
- 🌿 **Grain Texture** overlay for tactile depth
- ⌨️ **Active Section** highlighting in navbar
- 🎯 **GitHub Contribution** graph visualization

---

## 🎨 Customization

Edit `src/index.css` CSS variables to adjust the color palette:
```css
:root {
  --cream: #FAF6F0;
  --ivory: #F5EFE6;
  --beige: #EDE0D0;
  --blush: #F2D8D8;
  --mocha: #8B6F5E;
  --espresso: #5C3D2E;
  --sand: #D4B896;
}
```

Update content in each component file. Images go in `src/assets/`.

---

## 📄 License

Personal portfolio — all rights reserved by Priyam Parashar.
