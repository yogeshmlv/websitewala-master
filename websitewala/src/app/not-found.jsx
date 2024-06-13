import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, this page does not exist.
      </Typography>
      <Box
        component="img"
        src="/404NotFound.png"
        alt="404 Not Found"
        sx={{
          maxWidth: '100%',
          height: '240px',
          mt: 4,
          mb: 4,
        }}
      />
      <Link href="/" passHref>
        <Button variant="contained"
        sx={{ mt: 2,color:'#fff',bgcolor:'#6dc396','&:hover': { color: '#fff',bgcolor:'#2dba70' }, }}
        >
          Return Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
