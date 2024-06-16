import { useState, useEffect } from 'react';

const AgentName = ({ defaultName }) => {
  const [agentName, setAgentName] = useState(defaultName);

  useEffect(() => {
    const fetchAgentName = async () => {
      try {
        const response = await fetch('urllllllll');
        if (!response.ok) {
          throw new Error('Error al obtener el nombre del agente');
        }
        const data = await response.json();
        setAgentName(data.name);
      } catch (error) {
        console.error('Error fetching agent name:', error);
      }
    };

    fetchAgentName();
  }, []);

  return <>{agentName}</>;
};

export default AgentName;