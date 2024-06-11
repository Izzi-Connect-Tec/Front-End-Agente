import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Sentiment } from './Sentiment';
import Solutions from './Solutions';

const DemoPaper = styled(Paper)(({ theme }) => ({
  // backgroundImage: "linear-gradient(0deg, rgba(1, 142, 135, 0.5) 0%, rgba(0, 188, 180, 0.5) 100%)",
  width: "55vw",
  height: "22vh",
  borderRadius: "20px",
  border: "3px solid #FFCE00",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: 'center',
}));

export const  TarjetaSoluciones = () =>  {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={20}>
        <Solutions/>
      </DemoPaper>
    </Stack>
  );
}