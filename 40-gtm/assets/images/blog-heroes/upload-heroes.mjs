#!/usr/bin/env node
/**
 * Upload the blog hero images in this folder to Payload CMS and attach each one
 * to its post as both `heroImage` and `meta.image` (the social share image).
 *
 * Safe to re-run: it reuses a media item that already has the same filename,
 * and skips a post that already points at that image.
 *
 * Usage (from anywhere, Node 18+):
 *   source /path/to/.env.cms                                   # sets PAYLOAD_CMS_API_KEY
 *   node 40-gtm/assets/images/blog-heroes/upload-heroes.mjs     # dry run: shows the plan
 *   node 40-gtm/assets/images/blog-heroes/upload-heroes.mjs --apply
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CMS = process.env.PAYLOAD_CMS_URL || "https://upsight-cms.vercel.app";
const DIR = path.dirname(fileURLToPath(import.meta.url));
const APPLY = process.argv.includes("--apply");

const HEROES = [
	{
		slug: "customer-discovery-vs-customer-validation",
		file: "customer-discovery-vs-customer-validation-hero.png",
		alt: "A line drawing of a looping, wandering path that starts at a magnifying glass, crosses a dashed line, and then runs straight into the center of a target, showing that customer discovery explores before product-market fit and customer validation aims at one answer after it.",
	},
	{
		slug: "customer-discovery-questions-buying-intent",
		file: "customer-discovery-questions-buying-intent-hero.png",
		alt: "A line drawing of a speech bubble with a question mark, linked by a dotted line to a price tag, showing that the right customer discovery question leads to a real signal that someone will pay.",
	},
	{
		slug: "how-many-customer-interviews-is-enough",
		file: "how-many-customer-interviews-is-enough-hero.png",
		alt: "A line drawing of a curve that climbs steeply and then levels off, with speech bubbles along it: the early bubbles are full of lines and the later ones are empty, showing that each new customer interview teaches you less until you have heard enough.",
	},
];

const key = process.env.PAYLOAD_CMS_API_KEY;
if (APPLY && !key) {
	console.error("Missing PAYLOAD_CMS_API_KEY. Run: source /path/to/.env.cms");
	process.exit(1);
}
const auth = key ? { Authorization: `users API-Key ${key}` } : {};

async function getJson(url, init = {}) {
	const res = await fetch(url, { ...init, headers: { ...auth, ...(init.headers || {}) } });
	const body = await res.text();
	if (!res.ok) throw new Error(`${init.method || "GET"} ${url} -> ${res.status} ${body.slice(0, 400)}`);
	return JSON.parse(body);
}

async function findMedia(filename) {
	const q = `${CMS}/api/media?where[filename][equals]=${encodeURIComponent(filename)}&limit=1&depth=0`;
	const { docs } = await getJson(q);
	return docs[0] || null;
}

async function uploadMedia(h) {
	const bytes = await readFile(path.join(DIR, h.file));
	const form = new FormData();
	form.append("file", new Blob([bytes], { type: "image/png" }), h.file);
	form.append("_payload", JSON.stringify({ alt: h.alt }));
	const out = await getJson(`${CMS}/api/media`, { method: "POST", body: form });
	return out.doc;
}

async function findPost(slug) {
	const q = `${CMS}/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=0`;
	const { docs } = await getJson(q);
	if (!docs[0]) throw new Error(`No post with slug ${slug}`);
	return docs[0];
}

for (const h of HEROES) {
	const post = await findPost(h.slug);
	let media = await findMedia(h.file);
	const heroId = typeof post.heroImage === "object" ? post.heroImage?.id : post.heroImage;
	const metaId = typeof post.meta?.image === "object" ? post.meta?.image?.id : post.meta?.image;

	console.log(`\n${h.slug} (post ${post.id}, ${post._status})`);
	console.log(`  media:     ${media ? `exists (id ${media.id})` : "will upload"} ${h.file}`);
	console.log(`  heroImage: ${heroId ?? "none"} | meta.image: ${metaId ?? "none"}`);
	if (!APPLY) continue;

	if (!media) {
		media = await uploadMedia(h);
		console.log(`  uploaded -> media id ${media.id} (${media.url})`);
	}
	if (heroId === media.id && metaId === media.id) {
		console.log("  already attached, skipping");
		continue;
	}
	await getJson(`${CMS}/api/posts/${post.id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			heroImage: media.id,
			meta: { ...(post.meta || {}), image: media.id },
			_status: post._status,
		}),
	});
	console.log(`  attached media ${media.id} as heroImage + meta.image`);
}

console.log(APPLY ? "\nDone. Check https://getupsight.com/blog" : "\nDry run only. Re-run with --apply.");
