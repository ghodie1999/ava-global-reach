import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "https://id-preview--8eba5975-fc01-4c60-8e8a-28c8cc160e6c.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/services/sourcing", changefreq: "monthly", priority: "0.8" },
          { path: "/services/warehousing", changefreq: "monthly", priority: "0.8" },
          { path: "/services/inspection", changefreq: "monthly", priority: "0.8" },
          { path: "/services/consolidation", changefreq: "monthly", priority: "0.8" },
          { path: "/services/logistics", changefreq: "monthly", priority: "0.8" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.9" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
