import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

const chatHistory = [
  'Alice Chatty Chronicle',
  'Sarah Talk-Time Tales',
  'Alex Gabby Galore',
  'Olivia Collection',
  'Liam Chit-Chat Chronicles',
];
export default function ChatHistory() {
  return (
    <List subheader={<ListSubheader disableGutters>Recent</ListSubheader>}>
      {chatHistory.map((item) => (
        <ListItemButton disableGutters key={item}>
          <ListItemText
            primary={<Typography variant="subtitle2">{item}</Typography>}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
