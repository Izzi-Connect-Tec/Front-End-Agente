import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UserToggleContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const useUserToggleContext = () => {
    return useContext(UserToggleContext);
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //Usar bien los parametros
    // POr que no ? {user1}
    const cambiaLogin = (user1) => {
        setUser({
            name: user1
        });
    }

    return (
        <UserContext.Provider value={user}>
            <UserToggleContext.Provider value={cambiaLogin}>
                {children}
            </UserToggleContext.Provider>
        </UserContext.Provider>
    );
}
