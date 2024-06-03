// Autor: Karla Cruz
// Componente que despliega las soluciones disponibles dependiendo del problema con el que se esté trabajando\

import React, { useEffect, useState } from "react";
import "../styles/solutions.css";
import FormDialog from "./Reporte";
import SolutionCard from "./SolutionCard";
import axios from "axios";
import IncidenceForm from "./Incidence";
import { useLlamadaContext } from "../Providers/LlamadaContext";

const Solutions = () => {

  const [call,,] = useLlamadaContext();

  const [solutionsData, setSolutionsData] = useState([]); // Estado para los datos de las soluciones

  // Función para obtener las soluciones
  const fetchSolutions = async () => {
    try {
      // El api puede ser internet, telefonia o television
      const response = await axios.get(`http://44.209.22.101:8080/llamada/consultarSolucion/${call.TipoLlamada}`); // Hacer la petición al API
      setSolutionsData(response.data); // Guardar los datos en el estado
    } catch (error) {
      console.error("Error al obtener datos del API:", error); // Mostrar error en consola
    }
  };

  // Obtener las soluciones al cargar el componente
  useEffect(() => {
    fetchSolutions(); // Obtener las soluciones
  }, [call.TipoLlamada]);

  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          { call.TipoLlamada && solutionsData.map((solution) => (
            <SolutionCard
              key={solution.IdSolucion}
              solution={solution}
              tituloSolucion={solution.Nombre}
            />
          ))
          }
          {/* {solutionsData.map((solution) => (
            <SolutionCard
              key={solution.IdSolucion}
              solution={solution}
              tituloSolucion={solution.Nombre}
            />
          ))} */}
        </div>
        <div className="botones-solutions">
          <FormDialog />
          <IncidenceForm />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
