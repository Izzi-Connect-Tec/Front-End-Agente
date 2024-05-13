// Container with the information of the service, problem and buttons
import "../styles/service.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import FormDialog from "./Reporte";


const Service = (props) => {
  return (
    <div className="service">
      <div className="titulo-service">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <div className="tarjetaProblema">
          <Card variant="outlined">
            <p className="problemas">Problema</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              leo ac nulla accumsan sollicitudin. Donec pellentesque nisl et
              nunc malesuada sollicitudin. Integer pharetra iaculis elit, vel
              dictum tortor vehicula ac.
            </p>
          </Card>
          <div className="solucionTarjetaProblema">
            <TextField
              id="outlined-basic"
              label="Solucion"
              variant="outlined"
            />
          </div>
        </div>
        <div className="botones-service">
          <Button
            variant="contained"
            size="large"
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
          >
            Ayuda soporte
          </Button>
          <Button
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
            Ayuda supervisor
          </Button>
          <FormDialog/>
        </div>
      </div>
    </div>
  );
};

export default Service;
