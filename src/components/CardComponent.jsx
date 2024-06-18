import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import '../styles/calificacion.css';

const CardComponent = ({ title, dataUrl, rankUrl, color }) => {
  const [value, setValue] = useState(null);
  const [rank, setRank] = useState(null);

  let agent = JSON.parse(window.localStorage.getItem('Agent'));
  
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${agent.Token}`
    }
  }
  useEffect(() => {
    fetch(dataUrl, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue(data.value);
      })
      .catch((error) => console.error(`Error al obtener datos para ${title} = `, error));
  }, [dataUrl, title]);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await fetch(rankUrl, config);
        if (!response.ok) {
          throw new Error(`Error al obtener ranking para ${title}`);
        }
        const rankData = await response.json();
        setRank(rankData.rank);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRank();
  }, [rankUrl, title]);

  return (
    <Card style={{ backgroundColor: color }} className="card mb-2 custom-card">
      <Card.Body className="custom-card-body">
        <div className="card-content">
          <div className="card-title">{title}</div>
          {title === 'Calificación promedio' && value !== null ? (
            <div className="card-value">
              {value}
            </div>
          ) : (
            <div className="card-value">
              <span className="loading-text">{value !== null ? value : 'Cargando...'}</span>
            </div>
          )}
        </div>
        {rank !== null && (
          <div className="card-rank">
            <span className="loading-rank">Posición # {rank}</span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
