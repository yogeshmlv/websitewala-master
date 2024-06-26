import { Container, Typography } from '@mui/material';
import BlogPage from '@/app/blog/page';
import Link from 'next/link';

const HomePageWhatDo = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4, pb: '54px' }}>
      <BlogPage limit={3} />
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '14px', mt: '26px' }}>
        <span>Interested to see more ?</span>{' '}
        <Link href="/blog" passHref>
          <span style={{ color: '#6dc396', cursor: 'pointer' }}>View More</span>
        </Link>
      </Typography>
    </Container>
  );
};

export default HomePageWhatDo;
