import { Box } from '@mui/material';
import ChatMessageItem from './ChatMessageItem';

import { TMessage } from '../../type';

type Props = {
  data: TMessage[];
  isLoading: boolean;
};

export default function ChatMessagesList({ data, isLoading }: Props) {
  return (
    <Box>
      {data.map((item, index) => (
        <ChatMessageItem key={index} data={item} isLoading={isLoading} />
      ))}
    </Box>
  );
}
