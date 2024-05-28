import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BasicSelect from "./Prioridad";
import { useAlertToggleContext } from "../Providers/AlertContext";

export default function FormDialog() {
  const toggleAlert = useAlertToggleContext();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
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
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
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
            Se debe se hacer un reporte debido a una falla que no se podia
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
            id="name"
            // name="email"
            label="Descripción del reporte"
            type="text"
            fullWidth
            variant="standard"
            InputProps={{
              style: {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: ["Century Gothic", "Futura"].join(","),
              },
            }}
          />
        </DialogContent>
        <DialogContent>
          <BasicSelect />
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
    </React.Fragment>
  );
}
