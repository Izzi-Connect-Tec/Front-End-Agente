// Contenedor que despliega las soluciones en forma de lista para ser seleccionados

//import {TextSolution} from "./TextSolution";
import "../styles/solutions.css";
// import Button from "@mui/material/Button";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import FormDialog from "./Reporte";
import SolutionCard from "./SolutionCard";

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
  },
];

const Solutions = (props) => {
  // const [show, setShow] = useState(false);
  // const [info, setinfo] = useState();

  // const variants = {
  //   visible: {
  //     scale: 1.5,
  //     boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
  //     y: -50,
  //     x: -100,
  //     cursor: "pointer",
  //     transition: { duration: 1, type: "spring" },
  //   },
  //   hidden: { scale: 1, opacity: 0 },
  // };

  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          {data.map((solution) => (
            // <TextSolution key={solution.id} tituloSolucion={solution.name}/>
            <SolutionCard key={solution.id} tituloSolucion={solution.name} />
          ))}
        </div>
        <div className="botones-solutions">
          <FormDialog />
          <FormDialog />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
