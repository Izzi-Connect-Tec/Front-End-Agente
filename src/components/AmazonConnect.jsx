import "amazon-connect-streams";
import { useEffect, React } from "react";
import { useUserContext } from "../Providers/AmazonContext";


const EmbedConnect = (props) => {

  const datos = {"IdEmpleado":"2"}

  const [,idCliente,,reiniciarCliente] = useUserContext();

  const actualizarLlamada = async () => {
    try{
      let config = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(datos)
      }
      // let res = await fetch('http://44.209.22.101:8080/llamada/actualizarLlamada/IdLlamada1', config) 
      let res = await fetch('http://localhost:8080/llamada/actualizarLlamada/IdLlamada1', config) 
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    }



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
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
        idCliente(attributeMap.Tel.value)
        actualizarLlamada();
      });
      contact.onEnded(function(contact) {
        reiniciarCliente();
      });
    });

    /* global connect */
    connect.agent(function(agent) {
      var help = agent.getConfiguration().username;
      console.log(`AGENTE : ${help}`);
    });
    
  }, []);

  return <div id="ccp" style={{ width: "300px", height: "350px" }}></div>;
};

export default EmbedConnect;