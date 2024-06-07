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

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "35vw",
  height: "30vh",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: 'center',
}));

export const  TarjetaLlamada = () =>  {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={20} square>square corners</DemoPaper>
    </Stack>
  );
}