import { Outlet } from 'react-router';
import { Box, Container, AppBar, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Sidebar';
import Header from './Header';

export default function AppLayout() {
  return (
    <Box display="flex" height="inherit">
      <CssBaseline />
      <Sidebar />
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          width: { sm: '100%', md: 'calc(100% - var(--sidebar-width))' },
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Box component="main" flexGrow={1} flexShrink={1} py={2}>
        <Toolbar />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 1, sm: 1 },
            height: 'calc(100vh - 100px)',
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
