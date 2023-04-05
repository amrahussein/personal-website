import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// import { marked } from 'marked'

export default function fetchBlogContent() {
  try {
    const blogContentDirectory = path.join('pages/blog/posts');
    const blogDirFileNames = fs.readdirSync(blogContentDirectory);

    return blogDirFileNames.map((filename) => {
      const slug = filename.split('.')[0];

      // Prepare posts' dir content
      const postContent = fs.readFileSync(
        path.join(blogContentDirectory, filename),
        'utf8',
      );
      
      const { data, content } = matter(postContent);

      return {
        slug,
        data,
        content,
      };
    });
  } catch (err) {
    console.error(
      `Error encountered while constructing slugs out of directory names OR reading info within posts directory:: ${err}`,
    );
  }
}
