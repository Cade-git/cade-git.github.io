# Middle Georgia Heating & Air — demo site

Single-page sales demo built with **Next.js (App Router) · TypeScript · Tailwind v4 · Framer Motion**.
Deploys to Vercel with zero config.

> **DEMO** — a yellow banner reads "DEMO — built for Middle Georgia Heating & Air" and search
> indexing is disabled. See "Going live" below to flip both.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + typecheck
```

## Re-skin for another HVAC client

**Edit one file: `lib/content.ts`.** Every fact, phone number, town, service card, review, and
label lives there. Colors live in `app/globals.css` under `@theme`.

Search the repo for `PLACEHOLDER` and `SWAP` to find everything that needs a real value:

| Item | Where |
|---|---|
| Owner email (mailto fallback) | `company.email` in `lib/content.ts` |
| Owner photo | `public/placeholders/owner.svg` → real jpg/webp, then remove `unoptimized` in `components/Hero.tsx` |
| Security cage photo | `public/placeholders/security-cage.svg` → real jpg/webp, then remove `unoptimized` in `components/SecurityCages.tsx` |
| Reviews | `reviews.items` in `lib/content.ts` — currently labeled samples |
| Cage details | `securityCages.bullets` — confirm with the owner |
| Live domain | `NEXT_PUBLIC_SITE_URL` env var |

## Lead delivery (the whole point)

The Request Service form currently opens the visitor's mail app via `mailto:`.
To get leads to the owner's phone as a text, follow the comment block at the top of
`components/RequestServiceForm.tsx`. Short version:

1. Create a form at formspree.io and copy its ID.
2. Set `NEXT_PUBLIC_FORMSPREE_ID` in Vercel → Settings → Environment Variables.
3. Enable SMS notifications in Formspree. Done — the code already switches over.

A Resend + Twilio route-handler alternative is documented in the same comment.

## Going live

1. Set `demoBanner.enabled = false` in `lib/content.ts`. This removes the banner **and**
   switches `robots` from noindex to indexable (see `app/layout.tsx`).
2. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
3. Swap the placeholder images and sample reviews.
4. Wire lead delivery (below) so the form reaches the owner's phone.

## Deploy

```bash
# From this directory
npx vercel            # first deploy (link project, accept defaults)
npx vercel --prod     # production
```

If deploying from the monorepo root on Vercel's dashboard, set **Root Directory** to
`middle-georgia-hvac`.
