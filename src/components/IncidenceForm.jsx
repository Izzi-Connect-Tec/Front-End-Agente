import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { useLogInContext } from "../providers/LogInContext";
import { useUserContext } from "../providers/AmazonContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IncidenceForm() {
  const [agent,,] = useLogInContext();
  const [user,,] = useUserContext();
  const [description, setDescription] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const date = new Date().toISOString();

    const reportePrueba = {
      FechaHora: date,
      Descripcion: description,
      IdZona: user.IdZona,
      Celular: user.Celular,
      IdEmpleado: agent.IdEmpleado
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
        fetch('http://44.209.22.101:8080/reporte/crearReportePersonal', config),
        {
          pending: 'Sending personal report',
          success: 'Personal report sended successfully',
          error: 'Error sending personal report'
        }, {containerId: 'envioReportePersonal'}
      );
      console.log(res);
      handleClose();
    } catch (error) {
      console.error("Error sending personal report:", error);
    }
  };

  return (
    <React.Fragment>
      <HomeRepairServiceIcon onClick={handleClickOpen}/>
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
          Incidence
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          >
            Due to a reported fault that cannot be resolved, a technician must attend to the issue.
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
            label="Incidence description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
                label="Date"
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
                label="Hour"
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
            type="submit"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer containerId="envioReportePersonal"
      position="bottom-left"/>
    </React.Fragment>
  );
}
