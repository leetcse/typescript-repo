import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Pagination,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { posts } from '../../assets/posts';
import React, { useState } from "react";
import usePagination from "../utils/pagination.tsx";


export interface PostDto {
  id: string;
  description: string;
  title: string;
  url: string;
  tags: string[];
  authors: string[];
}



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
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(posts.length / PER_PAGE);
  const _DATA = usePagination(posts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  console.log(posts);
  return (
    <Grid container >
       <Grid item sx={{ flexGrow: 1 }} align="center">
       <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        sx={{pt: 2,pb: 2 ,justifyContent: 'center'}} 
             
      />
      </Grid>
      

      {_DATA.currentData().map((post: PostDto) => (
        <Grid item xs={12} key={post.id}>
          <PostListItem post={post} key={post.id}></PostListItem>
        </Grid>
      ))}
    </Grid>
  );
}
