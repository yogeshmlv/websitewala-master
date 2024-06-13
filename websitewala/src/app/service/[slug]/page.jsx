import React from 'react';
import { createClient } from 'contentful';
import styles from './singleService.module.css';
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const fetchServices = async (slug) => {
  const { items } = await client.getEntries({
    content_type: 'services',
    'fields.slug': slug
  });
  return items[0];
};

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'services' });
  return res.items.map(item => ({ slug: item.fields.slug }));
}

const SinglePostPage = async ({ params }) => {
  const services = await fetchServices(params.slug);

  return (
     <div className={styles.container}>
       <div className={styles.imgContainer}>
         <Image src={'https:' + services.fields.featuredImage.fields.file.url} alt="" fill  className={styles.img} />
       </div>
     <div className={styles.textContainer}>
       <h2 className={styles.title}>{services.fields.title}</h2>
       <div className={styles.content}>{documentToReactComponents(services.fields.content)}</div>
     </div>
   </div>
  );
};

export default SinglePostPage;