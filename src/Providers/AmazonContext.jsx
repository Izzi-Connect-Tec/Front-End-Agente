import { createContext, useContext, useState } from "react";


//Datos que serán globales
// ID (celular) del cliente
// Nombre del cliente
// Zona del cliente
// ID empleado
// ID incidencia 

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}


export const UserProvider = ({ children }) => {

    //USUARIO

    const defaultUser = {
        Celular: null,
        Nombre: null,
        ApellidoP: null,
        ApellidoM: null,
        Sexo: null,
        Correo: null,
        FechaNac: null,
        IdZona: null,
        Zona: null,
        Paquetes: []
    }

    const [user, setUser] = useState(defaultUser);

    const idCliente = (celular) => {
        setUser(prevUser => ({
            ...prevUser,
            Celular: celular
        }));
    };
    
    const datosCliente = ({Nombre, ApellidoP, ApellidoM, Sexo, Correo, FechaNac, IdZona, Zona}) => {
        setUser(prevUser => ({
            ...prevUser,
            Nombre: Nombre,
            ApellidoP: ApellidoP,
            ApellidoM: ApellidoM,
            Sexo: Sexo,
            Correo: Correo,
            FechaNac: FechaNac,
            IdZona: IdZona,
            Zona: Zona,
            Paquetes: [{
                "Nombre": "Telefonía"
            },
            {
                "Nombre": "IzziTv"
            },
            {
                "Nombre": "IzzInternet 200M"
            }]
        }));
    };

    const reiniciarCliente = () => {
        setUser(defaultUser);
    };


    //AGENTE

    const defaultAgent = {
        IdEmpleado: null,
        Nombre: null,
        ApellidoP: null,
        ApellidoM: null,
        //usuario?
    }

    const [agent, setAgent] = useState(defaultAgent);

    return (
        <UserContext.Provider value={[user, idCliente, datosCliente, reiniciarCliente, agent]}>
            {children}
        </UserContext.Provider>
    );
}
