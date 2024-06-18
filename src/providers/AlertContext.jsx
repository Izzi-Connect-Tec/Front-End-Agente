import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertContext = createContext();
const AlertToggleContext = createContext();

export const useAlertContext = () => {
  return useContext(AlertContext);
};

export const useAlertToggleContext = () => {
  return useContext(AlertToggleContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  const toggleAlert = (status) => {
    setAlert(status);
  };

  const notify = () => toast("Wow so easy!");

  return (
    <AlertContext.Provider value={[alert, notify]}>
      <AlertToggleContext.Provider value={toggleAlert}>
        {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  );
};
