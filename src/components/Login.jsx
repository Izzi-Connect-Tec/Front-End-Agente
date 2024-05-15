import React, { useState, useEffect } from "react";
import "../styles/login.css";
import giphy from "../elements/pinkdots.gif";
import logo from "../elements/izziN.png";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              className="input"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!showLogin || !gifLoaded}
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!showLogin || !gifLoaded}
            />
            <button
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
