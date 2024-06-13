import { useCallback } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FlagIcon from '@mui/icons-material/Flag';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FormDialog from './Reporte';
import { useLogInContext } from '../Providers/LogInContext';
import { useLlamadaContext } from '../Providers/LlamadaContext';

const actions = [
  { icon: <FlagIcon />, name: 'Reporte', fun: <FormDialog/> },
  { icon: <HomeRepairServiceIcon />, name: 'Incidencia', fun: <FormDialog/> },
  { icon: <WarningAmberIcon />, name: 'Ayuda supervisor', fun: <FormDialog/> }
];

export default function OpcionesExternas() {

  const [call,,] = useLlamadaContext();
  const [agent,,] = useLogInContext();


  const emergencia = useCallback( async () => {
    try{
      const datos = {
        id: call.IdLlamada,
        nombre: "Javier",
        apellido: "Garcia"
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


  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction="left"
        // sx={{ bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{'&:hover': {
                backgroundColor: action.name === 'Ayuda supervisor' ? 'red' : 'white',
                color: "#D7006D",
                border: "2px solid #D7006D",
              },}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={emergencia}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}