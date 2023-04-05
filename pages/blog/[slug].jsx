// import fs from 'fs'
import { marked } from 'marked';
import Head from 'next/head';
import Layout from '../../components/app-layout/TheLayout';
import AppHeading from '../../components/micros/typography/AppHeading';
import fetchBlogContent from '../../lib/fetchBlogContent';
// // blog template
export default function BlogPost({ content, data }) {
  // console.log('data: ', data);
  // console.log('fetchBlogContent: ', fetchBlogContent())
  return (
    <>
      <Head>
        {/* <title>{data.title}</title> */}
        {/* description */}
      </Head>
      <Layout>
        <main className='mb-16'>
          <AppHeading>{data.title}</AppHeading>
          <section className='pt-8'>
            <article dangerouslySetInnerHTML={{ __html: content }}></article>
          </section>
        </main>
      </Layout>
    </>
  );
}

// prepare posts paths beforehand
export const getStaticPaths = async () => {
  const blogContent = fetchBlogContent();
  // console.log('fetchBlogContent: ', fetchBlogContent())

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

  console.log('params:::::::::::: ', slug);
  try {
    const { data, content } = blogContent.find((post) => post.slug === slug);
    // console.log('data: ', data);

    // reading markdowned posts
    // const markdownWithMetaInfo = fs.readFileSync(
    //   path.join('pages/blog/posts', slug + '.md')
    // )
    // ;('utf-8')

    //     const markdownParsed = matter(markdownWithMetaInfo)

    const blogPostHTML = marked(content);
    //     // console.log('blogPostHTML: ', markdownParsed);

    // // Blog body with no meta info parsed into HTML elements
    // const blogPostHTML = marked(markdownParsed.content)

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
