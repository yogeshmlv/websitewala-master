'use client';
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./contact.module.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Container, Typography, Box, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactPage = () => {
  const SERVICE_ID = 'service_jw03mwb';
  const TEMPLATE_ID = 'template_6jkyl8j';
  const USER_ID = 'X67rapP6KGE6p8OyU';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string(),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
        toast.success("Message sent successfully!");
        resetForm(); // Reset the form values
      } catch (error) {
        toast.error("Error sending message. Please try again later.");
        console.error("Email could not be sent:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });


  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px', mb: '44px', textAlign: 'center' }}>
        Contact <span style={{ color: '#6dc396' }}>Us</span>
      </Typography>
      <Container maxWidth="xl" sx={{ backgroundColor: '#345663', borderRadius: '20px', py: 4, pb: '54px', marginBottom: '32px' }}>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
              Our Contact <span style={{ color: '#6dc396' }}>Information</span>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center', 
                gap: '12px', 
                flexWrap: 'wrap' 
              }}
            >
              <Card sx={{minWidth: 345,backgroundColor:"#d3d3d3" }}>
                <CardActionArea>
                  <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', py: 2 }}>
                    <PhoneIcon sx={{ fontSize: 40, color: '#6dc396' }} />
                  </Box>
                  <CardContent sx={{padding:'24px',textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#6dc396',fontWeight:'700' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      (+91) 83185611551  
                      9115036388.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ minWidth: 345,backgroundColor:"#d3d3d3" }}>
                <CardActionArea>
                  <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', py: 2 }}>
                    <EmailIcon sx={{ fontSize: 40, color: '#6dc396' }} />
                  </Box>
                  <CardContent sx={{padding:'24px',textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#6dc396',fontWeight:'700' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      support@gorakhpurwebsitewala.com
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ minWidth: 345,backgroundColor:"#d3d3d3" }}>
                <CardActionArea>
                  <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', py: 2 }}>
                    <LocationOnIcon sx={{ fontSize: 40, color: '#6dc396' }} />
                  </Box>
                  <CardContent sx={{padding:'24px',textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: '#6dc396',fontWeight:'700' }} >
                      Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Peppeganj, Gorakhpur, Uttar Pradesh (India).
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <Typography variant="h4" component="h1" gutterBottom sx={{ mt: '36px', mb: '24px', textAlign: 'center',paddingLeft: { xs: '0px', lg: '450px' } }}>
           Let&apos;s <span style={{ color: '#6dc396' }}>Talk</span>
    </Typography>
      <div className={styles.container} style={{ marginBottom: '44px' }}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="Contact" fill className={styles.img} objectFit="cover" layout="fill" />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}

            <input
              type="text"
              name="email"
              placeholder="Enter Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number (Optionally)"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Custom Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className={styles.error}>{formik.errors.message}</div>
            ) : null}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <ToastContainer /> {/* This is where the toast messages will be displayed */}
      </div>
    </>
  );
};

export default ContactPage;
