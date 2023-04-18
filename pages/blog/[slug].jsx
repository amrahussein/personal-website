// import fs from 'fs'
import { marked } from 'marked';
import Head from 'next/head';
import Layout from '../../components/app-layout/TheLayout';
import AppHeading from '../../components/micros/typography/AppHeading';
import fetchBlogContent from '../../lib/fetchBlogContent';

export default function BlogPost({ content, data }) {
  return (
    <>
      <Head>
        <title>amromoorie | {data.title}</title>
        <meta
          name='description'
          property='og:description'
          content={data.description}
          key='description'
        />
      </Head>
      
      <Layout>
        <main className='mb-16'>
          <AppHeading>{data.title}</AppHeading>
          <section className='pt-8'>
            {/* TODO: use custom class for blog paragraphs */}
            <article className='space-y-6' dangerouslySetInnerHTML={{ __html: content }}></article>
          </section>
        </main>
      </Layout>
    </>
  );
}

// prepare posts paths beforehand
export const getStaticPaths = async () => {
  const blogContent = fetchBlogContent();

  try {
    const paths = blogContent.map((article) => ({
      params: {
        slug: article.slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(
      `Error encountered while constructing slugs out of directory names:: ${err}`,
    );
  }
};

// fetch blog posts
export const getStaticProps = async ({ params: { slug } }) => {
  const blogContent = fetchBlogContent();

  try {
    const { data, content } = blogContent.find((post) => post.slug === slug);

    const blogPostHTML = marked(content);

    return {
      props: {
        data,
        content: blogPostHTML,
      },
    };
  } catch (err) {
    console.error(
      `Error encountered while reading info within posts directory:: ${err}`,
    );
  }
};
