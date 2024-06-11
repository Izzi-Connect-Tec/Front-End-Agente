import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Client from './Client';

const DemoPaper = styled(Paper)(({ theme }) => ({
  // backgroundColor: "rgba(0, 188, 180, 1)",
  // backgroundImage: "linear-gradient(0deg, rgba(1, 142, 135, 0.5) 0%, rgba(0, 188, 180, 0.5) 100%)",
  width: "35vw",
  height: "46vh",
  borderRadius: "20px",
  border: "4px solid #00bcb4",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: 'center',
}));

export const  TarjetaCliente = () =>  {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={20} >
        <Client/>
      </DemoPaper>
    </Stack>
  );
}