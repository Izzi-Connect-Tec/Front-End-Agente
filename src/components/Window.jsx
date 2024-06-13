// Componente que funje de contenedor del resto de la pantalla
// import "../styles/window.css";
import "../styles/window-header.css";
import Service from "./Service";
// import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";
import Header from "./Header";
import AppProviders from "../Providers/AppProviders";
import {TarjetaLlamada} from "./tarjetaLlamada";
import { TarjetaCliente } from "./tarjetaCliente";
import { TarjetaChat } from "./tarjetaChat";
import { TarjetaSoluciones } from "./tarjetaSoluciones";
import OpcionesExternas from "./OpcionesExternas";
import TarjetaControlesLlamada from "./TarjetaControlesLlamada";
import EmbedConnect from "./AmazonConnect";
import Calificacion from "./Calificacion"
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion"
import { useControlLlamadaContext } from "../Providers/ControlLlamadaContext";
import { Llamada } from "./pruebaWindow";

const Window = (props) => {

  const [,,esLlamada,cambiarEsLlamada,,,,,] = useControlLlamadaContext();

  return (
    <AppProviders>
      {/* <div className="window-header">
        <Header />
        <div className="window">
          <div className="">
            <Solutions />
          </div>
          <div className="">
            <Client />
          </div>
          <div className="service">
            <Service />
          </div>
        </div>
      </div> */}


    

      <div className="window-header">
        <Header />
        {/* <OpcionesExternas/> */}
        <br/>
        {/* <button onClick={cambiarEsLlamada}>Entra llamada</button> */}
        <Llamada/>        
        <EmbedConnect/>
      </div>
    </AppProviders>
  );
};

export default Window;
