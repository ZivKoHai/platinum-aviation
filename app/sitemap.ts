// app/sitemap.ts
import type { MetadataRoute } from "next";
import { globalConfig } from "@/global-config";
import { getAllPosts } from "@/app/lib/wordpress"; // keep your path; adjust if needed

export const dynamic = "force-dynamic";
// or: export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Normalize base (no trailing slash)
  const base = globalConfig.siteUrl.replace(/\/+$/, "");

  // Static pages (use the actual route segment casing you have in /app)
  const staticPages = [
    "",
    "fastTrack",
    "arbelLounge",
    "fattalTerminal",
    "luxuryTransportation", // was "LuxuryTransportation"
    "privateJet",
    "contact-us",
    "posts",
    "terms-conditions",
    "cancelPolicy",
  ];

  // Fetch WP posts safely
  let posts: Array<{ slug: string; modified?: string }> = [];
  try {
    posts = await getAllPosts();
  } catch (err) {
    console.error("sitemap: getAllPosts failed", err);
    posts = [];
  }

  const dynamicPages = posts
    .filter((p) => p?.slug)
    .map((p) => `posts/${p.slug}`);

  // De-dupe and keep order (home first)
  const seen = new Set<string>();
  const allPages = [...staticPages, ...dynamicPages].filter((p) => {
    if (seen.has(p)) return false;
    seen.add(p);
    return true;
  });

  // Pre-index posts by slug for quick lookup
  const postsByPath = new Map(
    posts.map((p) => [`posts/${p.slug}`, p] as const)
  );

  // Build sitemap entries
  const now = new Date();

  return allPages.map((page) => {
    const isHome = page === "";
    const isPost = page.startsWith("posts/");
    const post = isPost
      ? postsByPath.get(page as `posts/${string}`)
      : undefined;

    // Priority rules
    let priority = 0.8;
    if (isHome) priority = 1.0;
    else if (isPost) priority = 0.7;
    else if (
      [
        "fastTrack",
        "arbelLounge",
        "fattalTerminal",
        "luxuryTransportation",
        "privateJet",
      ].includes(page)
    ) {
      priority = 0.9;
    } else if (
      ["contact-us", "terms-conditions", "cancelPolicy"].includes(page)
    ) {
      priority = 0.5;
    }

    // Use Date for lastModified (fallback to now for posts if needed)
    const lastModified: Date | undefined =
      isPost && post?.modified ? new Date(post.modified) : undefined;

    // Ensure clean URL: base + (“/” for home, or `/${page}`)
    const url = isHome ? `${base}/` : `${base}/${page}`;

    return {
      url,
      changeFrequency: isPost ? "weekly" : "monthly",
      priority,
      ...(lastModified ? { lastModified } : { lastModified: now }), // optional: always set
    };
  });
}
