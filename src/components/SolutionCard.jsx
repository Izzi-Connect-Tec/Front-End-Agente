import "../styles/solutionCard.css";
import { useState } from "react";
import StepsCard from "./StepsCard";
import solutionsData from "./solutionData";

const SolutionCard = (props) => {
  const [steps, setSteps] = useState(false);
  const [blocked, setBlocked] = useState(false); // Estado para bloquear la solución

  const Toggle = () => {
    if (!blocked) {
      setSteps(!steps);
    }
  };
  const solution = solutionsData.find(
    (solution) => solution.IdSolucion === props.solutionId
  );

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
