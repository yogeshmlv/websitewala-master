"use client";
import { Typography } from '@mui/material';
import WorkCard from '@/component/work/workCard';
import styles from "./work.module.css";
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';


const WorkList = ({ limit = 1000 }) => {
  const [works, setWorks] = useState([]);
  const [loading, setLaoding] = useState(false);
  console.log("works", works);

  useEffect(() => {
    fetch('/work.json')
      .then((response) => response.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px', mb: '44px', textAlign: 'center' }}>
        Our <span style={{ color: '#6dc396' }}>Works</span>
      </Typography>
      {works?.length > 0 ?
        <div className={styles.container} style={{ marginBottom: '24px' }}>
          {works.slice(0, limit).map((work, index) => (
            <div className={styles.post} key={index}>
              <WorkCard work={work} />
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

export default WorkList;
