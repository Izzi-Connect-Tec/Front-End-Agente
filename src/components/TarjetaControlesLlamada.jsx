import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { motion, AnimatePresence  } from "framer-motion"
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Button from '@mui/material/Button';
import '../styles/callcontrollers.css'
import {acceptCall, rejectCall, muteAgent, unmuteAgent, holdCall, resumeCall, hangUpCall, clearCall} from "../Logic/botonesLlamada.js"

import Mute from "./Mute";
import {React, useEffect, useState } from "react";
import OpcionesExternas from "./OpcionesExternas";
import Timer from './Timer';
import { useControlLlamadaContext } from '../Providers/ControlLlamadaContext';


import { keyframes } from '@emotion/react';


export default function TarjetaControlesLlamada() {

  // Define la animación con keyframes
const rotar = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(-360deg);
}
`;


  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "100vw",
    height: 78,
    // padding: theme.spacing(2),
    ...theme.typography.body2,
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    

    // "&::before": {
    //   content: `""`,
    //   position: 'absolute',
    //   height: '900%',
    //   width: '110%',
    //   backgroundImage: 'conic-gradient(red 20deg, transparent 120deg)',
    //   animation: `${rotar} 2s linear infinite`,
    // },
  
    // "&::after": {
    //   content: `""`,
    //   position: 'absolute',
    //   height: '95%',
    //   width: '95%',
    //   backgroundColor: 'white',
    //   borderRadius: "9%",
    // },
  }));

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
        exit={{ opacity: 0 }}
        transition={{delay: 0.25 }}
        className='callcontrollers'
        >
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          target=".block"
          class="current-color"
        />
        <div style={{ fontSize: '17px', fontWeight: 'bold'  }}>Incoming call</div>
        {/* //Aceptar */}
        <Button
          className="block"
          variant="contained"
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
            backgroundColor: "white",
            color: "green",
            border: "solid green",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
        >
          Acept
        </Button>
        {/* //Rechazar */}
        <Button
          className="dismiss"
          variant="contained"
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
            backgroundColor: "white",
            color: "red",
            border: "solid red",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          Decline
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
  <div className='callcontrollers'>
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
      <button onClick={cambiarLlamadaEntrando}>Llamada entra</button>
      <button onClick={activarControlLlamada}>Open</button>
      
    <motion.div
    animate={animar}
      variants={variants}
      >
    <Stack direction={{ xs: 'column', s:'row', md:'row'}} useFlexGap='wrap' spacing={{xs:3,s:3,md:3}}>
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
