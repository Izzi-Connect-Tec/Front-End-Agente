// Container with the information of the service, problem and buttons
import "../styles/service.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stats from "./Stats";
import EmbedConnect from "./AmazonConnect";


const Service = (props) => {
  return (
    <div className="service">
      <div className="titulo-service">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <EmbedConnect/>
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
          <div>
            <Stats/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
