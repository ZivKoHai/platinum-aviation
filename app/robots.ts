import type { MetadataRoute } from "next";
import { globalConfig } from "@/global-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${globalConfig.siteUrl}/sitemap.xml`,
  };
}
