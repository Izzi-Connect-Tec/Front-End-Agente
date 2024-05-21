// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import BasicSelect from './Prioridad';
// import { useAlertToggleContext } from '../Providers/AlertContext';
// import { useUserContext } from '../Providers/AmazonContext';


// export default function FormDialog() {

//   const descripcionReporte = React.useRef();

//   const [cliente,,] = useUserContext();

//   const fechaActual = new Date().toISOString();

//   const reportePrueba = {
//     FechaHora: fechaActual,
//     Prioridad: "alta",
//     Descripcion: descripcionReporte ? descripcionReporte.current.value : "NADA",
//     IdZona: cliente.IdZona,
//     Celular: cliente.Celular,
//     IdEmpleado: "E123",
//     IdIncidencia: 1
//   }

//   const toggleAlert = useAlertToggleContext();

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//         <Button
//             onClick={handleClickOpen}
//             sx = {{
//                 backgroundColor: "#D7006D",
//                 color: "white",
//                 transition: 'background-color 0.3s ease, color 0.3s ease',
//                 '&:hover': {
//                     background:'white',
//                     color: '#D7006D',
//                     border: '2px solid #D7006D',
//                     transition: 'background-color 0.3s ease, color 0.3s ease'
//                 },
//             }}
//             variant="contained"
//             size="large"
//         >
//             Reporte
//         </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: async (event) => {
//             event.preventDefault();
//             // const formData = new FormData(event.currentTarget);
//             // const formJson = Object.fromEntries(formData.entries());
//             // const email = formJson.email;
//             // console.log(email);
//             // console.log("ENVIADOOOOU");
//             try {
//               let config = {
//                 method: 'POST',
//                 headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(reportePrueba)
//               }
//               // let res = await fetch('http://44.209.22.101:8080/reporte/crearReporte', config)
//               let res = await fetch('http://localhost:8080/reporte/crearReporte', config)
//               console.log(res)
//               handleClose();
//             } catch (error) {

//             }
//           },
//         }}
//       >
//         <DialogTitle>Reporte</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Se debe se hacer un reporte debido a una falla que no se podia arreglar
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             // name="email"
//             label="Descripción del reporte"
//             type="text"
//             fullWidth
//             variant="standard"
//             ref={descripcionReporte}
//           />
//         </DialogContent>
//         <DialogContent>
//           <BasicSelect/>
//         </DialogContent>
//         <DialogContent>
//           <BasicSelect/>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancelar</Button>
//           <Button onClick={() => toggleAlert(true)} type="submit">Enviar</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


//Checar por que no useRef para descripcion y como es el paso de la prioridad 

//////

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAlertToggleContext } from '../Providers/AlertContext';
import { useUserContext } from '../Providers/AmazonContext';
import BasicSelect from './Prioridad';

export default function FormDialog() {
  const [descripcion, setDescripcion] = React.useState("");
  const [prioridad, setPrioridad] = React.useState("baja");

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
      Descripcion: descripcion || "NADA",
      IdZona: cliente.IdZona,
      Celular: cliente.Celular,
      IdEmpleado: "E123",
      IdIncidencia: 1
    };

    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportePrueba)
      };
      let res = await fetch('http://localhost:8080/reporte/crearReporte', config);
      console.log(res);
      handleClose();
    } catch (error) {
      console.error('Error al enviar el reporte:', error);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#D7006D",
          color: "white",
          transition: 'background-color 0.3s ease, color 0.3s ease',
          '&:hover': {
            background: 'white',
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
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Reporte</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se debe hacer un reporte debido a una falla que no se pudo arreglar.
          </DialogContentText>
          <TextField
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
        <DialogContent>
          <BasicSelect onPrioridadChange={setPrioridad} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => toggleAlert(true)} type="submit">Enviar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
