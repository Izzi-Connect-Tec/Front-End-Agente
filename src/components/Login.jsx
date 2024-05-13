import React, { useState, useEffect } from "react";
import "../styles/login.css";
import giphy from "../elements/pinkdots.gif";
import logo from "../elements/izziN.png";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setGifLoaded(true);
    };
    img.src = giphy;
  }, []);

  return (
    <div className="login-container">
      <img
        src={giphy}
        alt="Gif de fondo"
        className={`background-gif ${gifLoaded ? "visible" : ""}`}
      />
      <div
        className={`background-overlay ${
          showLogin && gifLoaded ? "blurred" : ""
        }`}
      ></div>
      <div className={`login-form ${showLogin && gifLoaded ? "visible" : ""}`}>
        <h2 className="title">Bienvenido</h2>
        <div>
          <img className="logo" src={logo} alt="logoIzziConnect"></img>
        </div>
        <p className="txt">Ingrese sus credenciales para accesar.</p>
        <div className="formdiv">
          <form className="form" align="center">
            <input
              align="center"
              className="input"
              type="text"
              placeholder="Usuario"
              disabled={!showLogin || !gifLoaded}
            />
            <input
              align="center"
              className="input"
              type="password"
              placeholder="Contraseña"
              disabled={!showLogin || !gifLoaded}
            /><button
            className="button"
            type="submit"
            disabled={!showLogin || !gifLoaded}
          >
            Iniciar Sesión
          </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
