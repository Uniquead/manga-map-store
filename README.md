# MangaMap

> Your next favorite shelf is closer than you think.

**MangaMap** is a global directory for finding physical manga, light-novel, used-book, and anime merchandise shops. It brings neighborhood discoveries and far-away bookstores onto one searchable map—so readers can plan a shelf-hunting stop wherever they travel.

**Live demo:** https://manga-and-novels.vercel.app

## What you can do

- **Explore the world map** — Browse shop listings alongside their locations.
- **Search with intent** — Find shops by name, city, country, or description.
- **Filter the shelves** — Narrow results to manga, light novels, used books, or merchandise.
- **Discover shop details** — Open individual listings for a closer look.
- **Grow the directory** — Submit a new shop for review.
- **Moderate submissions** — Use the demo admin dashboard to publish, hold, or reject listings.

## Built with

| Layer | Tools |
| --- | --- |
| App framework | Next.js + React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Mapping | Leaflet + OpenStreetMap |

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project map

```text
app/
├── page.tsx          # Welcome page and destination shortcuts
├── explore/          # Search, filters, shop list, and map
├── shop/[id]/        # Individual shop listing
├── submit/           # Community shop submission form
├── admin/            # Demo moderation dashboard
└── api/shops/        # Shop listing API
components/
├── Nav.tsx           # Shared navigation
└── ShopMap.tsx       # Leaflet-powered map
```

## A note about the admin page

`/admin` intentionally has no authentication because this is a demo. Add authentication and authorization before deploying it as a real moderation tool.

---

Made for readers who judge a trip by the bookstores they find.
