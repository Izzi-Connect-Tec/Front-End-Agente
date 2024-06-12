
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

export const Llamada = () => {

  const [,,esLlamada,cambiarEsLlamada,,,] = useControlLlamadaContext();

    return(
      
      <div>
        <AnimatePresence mode="wait">
        {
          esLlamada ? 

          
        <motion.div
        key="1"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
      // exit={{ transition: { duration: 2000 } }}
       >

          <div className="llamada">
          <div className="datosLlamada">
            <TarjetaLlamada/>
            <TarjetaCliente/>
          </div>
          <div className="servicioLlamada">
            <TarjetaChat/>
            <TarjetaSoluciones/>
          </div>
        </div> 

        <TarjetaControlesLlamada/>
        </motion.div>

        :

        <motion.div

        key="2"
        
        
        initial={false}
       animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2 }}
      >



          <Calificacion/>
        </motion.div>
      
        
        }

</AnimatePresence>

</div>


    )
  }
