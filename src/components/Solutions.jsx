// Authors: Karla Cruz
// Solutions div for showing posible solutions to the clients problem

import "../styles/solutions.css";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import SolutionCard from "./SolutionCard";
import axios from "axios";
import { useCallContext } from "../providers/CallContext";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Solutions = () => {

  let agent = JSON.parse(window.localStorage.getItem('Agent'));
  const [call, ,] = useCallContext();
  const [solutionsData, setSolutionsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blockedSolutions, setBlockedSolutions] = useState({});

  // Obtain the solutions from the API for current call type
  const fetchSolutions = useCallback( async () => {
    try {
      let config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${agent.Token}`
        },  
      }
      const response = await axios.get(`http://44.209.22.101:8080/llamada/consultarSolucion/${call.TipoLlamada}`, config);
      setSolutionsData(response.data);
    }
    catch (error){
      console.error("Error getting data from API: ", error);
    }
  },[call.TipoLlamada]);

  // Get solutions depending of the call type.
  useEffect(() => {
    fetchSolutions();
  }, [call.TipoLlamada, fetchSolutions]);

  // Handle the previous solution
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? solutionsData.length - 1 : prevIndex - 1
    );
  };

  // Handle the next solution
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === solutionsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle the visible solutions
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
      <div className="solutionsTitle">Solutions</div>
      { call.IdLlamada &&
      <div className="solutionsDiv">
        <button className="carouselButton" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <div className="carouselContainer">
          {getVisibleSolutions().map((solution, index) => (
            <SolutionCard
              key={solution.IdSolucion}
              solutionId={solution.IdSolucion}
              solution={solution}
              solutionTitle={solution.Nombre}
              isActive={index === 1}
              isBlocked={blockedSolutions[solution.IdSolucion] || false}
              blockSolution={() => handleBlockSolution(solution.IdSolucion)}
            />
          ))}
        </div>
        <button className="carouselButton" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
      }
    </div>
  );
}

export default Solutions;