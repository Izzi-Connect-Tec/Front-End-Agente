import * as React from 'react';
//import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAlertContext, useAlertToggleContext } from '../Providers/AlertContext';



export default function CustomizedSnackbars() {

  const alert = useAlertContext();

  const toggleAlert = useAlertToggleContext();

  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    toggleAlert(false);
  };

  React.useEffect( () => {
    setOpen(alert)
  }, [alert])

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          ¡Reporte enviado exitosamente!
        </Alert>
      </Snackbar>
    </div>
  );
}