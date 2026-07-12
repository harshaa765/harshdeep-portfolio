# Harshdeep Sharma — Portfolio & Research Blog

Personal portfolio and blog of **Harshdeep Sharma**, PhD researcher in Computational
Mechanics (fracture & fatigue of composites, phase-field / cohesive-zone modeling, and
physics-informed machine learning).

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS 4**, **daisyUI 5**, and
**MDX** for the blog.

## Features

- Single-page portfolio: hero, about + timeline, skills, publications, projects, awards, contact
- MDX blog with reading time, SEO metadata, and JSON-LD structured data
- Light/dark theme (system-aware) via `next-themes`, bound to a custom daisyUI theme
- Contact form backed by a serverless route using Nodemailer / Gmail SMTP
- SEO: per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, and JSON-LD
- Content is data-driven — most sections read from JSON in `src/data`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `EMAIL_USERNAME` | Gmail address used to send contact-form mail |
| `EMAIL_PASSWORD` | Gmail **App Password** (not the account password) |
| `NEXT_PUBLIC_ANALYTICS_ID` | Google Tag Manager / Analytics ID (optional) |
| `NEXT_PUBLIC_SITE_URL` | Public base URL, e.g. `https://your-domain.com` |

> `.env.local` is git-ignored — never commit real secrets.

## Editing content

Most content lives in `src/data` and `src/config`:

| File | Controls |
| --- | --- |
| `src/config/site.js` | Site URL, name, job title, contact email (single source of truth) |
| `src/data/seo.json` | Titles, descriptions, keywords |
| `src/data/socials.json` | Social links (LinkedIn, GitHub, ORCID, Scholar, ResearchGate) |
| `src/data/skills.json` | Skills (primary bars + secondary tags) |
| `src/data/timeline.json` | Education / experience timeline (About section) |
| `src/data/publications.json` | Publications (title, authors, venue, year, DOI, status) |
| `src/data/projects.json` | Featured projects (title, description, tech, GitHub, stars) |
| `src/data/awards.json` | Awards |
| `src/data/navItems.json` | Header navigation |

## Writing blog posts

Add `.mdx` files to `posts/`. Each post has front matter (`title`, `publishedAt`,
`excerpt`, `cover`, `category`, `keywords`) followed by MDX content. The filename becomes
the URL slug. Cover images go in `public/img/blog/`.

## Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run prettier   # format with Prettier
```

## Deployment (Vercel)

1. Import the repo into Vercel.
2. Add the environment variables above in Project → Settings → Environment Variables
   (set `NEXT_PUBLIC_SITE_URL` to your production domain).
3. Deploy — Vercel builds on every push to `main`.

## Credits

Bootstrapped from the [next-portfolio-blog](https://github.com/abhijeet-ixr/next-portfolio-blog)
starter template.

## License

[MIT](./LICENSE)
