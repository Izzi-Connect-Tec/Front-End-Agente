// Contenedor que despliega las soluciones en forma de lista para ser seleccionados

import TextSolution from "./TextSolution";
import "../styles/solutions.css";
import Button from "@mui/material/Button";

const Solutions = (props) => {
  return (
    <div className="solutions">
      <div className="title">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          <TextSolution solution="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
          <TextSolution solution="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
        </div>
        <div className="botones">
          <Button variant="outlined" color="error">
            TErminar llamada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
