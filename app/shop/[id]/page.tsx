import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";

type Shop = { id: string; name: string; city: string; country: string; address: string; types: string[]; description: string; lat: number; lng: number };

export default async function ShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";

  if (!host) notFound();

  const response = await fetch(`${protocol}://${host}/api/shops`, { cache: "no-store" });
  if (!response.ok) notFound();

  const shops: Shop[] = await response.json();
  const shop = shops.find((listing) => listing.id === id);
  if (!shop) notFound();

  return <main className="min-h-screen"><Nav /><article className="mx-auto max-w-4xl px-5 py-10"><Link href="/explore" className="font-bold text-violet">← Explore shops</Link><p className="mt-8 font-bold text-violet">{shop.city}, {shop.country}</p><h1 className="mt-2 text-4xl font-black">{shop.name}</h1><p className="mt-5 text-lg leading-8 text-slate-700">{shop.description}</p><section className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-lg font-black">Details</h2><p className="mt-4"><b>Address / area:</b> {shop.address || "Not provided"}</p><div className="mt-4 flex flex-wrap gap-2">{shop.types.map((type) => <span key={type} className="rounded bg-lilac px-2 py-1 text-sm text-violet">{type.replace("_", " ")}</span>)}</div>{shop.lat !== 0 && <a target="_blank" rel="noreferrer" href={`https://www.openstreetmap.org/?mlat=${shop.lat}&mlon=${shop.lng}#map=16/${shop.lat}/${shop.lng}`} className="mt-6 inline-block rounded-lg bg-ink px-4 py-2 font-bold text-white">Open directions</a>}</section></article></main>;
}
