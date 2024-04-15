import { ListItemAvatar } from '@mui/material';
import Logo from '../../components/Logo';
import { Role } from '../../type';
import UserAvatar from '../../components/UserAvatar';
import { userName } from '../../utils/user';

type Props = {
  role: Role;
};

export default function ChatMessageItemAvatar({ role }: Props) {
  return (
    <ListItemAvatar sx={{ alignSelf: 'self-start' }}>
      {role === Role.Human ? (
        <UserAvatar name={userName} />
      ) : (
        <Logo size="short" width={40} height={40} />
      )}
    </ListItemAvatar>
  );
}
