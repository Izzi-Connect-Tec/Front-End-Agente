import React from "react";
import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logoH" />
      <div className="divB"></div>
      <div>
        <nav>
          <button className="buttonH">Estadísticas</button>
          <button className="buttonH">Llamada</button>
        </nav>
      </div>
      <div>
        <nav>
          <button className="logOut">
            <RiLogoutCircleRLine />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
