import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BasicSelect from './Prioridad';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alert = () => {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
      </Alert>
    );
  }

  return (
    <React.Fragment>
        <Button
            onClick={handleClickOpen}
            sx = {{
                backgroundColor: "#D7006D",
                color: "white",
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                    background:'white',
                    color: '#D7006D',
                    border: '2px solid #D7006D',
                    transition: 'background-color 0.3s ease, color 0.3s ease'
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
          component: 'form',
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
        <DialogTitle>Reporte</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se debe se hacer un reporte debido a una falla que no se podia arreglar
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            // name="email"
            label="Descripción del reporte"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <BasicSelect/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
          {alert()}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
