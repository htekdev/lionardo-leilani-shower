# Lionardo & Leilani Baby Shower Site — Copilot Instructions

## Project Overview
Baby shower homepage for Paula's twins (Lionardo - boy, Leilani - girl), hosted on GitHub Pages.

## Tech Stack
- **Framework:** Astro 5 (static site generator)
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Animations:** GSAP, CSS animations
- **Deployment:** GitHub Pages with GitHub Actions

## Brand System
- **Colors:** Light theme. Primary bg: #FEFCFB (cream). Accents: #7DD3FC (light blue), #F9A8D4 (light pink)
- **Fonts:** Montserrat (headings), DM Sans (body)
- **Style:** Soft gradients, rounded corners, elegant baby shower aesthetic

## Architecture
- Astro components (`.astro`) for all sections
- Tailwind brand tokens defined in `src/styles/global.css` under `@theme`
- All sections are components imported into pages

## Conventions
- Use Tailwind brand token classes (e.g., `bg-bg-cream`, `text-accent-blue`)
- Keep JS minimal — prefer CSS animations
- All images go in `public/` directory
- Mobile-first responsive design

## Event Details
- **Date:** March 7th, 2026
- **Time:** 3:00 PM
- **Location:** Viki's House (address private)
- **Mom-to-be:** Paula
- **Twins:** Lionardo (boy), Leilani (girl)
