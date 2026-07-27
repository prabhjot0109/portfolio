import { MetadataRoute } from "next";
import { blogsData } from "@/data/blogsData";
import { projectsData } from "@/data/projectsData";
import { researchPapers } from "@/data/researchData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prabhjotsinghassi.vercel.app";

  const staticRoutes = [
    "",
    "/blogs",
    "/experience",
    "/projects",
    "/pull-requests",
    "/research",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = blogsData
    .filter((blog) => !blog.isExternal && blog.slug)
    .map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const projectRoutes = projectsData
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const researchRoutes = researchPapers
    .filter((paper) => !paper.isExternal && paper.slug)
    .map((paper) => ({
      url: `${baseUrl}/research/${paper.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...projectRoutes,
    ...researchRoutes,
  ];
}
