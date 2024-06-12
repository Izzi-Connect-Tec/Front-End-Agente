// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export const  TarjetaLlamada = () => {
//   return (
    
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={23} />
//       <Paper />
//       <Paper elevation={20} />
//     </Box>
//   );
// }

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { EstadoLlamada } from './EstadoLlamada';

import { motion, AnimatePresence  } from "framer-motion"


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "35vw",
  height: "24vh",
  border: "4px solid #ec6907",
  borderRadius: "20px",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: 'center',
}));

export const  TarjetaLlamada = () =>  {
  return (

    
    <motion.div whileHover={{
      scale: 1.01,
      transition: { duration: 0.5 },
    }}
    initial={{ x: -600 }}

    animate={{ x: 1 }}

    exit={{ x: -600, transition: { duration: 0.5 }}}

    // transition={{ duration: 1, repeat: Infinity }}

    transition={{ duration: 0.8 }}


    >
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={10} >
        <EstadoLlamada/>
      </DemoPaper>
    </Stack>
    </motion.div>

  );
}