import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sky Vip Ben Gurion",
    short_name: "Sky Vip Ben Gurion",
    description: "Sky Vip Ben Gurion",
    start_url: "/",
    display: "standalone",
    background_color: "black",
    theme_color: "#f28705",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
