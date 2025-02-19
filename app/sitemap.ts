import type { MetadataRoute } from "next";
import { getAllPosts } from "./lib/wordpress";
import { globalConfig } from "@/global-config";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  return allPages.map((page) => {
    const isPost = page.startsWith("posts/");
    const post = isPost ? posts.find((p) => `posts/${p.slug}` === page) : null;
    const lastModified = post ? post.modified.split("T")[0] : null;

    let priority = 0.8;
    if (page === "") priority = 1.0;
    else if (isPost) priority = 0.7;
    else if (
      [
        "fastTrack",
        "arbelLounge",
        "fattalTerminal",
        "LuxuryTransportation",
        "privateJet",
      ].includes(page)
    )
      priority = 0.9;
    else if (["contact-us", "terms-conditions", "cancelPolicy"].includes(page))
      priority = 0.5;

    return {
      url: `${globalConfig.siteUrl}/${page}`,
      changeFrequency: isPost ? "weekly" : "monthly",
      priority,
      ...(lastModified && { lastModified }),
    };
  });
}
