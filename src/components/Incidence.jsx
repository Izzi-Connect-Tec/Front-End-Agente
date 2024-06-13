import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAlertToggleContext } from "../Providers/AlertContext";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export default function IncidenceForm() {
  const toggleAlert = useAlertToggleContext();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        Incidencia
      </Button> */}
      <HomeRepairServiceIcon onClick={handleClickOpen}/>
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
          Incidencia
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          >
            Debido a una falla reportada que no se puede resolver, un técnico
            debe atender el asunto.
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
            label="Descripción de la incidencia"
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "TimePicker"]}>
              <DatePicker
                sx={{
                  "& .MuiInputBase-root": {
                    fontFamily: ["Century Gothic", "Futura"].join(","),
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#D7006D",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: ["Century Gothic", "Futura"].join(","),
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#D7006D",
                  },
                  "& .MuiPickerStaticWrapper-content .Mui-selected": {
                    backgroundColor: "#D7006D",
                  },
                }}
                componentsProps={{
                  textField: {
                    InputProps: {
                      style: {
                        fontFamily: ["Century Gothic", "Futura"].join(","),
                      },
                    },
                    InputLabelProps: {
                      style: {
                        fontFamily: ["Century Gothic", "Futura"].join(","),
                      },
                    },
                  },
                }}
                label="Fecha"
                format="DD/MM/YYYY"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
              <TimePicker
                sx={{
                  "& .MuiInputBase-root": {
                    fontFamily: ["Century Gothic", "Futura"].join(","),
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#D7006D",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: ["Century Gothic", "Futura"].join(","),
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#D7006D",
                  },
                  "& .MuiPickerStaticWrapper-content .Mui-selected": {
                    backgroundColor: "#D7006D",
                  },
                }}
                componentsProps={{
                  textField: {
                    InputProps: {
                      style: {
                        fontFamily: ["Century Gothic", "Futura"].join(","),
                      },
                    },
                    InputLabelProps: {
                      style: {
                        fontFamily: ["Century Gothic", "Futura"].join(","),
                      },
                    },
                  },
                }}
                label="Hora"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
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
