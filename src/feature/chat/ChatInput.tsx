import { ChangeEvent, FormEvent, useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const MAX_LENGTH = 4000; // max characters that GPT 3 models currently support

type Props = {
  onChange: (value: string) => void;
  disabled: boolean;
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
  },
};

export default function ChatInput({ onChange, disabled }: Props) {
  const [value, setValue] = useState<string>('');
  const isEnabled = !!value.trim() && !disabled; // Enable flag to indicate value is not null and not streaming and not loading
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length <= MAX_LENGTH) {
      setValue(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEnabled) {
      onChange(value);
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Allow for submit if "Enter" key is press with non-empty value
    if (e.key === 'Enter' && !e.shiftKey) {
      if (isEnabled) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <TextField
        fullWidth
        sx={textFieldStyles}
        name="message-textarea"
        id="chat-input-field"
        placeholder="Type your message..."
        size={isMobile ? 'small' : 'medium'}
        multiline
        maxRows={5}
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disabled={!isEnabled}
                aria-label="submit message"
                type="submit"
              >
                <ArrowCircleUpIcon color={isEnabled ? 'inherit' : 'disabled'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
