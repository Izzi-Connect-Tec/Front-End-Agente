// Author: Karla Cruz and Maximiliano Lecona
// Component for generating a call to the supervisor when the agent is presenting a trouble with the client

import { useCallContext } from '../providers/CallContext';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const SupervisorEmergency = () => {
    const [call,,] = useCallContext();
    let agent = JSON.parse(window.localStorage.getItem('Agent'));

    // Emergency API sending
    const emergency = async () => {
        try{
          const emergencyData = {
            id: call.IdLlamada,
            nombre: agent.Nombre,
            apellido: agent.ApellidoP
          }
          let config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${agent.token}`
              
            },
            body: JSON.stringify(emergencyData)
          }
          let res = await fetch("http://44.209.22.101:8080/empleado/EMERGENCIA", config) 
          if (!res.ok) {
            throw new Error('La solicitud no pudo completarse con éxito');
          }
        } catch (error){
          console.log(error)
        }
      };

    const handleClickOpen = () => {
        emergency();
      };

    return(
        <WarningAmberIcon onClick={handleClickOpen}/>
    )
}