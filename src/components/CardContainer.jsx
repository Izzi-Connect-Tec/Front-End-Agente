import React from 'react';
import CardComponent from './CardComponent';
import '../styles/calificacion.css';

const CardContainer = () => {
  const cardsData = [
    { 
      title: 'Calificación promedio', 
      dataUrl: 'urllll', 
      rankUrl: 'urllll',
      color: '#00BCB4' 
    },
    { 
      title: 'Cantidad de llamadas en el día', 
      dataUrl: 'urllll',
      rankUrl: 'urllll',
      color: '#D7006D' 
    },
    { 
      title: 'Promedio de tiempo en llamada', 
      dataUrl: 'urllll', 
      rankUrl: 'urllll',
      color: '#FFCE00' 
    },
    { 
      title: 'Cantidad de llamadas en el día', 
      dataUrl: 'urllll', 
      rankUrl: 'urllll',
      color: '#EC6907' 
    }
  ];

  return (
    <div className="card-container">
      {cardsData.map((cardData, index) => (
        <CardComponent
          key={index}
          title={cardData.title}
          dataUrl={cardData.dataUrl}
          rankUrl={cardData.rankUrl}
          color={cardData.color}
        />
      ))}
    </div>
  );
};

export default CardContainer;


