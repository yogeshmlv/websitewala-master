'use client'
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

const HomePageContact = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push(`/contact`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4,pb:'54px' }}>
      <Box>
        <Grid container spacing={4}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              src="/WebsiteDeveloperContact.jpg"
              alt="Web Solutions"
              sx={{
                borderRadius:'20px',
                width: '100%',
                height: 'auto',
                maxHeight: '100%'
              }}
            />
          </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '50px'}}>
                Designing and <br />
                Building Brands &<br />
                <span style={{ color: '#6dc396' }}>Digital Projects</span>
            </Typography>
            <Typography variant="body1" paragraph>
                As a premier web design and development company, 
                we are committed to delivering bespoke, high-performance websites tailored to
                businesses of all sizes. Our expert team focuses on creating engaging digital experiences
                that drive traffic, boost conversions, and enhance your online visibility. 
                Let us help you achieve online success with a custom-built website that stands out
                in the competitive digital landscape.
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
              Get A Quote
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePageContact;
