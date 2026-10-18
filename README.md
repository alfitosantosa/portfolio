# alfito. — portfolio

Personal portfolio for Muhamad Alfito Santosa. Next.js 16 (App Router), React 19,
Tailwind CSS v4, shadcn/ui conventions, Lucide icons.

## Run

```bash
bun install
bun run dev        # http://localhost:3000
bun run typecheck
bun run lint
bun run build
bun run start
```

## Docker

```bash
cp .env.example .env
docker compose up -d --build
```

The app is served on `http://localhost:${PORT}` (default `3000`). Change `PORT`
in `.env` to publish a different port; the same value is used inside the
container.

`NEXT_PUBLIC_*` variables are inlined during `next build`, so rebuild the image
after changing them. The compose health check probes `/` inside the container.

## Structure

- `app/page.tsx` — composes the page and emits Person / WebSite / ProfilePage JSON-LD.
- `app/layout.tsx` — fonts, metadata, viewport, analytics.
- `components/site/` — one file per section plus shared heading and conversion link.
- `lib/site.ts` — canonical URL, contact details, and SEO copy.

## Configuration

Copy `.env.example` to `.env.local` for local development, or to `.env` for
docker compose. Everything is optional except the canonical origin, which
defaults to `https://alfito.dev`.

| Variable | Purpose |
| --- | --- |
| `PORT` | Host and container port for docker compose (default `3000`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, robots, OG images |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; loads gtag.js |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads ID (remarketing / conversion config) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Ads conversion action, e.g. `AW-123/abc` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta verification token |

No third-party scripts load when these are empty.

## SEO / SEM

- Canonical, Open Graph, Twitter card, robots directives, and a generated
  1200×630 OG image (`app/opengraph-image.tsx`).
- `app/sitemap.ts`, `app/robots.ts`, and `app/icon.svg`.
- Lead CTAs fire GA4 `generate_lead`; the CV and email links are the conversion
  targets. Add the Ads conversion label to also fire a Google Ads conversion.
- The CV CTA opens a prefilled email because no PDF is bundled. Drop a PDF in
  `public/` and repoint the two `Request CV` links when one exists.
