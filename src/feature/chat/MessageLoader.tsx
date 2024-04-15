import { Box, Skeleton } from '@mui/material';
export default function MessageLoader() {
  return (
    <Box>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton animation="wave" key={index} />
      ))}
    </Box>
  );
}
