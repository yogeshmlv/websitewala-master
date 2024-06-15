'use client'
import { createClient } from "contentful";
import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";
import { Typography} from '@mui/material';
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const fetchBlogs = async () => {
  const client = createClient({
    space: 'h9ufuj4h46ir',
    accessToken: '4nP7u4PUt9y6uCCaAOg1QSw5Hi8R4OOTVm1gNgbRZpA',
  });
  const res = await client.getEntries({ content_type: 'blog' });
  return res.items;
};

const BlogPage = async ({ limit = 1000 }) => {
  const [blogs, setBlogs] = useState();
  const [loading, setLaoding] = useState(false);

  useEffect(() => {
    setLaoding(true)
    fetchBlogs().then((res) => {
      setBlogs(res)
      setLaoding(false)
    })
  }, [])

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px', mb: '44px', textAlign: 'center' }}>
        Our <span style={{ color: '#6dc396' }}>Blog Content</span>
      </Typography>
      {blogs?.length > 0 ?
        <div className={styles.container} style={{ marginBottom: '54px' }}>
          {blogs?.slice(0, limit)?.map((blog, index) => (
            <div className={styles.post} key={index}>
              <PostCard blog={blog} />
            </div>
          ))}
        </div> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>}
    </>
  );
};

export default BlogPage;
