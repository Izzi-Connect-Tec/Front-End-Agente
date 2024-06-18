// Author: Joahan Garcia
// Context for the client data

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
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
    Paquetes: [],
  };

  const [user, setUser] = useState(defaultUser);

  const userId = (Celular) => {
    setUser((prevUser) => ({
      ...prevUser,
      Celular: Celular,
    }));
  };

  const userData = ({
    Nombre,
    ApellidoP,
    ApellidoM,
    Sexo,
    Correo,
    FechaNac,
    IdZona,
    Zona,
  }) => {
    setUser((prevUser) => ({
      ...prevUser,
      Nombre: Nombre,
      ApellidoP: ApellidoP,
      ApellidoM: ApellidoM,
      Sexo: Sexo,
      Correo: Correo,
      FechaNac: FechaNac,
      IdZona: IdZona,
      Zona: Zona,
      Paquetes: [
        {
          Nombre: "Telefonía",
        },
        {
          Nombre: "IzziTv",
        },
        {
          Nombre: "IzzInternet 200M",
        },
      ],
    }));
  };

  const restartUser = () => {
    setUser(defaultUser);
  };

  const defaultAgent = {
    IdEmpleado: null,
    Nombre: null,
    ApellidoP: null,
    ApellidoM: null,
  };

  const [agent, ] = useState(defaultAgent);

  return (
    <UserContext.Provider value={[user, userId, userData, restartUser, agent]}>
      {children}
    </UserContext.Provider>
  );
};
