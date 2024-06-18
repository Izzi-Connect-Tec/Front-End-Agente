import { createContext, useContext, useState } from "react";

const CallControlContext = createContext();

export const useCallControlContext = () => {
  return useContext(CallControlContext);
};

export const CallControlProvider = ({ children }) => {
  const [incomingCall, setIncomingCall] = useState(false);
  const [isCall, setIsCall] = useState(false);
  const [callControl, setCallControl] = useState(false);
  const [closeContact, setCloseContact] = useState(false);

  const changeStateIncomingCall = () => {
    setIncomingCall(!incomingCall);
  };

  const changeStateIsCall = () => {
    setIsCall(!isCall);
  };

  const activeCallControl = () => {
    setCallControl(!callControl);
  };

  const controlCloseContact = () => {
    setCloseContact(!closeContact);
  };

  return (
    <CallControlContext.Provider
      value={[
        incomingCall,
        changeStateIncomingCall,
        isCall,
        changeStateIsCall,
        callControl,
        activeCallControl,
        closeContact,
        controlCloseContact,
      ]}
    >
      {children}
    </CallControlContext.Provider>
  );
};
