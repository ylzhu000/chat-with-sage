import { Avatar, colors } from '@mui/material';

type Props = {
  name: string;
  width?: string | number;
  height?: string | number;
  color?: string;
};

export default function UserAvatar({
  name,
  width = 40,
  height = 40,
  color = colors.deepOrange[500],
}: Props) {
  return (
    <Avatar
      sx={{
        bgcolor: color,
        width,
        height,
      }}
      alt={name}
    >
      {name[0]}
    </Avatar>
  );
}
