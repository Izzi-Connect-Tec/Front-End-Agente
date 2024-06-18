// Author: Karla Cruz
// Component that displays the steps for the selected solution; it is a modal window and is displayed when clicking on a solution

import "../styles/stepsCard.css";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { PiSmileyBold } from "react-icons/pi";
import { PiSmileySadBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useCallContext } from "../providers/CallContext";

const StepsCard = (props) => {
  let agent = JSON.parse(window.localStorage.getItem('Agent'));
  const [call, ,] = useCallContext();
  const { solution } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  // 
  const updateSolutionCall = async () => {
    const solData = {
      IdLlamada: call.IdLlamada,
      IdSolucion: props.solutionId,
    };

    try {
      let config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${agent.Token}`
        },
        body: JSON.stringify(solData),
      };
      let res = await fetch(
        "http://44.209.22.101:8080/llamada/solucionLlamada",
        config
      );
      console.log(res);
      if (!res.ok) {
        console.log(res);
      }
    } catch (error) {
      console.error("Error sending report:", error);
    }
  };

  // Restart the current step index and feedback when opening the modal
  useEffect(() => {
    if (props.show && solution) {
      setCurrentStepIndex(0);
      setShowFeedback(false);
    }
  }, [props.show, solution]);

  if (!solution) return null; // If there is no solution, return null

  const steps = solution.Pasos; // Steps for the solution
  const totalSteps = steps.length; // Number of steps

  // Functions for handling the steps
  // Go to the next step
  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setShowFeedback(true);
    }
  };

  // Go to the previous step
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  // Function to handle the feedback (yes/no)
  const handleFeedback = (response) => {
    console.log(`User response: ${response}`);
    if (response === "no") {
      props.block();
    }
    if (response === "yes") {
      updateSolutionCall();
    }
    props.close();
  };

  return (
    <>
      {props.show ? (
        <div className="modalContainer" onClick={props.close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modalHeader">
              <h3 className="modalHeaderTitle">{solution.Nombre}</h3>
              <button className="close" onClick={props.close}>
                <IoClose alt="close" />
              </button>
            </header>
            <main className="modalContent">
              {showFeedback ? (
                <div>
                  <p className="question">Did this solution work?</p>
                  <button
                    className="faces"
                    onClick={() => handleFeedback("yes")}
                  >
                    <PiSmileyBold />
                  </button>
                  <button
                    className="faces"
                    onClick={() => handleFeedback("no")}
                  >
                    <PiSmileySadBold />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="step">
                    <p>Step {currentStepIndex + 1}</p>
                  </div>
                  <div className="stepDescription">
                    <p>{steps[currentStepIndex].Descripcion}</p>
                  </div>
                </div>
              )}
            </main>
            <footer className="modalFooter">
              <button className="modalClose" onClick={props.close}>
                Cancel
              </button>
              {!showFeedback && (
                <>
                  <button
                    className={`stepButton ${
                      currentStepIndex === 0 ? "disabled" : ""
                    }`}
                    onClick={handlePrevious}
                    disabled={currentStepIndex === 0}
                  >
                    <FaArrowLeft className="arrowSymbol" />
                  </button>
                  <button className="stepButton" onClick={handleNext}>
                    {currentStepIndex === totalSteps - 1 ? (
                      "End"
                    ) : (
                      <FaArrowRight className="arrowSymbol" />
                    )}
                  </button>
                </>
              )}
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StepsCard;
