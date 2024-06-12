import React from 'react';
import { UserProvider } from './AmazonContext';
import { AlertProvider } from './AlertContext';
import { LlamadaProvider } from './LlamadaContext';


const AppProviders = ({ children }) => {
    return (
        <UserProvider>
            <LlamadaProvider>
                <AlertProvider>
                        {children}
                </AlertProvider>
            </LlamadaProvider>
        </UserProvider>
    );
};

export default AppProviders;
