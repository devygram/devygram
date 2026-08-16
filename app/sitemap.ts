import { MetadataRoute } from 'next';
import { getMarkdownSlugs, getMarkdownContent } from '@/lib/markdown';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devygram.com';

  // 1. Static URLs
  const staticRoutes = ['', '/projects', '/contact', '/gear', '/resume', '/work'];
  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Project URLs
  let projectUrls: MetadataRoute.Sitemap = [];
  try {
    const projectSlugs = await getMarkdownSlugs('projects');
    projectUrls = await Promise.all(
      projectSlugs.map(async (slug) => {
        const content = await getMarkdownContent('projects', slug);
        const dateStr = content?.meta.date || content?.meta.timeline;
        const lastModified = dateStr ? new Date(dateStr) : new Date();
        return {
          url: `${siteUrl}/projects/${slug}`,
          lastModified: isNaN(lastModified.getTime()) ? new Date() : lastModified,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      })
    );
  } catch (error) {
    console.error('Error fetching project slugs for sitemap:', error);
  }

  return [...staticUrls, ...projectUrls];
}
