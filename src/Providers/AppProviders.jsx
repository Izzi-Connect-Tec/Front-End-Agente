import React from 'react';
import { UserProvider } from './AmazonContext';
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
