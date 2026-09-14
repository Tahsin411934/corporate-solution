import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corporatesolutionctg.com";

  const routes = [
    "/",
    "/about",
    "/contact",
    "/services/accounting",
    "/services/advisory",
    "/services/audit",
    "/services/exportimportlicense",
    "/services/license",
    "/services/loanprocessing",
    "/services/registration",
    "/services/tax",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
