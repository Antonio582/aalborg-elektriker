# CLAUDE.md — aalborg-elektriker.dk

## Projekt Overview
Premium lead generation website for en autoriseret elektriker i Aalborg. Målrettet lokale kunder i Aalborg og Nordjylland med fokus på SEO-ranking for "elektriker aalborg" og relaterede søgetermer.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (med `@import "tailwindcss"` + `@theme {}`)
- **Sprog:** TypeScript
- **Animationer:** Framer Motion
- **Font:** Plus Jakarta Sans (headings) + Inter (body) via next/font/google
- **Deploy:** Vercel

## Sidestruktur (8 sider)

| Route | Side | Primært keyword |
|-------|------|-----------------|
| `/` | Forside | elektriker aalborg |
| `/eltjek` | Eltjek & Sikringsservice | eltjek aalborg |
| `/el-installation` | El-installation | el-installation aalborg |
| `/belysning` | Belysning | belysning elektriker aalborg |
| `/ladestandere` | Ladestandere til elbil | ladestander installation aalborg |
| `/akut-elektriker` | Akut Elektriker 24/7 | akut elektriker aalborg |
| `/priser` | Priser | elektriker pris aalborg |
| `/kontakt` | Kontakt | kontakt elektriker aalborg |

## Komponenter (10 stk)

| Komponent | Beskrivelse |
|-----------|-------------|
| `Navbar` | Sticky glassmorphism header med mobil hamburger menu (AnimatePresence) |
| `Footer` | 4-kolonne footer med firma, services, info, kontakt |
| `ScrollProgress` | Tynd emerald progress bar i toppen (useScroll + useSpring) |
| `ScrollReveal` | Scroll-triggered fade-in med direction support (up/down/left/right) |
| `Counter` | Animeret tal-counter med useInView trigger |
| `TextScramble` | Tekst-scramble effekt der roterer mellem ord |
| `MagneticButton` | Knap der følger musen subtilt ved hover |
| `TiltCard` | 3D tilt-effekt på cards ved mouseover |
| `PriceCalculator` | Interaktiv prisberegner for ladestandere |
| `FAQ` | Accordion med AnimatePresence height animation |

## Design System

### Farver
- **Primary:** Emerald (#065f46 → #10b981 → #ecfdf5)
- **Neutral:** Warm greys (#1c1917 → #f5f5f4)
- **Accent:** Red for akut-sektioner (#ef4444)

### Effekter
- **Glassmorphism:** `glass` klasse (rgba(255,255,255,0.7) + backdrop-blur)
- **Glass-dark:** `glass-dark` til mørke sektioner
- **Gradient Mesh:** `gradient-mesh` — multi-layered radial gradients
- **Pulse Emergency:** `pulse-emergency` — pulserende rød glow til akut CTA
- **Float Animation:** `float-animation` — gentle floating for decorative elementer

### Typografi
- Headings: Plus Jakarta Sans, weight 700
- Body: Inter, weight 400
- Responsive sizing: text-4xl → text-7xl for h1

## SEO Setup

### JSON-LD Schemas (per side)
- **Layout (global):** LocalBusiness (type: Electrician, areaServed: Aalborg + Nordjylland)
- **Alle sider:** FAQPage schema + BreadcrumbList schema
- **Akut & Priser:** Ekstra LocalBusiness schema med specifik service-info

### Primære Keywords
- "elektriker aalborg" (590 søgninger/md)
- "elektriker i aalborg"
- "aalborg elektriker"
- Sekundære: akut elektriker aalborg, el-installatør aalborg, autoriseret elektriker aalborg

### Meta Setup
- Unik `title` + `description` per side via Next.js metadata export
- Open Graph tags (da_DK locale)
- Canonical URLs
- robots: index, follow

### NLP/LSI Termer
autoriseret, el-attest, stærkstrøm, svagstrøm, sikringstavle, jordfejl, kortslutning, fejlstrømsrelæ, HPFI, isolationsmodstand, sløjfeimpedans

## Deploy
- **Platform:** Vercel
- **Domain:** aalborg-elektriker.dk
- **Team:** antonio582s-projects

## Kontaktinfo (Placeholders)
- **Firmanavn:** Aalborg El-Service
- **Telefon:** 70 XX XX XX (placeholder)
- **Email:** info@aalborg-elektriker.dk
- **Adresse:** Boulevarden XX, 9000 Aalborg
- **CVR:** XX XX XX XX (placeholder)

## Udvikling
```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Start production server
```

## Vigtige Konventioner
- `@import "tailwindcss"` + `@theme {}` i globals.css (Tailwind v4 syntax)
- Danske tegn direkte (æøå) — ALDRIG unicode escapes
- Alle sider er 'use client' pga. Framer Motion
- Min 800 danske ord per side
- Min 3-5 interne links per side med keyword-rige anchors
- INGEN emojis i produktion (brug SVG ikoner) — aktuelt brugt som placeholders
