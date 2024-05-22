// Container with the information of the service, problem and buttons
import "../styles/service.css";
//import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stats from "./Stats";
import EmbedConnect from "./AmazonConnect";
import { useEffect } from "react";
import { useUserContext } from "../Providers/AmazonContext";


const Service = (props) => {

  return (
    <div className="service">
      <div className="titulo-service">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <div className="tarjetaProblema">
          <EmbedConnect/>
          <Card variant="outlined">
            <p className="problemas">Problema</p>
            <p>
              No tengo conexión a internet.
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