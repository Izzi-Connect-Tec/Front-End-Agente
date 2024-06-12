// Autor: Karla Cruz
// Componente que despliega las soluciones disponibles dependiendo del problema con el que se esté trabajando\
import React from "react";
import { useEffect, useState } from "react";
import "../styles/solutions.css";
//import FormDialog from "./Reporte";
import SolutionCard from "./SolutionCard";
import axios from "axios";
//import IncidenceForm from "./Incidence";
import { useLlamadaContext } from "../Providers/LlamadaContext";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Solutions = () => {
  const [call, ,] = useLlamadaContext();
  const [solutionsData, setSolutionsData] = useState([]); // Estado para los datos de las soluciones
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blockedSolutions, setBlockedSolutions] = useState({});

  // // Función para obtener las soluciones
  // const fetchSolutions = async () => {
  //   try {
  //     // El api puede ser internet, telefonia o television
  //     const response = await axios.get(http://44.209.22.101:8080/llamada/consultarSolucion/${call.TipoLlamada}); // Hacer la petición al API
  //     setSolutionsData(response.data); // Guardar los datos en el estado
  //   } catch (error) {
  //     console.error("Error al obtener datos del API:", error); // Mostrar error en consola
  //   }
  // };

  // // Obtener las soluciones al cargar el componente
  // useEffect(() => {
  //   fetchSolutions(); // Obtener las soluciones
  // }, [call.TipoLlamada]);

  // Función para obtener las soluciones
  const fetchSolutions = async () => {
    try {
      // El api puede ser internet, telefonia o television
      const response = await axios.get(
        "http://44.209.22.101:8080/llamada/consultarSolucion/internet"
      ); // Hacer la petición al API
      setSolutionsData(response.data); // Guardar los datos en el estado
    } catch (error) {
      console.error("Error al obtener datos del API:", error); // Mostrar error en consola
    }
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? solutionsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === solutionsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleSolutions = () => {
    if (solutionsData.length === 0) return [];
    const visibleSolutions = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + solutionsData.length) % solutionsData.length;
      visibleSolutions.push(solutionsData[index]);
    }
    return visibleSolutions;
  };

  const handleBlockSolution = (id) => {
    setBlockedSolutions((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="solutions">
      <div className="titulo-soluciones">Solutions</div>
      <div className="solutions-div">
        <button className="carousel-button" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <div className="carousel-container">
          {getVisibleSolutions().map((solution, index) => (
            <SolutionCard
              key={solution.IdSolucion}
              solution={solution}
              tituloSolucion={solution.Nombre}
              isActive={index === 1}
              isBlocked={blockedSolutions[solution.IdSolucion] || false}
              blockSolution={() => handleBlockSolution(solution.IdSolucion)}
            />
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}>
          <FaArrowRight />
        </button>
        {/* <div className="botones-solutions">
          <FormDialog />
          <IncidenceForm />
        </div> */}
      </div>
    </div>
  );
};

// const Solutions = () => {
//   return (
//     <div className="solutions">
//       <div className="titulo-soluciones">
//         <h2>Soluciones</h2>
//       </div>
//       <div className="solutions-div">
//         <div className="possible-solutions">
//           {solutionsData.map((solution) => (
//             <SolutionCard
//               key={solution.IdSolucion}
//               solutionId={solution.IdSolucion}
//               tituloSolucion={solution.Nombre}
//             />
//           ))}
//         </div>
//         <div className="botones-solutions">
//           <FormDialog />
//           <FormDialog />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Solutions;
