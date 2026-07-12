import Script from 'next/script';

import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Awards from '../components/sections/awards';
import Publications from '../components/sections/publications';
import Blog from '../components/sections/blog';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

import seoData from '../data/seo.json';
import { jsonLdForWebSite } from '../utils/jsonLD';
import { SITE_URL, SITE_NAME } from '../config/site';

export const metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  keywords: seoData.home.keywords,
  metadataBase: new URL(SITE_URL),
  publisher: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seoData.home.title,
    description: seoData.home.description,
    url: '/',
    siteName: SITE_NAME,
    images: ['/img/about-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home.title,
    description: seoData.home.description,
    images: ['/img/about-image.png'],
  },
};

export default function Page() {
  const jsonLd = jsonLdForWebSite();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Publications />
      <Projects />
      <Awards />
      <Blog />
      <Contact />
      <Script
        id='jsonld-home'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}
