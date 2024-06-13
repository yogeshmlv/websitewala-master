'use client'
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
  TextField,
  Box,
  IconButton,
} from '@mui/material';
import { Twitter, Instagram, GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Invalid email address. Please enter a valid email.');
      return;
    }
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const templateParams = {
      user_email: email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Subscription successful!');
        setEmail(''); 
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Subscription failed. Please try again.');
      });
  };

  return (
    <Box component="section" bgcolor="#446875">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={2}>
              <img
                src="/gorakhpurlogo.png"
                alt="website-wala-logo"
                style={{ height: '80px', width: 'auto' }}
              />
            </Box>
            <Typography variant="body1" color="textSecondary" paragraph>
              We offer the services you need to succeed online. Get in touch with us and let us help you transform your online presence.            </Typography>
            <Box mt={3} display="flex" gap={1}>
              <Link href="https://x.com/gkpwebsitewala" target="_blank" rel="noopener">
                <IconButton
                  color="inherit"
                  sx={{
                    bgcolor: 'grey.800',
                    '&:hover': { bgcolor: 'blue.600' },
                    '&:focus': { bgcolor: 'blue.600' },
                    color: 'white',
                  }}
                >
                  <Twitter />
                </IconButton>
              </Link>
              <Link href="https://in.linkedin.com/company/gorakhpurwebsitewala?trk=public_post_feed-actor-name" target="_blank" rel="noopener">
                <IconButton
                  color="inherit"
                  sx={{
                    bgcolor: 'grey.800',
                    '&:hover': { bgcolor: 'blue.600' },
                    '&:focus': { bgcolor: 'blue.600' },
                    color: 'white',
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/gorakhpurwebsite_wala/" target="_blank" rel="noopener">
                <IconButton
                  color="inherit"
                  sx={{
                    bgcolor: 'grey.800',
                    '&:hover': { bgcolor: 'blue.600' },
                    '&:focus': { bgcolor: 'blue.600' },
                    color: 'white',
                  }}
                >
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="https://github.com/yogeshmlv" target="_blank" rel="noopener">
                <IconButton
                  color="inherit"
                  sx={{
                    bgcolor: 'grey.800',
                    '&:hover': { bgcolor: 'blue.600' },
                    '&:focus': { bgcolor: 'blue.600' },
                    color: 'white',
                  }}
                >
                  <GitHub />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Typography variant="overline" style={{ fontWeight: 'bold', color: 'black' }}>
              Company
            </Typography>
            <Box mt={2} display="flex" flexDirection="column" gap={1}>
              <Link href="/about" color="textPrimary" underline="hover">
                About
              </Link>
              <Link href="/service" color="textPrimary" underline="hover">
                Services
              </Link>
              <Link href="work" color="textPrimary" underline="hover">
                Works
              </Link>
              <Link href="/contact" color="textPrimary" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Typography variant="overline" style={{ fontWeight: 'bold', color: 'black' }}>
              Services
            </Typography>
            <Box mt={2} display="flex" flexDirection="column" gap={1}>
              <Link href="/service/website-development" color="textPrimary" underline="hover">
                Web Development
              </Link>
              <Link href="/service/app-development" color="textPrimary" underline="hover">
                App Development
              </Link>
              <Link href="/service/domain-and-hosting" color="textPrimary" underline="hover">
                Domain & Hosting
              </Link>
              <Link href="/service/digital-marketing-service" color="textPrimary" underline="hover">
                Digital Marketing
              </Link>
              <Link href="/service/website-maintenance" color="textPrimary" underline="hover">
                Web Maintenance
              </Link>
              <Link href="/service/web-design-and-seo-solutions" color="textPrimary" underline="hover">
                Web Design & SEO
              </Link>
              <Link href="/service/marketing-consultants" color="textPrimary" underline="hover">
                Marketing Consultant
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Typography variant="overline" style={{ fontWeight: 'bold', color: 'black' }}>
              Quick Links
            </Typography>
            <Box mt={2} display="flex" flexDirection="column" gap={1}>
              <Link href="#" color="textPrimary" underline="hover">
                FAQ
              </Link>
              <Link href="https://wa.link/br0lsr" target="_blank" rel="noopener noreferrer" color="textPrimary" underline="hover">
                Support
              </Link>
              <Link href="#" color="textPrimary" underline="hover">
                Privacy Policy
              </Link>
              <Link href="#" color="textPrimary" underline="hover">
                Terms & Conditions
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="overline" style={{ fontWeight: 'bold', color: 'black' }}>
                Subscribe to newsletter
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  sx: {
                    bgcolor: '#d3d3d3',
                    borderColor: 'grey.300',
                    '&:hover': { borderColor: 'blue.600' },
                    '&:focus-within': { borderColor: 'blue.600' },
                  },
                }}
                sx={{ mt: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, color: '#fff', bgcolor: '#6dc396', '&:hover': { color: '#fff', bgcolor: '#2dba70' }, }}

              >
                Subscribe
              </Button>
              <ToastContainer />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 6, mb: 3 }} />
        <Typography variant="body2" color="textSecondary" align="center">
          Gorakhpurwebsitewala creative thoughts agency © Copyright 2024, All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
