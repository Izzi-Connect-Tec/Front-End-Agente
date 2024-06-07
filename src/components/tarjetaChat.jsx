import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Sentiment } from './Sentiment';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "55vw",
  height: "60vh",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: 'center',
}));

export const  TarjetaChat = () =>  {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={20}>
        <Sentiment/>
      </DemoPaper>
    </Stack>
  );
}