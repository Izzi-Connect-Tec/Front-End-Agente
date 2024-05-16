import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/material/styles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';

//MOVERLO A DIFERENTES COMPONENTES

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "normal", // Ajusta el interlineado
  height: "auto", // Ajusta la altura para que se ajuste al contenido
}));

export const TextSolution = ({id, tituloSolucion}) => {

  const [open, setOpen] = useState(false);

  const steps = ['Ubicar el modem', 'Buscar el orificio de reset', 'Apretarlo durante 5 segundos'];

  const [activeStep, setActiveStep] = useState(0);

  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} whileHover={{ scale: 1.05 }}>
      <Box
        onClick={handleClickOpen}
        elevation={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          fontfamily: "futura",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 110,
          },

          "&:hover": {
            opacity: "0.5",
            // color: '#D7006D',
            //border: '2px solid #FFCE00',
            transition: "opacity 0.3s",
          },
        }}
      >
        <Item key={1} elevation={10}>
          {tituloSolucion}
        </Item>
      </Box>
      </motion.div>
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Ha funcionado este método?"}
        </DialogTitle>
        <DialogContent>
        {/* <DialogContentText id="alert-dialog-description">
            Dejese usar
          </DialogContentText> */}
          <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <div>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </div>
      ) : (
        <div>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </div>
      )}
    </Box>
        </DialogContent>  
          {activeStep === steps.length
          ? <DialogActions>
            <Button onClick={handleClose}>Otro metodo</Button>
             <Button onClick={handleClose} autoFocus>
            Método correcto
          </Button>
            </DialogActions>
            :
            <br/>
        }
      </Dialog>
    </div>
  );
};
