// Container with the information of the service, problem and buttons
import "../styles/service.css";
//import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stats from "./Stats";
import EmbedConnect from "./AmazonConnect";
import { useEffect } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import { useLlamadaContext } from "../Providers/LlamadaContext";
import { Sentiment } from "./Sentiment";


const Service = (props) => {

  const [call,,] = useLlamadaContext();

  return (
    <div className="service">
      <div className="titulo-service">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <div className="tarjetaProblema">
          <EmbedConnect/>
          <Sentiment/>
          {call.IdLlamada && 
          <section>
            <Card variant="outlined">
              <p className="problemas">Problema</p>
              <p>{call.DescripcionLlamada}</p>
            </Card>
            {/* <div>
              <Stats/>
              //Es
            </div> */}
          </section>
          }
        </div>
      </div>
    </div>
  );
};

export default Service;