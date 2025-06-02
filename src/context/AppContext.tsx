import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AppContextValue {
    user: { id: string; name: string } | null;
    setUser: (user: { id: string; name: string } | null) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ id: string; name: string } | null>(null);

    return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextValue => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};
