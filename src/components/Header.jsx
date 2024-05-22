import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
//import AccessibleBadges from "./Notificaciones";
import TemporaryDrawer from "./NotificacionesBarra";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = (props) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleStats = (e) => {
    e.preventDefault();
    navigate("/calificacion");
  };

  const handleReturn = (e) => {
    e.preventDefault();
    navigate("/window");
  };

  const handleCall = (e) => {
    e.preventDefault();
    navigate("/window");
  };

  function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    document.getElementById("reloj").innerHTML =
      horas + ":" + minutos + ":" + segundos;
  }

  window.onload = function () {
    setInterval(muestraReloj, 1000);
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="Company Logo"
        className="logoH"
        onClick={handleReturn}
      />
      <div className="divB" id="reloj"></div>
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
