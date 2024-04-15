import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import Logo from './Logo';
import ChatHistory from '../feature/chat/ChatHistory';
import UserAvatar from './UserAvatar';
import { userName } from '../utils/user';

const DRAWER_WIDTH = 240;

const drawerContent = (
  <Box
    sx={{ height: '100%', p: '1.4rem' }}
    display="flex"
    justifyContent="space-between"
    flexDirection="column"
    gap={3}
  >
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <Logo size="short" width={30} height={30} />
      <Button variant="outlined" size="small" startIcon={<AddOutlined />}>
        New Chat
      </Button>
    </Box>
    <Box flexGrow={1}>
      <ChatHistory />
    </Box>
    <Box>
      <ListItemButton disableGutters>
        <ListItemIcon>
          <UserAvatar name={userName} width={36} height={36} />
        </ListItemIcon>
        <ListItemText primary={userName} />
      </ListItemButton>
    </Box>
  </Box>
);

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
    >
      <Drawer
        open={mobileOpen}
        variant="temporary"
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
