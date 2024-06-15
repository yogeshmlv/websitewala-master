"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Button, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WorkCard = ({ work }) => {
    const [hovered, setHovered] = React.useState(false);

  return (
    <Card
      sx={{ maxWidth: 345, cursor: 'pointer', backgroundColor: '#14132b', borderRadius: '12px', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        sx={{
          position: 'relative',
          width: '100%',
          height: '194px',
          overflow: 'hidden',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <Image
          src={work.image}
          alt="Service Image"
          layout="fill"
          objectFit="cover"
        />
      </CardMedia>
      <CardContent sx={{ minHeight: 144, color: 'white' }}>
        <Typography gutterBottom variant="h5" component="div">
          {work.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {work.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon />}
          href={work.linkUrl}
          target="_blank" 
          sx={{
            marginTop: '16px',
            borderRadius: '29px',
            color: 'white',
            '&:hover': { bgcolor: '#14132b',color: '#6dc396' },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default WorkCard;
