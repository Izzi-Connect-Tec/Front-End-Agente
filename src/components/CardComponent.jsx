/* Author: Giovanna Lorena Delgado Mendoza */
/*Component of the superior stat cards of the agents in the rating window */

import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import '../styles/cardComponent.css';

const CardComponent = ({ title, dataUrl, rankUrl, color }) => {
  const [value, setValue] = useState(null);
  const [rank, setRank] = useState(null);
  let agent = JSON.parse(window.localStorage.getItem("Agent"));

  useEffect(() => {
    let config = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${agent.Token}`,
      },
    };

    fetch(dataUrl, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue(data.value);
      })
      .catch((error) =>
        console.error(`Error obtaining data for ${title} = `, error)
      );
  }, [dataUrl, title]);

  useEffect(() => {
    const fetchRank = async () => {
      try {
        let config = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${agent.Token}`,
          },
        };
        const response = await fetch(rankUrl, config);
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
              <StarRating rating={value} />
            </div>
          ) : (
            <div className="cardValue">
              <span className="loadingText">
                {value !== null ? value : "Charging..."}
              </span>
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
