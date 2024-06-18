import { useState, useEffect } from "react";

const AgentName = ({ defaultName }) => {
  const [agentName, setAgentName] = useState(defaultName);

  useEffect(() => {
    const fetchAgentName = async () => {
      try {
        const response = await fetch(null);
        if (!response.ok) {
          throw new Error("Error obtaining agent name.");
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
