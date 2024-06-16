import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAlertToggleContext } from "../Providers/AlertContext";
import { useUserContext } from "../Providers/AmazonContext";
import { useLogInContext } from "../Providers/LogInContext";
import FlagIcon from '@mui/icons-material/Flag';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicSelect from "./Prioridad";
import BasicSelectIncidencia from "./IdIncidencia";

export default function FormDialog() {

  const [agent,,] = useLogInContext();

  const [descripcion, setDescripcion] = React.useState("");
  const [prioridad, setPrioridad] = React.useState("");
  const [idIncidencia, setIdIncidencia] = React.useState("");

  const [cliente,,] = useUserContext();
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
    const fechaActual = new Date().toISOString();

    const reportePrueba = {
      FechaHora: fechaActual,
      Prioridad: prioridad,
      Descripcion: descripcion,
      IdZona: cliente.IdZona,
      Celular: cliente.Celular,
      IdEmpleado: agent.IdEmpleado,
      IdIncidencia: idIncidencia,  //ARREGLAR ESTO
    };

    try {
      let config = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${agent.Token}`
        },
        body: JSON.stringify(reportePrueba),
      };
      let res = await toast.promise(
        fetch('http://44.209.22.101:8080/reporte/crearReporte', config),
        {
          pending: 'Enviando reporte',
          success: 'Reporte enviado exitosamente',
          error: 'Error en el envio'
        }, {containerId: 'envioReporte'}
      );
      console.log(res);
      handleClose();
    } catch (error) {
      console.error("Error al enviar el reporte:", error);
    }
  };

  return (
    <React.Fragment>
      {/* <Button
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#D7006D",
          color: "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
          fontFamily: ["Century Gothic", "Futura"].join(","),
          fontWeight: "bold",
          "&:hover": {
            background: "white",
            color: "#D7006D",
            border: "2px solid #D7006D",
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        }}
        variant="contained"
        size="large"
      >
        Reporte
      </Button> */}
      <FlagIcon onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
          // component: "form",
          // onSubmit: (event) => {
          //   event.preventDefault();
          //   const formData = new FormData(event.currentTarget);
          //   const formJson = Object.fromEntries(formData.entries());
          //   const email = formJson.email;
          //   console.log(email);
          //   handleClose();
          // },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: ["Century Gothic", "Futura"].join(","),
            fontWeight: "bold",
          }}
        >
          Reporte
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          >
            Se debe de hacer un reporte debido a una falla que no se podia
            arreglar
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
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </DialogContent>


        <DialogContent sx={{display: 'flex'}}>
          <BasicSelect onPrioridadChange={setPrioridad}
            InputProps={{
              style: {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
            />

<BasicSelectIncidencia onIdIncidenciaChange={setIdIncidencia}
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
            Cancelar
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
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      {/* <button onClick={notify}>Notify</button> */}
      <ToastContainer containerId="envioReporte"
      position="bottom-left"/>
    </React.Fragment>
  );
}
