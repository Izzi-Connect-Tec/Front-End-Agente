import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Client from "./Client";
import { motion } from "framer-motion";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "35vw",
  height: "46vh",
  borderRadius: "20px",
  border: "4px solid #00bcb4",
  padding: theme.spacing(2),
  elevation: 15,
  ...theme.typography.body2,
  textAlign: "center",
  overflowY: "auto",
}));

export const ClientCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.5 },
      }}
      initial={{ y: 900 }}
      animate={{ y: 1 }}
      exit={{ opacity: 0, y: 900, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction="row" spacing={2}>
        <DemoPaper elevation={20}>
          <Client />
        </DemoPaper>
      </Stack>
    </motion.div>
  );
};
