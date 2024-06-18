import '../styles/bottomCards.css';
import { useState, useEffect } from 'react';
import TarjetaControlesLlamada from './TarjetaControlesLlamada';

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
  let agent = JSON.parse(window.localStorage.getItem('Agent'));


  useEffect(() => {
    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      Authorization: `Bearer ${agent.Token}`
    }
    fetch(`${baseUrl}/empleado/getAgenteMejorCalifMes/${formattedDate}`, config)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAgentWithBestRating(data.nombre + ' ' + data.apellido);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching from agente mejor calif:', error);
        setLoading(false);
      });

    fetch(`${baseUrl}/empleado/getAgenteMasLlamadasDia/${formattedDate}`, config)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAgentWithMostCalls(data.nombre + ' ' + data.apellido); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching from agente mas llamadas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="custom-container">
      <div className="custom-row">
      <div className="custom-col2">
            <div>
              <div>
              <TarjetaControlesLlamada/>
              </div>
            </div>
          </div>
        <div className="custom-col">
          <div className="custom-card card-primary">
            <div className="custom-card-header">Agente con mejor calificación al mes</div>
            <div className="custom-card-body">
              <h5 className="custom-card-title">{agentWithBestRating}</h5>
            </div>
          </div>
        </div>
        <div className="custom-col">
          <div className="custom-card card-secondary">
            <div className="custom-card-header">Agente con más llamadas al día</div>
            <div className="custom-card-body">
              <h5 className="custom-card-title">{agentWithMostCalls}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;