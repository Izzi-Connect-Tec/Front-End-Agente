import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Sentiment } from './Sentiment';
import Chatbox from './Chatbox';

const DemoPaper = styled(Paper)(({ theme }) => ({


  width: "55vw",
  height: "48vh",
  borderRadius: "20px",
  border: "3px solid #d7006d",
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
        {/* <Chatbox/> */}

      </DemoPaper>
    </Stack>
  );
}