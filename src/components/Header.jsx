// Author: Karla Cruz
// Header application component

import "../styles/header.css";
import logo from "../assets/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = (props) => {
  const navigate = useNavigate(); // Hook for navigation
  const [menu, setMenu] = useState(false); // State for the menu

  // Function to show/hide menu
  const toggleMenu = () => {
    setMenu(!menu); 
  };

  // Function to log out
  const handleLogOut = (event) => {
    event.preventDefault();
    navigate("/");
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
