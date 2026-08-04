# Project context for Claude Code

## Client
Kelcey — Pilates instructor who also runs social/event/email marketing for boutique fitness
studios (she works for the studios, does not sell classes herself). Business name not yet
finalized; site currently uses placeholder "Kelcey & Co." Contact came in via referral
(Francisco → his sister-in-law Kelcey), requirements gathered from her handwritten notes and
text messages, plus 5 reference screenshots she liked (editorial black-and-white, serif
display type, warm cream background, sand/beige accent bar — matches a "Modern Studio"
Squarespace-style template).

## Deadline
2-week build. Started day 1 of the client conversation. First-time-hosting developer (knows
MERN, but this project deliberately skips Express/MongoDB — see stack rationale below).

## Site map (client-approved, 3 pages)
1. `/` — Intro: hero, short bio (instructor + marketer angle), services teaser
2. `/experience` — Experience & Work: portfolio (Pilates Glow Studio, "FVE"), reviews from
   past clients
3. `/services` — Services & Pricing: Social Media Management (content calendar, posting,
   community management, monthly analytics), Event Marketing (grand openings, weddings,
   studio launches, influencer events), Email Marketing (newsletters, promotional emails,
   event announcements), package pricing tiers, contact form

## Stack + why
React + Vite + Tailwind v4, deployed on Vercel. Deliberately NOT full MERN — no user data to
persist, no auth, so Express + MongoDB would just be infrastructure to babysit on a first
solo-hosted project. Contact form posts to a Vercel serverless function (`api/contact.js`)
that emails submissions via Resend — no database needed. Uses `RESEND_API_KEY` and
`CONTACT_TO_EMAIL` env vars (not yet set).

## Design system (already built, in `src/index.css` under `@theme`)
- Ink #1c1b19 (near-black), Paper #f7f3ec (cream), Sand #d9c7a3 (accent), Clay #8a7a63,
  Line #ddd3c2
- Fraunces (display/headlines), Playfair Display italic (script accents), Inter (body)
- Signature element: `ScoreboardTicker.jsx` — a scrolling results marquee styled like a gym
  scoreboard, ties her fitness background to marketing metrics

## Status as of last session
Build is functionally complete (all 3 pages, nav, contact form, serverless function stub).
NOT yet done:
- [ ] Real business name (client still deciding)
- [ ] Real photos (all currently `PhotoPlaceholder` components — swap for `<img>`)
- [ ] Real copy: bio, portfolio descriptions, testimonials (all placeholder text)
- [ ] Real pricing in `src/pages/Services.jsx` `PACKAGES` array
- [ ] Resend account + API key + env vars in Vercel
- [ ] Push to GitHub, deploy to Vercel, connect custom domain
- [ ] Mobile / accessibility / cross-browser QA pass

Working off placeholders per client instruction — do not block progress waiting on real
content, keep building/polishing around it.

## 2-week plan
Days 1–2 design system ✓ · Days 3–6 build pages ✓ · Days 7–8 contact form ✓ ·
Days 9–10 swap real copy/photos (pending) · Days 11–12 QA · Day 13 domain + deploy ·
Day 14 buffer/launch
