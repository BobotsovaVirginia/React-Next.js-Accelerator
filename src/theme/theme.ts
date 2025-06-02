import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
        secondary: { main: '#ac3b61' }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif'
    }
});

export default theme;
