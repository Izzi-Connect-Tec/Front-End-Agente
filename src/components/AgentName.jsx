/* Autora: Giovanna Lorena Delgado Mendoza*/
/*Nombre del agente en ventana de estadísticas/calificación*/ 
import { useLogInContext } from '../Providers/LogInContext';
import '../styles/agentName.css';
import { useState, useEffect } from 'react';

const AgentName = ({ defaultName }) => {

  let agent = JSON.parse(window.localStorage.getItem('Agent'));
  const [agentName, setAgentName] = useState(defaultName);

  useEffect(() => {
    setAgentName(agent.Nombre + " " + agent.ApellidoP + " " + agent.ApellidoM);
  }, []);

  return <>{agentName}</>;
};

export default AgentName;