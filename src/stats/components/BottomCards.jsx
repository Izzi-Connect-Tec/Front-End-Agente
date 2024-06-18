// Author: Lorena Delgado

import CallControlsCard from '../../call/components/CallControlsCard';
import '../styles/bottomCards.css';
import { useState, useEffect } from 'react';

const BottomCards = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;  
  const [agentWithBestRating, setAgentWithBestRating] = useState('Cargando...');
  const [agentWithMostCalls, setAgentWithMostCalls] = useState('Cargando...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/empleado/getAgenteMejorCalifMes/${formattedDate}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAgentWithBestRating(data.nombre + ' ' + data.apellido);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching best rated agent:', error);
        setLoading(false);
      });

    fetch(`${baseUrl}/empleado/getAgenteMasLlamadasDia/${formattedDate}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAgentWithMostCalls(data.nombre + ' ' + data.apellido); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching agent with more calls in the day:', error);
        setLoading(false);
      });
  }, [baseUrl, formattedDate]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="customContainer">
      <div className="customRow">
      <div className="customCol2">
            <div>
              <div>
              <CallControlsCard />
              </div>
            </div>
          </div>
        <div className="customCol">
          <div className="customCard cardPrimary">
            <div className="customCardHeader">Best rated agent</div>
            <div className="customCardBody">
              <h5 className="customCardTitle">{agentWithBestRating}</h5>
            </div>
          </div>
        </div>
        <div className="customCol">
          <div className="customCard cardSecondary">
            <div className="customCardHeader">Agent with more calls</div>
            <div className="customCardBody">
              <h5 className="customCardTitle">{agentWithMostCalls}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;