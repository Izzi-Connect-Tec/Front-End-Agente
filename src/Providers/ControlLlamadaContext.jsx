import { createContext, useContext, useState } from "react";

const ControlLlamadaContext = createContext();

export const useControlLlamadaContext = () => {
    return useContext(ControlLlamadaContext);
}

export const ControlLlamadaProvider = ({children}) => {

    const [llamadaEntrante, setLlamadaEntrante] = useState(false);

    const [esLlamada, setEsLlamada] = useState(false);

    const [controlLlamada, setControlLlamada] = useState(false);

    const [cerrarContacto, setCerrarContacto] = useState(false);


    const cambiarLlamadaEntrando = () => {
        setLlamadaEntrante(!llamadaEntrante)
    }

    const cambiarEsLlamada = () => {
        setEsLlamada(!esLlamada)
    }

    const activarControlLlamada = () => {
        setControlLlamada(!controlLlamada)
    }

    const controlarCerrarContacto = () => {
        setCerrarContacto(!cerrarContacto)
    }

    return(
        <ControlLlamadaContext.Provider value={[llamadaEntrante, cambiarLlamadaEntrando, esLlamada, cambiarEsLlamada, controlLlamada, activarControlLlamada, cerrarContacto, controlarCerrarContacto ]}>
            {children}
        </ControlLlamadaContext.Provider>
    )
}