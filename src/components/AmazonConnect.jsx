import "amazon-connect-streams";
import { useEffect, React, useState, useCallback } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import { useLlamadaContext } from "../Providers/LlamadaContext";
import { useLogInContext } from "../Providers/LogInContext";


const EmbedConnect = (props) => {

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
          'Content-Type': 'application/json'
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
    try{
      //Pasarlo a la funcion de actualizar llamada
      const datos = {
        id: call.IdLlamada,
        duracion: "27",
        estado: false
      }
      console.log("DATOS LLAMADA FINALIZADA" , datos)
      let config = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
      let res = await fetch("http://10.48.64.4:8080/llamada/actualizarLlamadaFinalizada", config) 
      // let res = await fetch(`http://localhost:8080/llamada/actualizarLlamada/${call.IdLlamada}`, config) 
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    },[call.IdLlamada])



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
      contact.onConnected(async function (contact) {
        // let cid = contact.getContactId();
        // console.log(cid);
        setStateCall(true)
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
        callData({IdLlamada: attributeMap.Call.value, TipoLlamada: attributeMap.Concept.value, DescripcionLlamada: attributeMap.Notes.value})
        idCliente(attributeMap.Tel.value)
      });
      contact.onEnded(function(contact) {
        setStateCall(false)
      });
    });

    /* global connect */
    connect.agent(function(agent) {
      var help = agent.getConfiguration().username;
      console.log(`AGENTE : ${help}`);
    });
    
  }, []);


  useEffect(() => {
    if (call.IdLlamada){
      actualizarLlamada()
    }
  }, [call, actualizarLlamada])

  useEffect(() => {
    if (!stateCall && call.IdLlamada){
      actualizarLlamadaFinalizada();
      reiniciarCliente();
      restartCall();
    }
  }, [stateCall, actualizarLlamadaFinalizada])

  return <div id="ccp" style={{ width: "300px", height: "350px" }}></div>;
};

export default EmbedConnect;