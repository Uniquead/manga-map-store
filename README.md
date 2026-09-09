# MangaMap — Simple Demo

A full local demo of a global manga/light-novel shop directory.

## Start it
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

## Included
- Home, explore/map, shop details, submit-shop page, and admin moderation dashboard.
- Data is held only in server memory. Restarting the server resets submitted shops; this is intentional for a no-database demo.
- To turn it into a real product later, replace `app/api/shops/route.ts` memory storage with Supabase/PostgreSQL.
