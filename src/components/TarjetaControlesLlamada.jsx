import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { motion, AnimatePresence  } from "framer-motion"
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Button from '@mui/material/Button';

import {acceptCall, rejectCall, muteAgent, unmuteAgent, holdCall, resumeCall, hangUpCall, clearCall} from "../Logic/botonesLlamada.js"

import Mute from "./Mute";
import {React, useEffect, useState } from "react";
import OpcionesExternas from "./OpcionesExternas";
import Timer from './Timer';
import { useControlLlamadaContext } from '../Providers/ControlLlamadaContext';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100vw",
  height: 20,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function TarjetaControlesLlamada() {

  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);

  const [hold, setHold] = useState(false);

  const holdLlamada = () => {
    if(hold){
      resumeCall()
      setHold(!hold)
    } else {
      holdCall()
      setHold(!hold)
    }
  };

  const [mute, setMute] = useState(false);

  const [llamadaEntrante, cambiarLlamadaEntrando,,cambiarEsLlamada, controlLlamada, activarControlLlamada, cerrarContacto, controlarCerrarContacto] = useControlLlamadaContext();

  const [isCerrarContacto, setIsCerrarContacto] = useState(false);

  const [animar, setaAnimar] = useState("");

  useEffect(() => {

    if (llamadaEntrante===false){
      setaAnimar("sinLlamada");
    }

    if (llamadaEntrante===true){
      setaAnimar("entraLlamada");
    }

    if (controlLlamada===true){
      setaAnimar("botonesLlamada");
    }

    if (isCerrarContacto===true){
      setaAnimar("cerrarContacto");
    }

  }, [controlLlamada, llamadaEntrante])

  const variants = {
    sinLlamada: { opacity: 1, x: 0, width: 100 },
    entraLlamada: { opacity: 1,  width: 500 },
    botonesLlamada: { opacity: 1,  width: "100%" },
    cerrarContacto: { opacity: 1,  width: 500 }
  }






  function HoldFunction() {
    return(

      <AnimatePresence>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
      >
      <Button className={hold ? "hold hidden" : "hold"} variant="outlined" 
      onClick={holdLlamada}
    startIcon={<lord-icon src="https://cdn.lordicon.com/ptvmrrcc.json" trigger="hover" target=".hold" class="current-color"/>}
    sx={{color: "black",
    "&:hover": {
      color: "#ec6907",
    },
    "&.hidden": {
      opacity: 0,
    },
    transition: "opacity 0.5s ease",}}>
        Hold
      </Button>
      </motion.div>
      </AnimatePresence>
    )
  }


  const ResumeFunction = () => {
    return(
      <AnimatePresence>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
      >

<Button className={hold ? "resume" : "resume hidden"} variant="outlined" 
    onClick={holdLlamada}
    startIcon={<lord-icon src="https://cdn.lordicon.com/aklfruoc.json" trigger="hover" target=".resume" class="current-color"/>}
    sx={{color: "black",
    "&:hover": {
      color: "green",
    },
    "&.hidden": {
      opacity: 0,
    },
    transition: "opacity 0.5s ease",}}>
        Resume
      </Button>

      </motion.div>
      </AnimatePresence>
    
    )
  }

  const LlamadaEntrante = () => {

    const aceptarLlamada = () => {
      
      acceptCall()
      cambiarEsLlamada()
      cambiarLlamadaEntrando()
      activarControlLlamada()
    };
    
    const rechazarLlamada = () => {
      rejectCall()
      cambiarLlamadaEntrando()
    }

    
    return (
      <motion.div
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          target=".block"
          class="current-color"
        />
        "LLamada entrante"
        {/* //Aceptar */}
        <Button
          className="block"
          variant="outlined"
          onClick={aceptarLlamada}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/gkznqdvu.json"
              trigger="hover"
              target=".block"
              class="current-color"
            />
          }
          sx={{
            color: "black",
            border: "solid green",
            "&:hover": {
              color: "green",
            },
          }}
        >
          Aceptar
        </Button>
        {/* //Rechazar */}
        <Button
          className="dismiss"
          variant="outlined"
          onClick={rechazarLlamada}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/ncpuzezu.json"
              trigger="hover"
              target=".dismiss"
              class="current-color"
            />
          }
          sx={{
            color: "black",
            border: "solid red",
            "&:hover": {
              color: "red",
            },
          }}
        >
          Rechazar
        </Button>
      </motion.div>
    );
  };


    
  const DuranteLlamada = () => {

    const finalizarLlamada = () => {
      hangUpCall()
      activarControlLlamada()
      controlarCerrarContacto() 
    };

    const muteLlamada = () => {
      if(mute){
        unmuteAgent()
        setMute(!mute);
      } else {
        muteAgent()
        setMute(!mute);
      }
    }

return(
  <div>
    <Timer/>
        <Button className="block" variant="outlined" onClick={muteLlamada}
    startIcon={<Mute lineVisible={mute}/>}
    sx={{color: mute ? "red" : "black",
    "&:hover": {
      color: "red",
    },}}>
        {mute ? "Unmute" : "Mute"}
      </Button>

      {
      hold ?
      <ResumeFunction/> :
      <HoldFunction /> 
    }

    <Button className="block" variant="outlined" 
    startIcon={<lord-icon src="https://cdn.lordicon.com/azurzetm.json" trigger="hover" target=".block" class="current-color"/>}
    sx={{color: "black",
    "&:hover": {
      color: "blue",
    },}}>
        Dialpad
      </Button>

      <Button className="dismiss" variant="outlined" onClick={finalizarLlamada}
    startIcon={<lord-icon src="https://cdn.lordicon.com/cnsdvotv.json" trigger="hover" target=".dismiss" class="current-color"/>}
    sx={{color: "black",
    "&:hover": {
      color: "red",
    },}}>
        Terminar llamada
      </Button>


      <OpcionesExternas/>

      


  </div>
)
  }

  const CerrarContacto = () => {

    const finalizarContacto = () => {
      clearCall()
      controlarCerrarContacto() 
      cambiarEsLlamada()
    };

    return(
      <div>

      <Timer/>

      <Button className="block" variant="outlined" onClick={finalizarContacto}
      startIcon={<lord-icon src="https://cdn.lordicon.com/ysopsmtv.json" trigger="hover" target=".block" class="current-color"/>}
      sx={{color: "black",
      "&:hover": {
        color: "blue",
      },}}>
          Cerrar contacto
        </Button>
      </div>
  
    )
  }

  


  return (
    <section>
      {/* <button onClick={cambiarLlamadaEntrando}>Llamada entra</button>
      <button onClick={activarControlLlamada}>Open</button> */}
      
    <motion.div
    animate={animar}
      variants={variants}
      >
    <Stack direction="row" spacing={2}>
      <DemoPaper>
        {llamadaEntrante ? <LlamadaEntrante/> : <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
        />}
        {controlLlamada && <DuranteLlamada/>}
        {cerrarContacto && <CerrarContacto/>}
        {/* <OpcionesExternas/> */}
      </DemoPaper>
    </Stack>
    </motion.div>
    </section>
  );
}
