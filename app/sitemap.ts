import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

// /bauschutt und /infrabau fehlen bewusst: öffentlich ist dort bisher nur die
// Platzhalterseite erreichbar (siehe deren layout.tsx).
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/kieswerke", priority: 0.9 },
  { path: "/strassen-und-tiefbau", priority: 0.9 },
  { path: "/gesellschaften", priority: 0.8 },
  { path: "/projekte", priority: 0.7 },
  { path: "/projekte/highlights", priority: 0.6 },
  { path: "/projekte/abriss-recycling", priority: 0.6 },
  { path: "/projekte/erd-und-tiefbau", priority: 0.6 },
  { path: "/projekte/strassenbau", priority: 0.6 },
  { path: "/karriere", priority: 0.8 },
  { path: "/karriere/stellenangebote", priority: 0.8 },
  { path: "/karriere/arbeitgeber", priority: 0.6 },
  { path: "/karriere/berufserfahrene", priority: 0.6 },
  { path: "/karriere/praktikum", priority: 0.6 },
  { path: "/karriere/bewerbungstipps", priority: 0.5 },
  { path: "/gruppe", priority: 0.7 },
  { path: "/gruppe/geschichte", priority: 0.5 },
  { path: "/gruppe/gesellschafter", priority: 0.5 },
  { path: "/gruppe/nachhaltigkeit", priority: 0.6 },
  { path: "/gruppe/auszeichnungen", priority: 0.5 },
  { path: "/gruppe/zertifikate", priority: 0.5 },
  { path: "/news", priority: 0.6 },
  { path: "/news/events", priority: 0.5 },
  { path: "/news/pressespiegel", priority: 0.5 },
  { path: "/news/ps-momente", priority: 0.5 },
  { path: "/news/sponsoring", priority: 0.5 },
  { path: "/regionale-empfehlungen", priority: 0.5 },
  { path: "/kontakt", priority: 0.7 },
  { path: "/impressum", priority: 0.2 },
  { path: "/datenschutz", priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    priority,
  }))
}
