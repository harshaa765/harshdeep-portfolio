// Single source of truth for site-wide identity, URLs and metadata.
// The public base URL comes from NEXT_PUBLIC_SITE_URL (see .env.example),
// falling back to localhost for local development.

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/** Absolute site origin, without a trailing slash. */
export const SITE_URL = rawUrl.replace(/\/+$/, '');

/** Absolute URL of the blog index. */
export const BLOG_URL = `${SITE_URL}/blog`;

export const SITE_NAME = 'Harshdeep Sharma';
export const SITE_TAGLINE = 'PhD Researcher · Computational Mechanics';
export const JOB_TITLE = 'PhD Researcher in Computational Mechanics';
export const CONTACT_EMAIL = 'harshsharma52@gmail.com';

/** Home country for structured data (no precise address for privacy). */
export const ADDRESS_COUNTRY = 'India';

/** Twitter/X handle without the leading @, or '' if none. */
export const TWITTER_HANDLE = '';
