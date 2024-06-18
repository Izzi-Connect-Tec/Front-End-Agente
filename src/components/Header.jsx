// Author: Karla Cruz
// Header application component

import "../styles/header.css";
import logo from "../assets/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useLogInContext } from "../providers/LogInContext";

const Header = (props) => {
  const [,,restartAgent] = useLogInContext();
  const navigate = useNavigate(); // Hook for navigation
  const [menu, setMenu] = useState(false); // State for the menu

  // Function to show/hide menu
  const toggleMenu = () => {
    setMenu(!menu);
  };


  // Function to delete authentication cookies.
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

  // Function to log out
  const handleLogOut = (event) => {
    event.preventDefault();
    fetch("https://izzi-team.my.connect.aws/connect/logout", {
      credentials: "include",
      mode: "no-cors",
    })
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
      });
  };

  // Function to navigate to the window route
  const handleReturn = (event) => {
    event.preventDefault();
    navigate("/window");
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
        <nav className={`headerNav ${menu ? "isActive" : ""}`}>
          <button className="logOut"></button>
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
