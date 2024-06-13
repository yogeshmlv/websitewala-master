import { createClient } from "contentful";
import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";

// Async function to fetch data from Contentful
const fetchBlogs = async () => {
  const client = createClient({
    space: 'h9ufuj4h46ir',
    accessToken: '4nP7u4PUt9y6uCCaAOg1QSw5Hi8R4OOTVm1gNgbRZpA',
  });
  const res = await client.getEntries({ content_type: 'blog' });
  return res.items;
};

const BlogPage = async ({ limit = 1000 }) => {
  const blogs = await fetchBlogs();

  return (
    <div className={styles.container} style={{marginBottom:'54px'}}>
      {blogs.slice(0, limit).map((blog, index) => (
        <div className={styles.post} key={index}>
          <PostCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
