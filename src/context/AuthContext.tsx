// src/context/AuthContext.tsx
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { PublicClientApplication, Configuration } from '@azure/msal-browser';
import { useIsAuthenticated } from '@azure/msal-react';

// 1. MSAL configuration (replace with your own env variables)
const msalConfig: Configuration = {
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

// 2. Create MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// 3. Context value shape
interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// 4. Create the React context
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// 5. Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMsalAuthenticated = useIsAuthenticated(); // `useIsAuthenticated` from @azure/msal-react
  const [isAuthenticated, setIsAuthenticated] = useState(isMsalAuthenticated);

  useEffect(() => {
    setIsAuthenticated(isMsalAuthenticated);
  }, [isMsalAuthenticated]);

  const login = () => msalInstance.loginRedirect({ scopes: ['User.Read'] });
  const logout = () => msalInstance.logoutRedirect();

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 6. Custom hook to consume context
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
