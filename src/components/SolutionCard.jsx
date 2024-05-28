import "../styles/solutionCard.css";
import { useState } from "react";
import StepsCard from "./StepsCard";

const SolutionCard = (props) => {
  const [steps, setSteps] = useState(false); // Estado para mostrar los pasos
  const [blocked, setBlocked] = useState(false); // Estado para bloquear la solución

  // Función para mostrar los pasos
  const Toggle = () => {
    if (!blocked) { // Si la solución no está bloqueada
      setSteps(!steps); // Mostrar los pasos
    }
  };

  const solution = props.solution; // Usar la solución pasada por props

  // Función para bloquear la solución
  const handleBlock = () => {
    setBlocked(true); // Función para bloquear la solución
    setSteps(false); // Cerrar el modal
  };

  return (
    <>
      <div
        className={`solution-card ${blocked ? "blocked" : ""}`}
        onClick={Toggle}
      >
        <p>{props.tituloSolucion}</p>
      </div>
      <StepsCard
        show={steps}
        close={Toggle}
        solution={solution}
        block={handleBlock}
      />
    </>
  );
};

export default SolutionCard;
