import "amazon-connect-streams";
import { useEffect, React, useState, useCallback } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import { useLlamadaContext } from "../Providers/LlamadaContext";
import { useLogInContext } from "../Providers/LogInContext";
import { useNavigate } from "react-router-dom";


import Button from '@mui/material/Button';
import lottie from "lottie-web";
import DeleteIcon from '@mui/icons-material/Delete';
import { defineElement } from "@lordicon/element";
import DeleteButton from "./DisqueBoton";
import { green } from "@mui/material/colors";


import { motion, AnimatePresence  } from "framer-motion"
import Mute from "./Mute";
import { useControlLlamadaContext } from "../Providers/ControlLlamadaContext";

const EmbedConnect = (props) => {

  const [,cambiarLlamadaEntrando,] = useControlLlamadaContext();

  // function clearCall(){

  //   const agent = new connect.Agent();
  //   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]

  // contact.clear({
  //   success: function () {
  //     console.log("PAUSA")
  //   },
  //   failure: function (err) {
  //     console.log("NO PAUSA")
  //   },
  // });

  // }


  // function resumeCall(){

  //   const agent = new connect.Agent();
  //   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  //   const conn = contact?.getInitialConnection()

  //   if (conn.length === 0) {
  //     console.log("No Active Connections to pause");
  //     return;
  // }

  //   conn.resume();

  // }



  // function holdCall(){

  //   const agent = new connect.Agent();
  //   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  //   const conn = contact?.getInitialConnection()

  //   if (conn.length === 0) {
  //     console.log("No Active Connections to pause");
  //     return;
  // }

  //   conn.hold();

  // }

  // function hangUpCall(){

  //   const agent = new connect.Agent();
  //   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  //   const conn = contact?.getInitialConnection()

  //   if (conn.length === 0) {
  //     console.log("No Active Connections to pause");
  //     return;
  // }

  //   conn.destroy();
          
  // }

  // function acceptCall(){
  //   const agent = new connect.Agent();
  //   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  //   const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];

  //   if (activeConnections.length === 0) {
  //     console.log("No Active Connections to pause");
  //     return;
  // }

  // contact.accept({
  //   success: function () {
  //     console.log("PAUSA")
  //   },
  //   failure: function (err) {
  //     console.log("NO PAUSA")
  //   },
  // });


  // }


//   function muteAgent(){
//     const agent = new connect.Agent();
//     const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
    
//     // Get all open active connections
//     const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];
    
    
//     if (activeConnections.length === 0) {
//         console.log("No Active Connections to mute");
//         return;
//     }
    
//     // Check if we are using multiparty and see if there more than 2 active connections
//     if (contact.isMultiPartyConferenceEnabled() && activeConnections.length > 2) {
//         // if any of those are in connecting mode
//         const connectingConnections =  contact?.getConnections().filter((conn) => conn.isConnecting()) || [];
//         if (connectingConnections.length === 0) {
//             console.log("Agent Connection is muted at the server side");
//             contact.getAgentConnection().muteParticipant();
//         } else {
//             console.log("Agent Connection cannot be muted while multi party participant is connecting")
//         }
//     } else {
//         console.log("Agent connection muted at the client side");
//         agent.mute();
//     }
// }

// function unmuteAgent(){
//   const agent = new connect.Agent();
//   const contact  = agent.getContacts(connect.ContactType.VOICE)?.[0]
  
//   // Get all open active connections
//   const activeConnections = contact?.getConnections().filter((conn) => conn.isActive()) || [];
  
  
//   if (activeConnections.length === 0) {
//       console.log("No Active Connections to mute");
//       return;
//   }
  
//   // Check if we are using multiparty and see if there more than 2 active connections
//   if (contact.isMultiPartyConferenceEnabled() && activeConnections.length > 2) {
//       // if any of those are in connecting mode
//       const connectingConnections =  contact?.getConnections().filter((conn) => conn.isConnecting()) || [];
//       if (connectingConnections.length === 0) {
//           console.log("Agent Connection is muted at the server side");
//           contact.getAgentConnection().unmuteParticipant();
//       } else {
//           console.log("Agent Connection cannot be muted while multi party participant is connecting")
//       }
//   } else {
//       console.log("Agent connection muted at the client side");
//       agent.unmute();
//   }
// }


//Duracion
// Inicializa las variables para almacenar los tiempos de inicio y fin de la llamada
const [callStartTime, setcallStartTime] = useState(null);
const [callEndTime, setcallEndTime] = useState(null);
const [duration, setDuration] = useState(null);


useEffect( () => {

  if (callStartTime && callEndTime) {
    console.log("LLEGUE A CAMBIARME")
    setDuration(formatDuration(callEndTime - callStartTime));
  }
  

}, [callStartTime, callEndTime])

// Función para formatear la duración en milisegundos a un formato legible
const formatDuration = (duration) => {
  if (duration === null) return "No disponible";
  
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const pad = (num) => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

  //Agent
  const [agent,,] = useLogInContext(); 

  //Call
  const [call, callData, restartCall] = useLlamadaContext();
  const [stateCall, setStateCall] = useState(false);

  //Client
  const [, idCliente,, reiniciarCliente,] = useUserContext();

  //Callback??
  const actualizarLlamada = useCallback(async () => {
    try{
      //Pasarlo a la funcion de actualizar llamada
      const datos = {id: call.IdLlamada,
        IdEmpleado: agent.IdEmpleado}
      console.log(datos)
      let config = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', 
          "Authorization": `Bearer ${agent.Token}`
        },
        body: JSON.stringify(datos)
      }
      let res = await fetch("http://44.209.22.101:8080/llamada/actualizarLlamada", config) 
      // let res = await fetch(`http://localhost:8080/llamada/actualizarLlamada/${call.IdLlamada}`, config) 
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    },[call.IdLlamada, agent.IdEmpleado])

      //Callback??
  const actualizarLlamadaFinalizada = useCallback(async () => {

    if (call.IdLlamada && duration) {

      console.log("LEgue a la funcion",duration)
      try{
        //Pasarlo a la funcion de actualizar llamada
        const datos = {
          id: call.IdLlamada,
          duracion: duration,
          estado: false
        }
        console.log("DATOS LLAMADA FINALIZADA" , datos)
        let config = {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${agent.Token}`,
          },
          body: JSON.stringify(datos)
        }
        let res = await fetch("http://44.209.22.101:8080/llamada/actualizarLlamadaFinalizada", config) 
        // let res = await fetch(`http://localhost:8080/llamada/actualizarLlamada/${call.IdLlamada}`, config) 
        console.log(res)
      } catch (error) {
        console.log(error)
      }

    }

 
    },[call.IdLlamada,duration])



  //Variables to assing the call id and the status of the call
  // Code to embed the Amazon Connect CCP
  useEffect(() => {
    const container = document.getElementById("ccp");
    // Initialize CCP
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://izzi-team.my.connect.aws/ccp-v2/", // REQUIRED
      loginPopup: true, // optional, defaults to `true`
      loginPopupAutoClose: true, // optional, defaults to `false`
      loginOptions: {
        // optional, if provided opens login in new window
        autoClose: true, // optional, defaults to `false`
        height: 600, // optional, defaults to 578
        width: 400, // optional, defaults to 433
        top: 0, // optional, defaults to 0
        left: 0, // optional, defaults to 0
      },
      region: "us-west-2", // REQUIRED for `CHAT`, optional otherwise
      softphone: {
        // optional, defaults below apply if not provided
        allowFramedSoftphone: true, // optional, defaults to false
        disableRingtone: false, // optional, defaults to false
        ringtoneUrl: 'https://joahanbucket.s3.amazonaws.com/Li%CC%81nea+del+Perreo-Uzielito+Mix%2C+Yeri+Mua+%2C+El+Jordan+23%2C+DJ+Kiire(Video+Oficial)+(320)+(mp3cut.net).mp3', // optional, defaults to CCP’s default ringtone if a falsy value is set
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: true, //optional, defaults to 'false'
        enablePhoneTypeSettings: true, //optional, defaults to 'true'
      },
      ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
    });

    // Code to be executed once a call starts
    // eslint-disable-next-line no-undef
    connect.contact(function (contact) {

      contact.onIncoming(function(contact) { 
        console.log("VIENE LA LLAMAD CON ONCOMIG")
      });

      contact.onConnecting(function(contact) { 
        cambiarLlamadaEntrando();
        console.log("LA LLAMADA ES ON CONNECRTING")
       });

      contact.onConnected(async function (contact) {
        // let cid = contact.getContactId();
        // console.log(cid);
        setStateCall(true)
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
        callData({IdLlamada: attributeMap.Call.value, TipoLlamada: attributeMap.CurrentConcept.value, DescripcionLlamada: attributeMap.CurrentNotes.value})
        idCliente(attributeMap.Tel.value)
        setcallStartTime(new Date().getTime());


      });

      contact.onEnded(function(contact) { 
        setcallEndTime(new Date().getTime());
        setStateCall(false)
       });
      
    });

    // connect.core.onAuthFail(function(){
    //   useNavigate("/");
    // });

    /* global connect */
    connect.agent(function(agent) {
      var help = agent.getConfiguration().username;
      console.log(`AGENTE : ${help}`);
    });
    
  }, []);


  useEffect(() => {
    console.log("USE EFFECT 2");
    if (call.IdLlamada){
      console.log("Actualice la llamada");
      actualizarLlamada()
    }
  }, [call, actualizarLlamada])

  useEffect(() => {
    console.log("USE EFFECT 3");
    if (call.IdLlamada!=null && call.IdLlamada!=null && duration!=null){
      console.log("Actualice la llamada finalizada");

      //QUITAR
      
      actualizarLlamadaFinalizada();
      reiniciarCliente();
      restartCall();
      setcallStartTime(null);
      setcallEndTime(null);
      setDuration(null);
      

    }
  }, [stateCall, actualizarLlamadaFinalizada])

  

  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);






  return (
  // <div id="ccp" style={{ width: "400px", height: "250px" }}>
  <section>
    <div id="ccp" style={{ display: "block"}}/>
    {/* <button onClick={muteAgent}>MUTE</button>
    <button onClick={unmuteAgent}>UNMUTE</button>
    <button onClick={acceptCall}>ACEPTAR LLAMADA</button>
    <button onClick={hangUpCall}>TERMINAR LLAMADA</button>
    <button onClick={holdCall}>PONER EN ESPERA</button>
    <button onClick={resumeCall}>RETOMAR LLAMADA</button>
    <button onClick={clearCall}>CERRAR CONTACTO</button> */}
    {/*  avisar que hay una llamada e iniciar sesion y salir sin cpp*/}
    
    <div>











 





    </div>

  </section>
  
  )
};

export default EmbedConnect;