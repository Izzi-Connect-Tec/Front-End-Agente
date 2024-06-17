// Autor: Karla Cruz
// Componente de la barra de navegación

import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./NotificacionesBarra";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useLogInContext } from "../Providers/LogInContext";

const Header = (props) => {
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const [menu, setMenu] = useState(false); // Estado para el menú

  const [,,restartAgent] = useLogInContext();

  // Función para mostrar/ocultar el menú
  const toggleMenu = () => {
    setMenu(!menu); // Mostrar/ocultar menú
  };


  const deleteAuthCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  
      if (name.trim().startsWith('lily-auth-')) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
    }
  };

  
  // Función para cerrar sesión
  const handleLogOut = (e) => {

    e.preventDefault(); // Prevenir el comportamiento por defecto

    fetch("https://izzi-team.my.connect.aws/connect/logout", { credentials: 'include', mode: 'no-cors'})
    .then(() => {
    
      


      // eslint-disable-next-line no-undef
    const eventBus = connect.core.getEventBus();
    // eslint-disable-next-line no-undef
    eventBus.trigger(connect.EventType.TERMINATE);

     // Borrar tokens y cookies de autenticación
     deleteAuthCookies();

  })
  .then(() => {
    restartAgent();
    window.localStorage.clear();
    navigate("/"); // Navegar a la ruta de inicio
    window.location.reload();
  })
    

  };

  // Función para navegar a la ruta de estadísticas
  const handleStats = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    navigate("/calificacion"); // Navegar a la ruta de estadísticas
  };

  // Función para navegar a la ruta de inicio
  const handleReturn = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    navigate("/window"); // Navegar a la ruta de inicio
  };

  // Función para navegar a la ruta de llamada
  const handleCall = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    navigate("/window"); // Navegar a la ruta de llamada
  };

  return (
    <header className="header">
      {/* <ToastContainer stacked /> */}
      <img
        src={logo}
        alt="Company Logo"
        className="logoH"
        onClick={handleReturn}
      />
      <div className="divB"></div>
      <div>
        <nav className={`header-nav ${menu ? "isActive" : ""}`}>
          {/* <button className="buttonH" onClick={handleStats}>
            My Stats
          </button> */}
          {/* <button className="buttonH" onClick={handleCall}>
            Call
          </button> */}
          <button className="logOut">
            <TemporaryDrawer />
          </button>
        </nav>
      </div>
      <div>
        <nav>
          <button className="hamburguer" onClick={toggleMenu}>
            <IoMenu />
          </button>
          <button className="logOut" onClick={handleLogOut}>
            <RiLogoutCircleRLine />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
