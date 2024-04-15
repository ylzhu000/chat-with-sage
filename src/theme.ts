import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#8499ff',
      main: '#5166fe',
      dark: '#00023c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e1cc34',
      main: '#ae9901',
      dark: '#7b6600',
      contrastText: '#000000',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Roboto', 'Open Sans', 'sans-seif'].join(','),
  },
});
