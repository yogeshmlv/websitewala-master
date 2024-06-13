"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = ({ service }) => {
  const serviceData = service.fields;
  const router = useRouter();
  const [hovered, setHovered] = React.useState(false);

  const handleClick = () => {
    router.push(`/service/${service.fields.slug}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345, cursor: 'pointer', backgroundColor: '#14132b', borderRadius: '12px', position: 'relative' }}
      onClick={handleClick}
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
          src={'https:' + service.fields.cardImage.fields.file.url}
          alt="Service Image"
          layout="fill"
          objectFit="cover"
        />
      </CardMedia>
      <CardContent sx={{ minHeight: 144, color: 'white' }}>
        <Typography gutterBottom variant="h5" component="div">
          {serviceData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {serviceData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon />}
          href={`/service/` + service.fields.slug}
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

export default ServiceCard;
