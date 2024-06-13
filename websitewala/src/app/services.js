import { createClient } from "contentful";

export const fetchServices = async () => {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
    const res = await client.getEntries({ content_type: 'services' });
    return res.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return []; // or handle the error as needed
  }
};
