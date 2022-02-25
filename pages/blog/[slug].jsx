// import fs from 'fs'
import Head from 'next/head'
// import path from 'path'
// import matter from 'gray-matter'
// import { marked } from 'marked'
import Layout from '../../components/TheLayout'
// // import fetchBlogContent from '../../blog-utils/fetchBlogContent'
// // blog template
export default function BlogPost({ content, data }) {
  return (
    <>
      <Head>
        {/* <title>{data.title}</title> */}
        {/* description */}
      </Head>
      <Layout>
        <section>
          <article dangerouslySetInnerHTML={{ __html: content }}></article>
        </section>
      </Layout>
    </>
  )
}

// // prepare posts paths beforehand
// export const getStaticPaths = async () => {
//   fetchBlogContent()
//   console.log('fetchBlogContent: ', fetchBlogContent());

//   try {
//     const files = fs.readdirSync(path.join('pages/blog/posts'))
//     const paths = files.map((file) => ({
//       params: {
//         slug: file.split('.')[0],
//       },
//     }))

//     return {
//       paths,
//       fallback: false,
//     }
//   } catch (err) {
//     console.error(
//       `Error encountered while constructing slugs out of directory names:: ${err}`
//     )
//   }
// }


// // fetch blog posts
// export const getStaticProps = async ({ params: { slug } }) => {
//   try {
//     // reading markdowned posts
//     const markdownWithMetaInfo = fs.readFileSync(
//       path.join('pages/blog/posts', slug + '.md')
//     )
//     ;('utf-8')

//     const markdownParsed = matter(markdownWithMetaInfo)

//     const blogPostHTML = marked(markdownParsed.content)
//     // console.log('blogPostHTML: ', markdownParsed);

//     // // Blog body with no meta info parsed into HTML elements
//     // const blogPostHTML = marked(markdownParsed.content)

//     return {
//       props: {
//         content: blogPostHTML,
//         data: markdownParsed.data,
//       },
//     }
//   } catch (err) {
//     console.error(
//       `Error encountered while reading info within posts directory:: ${err}`
//     )
//   }
// }
