// Author: Karla Cruz
// Display the call details in a card

import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CallState from "./CallState";
import { motion } from "framer-motion";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "35vw",
  height: "24vh",
  border: "4px solid #ec6907",
  borderRadius: "20px",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: "center",
  overflowY: "auto",
}));

export const CallCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.5 },
      }}
      initial={{ x: -600 }}
      animate={{ x: 1 }}
      exit={{ x: -600, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction="row" spacing={2}>
        <DemoPaper elevation={10}>
          <CallState />
        </DemoPaper>
      </Stack>
    </motion.div>
  );
};
