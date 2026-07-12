import seoData from '../data/seo.json';
import { SITE_NAME } from '../config/site';

export default function manifest() {
  return {
    name: `${SITE_NAME} — Computational Mechanics`,
    short_name: SITE_NAME,
    description: seoData.home.description,
    start_url: '/',
    display: 'standalone',
    theme_color: '#0f766e',
    background_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
