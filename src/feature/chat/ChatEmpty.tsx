import { Box, Typography, useTheme } from '@mui/material';
import Logo from '../../components/Logo';

export default function ChatEmpty() {
  const theme = useTheme();
  return (
    <Box justifyItems="center" alignItems="center" sx={{ textAlign: 'center' }}>
      <Logo size="short" width={60} height={60} />
      <Typography
        variant="h5"
        color={theme.palette.primary.dark}
        fontWeight={600}
        sx={{ mt: 2 }}
      >
        How can I help you today?
      </Typography>
    </Box>
  );
}
