import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Chatbox from "./Chatbox";
import { motion } from "framer-motion";
import { useCallContext } from "../../Providers/CallContext";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "55vw",
  height: "48vh",
  borderRadius: "20px",
  border: "3px solid #d7006d",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: "center",
}));

export const ChatCard = () => {
  const [call, ,] = useCallContext();

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.5 },
      }}
      initial={{ y: -900 }}
      animate={{ y: 1 }}
      exit={{ y: -900, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction="row" spacing={2}>
        <DemoPaper elevation={20}>
          {call.IdLlamada && <Chatbox id={call.IdLlamada} />}
        </DemoPaper>
      </Stack>
    </motion.div>
  );
};
