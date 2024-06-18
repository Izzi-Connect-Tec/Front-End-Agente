// Author: Maximiliano Lecona
// Create a context provider for the application

import React from "react";
import { UserProvider } from "./AmazonContext";
import { CallProvider } from "./CallContext";


const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <CallProvider>
        {children}
      </CallProvider>
    </UserProvider>
  );
};

export default AppProviders;
