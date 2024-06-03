// Autor: Karla Cruz
// Componente que muestra los pasos para la solución seleccionada; es una ventana modal y se despliega al dar clic en una solución

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { PiSmileyBold } from "react-icons/pi";
import { PiSmileySadBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/stepsCard.css";

const StepsCard = (props) => {
  const { solution } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Estado para el índice del paso actual
  const [showFeedback, setShowFeedback] = useState(false); // Estado para mostrar el feedback

  // Reiniciar el índice del paso actual y el feedback al abrir el modal
  useEffect(() => {
    if (props.show && solution) {
      setCurrentStepIndex(0); // Reiniciar el índice del paso actual
      setShowFeedback(false); // Reiniciar el feedback
    }
  }, [props.show, solution]); // Dependencias

  if (!solution) return null; // Si no hay solución, no mostrar nada

  const steps = solution.Pasos; // Pasos de la solución
  const totalSteps = steps.length; // Número total de pasos

  // Funciones para manejar los pasos
  // Avanzar al siguiente paso
  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) { // Si no es el último paso
      setCurrentStepIndex(currentStepIndex + 1); // Avanzar al siguiente paso
    } else { // Si es el último paso
      setShowFeedback(true); // Mostrar el feedback
    }
  };

  // Retroceder al paso anterior
  const handlePrevious = () => {
    if (currentStepIndex > 0) { // Si no es el primer paso
      setCurrentStepIndex(currentStepIndex - 1); // Retroceder al paso anterior
    }
  };

  // Función para manejar el feedback (sí/no)
  const handleFeedback = (response) => {
    console.log(`User response: ${response}`);
    if (response === "no") { // Si la respuesta es "No"
      props.block(); // Bloquear la solución si la respuesta es "No"
    }
    props.close(); // Cerrar el modal
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
                    <FaArrowLeft className="sim-flecha" />
                  </button>
                  <button className="step-button" onClick={handleNext}>
                    {currentStepIndex === totalSteps - 1 ? (
                      "Finalizar"
                    ) : (
                      <FaArrowRight className="sim-flecha" />
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
