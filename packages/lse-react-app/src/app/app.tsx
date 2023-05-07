// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PostList } from './components/post-list';

function LSEAppBar() {
  return (
    
      <AppBar >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Leetcse.com
          </Typography>
        </Toolbar>
      </AppBar>
    
  );
}

function StatusBar() {
  return (
    
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        {' '}
        <Typography align="center" padding={'1em'}>
          {' '}
          LEETCSE.com All Rights Reserved 2023{' '}
        </Typography>
      </AppBar>
    
  );
}

export function App() {
  return (
    
      <Grid container direction={'column'} sx={{height:'100vh' }} >
        <Grid item>
          <LSEAppBar />
        </Grid>
        <Grid item sx={{pt: 10 }}>
          <PostList />
        </Grid>
        <Grid item>
          <StatusBar />
        </Grid>
      </Grid>
   
  );
}

export default App;
