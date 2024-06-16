import { createContext, useContext, useState } from "react";


const LlamadaContext = createContext();

export const useLlamadaContext = () => {
    return useContext(LlamadaContext);
}

export const LlamadaProvider = ({children}) => {

    const defaultCall = {
        IdLlamada: null,
        TipoLlamada: null,
        DescripcionLlamada: null
    }

    const [call, setCall] = useState(defaultCall);

    const callData = ({IdLlamada, TipoLlamada, DescripcionLlamada}) => {
        setCall(prevCall => ({
            ...prevCall,
            IdLlamada: IdLlamada,
            TipoLlamada: TipoLlamada,
            DescripcionLlamada: DescripcionLlamada
        }));
    };

    const restartCall = () => {
        setCall(defaultCall);
    };

    return (
        <LlamadaContext.Provider value={[call, callData, restartCall]} >
            {children}
        </LlamadaContext.Provider>
    )

    


}