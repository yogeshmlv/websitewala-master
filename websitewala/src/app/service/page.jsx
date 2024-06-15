'use client'
import { createClient } from "contentful";
import styles from "./service.module.css";
import ServiceCard from "@/component/serviceCard/serviceCard";
import { useState, useEffect } from "react";
import {Typography,} from '@mui/material';
import { BallTriangle } from "react-loader-spinner";

const fetchServices = async () => {
  try {
    const client = createClient({
      space: 'h9ufuj4h46ir',
      accessToken: '4nP7u4PUt9y6uCCaAOg1QSw5Hi8R4OOTVm1gNgbRZpA',
    });

    const res = await client.getEntries({ content_type: 'services' });
    return res.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

const ServicePage = ({ limit = 1000 }) => {
  const [services, setServices] = useState();
  const [loading,setLaoding] =useState(false);

  useEffect(() => {
    setLaoding(true)
    fetchServices().then((res) => {
      setServices(res)
      setLaoding(false)
    })
  }, [])
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px', mb: '44px', textAlign: 'center' }}>
        What <span style={{ color: '#6dc396' }}>We Do</span>
      </Typography>
      {services?.length>0 ? 
      <div className={styles.container} style={{ marginBottom: '24px' }}>
        {services?.slice(0, limit)?.map((service, index) => (
          <div className={styles.post} key={index}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
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

export default ServicePage;
