// Autor: Karla Cruz
// Componente de la barra de navegación

import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./NotificacionesBarra";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = (props) => {
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const [menu, setMenu] = useState(false); // Estado para el menú

  // Función para mostrar/ocultar el menú
  const toggleMenu = () => {
    setMenu(!menu); // Mostrar/ocultar menú
  };

  // Función para cerrar sesión
  const handleLogOut = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    navigate("/"); // Navegar a la ruta de inicio
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
      <img
        src={logo}
        alt="Company Logo"
        className="logoH"
        onClick={handleReturn}
      />
      <div className="divB"></div>
      <div>
        <nav className={`header-nav ${menu ? "isActive" : ""}`}>
          <button className="buttonH" onClick={handleStats}>
            Estadísticas
          </button>
          <button className="buttonH" onClick={handleCall}>
            Llamada
          </button>
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
