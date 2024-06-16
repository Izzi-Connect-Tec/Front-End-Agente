import { useLogInContext } from '../Providers/LogInContext';
import { useLlamadaContext } from '../Providers/LlamadaContext';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useCallback } from 'react';


export const EmergenciaSupervisor = () => {


    const [call,,] = useLlamadaContext();
    const [agent,,] = useLogInContext();

    const emergencia = useCallback( async () => {
        try{
          const datos = {
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
            body: JSON.stringify(datos)
          }
          let res = await fetch("http://44.209.22.101:8080/empleado/EMERGENCIA", config) 
          if (!res.ok) {
            throw new Error('La solicitud no pudo completarse con éxito');
          }
        } catch (error){
          console.log(error)
        }
      })


    const handleClickOpen = () => {
        emergencia();
      };


    return(
        <WarningAmberIcon onClick={handleClickOpen}/>
    )
}