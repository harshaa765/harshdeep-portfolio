import { getAllArticles } from '../../src/utils/mdx';
import { SITE_URL } from '../config/site';

export default async function sitemap() {
  const blogPosts = await getAllArticles();
  const lastModified = new Date();

  const sections = ['about', 'skills', 'projects', 'publications', 'contact'];

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sections.map((id) => ({
      url: `${SITE_URL}/#${id}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPosts.map(({ slug, publishedAt }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: publishedAt ? new Date(publishedAt) : lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ];
}
