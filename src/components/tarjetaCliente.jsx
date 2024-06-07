import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Client from './Client';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "35vw",
  height: "50vh",
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