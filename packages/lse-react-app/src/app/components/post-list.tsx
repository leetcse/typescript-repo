import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Modal,
  Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

interface PostDto {
  id: string;
  description: string;
  title: string;
  url: string;
  tags: string[];
  authors: string[];
}

const posts: PostDto[] = [
  {
    id: 'x-1',
    title: 'Mdx examples',
    description: 'Example to demonstrate mdx format',
    url: 'mdx/example.mdx',
    tags: ['markdown'],
    authors: ['Deepak Kumar'],
  },
  {
    id: 'x-2',
    title: 'Binary Heap',
    description: 'A discussion about binary heap data structure',
    url: 'mdx/binary-heap.mdx',
    tags: ['data-structures', 'binary-heap', 'javascript', 'typescript'],
    authors: ['Deepak Kumar'],
  },
];

function PostListItem({ post }: { post: PostDto }) {
  return (
    <Card className="CardItem">
      <CardContent>
        <Typography>{post.title}</Typography>
        <Typography align="right">By {post.authors.join(' ')}</Typography>
        <Typography variant="body2">{post.description}</Typography>
        <Typography
          align="right"
          display={'inline'}
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          Tags: {post.tags.join(' ')}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/posts/${post.id}`} relative="path">
          Read
        </Link>
      </CardActions>
    </Card>
  );
}

export function PostList() {
  const navigate = useNavigate();
  const handleClose = () => {
    // Refresh
    navigate(0);
  };
  console.log(posts);
  return (
    <Grid container>
      {posts.map((post: PostDto) => (
        <Grid item xs={12} key={post.id}>
          <PostListItem post={post} key={post.id}></PostListItem>
        </Grid>
      ))}
    </Grid>
  );
}
