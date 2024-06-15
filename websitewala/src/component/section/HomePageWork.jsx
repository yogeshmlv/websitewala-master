import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import WorkList from '@/app/work/page';

const HomePageWork = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4, pb: '54px' }}>
      <WorkList limit={3} />
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '14px', mt: '26px' }}>
        <span>Interested to see more ?</span>{' '}
        <Link href="/work" passHref>
          <span style={{ color: '#6dc396', cursor: 'pointer' }}>View More</span>
        </Link>
      </Typography>
    </Container>
  );
};

export default HomePageWork;
