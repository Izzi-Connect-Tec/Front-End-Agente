import "../styles/header.css";
import logo from "../elements/izziN.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleStats = (e) => {
    e.preventDefault();
    navigate("/calificacion");
  }

  const handleReturn = (e) => {
    e.preventDefault();
    navigate("/window");
  }

  const handleCall = (e) => {
    e.preventDefault();
    navigate("/window");
  }

  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logoH" onClick={handleReturn}/>
      <div className="divB"></div>
      <div>
        <nav>
          <button className="buttonH" onClick={handleStats}>Estadísticas</button>
          <button className="buttonH" onClick={handleCall}>Llamada</button>
        </nav>
      </div>
      <div>
        <nav>
          <button className="logOut" onClick={handleLogOut}>
            <RiLogoutCircleRLine />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;