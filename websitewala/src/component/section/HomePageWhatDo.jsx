'use client'
import { Container, Typography, Box} from '@mui/material';
import { useRouter } from 'next/navigation';
import ServicePage from '@/app/service/page';

const HomePageWhatDo = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push(`/blog`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4,pb:'54px' }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mt: '36px',mb:'44px' , textAlign:'center'}}>
             What  <span style={{ color: '#6dc396' }}>We Do</span>
            </Typography>
      </Box>
      <ServicePage limit={3} />
      <Box>
        <Typography variant="h6" component="h1" gutterBottom sx={{ textAlign:'center',fontSize:'14px', mt:'-26px'}}>
         Intrested to see more ? <span onClick={handleClick} style={{ color: '#6dc396',cursor:'pointer' }}>View More</span>
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePageWhatDo;
