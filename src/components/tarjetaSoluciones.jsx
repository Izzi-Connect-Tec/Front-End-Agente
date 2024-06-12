import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Sentiment } from './Sentiment';
import Solutions from './Solutions';

import { motion, AnimatePresence  } from "framer-motion"

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
      <motion.div
      
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.5 },
      }}
      initial={{ x: 900 }}
  
      animate={{ x: 1 }}
  
      exit={{x: 900, transition: { duration: 0.5 } }}
  
      // transition={{ duration: 1, repeat: Infinity }}

      transition={{ duration: 0.8 }}
  
  
      
      >
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={20}>
        <Solutions/>
      </DemoPaper>
    </Stack>
      </motion.div>
  );
}