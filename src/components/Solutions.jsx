// Contenedor que despliega las soluciones en forma de lista para ser seleccionados

import {TextSolution} from "./TextSolution";
import "../styles/solutions.css";
import Button from "@mui/material/Button";




const Solutions = (props) => {
  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          <TextSolution/>
          <TextSolution/>
          <TextSolution/>
        </div>
        <div className="botones-solutions">
          <Button style={{ backgroundColor: '#FFCE00', color: 'black' }} variant="outlined">
            Terminar llamada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
