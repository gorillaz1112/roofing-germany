import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dach Service 24 Plus",
    short_name: "DachService24+",
    description:
      "Ihr zuverlässiger Dachdecker in Wesseling und Köln. Dachmontage, Dachreparatur, Abdichtung und mehr.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf8",
    theme_color: "#b45309",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
