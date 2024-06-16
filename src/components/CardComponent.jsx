import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import '../styles/calificacion.css';

const CardComponent = ({ title, dataUrl, rankUrl, color }) => {
  const [value, setValue] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error al obtener datos para ${title}`);
        }

        const data = await response.json();
        setValue(data.value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataUrl, title]);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await fetch(rankUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

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
    <Card style={{ backgroundColor: color }} className="card mb-2">
      <Card.Body>
        <div className="card-content">
          <div className="card-title">{title}</div>
          {title === 'Calificación promedio' && value !== null ? (
            <div className="card-value">
              <StarRating rating={value} />
            </div>
          ) : (
            <div className="card-value">{value !== null ? value : 'Cargando...'}</div>
          )}
        </div>
        <div className="card-rank">{rank !== null ? rank : 'Cargando...'}</div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;