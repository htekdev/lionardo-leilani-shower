# Leilani & Leo Baby Shower Site — Copilot Instructions

## Project Overview
Baby shower homepage for the Rocha family celebrating Leilani & Leo and their NICU journey, hosted on GitHub Pages.

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
- **Shower Date:** Waiting on Paula's final confirmation for the new weekend date
- **Story:** Leilani & Leo were born April 16, 2026 at 29–30 weeks
- **Current Moment:** Day 30 in the NICU
- **Family:** Paula, Hector, big brother Hector Jr., Leilani, and Leo
- **Tone:** Warm, heartfelt, family-centered, and hopeful about homecoming
