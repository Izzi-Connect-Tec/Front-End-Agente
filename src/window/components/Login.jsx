// Authors: Karla Cruz and Joahan García
// Component for the log in page.

import "../styles/login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import openingGif from "../../assets/pinkDots.gif";
import logo from "../../assets/izziN.png";
import { useLogInContext } from "../providers/LogInContext";

const LogIn = () => {
  const [agent, agentData,] = useLogInContext();
  const navigate = useNavigate();
  const [showLogIn, setShowLogIn] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAut, setErrorAut] = useState(false);

  // Setting timeout to show the login form.
  useEffect(() => {
    setTimeout(() => {
      setShowLogIn(true);
    }, 2000);
  }, []);

  // Initial gif loading - opening for login.
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setGifLoaded(true);
    };
    img.src = openingGif;
  }, []);

  // Navigating to window when the agent's name is available.
  useEffect(() => {
    if (agent.Nombre) {
      navigate("/window");
    }
  }, [agent.Nombre, navigate]);

  // Asyncrhonous function to handle the log in request creating a credentials object.
  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      console.log("Logging in");
      const credentials = {
        email: username,
        password: password,
      };
      let config = {
        method: "POST",
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
        },
        body: JSON.stringify(credentials),
      };
      let res = await fetch("http://44.209.22.101:8080/auth/signin", config);

      if (!res.ok) {
        setErrorAut(true);
        throw new Error("Log In request could not be completed. :(");
      }

      const employeeData = await res.json();
      console.log(employeeData);
      console.log(employeeData.token.AccessToken);
      agentData({
        IdEmpleado: employeeData.user.IdEmpleado,
        Nombre: employeeData.user.Nombre,
        ApellidoP: employeeData.user.ApellidoP,
        ApellidoM: employeeData.user.apellidoM,
        Token: employeeData.token.AccessToken,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logInContainer">
      <img
        src={openingGif}
        alt="Log In Gif"
        className={`backgroundGif ${gifLoaded ? "visible" : ""}`}
      />
      <div
        className={`backgroundOverlay ${
          showLogIn && gifLoaded ? "blurred" : ""
        }`}
      />
      <div className={`logInForm ${showLogIn && gifLoaded ? "visible" : ""}`}>
        <h2 className="logInTitle">Welcome</h2>
        <div>
          <img className="logo" src={logo} alt="IzziConnect logo" />
        </div>
        <p className="logInText">Enter your credentials to access.</p>
        {errorAut && <p className="logInError">Wrong user or password.</p>}
        <div className="formLogInDiv">
          <form className="formLogIn" align="center" onSubmit={handleLogIn}>
            <input
              className="input"
              type="email"
              placeholder="User"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              disabled={!showLogIn || !gifLoaded}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={!showLogIn || !gifLoaded}
            />
            <button
              className="button"
              type="submit"
              disabled={!showLogIn || !gifLoaded}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;