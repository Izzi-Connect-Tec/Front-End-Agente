import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { PiSmileyBold } from "react-icons/pi";
import { PiSmileySadBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/stepsCard.css";

const StepsCard = (props) => {
  const { solution } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Inicia en 0 en lugar de 1
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (props.show && solution) {
      setCurrentStepIndex(0); // Inicia en 0 en lugar de 1
      setShowFeedback(false);
    }
  }, [props.show, solution]);

  if (!solution) return null;

  const steps = solution.Pasos;
  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setShowFeedback(true);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleFeedback = (response) => {
    console.log(`User response: ${response}`);
    if (response === "no") {
      props.block(); // Bloquear la solución si la respuesta es "No"
    }
    props.close();
  };

  return (
    <>
      {props.show ? (
        <div className="modalContainer" onClick={props.close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h3 className="modal_header-title">{solution.Nombre}</h3>
              <button className="close" onClick={props.close}>
                <IoClose alt="close" />
              </button>
            </header>
            <main className="modal_content">
              {showFeedback ? (
                <div>
                  <p>¿Funcionó esta solución?</p>
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
                  <div className="paso">
                    <p>Paso {currentStepIndex + 1}</p>
                  </div>
                  <div>
                    <p>{steps[currentStepIndex].Descripcion}</p>
                  </div>
                </div>
              )}
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={props.close}>
                Cancelar
              </button>
              {!showFeedback && (
                <>
                  <button
                    className={`step-button ${
                      currentStepIndex === 0 ? "disabled" : ""
                    }`}
                    onClick={handlePrevious}
                    disabled={currentStepIndex === 0}
                  >
                    <FaArrowLeft className="sim-flecha"/>
                  </button>
                  <button className="step-button" onClick={handleNext}>
                    {currentStepIndex === totalSteps - 1 ? (
                      "Finalizar"
                    ) : (
                      <FaArrowRight className="sim-flecha"/>
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
