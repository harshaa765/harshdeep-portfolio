import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import dayjs from 'dayjs';

import { getAllArticles } from '../../../src/utils/mdx';
import { characterLimit } from '../../../src/utils';
import { jsonLdForBlogPage } from '../../utils/jsonLD';
import seoData from '../../data/seo.json';
import { SITE_URL, SITE_NAME } from '../../config/site';

export const metadata = {
  title: seoData.blogs.title,
  description: seoData.blogs.description,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  keywords: seoData.blogs.keywords,
  metadataBase: new URL(SITE_URL),
  publisher: SITE_NAME,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: seoData.blogs.title,
    description: seoData.blogs.description,
    url: '/blog',
    siteName: SITE_NAME,
    images: ['/img/about-image.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.blogs.title,
    description: seoData.blogs.description,
    images: ['/img/about-image.png'],
  },
};

export default async function Blog() {
  const { posts } = await getAllPosts();
  const jsonLd = jsonLdForBlogPage();

  return (
    <>
      <div>
        <section id='blog' className='py-6'>
          <h2 className='text-center text-4xl font-bold tracking-wide'>Blog</h2>
          <div className='divider'></div>

          <div className='mx-auto my-10 max-w-screen-2xl px-2 text-center md:px-4 lg:px-16 xl:px-32'>
            <p className='mx-auto max-w-3xl text-center text-xl font-medium'>
              Notes and tutorials on computational mechanics — phase-field and
              cohesive-zone fracture, Abaqus UEL/UMAT subroutines, the finite
              element method, and where physics-based modeling meets machine
              learning.
            </p>
            <div className='divider'></div>
            {posts.length === 0 && (
              <div className='rounded-box border-base-300 mt-8 border border-dashed p-12'>
                <p className='text-lg font-medium opacity-70'>
                  ✍️ New posts are in the works — check back soon.
                </p>
              </div>
            )}
            <div className='mt-8 grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((frontMatter) => {
                return (
                  <Link
                    key={frontMatter.slug}
                    href={`/blog/${frontMatter.slug}`}
                    passHref
                  >
                    <div className='card card-compact bg-base-100 transform shadow-xl transition duration-500 hover:scale-105'>
                      <figure>
                        <Image
                          className='aspect-auto h-48 w-full object-cover'
                          src={frontMatter.cover}
                          alt={frontMatter.title}
                          width={500}
                          height={300}
                        />
                      </figure>
                      <div className='card-body text-left'>
                        <header className='mb-2 h-16'>
                          <h2 className='card-title'>{frontMatter.title}</h2>
                        </header>

                        <p className='mb-2 h-12'>
                          {characterLimit(frontMatter.excerpt)}
                        </p>

                        <div className='card-actions my-4 justify-start gap-2'>
                          <div className='badge badge-outline'>
                            {frontMatter.category}
                          </div>
                          <div className='badge badge-outline'>
                            {frontMatter.readingTime}
                          </div>
                          <div className='badge badge-outline'>
                            <time dateTime='2020-03-16'>
                              {dayjs(frontMatter.publishedAt).format(
                                'MMM D, YYYY'
                              )}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* <div className="mt-8 pt-8">
              <a role="button" className="btn btn-outline btn-primary btn-wide">
                View more articles
              </a>
            </div> */}
          </div>
        </section>
      </div>
      <Script
        id='jsonld-blogs'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

async function getAllPosts() {
  const articles = await getAllArticles();

  articles.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) return 1;
    if (a.publishedAt < b.publishedAt) return -1;

    return 0;
  });

  return {
    posts: articles.reverse(),
  };
}
