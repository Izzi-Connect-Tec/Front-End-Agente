// Container with the information of the service, problem and buttons
import "../styles/service.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

const Service = (props) => {
  return (
    <div className="service">
      <div className="titulo">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <div className="tarjetaProblema">
          <Card variant="outlined">
            <h2>Problema</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
              leo ac nulla accumsan sollicitudin. Donec pellentesque nisl et
              nunc malesuada sollicitudin. Integer pharetra iaculis elit, vel
              dictum tortor vehicula ac. Phasellus sagittis erat sed dolor
              pellentesque pellentesque
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
        <div className="botones">
          <Button variant="outlined">Ayuda soporte</Button>
          <Button variant="outlined">Reporte</Button>
          <Button variant="outlined" color="error">
            Ayuda supervisor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
