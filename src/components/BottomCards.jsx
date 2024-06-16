import { useState, useEffect } from 'react';

const BottomCards = () => {
  const [agentWithBestRating, setAgentWithBestRating] = useState('Cargando...');
  const [agentWithMostCalls, setAgentWithMostCalls] = useState('Cargando...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('urllll')
      .then(response => response.json())
      .then(data => {
        setAgentWithBestRating(data.name);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching:', error);
        setLoading(false);
      });

    fetch('urlll')
      .then(response => response.json())
      .then(data => {
        setAgentWithMostCalls(data.name); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="custom-container">
      <div className="custom-row">
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