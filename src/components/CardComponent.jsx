import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/cardComponent.css';

const CardComponent = ({ title, dataUrl, rankUrl, color }) => {
  const [value, setValue] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue(data.value);
      })
      .catch((error) => console.error(`Error obtaining data for ${title} = `, error));
  }, [dataUrl, title]);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await fetch(rankUrl);
        if (!response.ok) {
          throw new Error(`Error obtaining ranking for ${title}`);
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
    <Card style={{ backgroundColor: color }} className="card mb2 customCard">
      <Card.Body className="customCardBody">
        <div className="cardContent">
          <div className="cardTitle">{title}</div>
          {title === 'Average Rating' && value !== null ? (
            <div className="cardValue">
              {value}
            </div>
          ) : (
            <div className="cardValue">
              <span className="loadingText">{value !== null ? value : 'Charging...'}</span>
            </div>
          )}
        </div>
        {rank !== null && (
          <div className="cardRank">
            <span className="loadingRank">Posición # {rank}</span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
