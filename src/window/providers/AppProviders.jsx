import React from "react";
import { UserProvider } from "./AmazonContext";
import { CallProvider } from "./CallContext";
import { AlertProvider } from "../../report/providers/AlertContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <CallProvider>
        <AlertProvider>{children}</AlertProvider>
      </CallProvider>
    </UserProvider>
  );
};

export default AppProviders;
