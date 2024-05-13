import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import giphy from '../elements/abstract.gif';

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
      <img src={giphy} alt="Animación de carga" className={`background-gif ${gifLoaded ? 'visible' : ''}`} />
      <div className={`background-overlay ${showLogin && gifLoaded ? 'blurred' : ''}`}></div>
      <div className={`login-form ${showLogin && gifLoaded ? 'visible' : ''}`}>
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="text" placeholder="Usuario" disabled={!showLogin || !gifLoaded} />
          <input type="password" placeholder="Contraseña" disabled={!showLogin || !gifLoaded} />
          <button type="submit" disabled={!showLogin || !gifLoaded}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
