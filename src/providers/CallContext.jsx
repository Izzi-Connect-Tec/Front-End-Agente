// Author: Karla Cruz
// Create a context provider for the call details

import { createContext, useContext, useState } from "react";

const CallContext = createContext();

export const useCallContext = () => {
  return useContext(CallContext);
};

export const CallProvider = ({ children }) => {
  const defaultCall = {
    IdLlamada: null,
    TipoLlamada: null,
    DescripcionLlamada: null,
    callSentiment: null,
  };

  const [call, setCall] = useState(defaultCall);

  const callData = ({ IdLlamada, TipoLlamada, DescripcionLlamada }) => {
    setCall((prevCall) => ({
      ...prevCall,
      IdLlamada: IdLlamada,
      TipoLlamada: TipoLlamada,
      DescripcionLlamada: DescripcionLlamada,
    }));
  };

  const changeCallSentiment = ({ SentimientoLlamada }) => {
    setCall((prevCall) => ({
      ...prevCall,
      SentimientoLlamada: SentimientoLlamada,
    }));
  };

  const restartCall = () => {
    setCall(defaultCall);
  };

  return (
    <CallContext.Provider
      value={[call, callData, restartCall, changeCallSentiment]}
    >
      {children}
    </CallContext.Provider>
  );
};
