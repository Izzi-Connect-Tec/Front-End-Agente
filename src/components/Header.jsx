import React from "react";
import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <div className="divB"></div>
      <div>
        <nav>
          <button className="button">Estadísticas</button>
          <button className="button">Llamada</button>
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
