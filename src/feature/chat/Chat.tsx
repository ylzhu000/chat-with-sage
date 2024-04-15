import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import ChatInput from './ChatInput';
import ChatEmpty from './ChatEmpty';
import ChatMessagesList from './ChatMessagesList';

import { TMessage, Role } from '../../type';
import { getAssistantResponse } from '../../services/apiChat';
import { useScrollBottom } from '../../hooks/useScrollBottom';
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';

// Styles for blurring effect on the bottom of the chat message container
const messageContentStyles = {
  height: '100%',
  overflowY: 'scroll',
  maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20px',
    background: 'linear-gradient(to bottom, transparent, white 100%)',
    pointerEvents: 'none',
  },
};

export default function Chat() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const scrollRef = useScrollBottom(
    messages[messages.length - 1]?.content.length
  );

  const { globalSettings } = useContext(GlobalSettingsContext);

  async function fetchMessages() {
    setIsLoading(true);
    try {
      const emitter = await getAssistantResponse({
        query: inputValue,
        modelConfig: {
          modelId: globalSettings?.modelId as string,
        },
      });
      let result = '';
      emitter.on('data', ({ content }) => {
        if (result !== '') {
          setIsLoading(false); // Loading can be set to false once a piece of streaming data has arrived
        }

        // Only add content before stop
        if (content !== 'stop') result += content;

        setMessages((prev) => {
          const allMessages = [...prev];

          if (content !== 'stop') {
            setIsStreaming(true);
            allMessages[allMessages.length - 1].content = result;
            allMessages[allMessages.length - 1].streaming = true;
          } else {
            setIsStreaming(false);
            allMessages[allMessages.length - 1].streaming = false;
          }

          return allMessages;
        });
      });

      emitter.on('error', (error) => {
        enqueueSnackbar(error, { variant: 'error' });
      });

      return () => {
        // clean up eventemitter when the component unmounts
        emitter.off('data');
        emitter.off('error');
      };
    } catch (error) {
      enqueueSnackbar(error as string, { variant: 'error' });
    }
  }

  useEffect(() => {
    if (inputValue) {
      fetchMessages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const onInputChange = (value: string) => {
    setMessages((prev) => [
      ...prev,
      {
        role: Role.Human,
        content: value,
        streaming: false,
      },
      {
        role: Role.Assistant,
        content: '',
        streaming: true,
      },
    ]);
    setInputValue(value);
  };

  return (
    <Box
      sx={{
        height: '100%',
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        flexGrow={1}
        flexShrink={1}
        sx={{
          ...(messages.length === 0 && {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }),
          maxHeight: 'calc(100% - 56px)', // 56px is the height of the input field
          overflowY: 'hidden',
          position: 'relative',
        }}
      >
        {messages.length > 0 ? (
          <Box sx={messageContentStyles} pb={2}>
            <ChatMessagesList data={messages} isLoading={isLoading} />
            <div ref={scrollRef}></div>
          </Box>
        ) : (
          <ChatEmpty />
        )}
      </Box>
      <Box px={{ sm: 1, xs: 1, md: 3 }}>
        <ChatInput
          onChange={onInputChange}
          disabled={isLoading || isStreaming}
        />
      </Box>
    </Box>
  );
}
