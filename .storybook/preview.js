import '../src/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme/theme';
import { MsalProvider } from '@azure/msal-react';
import { AuthProvider } from '../src/context/AuthContext';
import { AppProvider } from '../src/context/AppContext';
import { msalInstance } from '../src/utils/auth';

export const decorators = [
  (Story) => (
    <MsalProvider instance={msalInstance}>
      <AuthProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </AppProvider>
      </AuthProvider>
    </MsalProvider>
  )
];
