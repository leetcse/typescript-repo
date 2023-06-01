// eslint-disable-next-line @typescript-eslint/no-unused-vars

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
import styles from './app.module.css';

function LSEAppBar() {
  return (
    <AppBar>
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
    <div className={styles.App}>
      <div className={styles.header}>
        <LSEAppBar />
      </div>
      <div className={styles.container}>
        <PostList />
      </div>
      <div className={styles.footer}>
        <StatusBar />
      </div>
    </div>
  );
}

export default App;
