'use client'
import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createClient } from "contentful";

const fetchTestimonials = async () => {
  try {
    const client = createClient({
      space: 'h9ufuj4h46ir',
      accessToken: '4nP7u4PUt9y6uCCaAOg1QSw5Hi8R4OOTVm1gNgbRZpA',
    });

    const res = await client.getEntries({ content_type: 'testimonials' });
    return res.items;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

const Testimonials = async () => {
  const testimonials = await fetchTestimonials();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{ pb: '54px' }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px', mb: '44px', textAlign: 'center' }}>
          Our <span style={{ color: '#6dc396' }}>Testimonials</span>
        </Typography>
      </Box>
      <Box>
        <Slider {...settings} style={{ margin: "12px" }}>
          {testimonials.map((testimonial, index) => (
            <Box key={`${testimonial.id}-${index}`} sx={{ px: '6px' }}>
              <Card sx={{ textAlign: 'center', minHeight: '310px', backgroundColor: '#14132b', color: 'white' }}>
                <CardContent sx={{ minHeight: '200px' }}>
                  <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
                    {testimonial.fields.content.content[0].content[0].value}
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar alt={testimonial.fields} src={'https:' + testimonial.fields.avatar.fields.file.url} />
                  }
                  title={
                    <Typography sx={{ color: 'white' }}>
                      {testimonial.fields.username}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color='#6dc396'>
                      {testimonial.fields.designation}
                    </Typography>
                  }
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Testimonials;
