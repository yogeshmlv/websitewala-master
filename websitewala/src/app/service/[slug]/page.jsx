import React from 'react';
import { createClient } from 'contentful';
import styles from './singleService.module.css';
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
      space: 'h9ufuj4h46ir',
      accessToken: '4nP7u4PUt9y6uCCaAOg1QSw5Hi8R4OOTVm1gNgbRZpA',
});

const fetchServices = async (slug) => {
  const { items } = await client.getEntries({
    content_type: 'services',
    'fields.slug': slug
  });
  return items[0];
};

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