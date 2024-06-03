import React, { useEffect, useState } from "react";
import "../styles/solutions.css";
import FormDialog from "./Reporte";
import SolutionCard from "./SolutionCard";
import axios from "axios"; // Importa Axios

const Solutions = () => {
  const [solutionsData, setSolutionsData] = useState([]); // Estado para los datos de las soluciones

  // Función para obtener las soluciones
  const fetchSolutions = async () => {
    try {
      const response = await axios.get("http://44.209.22.101:8080/llamada/consultarSolucion/internet"); // Hacer la petición al API
      setSolutionsData(response.data); // Guardar los datos en el estado
    } catch (error) {
      console.error("Error al obtener datos del API:", error); // Mostrar error en consola
    }
  };

  // Obtener las soluciones al cargar el componente
  useEffect(() => {
    fetchSolutions(); // Obtener las soluciones
  }, []);

  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          {solutionsData.map((solution) => (
            <SolutionCard
              key={solution.IdSolucion}
              solution={solution}
              tituloSolucion={solution.Nombre}
            />
          ))}
        </div>
        <div className="botones-solutions">
          <FormDialog/>
          <FormDialog/>
        </div>
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
