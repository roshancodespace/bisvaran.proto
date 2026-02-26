import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://bisvaran.com";

    const routes = [
        "",
        "/about",
        "/specialists",
        "/doctor-consultations",
        "/emergency-support",
        "/home-nursing",
        "/physiotherapy",
        "/privacy",
        "/terms",
        "/services/doctor-consulting",
        "/services/elderly-care",
        "/services/home-nursing",
        "/services/hospital-attendants",
        "/services/travel-assistance",
        "/how-it-works/step-01",
        "/how-it-works/step-02",
        "/how-it-works/step-03",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
