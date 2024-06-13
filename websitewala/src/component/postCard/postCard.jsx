import Image from "next/image"
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const PostCard = ({ blog }) => {
  const username = blog.fields.username;
  const firstLetter = username.charAt(0);

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer', backgroundColor: '#14132b', borderRadius: '12px', position: 'relative' }}>
      <CardContent sx={{ position: 'relative', minHeight: '3.5rem', padding: '0px' }}>
        <Typography
          variant="caption"
          component="span"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
            bgcolor: '#fff',
            color: '#14132b',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {blog.fields.blogList}
        </Typography>
        <CardHeader
           sx={{color: 'white'}}
          avatar={
            <Avatar sx={{ bgcolor: '#fff',color:'#14132b' }}  aria-label="recipe">
              {firstLetter}
            </Avatar>
          }
          title={username}
          subheader={<span style={{ color: 'white' }}>{formatDate(blog.fields.datetime)}</span>}
          />
      </CardContent>
      <CardMedia sx={{ position: 'relative', width: '100%', height: '194px' }}>
        <Image
          src={'https:' + blog.fields.user.fields.file.url}
          alt="Paella dish"
          layout="fill"
          objectFit="cover"
        />
      </CardMedia>
      <CardContent sx={{color: 'white'}} >
        <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
          {blog.fields.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
          {blog.fields.description.split(" ").slice(0, 20).join(" ")} ..
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon />}
          href={`/blog/` +  blog.fields.slug}
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
export default PostCard;

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

