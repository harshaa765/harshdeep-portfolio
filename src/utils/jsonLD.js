import seoData from '../data/seo.json';
import {
  SITE_URL,
  BLOG_URL,
  SITE_NAME,
  JOB_TITLE,
  CONTACT_EMAIL,
  ADDRESS_COUNTRY,
} from '../config/site';

export const jsonLdForBlogPost = (
  slug,
  title,
  excerpt,
  coverImage,
  publishedDate,
  keywords,
  wordCount
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${BLOG_URL}/${slug}`,
  mainEntityOfPage: `${BLOG_URL}/${slug}`,
  url: `${BLOG_URL}/${slug}`,
  headline: `${title}`,
  name: title,
  abstract: excerpt,
  description: excerpt,
  image: `${SITE_URL}/${coverImage}`,
  datePublished: publishedDate,
  dateModified: publishedDate,
  isPartOf: {
    '@type': 'Blog',
    '@id': BLOG_URL,
    name: seoData.blogs.title,
    publisher: {
      '@type': 'Person',
      '@id': SITE_URL,
      name: SITE_NAME,
    },
  },
  author: [
    {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: JOB_TITLE,
    },
  ],
  keywords: keywords,
  wordCount: wordCount,
});

export const jsonLdForWebSite = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateModified: new Date().toUTCString(),
  mainEntity: {
    '@type': 'Person',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    email: CONTACT_EMAIL,
    image: `${SITE_URL}/img/about-image.png`,
    jobTitle: JOB_TITLE,
    name: SITE_NAME,
    url: SITE_URL,
  },
  keywords: seoData.home.keywords,
});

export const jsonLdForBlogPage = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': BLOG_URL,
  mainEntityOfPage: BLOG_URL,
  name: seoData.blogs.title,
  description: seoData.blogs.description,
  publisher: {
    '@type': 'Person',
    '@id': SITE_URL,
    name: SITE_NAME,
  },
  keywords: seoData.blogs.keywords,
});
