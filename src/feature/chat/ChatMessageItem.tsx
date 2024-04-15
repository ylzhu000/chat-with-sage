import { useMemo, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import DOMPurify from 'dompurify';
import * as marked from 'marked';
import { TMessage, Role } from '../../type';

import ChatEdit from './ChatEdit';
import ChatMessageItemAvatar from './ChatMessageItemAvatar';
import MessageLoader from './MessageLoader';

type Props = {
  data: TMessage;
  isLoading: boolean;
};

const litItemStyles = {
  '&:hover .edit-icon': {
    visibility: 'visible', // Only show edit icon on hover
  },
  px: {
    xs: 1,
    sm: 1,
    md: 2,
  },
  py: 0,
};

const listItemTextStyles = {
  mt: 0,
  '& .MuiListItemText-primary': { color: '#0D0D0D', fontWeight: 600 },
  '& .MuiListItemText-secondary': {
    color: '#0D0D0D',
    fontSize: '1.6rem',
  },
  '& .MuiListItemText-secondary p:first-of-type': {
    mt: 0,
  },
};

export default function ChatMessageItem({ data, isLoading }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const sanitizeContent = useMemo(() => {
    return DOMPurify.sanitize(marked.parse(data.content) as string);
  }, [data.content]);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <List sx={{ py: { xs: 0, sm: 1 } }}>
      <ListItem sx={litItemStyles}>
        <ChatMessageItemAvatar role={data.role} />
        <ListItemText
          sx={listItemTextStyles}
          primary={
            data.role === Role.Human ? (
              'You'
            ) : (
              <>
                <span>Sage</span>
                {!isEditing && (
                  <IconButton
                    size="small"
                    className="edit-icon"
                    sx={{
                      visibility: 'hidden',
                    }}
                    onClick={toggleEdit}
                  >
                    <EditOutlined />
                  </IconButton>
                )}
              </>
            )
          }
          secondary={
            <>
              {isEditing && data.role === Role.Assistant ? (
                <ChatEdit data={sanitizeContent} />
              ) : data.streaming && isLoading ? (
                <MessageLoader />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: sanitizeContent }} />
              )}
              {data.role === Role.Assistant && isEditing && (
                <Button onClick={toggleEdit}>Cancel</Button>
              )}
            </>
          }
        ></ListItemText>
      </ListItem>
    </List>
  );
}
