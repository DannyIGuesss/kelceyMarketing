# Kelcey & Co. — Marketing Site

3-page marketing site for Kelcey (Pilates instructor turned social/event/email marketing
strategist for boutique studios). Built with React + Vite + Tailwind v4, deployed on Vercel.

## Pages
- `/` — Intro (hero, short bio, services teaser)
- `/experience` — Experience & Work (portfolio pieces + reviews)
- `/services` — Services & Pricing (service breakdown, package tiers, contact form)

## Local development
```
npm install
npm run dev
```
Visit the local URL it prints (usually http://localhost:5173).

## What's placeholder right now
- **Business name**: currently "Kelcey & Co." in NavBar.jsx and Footer.jsx
- **Photos**: every PhotoPlaceholder in Home.jsx / Experience.jsx marks where a real photo goes
- **Copy**: bio, work descriptions, testimonials — all placeholder
- **Pricing**: Services.jsx PACKAGES array
- **Email/social links**: Footer.jsx

## Contact form setup (Resend)
1. Create a free account at resend.com (3,000 emails/month free)
2. Verify a sending domain (or use their test domain while developing)
3. Create an API key
4. In Vercel: Settings > Environment Variables, add RESEND_API_KEY and CONTACT_TO_EMAIL
5. Redeploy

## Deploying to Vercel
1. Push this project to a GitHub repo
2. vercel.com > Add New Project > import the repo (auto-detects Vite)
3. Add the two env vars above before first deploy
4. Deploy — you get a *.vercel.app URL immediately

## Custom domain
1. Buy domain (Namecheap/Cloudflare, ~$10-15/yr)
2. Vercel > Project > Settings > Domains > add domain
3. Add the DNS records Vercel gives you at your registrar
4. Propagation usually under an hour

## Stack
React 19 + Vite, Tailwind v4, React Router, Vercel serverless function + Resend for email.
# kelceyMarketing
