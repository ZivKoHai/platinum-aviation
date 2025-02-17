import { globalConfig } from "@/global-config";
import { getAllPosts } from "@/app/lib/wordpress";

const baseUrl = globalConfig.siteUrl;

export async function GET() {
  const staticPages = [
    "",
    "fastTrack",
    "arbelLounge",
    "fattalTerminal",
    "LuxuryTransportation",
    "privateJet",
    "contact-us",
    "posts",
    "terms-conditions",
    "cancelPolicy",
  ];

  const posts = await getAllPosts();
  const dynamicPages = posts.map((post) => `posts/${post.slug}`);

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map((slug) => {
        const isPost = slug.startsWith("posts/");
        const post = isPost
          ? posts.find((p) => `posts/${p.slug}` === slug)
          : null;
        const lastmod = post ? post.modified : new Date().toISOString();

        return `
      <url>
        <loc>${baseUrl}/${slug}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${slug === "" ? "1.00" : "0.80"}</priority>
      </url>
    `;
      })
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
