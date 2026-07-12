import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Script from 'next/script';

import BlogImage from '../../../components/elements/blogImage';

import { getSlug, getArticleFromSlug } from '../../../../src/utils/mdx';
import { jsonLdForBlogPost } from '../../../../src/utils/jsonLD';
import { SITE_URL, SITE_NAME } from '../../../config/site';

const options = {
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
};

const components = { a: Link, img: BlogImage };

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const { content, frontMatter } = getArticleFromSlug(slug);

  const jsonLd = jsonLdForBlogPost(
    slug,
    frontMatter.title,
    frontMatter.excerpt,
    frontMatter.cover,
    new Date(frontMatter.publishedAt).toUTCString(),
    frontMatter.keywords,
    frontMatter.wordCount
  );

  return (
    <>
      <section>
        <article className='prose-figure:align-center prose md:prose-lg lg:prose-xl dark:prose-invert mx-auto my-8 max-w-screen-lg px-2'>
          <h2>{frontMatter.title}</h2>
          <figure>
            <Image
              width={700}
              height={500}
              src={frontMatter.cover}
              alt={`cover image for - ${frontMatter.title}`}
              className='aspect-auto h-96 w-full object-cover'
            />
            <figcaption>
              <div className='flex justify-start gap-2'>
                <time dateTime={frontMatter.publishedAt}>
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')}
                </time>
              </div>
            </figcaption>
          </figure>
          <p>{frontMatter.excerpt}</p>

          <div className='divider'></div>
          <MDXRemote
            source={content}
            components={components}
            options={options}
          />
        </article>
      </section>
      <Script
        id='jsonld-blog'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { frontMatter } = getArticleFromSlug(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.excerpt,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.excerpt,
      type: 'article',
      publishedTime: frontMatter.publishedAt,
      authors: [{ name: SITE_NAME, url: SITE_URL }],
      images: [frontMatter.cover],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontMatter.title} | ${SITE_NAME}`,
      description: frontMatter.excerpt,
      images: [frontMatter.cover],
    },
  };
}
