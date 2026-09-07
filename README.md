# VELOOP Rewards — Engagement Banners

Task 08 · Rewards Engagement Banner/Card Redesign for **VELOOP Rewards**.

A set of five premium, fintech-styled promotional banners that introduce
users to VELOOP Rewards' core earning and redemption features: **Refer &
Earn**, **Swap Center**, **Bonus VEs**, **Captcha Tasks**, and **Exchange
Center**.

## Project Overview

The goal wasn't just to make the cards "look better" — each banner is built
to answer three questions in seconds: **What is this? Why should I use it?
What should I do?** Every banner keeps a shared visual language (dark
`#161827` surface, gold / blue / purple accents, rounded card system,
consistent CTA behaviour) while carrying its own illustration and identity.

## Banner List

| Banner | Purpose | CTA |
| --- | --- | --- |
| Refer & Earn | Invite friends and earn VEs together | Invite Now |
| Swap Center | Convert reward balances between currencies | Open Swap Center |
| Bonus VEs | Unlock extra VEs through bonus activities | Explore Bonuses |
| Captcha Tasks | Complete verification tasks for Gems | Start Task |
| Exchange Center | Redeem Gems/VEs for supported rewards | Open Exchange Center |

## Features

- 5 fully custom banners, each with a unique icon-composition illustration
  (no stock images — built from SVG + Lucide icons)
- Shared `BannerShell` + `CtaButton` system for a consistent, reusable
  component architecture without making every banner look identical
- Fully responsive: 100% width, with height ranges tuned per breakpoint
  (Desktop 410–450px · Tablet 380–540px · Mobile 330–520px)
- Subtle, meaningful motion only: floating coins/gems, a filling progress
  ring, a rotating swap icon, hover elevation, CTA hover/active/focus states
  — respects `prefers-reduced-motion`
- Premium fintech palette (deep navy, gold, soft blue, muted purple) — no
  neon or gaming-style effects
- Realistic dummy data only, no backend required

## Technology Stack

- React 19 + Vite
- Bootstrap (grid utilities)
- CSS Modules
- React Hooks
- Lucide React (icons)

## Installation Instructions

```bash
git clone https://github.com/yourusername/veloop-rewards.git
cd veloop-rewards
npm install
```

## Development Commands

```bash
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Folder Structure

```
src/
├── components/
│   ├── common/                 # BannerShell, CtaButton — shared system
│   ├── ReferEarnBanner/
│   ├── SwapCenterBanner/
│   ├── BonusVEsBanner/
│   ├── CaptchaTasksBanner/
│   └── ExchangeCenterBanner/   # each folder: Banner.jsx, Illustration.jsx, *.module.css
├── data/
│   └── rewardsData.js          # dummy content for all 5 banners
├── pages/
│   └── RewardsPage.jsx         # composes all banners into one page
├── styles/
│   └── variables.css           # design tokens (color, radius, shadow, motion)
├── App.jsx
├── main.jsx
└── index.css
```

## Responsive Design

Every banner is 100% width and adapts its layout by breakpoint:

- **Mobile (< 641px):** vertical stack — illustration → heading →
  description → reward/task info → CTA
- **Tablet (641–1023px):** horizontal content + illustration, taller height
  range
- **Desktop (≥ 1024px):** horizontal layout, contained height range,
  generous side padding

## Animation Details

| Banner | Animation |
| --- | --- |
| Refer & Earn | Floating gift core + coins |
| Swap Center | Continuously rotating swap icon, card tilt on hover |
| Bonus VEs | Progress ring fills on load, floating coins |
| Captcha Tasks | Pulsing verify button, floating gems |
| Exchange Center | Nudging conversion arrow |
| All banners | Staggered entrance rise, glass border glow, hover sheen sweep, gradient-text headings, CTA shine sweep + hover/active/focus |

All motion is CSS-only, GPU-friendly (`transform`/`opacity`), and disabled
automatically for users with `prefers-reduced-motion: reduce`.

## Screenshots

_Add screenshots of each banner (desktop, tablet, mobile) here before
submission — e.g. `docs/refer-earn.png`, `docs/swap-center.png`, etc._

## Live Demo

`https://your-project.vercel.app` _(update after deployment)_

## GitHub Repository

`https://github.com/yourusername/veloop-rewards` _(update with your repo URL)_

## Author

Nabyendu
