'use client'
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

const HomePageContent = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push(`/about`);
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor:'#345663', borderRadius:'20px', py: 4,pb:'54px' }}>
      <Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px',mb:'44px'}}>
             Who We <span style={{ color: '#6dc396' }}>Are</span>
            </Typography>
            <Typography variant="body1" paragraph>
              At our core, we are a dedicated team of web designers and developers based in Gorakhpur.
              Our passion lies in crafting innovative digital solutions that propel businesses forward in the dynamic
              realm of Web3. From creating seamless mobile applications and scalable websites to implementing 
              effective digital marketing strategies and providing reliable website maintenance,
              we offer a comprehensive suite of services. With expertise in e-commerce web design, 
              SEO optimization, and expert marketing consulting, we empower our clients to achieve their
              digital goals with confidence. Contact us today to discover how we can transform your ideas 
              into impactful realities and navigate the digital landscape together.
            </Typography>
            <Button
            onClick={handleClick}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                marginTop:'16px',
                border:'2px solid white',
                borderRadius:'29px',
                // bgcolor: '#2196f3',
                color: 'white',
                '&:hover': {
                  bgcolor: '#6dc396',
                  border:'2px solid white',
                },
              }}
            >
              Know More
            </Button>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              src="/growth.png"
              alt="Web Solutions"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '100%'
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePageContent;
