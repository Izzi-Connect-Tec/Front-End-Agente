import { createContext, useContext, useState } from "react";

const AlertContext = createContext();
const AlertToggleContext = createContext();

export const useAlertContext = () => {
    return useContext(AlertContext);
}

export const useAlertToggleContext = () => {
    return useContext(AlertToggleContext);
}

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);

    const toggleAlert = (status) => {
        setAlert(status);
    }

    return (
        <AlertContext.Provider value={alert}>
            <AlertToggleContext.Provider value={toggleAlert}>
                {children}
            </AlertToggleContext.Provider>
        </AlertContext.Provider>
    );
}
