import type { AppProps } from 'next/app';
import { MsalProvider } from '@azure/msal-react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@theme/theme';
import { msalInstance } from '@utils/auth';
import '../styles/globals.css';
import { AuthProvider } from '@context/AuthContext';
import { AppProvider } from '@context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </AppProvider>
      </AuthProvider>
    </MsalProvider>
  );
}

export default MyApp;
