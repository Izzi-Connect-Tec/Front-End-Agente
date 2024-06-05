import React from 'react';
import { UserProvider } from './UserContext';
import { AlertProvider } from './AlertContext';

const AppProviders = ({ children }) => {
    return (
        <UserProvider>
            <AlertProvider>
                {children}
            </AlertProvider>
        </UserProvider>
    );
};

export default AppProviders;
