"use client";
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import WorkCard from '@/component/work/workCard';
import styles from "./work.module.css";


const WorkList = ({ limit = 1000 }) => {
  const [works, setWorks] = React.useState([]);
  console.log("works",works);

  React.useEffect(() => {
    fetch('/work.json')
      .then((response) => response.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <>
    <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px',mb:'44px', textAlign:'center'}}>
       Our <span style={{ color: '#6dc396' }}>Works</span>
    </Typography>
    <div className={styles.container} style={{marginBottom:'24px'}}>
      {works.slice(0, limit).map((work, index) => (
        <div className={styles.post} key={index}>
          <WorkCard work={work} />
        </div>
      ))}
    </div>
    </>
  );
};

export default WorkList;
