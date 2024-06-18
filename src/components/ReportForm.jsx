// Authors: Karla Cruz and Maximiliano Lecona
// Component to generate a report for a selected zone in case of a problem.

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FlagIcon from "@mui/icons-material/Flag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAlertToggleContext } from "../providers/AlertContext";
import { useUserContext } from "../providers/AmazonContext";
import ReportPriority from "./ReportPriority";
import ReportType from "./ReportType";

export default function FormDialog() {
  
  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [idIncidence, setIdIncidence] = React.useState("");

  const [user, ,] = useUserContext();
  const toggleAlert = useAlertToggleContext();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date().toISOString();

    const reportData = {
      FechaHora: date,
      Prioridad: priority,
      Descripcion: description,
      IdZona: user.IdZona,
      Celular: user.Celular,
      IdEmpleado: agent.IdEmpleado,
      IdIncidencia: idIncidence,
    };

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${agent.Token}`,
        },
        body: JSON.stringify(reportData),
      };
      let res = await toast.promise(
        fetch("http://44.209.22.101:8080/reporte/crearReporte", config),
        {
          pending: "Sending report",
          success: "Report successfully sent",
          error: "Error sending report",
        },
        { containerId: "reportSend" }
      );
      console.log(res);
      handleClose();
    } catch (error) {
      console.error("Error sending report:", error);
    }
  };

  return (
    <React.Fragment>
      <FlagIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: ["Century Gothic", "Futura"].join(","),
            fontWeight: "bold",
          }}
        >
          Report
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          >
            A report must be made due to a failure that could not be fixed
          </DialogContentText>
          <TextField
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D7006D",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#D7006D",
              },
              "& .MuiInputBase-input": {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
            autoFocus
            required
            margin="dense"
            id="descripcion"
            label="Descripción del reporte"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>

        <DialogContent sx={{ display: "flex" }}>
          <ReportPriority
            onPriorityChange={setPriority}
            InputProps={{
              style: {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
          />

          <ReportType
            onIdIncidenciaChange={setIdIncidence}
            InputProps={{
              style: {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            sx={{
              fontFamily: ["Century Gothic", "Futura"].join(","),
              fontWeight: "bold",
              color: "#D7006D",
              "&:hover": {
                color: "#EC6907",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              fontFamily: ["Century Gothic", "Futura"].join(","),
              fontWeight: "bold",
              color: "#D7006D",
              "&:hover": {
                color: "#EC6907",
              },
            }}
            onClick={() => toggleAlert(true)}
            type="submit"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer containerId="reportSend" position="bottom-left" />
    </React.Fragment>
  );
}
