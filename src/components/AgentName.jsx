/* Author: Giovanna Lorena Delgado Mendoza*/
/*Agent name in statistics/rating window*/

import "../styles/agentName.css";
import { useState, useEffect } from "react";

const AgentName = ({ defaultName }) => {
  const [agentName, setAgentName] = useState(defaultName);
  useEffect(() => {
    const fetchAgentName = async () => {
      try {
        const response = await fetch("urllllllll");
        if (!response.ok) {
          throw new Error("Error getting agents name.");
        }
        const data = await response.json();
        setAgentName(data.name);
      } catch (error) {
        console.error("Error fetching agent name:", error);
      }
    };
    fetchAgentName();
  }, []);
  return <>{agentName}</>;
};

export default AgentName;
