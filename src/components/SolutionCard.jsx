// Author: Karla Cruz
// Component of the individual solution card, it is a card per solution

import "../styles/solutionCard.css";
import { useState } from "react";
import StepsCard from "./StepsCard";

const SolutionCard = (props) => {
  
  const [steps, setSteps] = useState(false);

  // Function for showing the steps
  const Toggle = () => {
    if (!props.isBlocked) { 
      setSteps(!steps);
    }
  };

  const solution = props.solution;

  // Function for blocking the solution 
  const handleBlock = () => {
    props.blockSolution();
    setSteps(false);
  };

  return (
    <>
      <div
        className={`solutionCard ${props.isBlocked ? "blocked" : ""} ${props.isActive ? "active" : "inactive"}`}
        onClick={Toggle}
      >
        <p className="textSolution">{props.solutionTitle}</p>
      </div>
      <StepsCard
        solutionId={props.solutionId}
        show={steps}
        close={Toggle}
        solution={solution}
        block={handleBlock}
      />
    </>
  );
};

export default SolutionCard;