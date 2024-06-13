
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FlagIcon from '@mui/icons-material/Flag';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FormDialog from './Reporte';

import IncidenceForm from './Incidence';
import { EmergenciaSupervisor } from './EmergenciaSupervisor';


export default function OpcionesExternas() {


  const actions = [
    { icon: <FlagIcon />, name: 'Reporte', fun: <FormDialog/> },
    { icon: <HomeRepairServiceIcon />, name: 'Incidencia', fun: <IncidenceForm/> },
    { icon: <WarningAmberIcon />, name: 'Ayuda supervisor', fun: <EmergenciaSupervisor/> }
  ];
  

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
            icon={action.fun}
            tooltipTitle={action.name}
            // onClick={action.fun}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}