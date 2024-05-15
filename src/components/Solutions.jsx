// Contenedor que despliega las soluciones en forma de lista para ser seleccionados

import {TextSolution} from "./TextSolution";
import "../styles/solutions.css";
import FormDialog from "./Reporte";

const data = [
  {
    id: 1,
    name: "Reiniciar el módem",
    dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
  },
  {
    id: 2,
    name: "Checar las conexiones del módem",
  },
  {
    id: 3,
    name: "Checar indicadores led del módem",
  }
];




const Solutions = (props) => {
  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          {data.map ((solution) => (
            <TextSolution key={solution.id} tituloSolucion={solution.name}/>
          ))}
        </div>
        <div className="botones-solutions">
          <FormDialog/>
        </div>
      </div>
    </div>
  );
};

export default Solutions;