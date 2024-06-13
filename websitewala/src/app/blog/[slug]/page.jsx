import React from 'react';
import { createClient } from 'contentful';
import styles from './singlePost.module.css';
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const fetchBlog = async (slug) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': slug
  });
  return items[0];
};

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'blog' });
  return res.items.map(item => ({ slug: item.fields.slug }));
}

const SinglePostPage = async ({ params }) => {
  const blog = await fetchBlog(params.slug);

  return (
     <div className={styles.container}>
       <div className={styles.imgContainer}>
         <Image src={'https:' + blog.fields.featuredImage.fields.file.url} alt="" fill  className={styles.img} />
       </div>
     <div className={styles.textContainer}>
       <h1 className={styles.title}>{blog.fields.title}</h1>
       <div className={styles.detail}>
       <Image src={'https:' + blog.fields.user.fields.file.url} alt="" width={50} height={50} className={styles.avatar}/>
       <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
           <span className={styles.detailValue}>{blog.fields.username}</span>
         </div>
         <div className={styles.detailText}>
           <span className={styles.detailTitle}>Published</span>
           <span className={styles.detailValue}>
           {formatDate(blog.fields.datetime)}
           </span>
         </div>
       </div>
       <div className={styles.content}>{documentToReactComponents(blog.fields.method)}</div>
     </div>
   </div>
  );
};

export default SinglePostPage;


const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}