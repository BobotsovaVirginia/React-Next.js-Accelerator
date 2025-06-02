import { PublicClientApplication, Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID || '',
    authority: process.env.NEXT_PUBLIC_AUTHORITY || '',
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || ''
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
