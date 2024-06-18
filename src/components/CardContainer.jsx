/* Author: Giovanna Lorena Delgado Mendoza */
/*Container and APIs for the top cards of the rating window*/

import CardComponent from "./CardComponent";
import "../styles/cardContainer.css";

const CardContainer = () => {

  let agent = JSON.parse(window.localStorage.getItem('Agent'));
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const cardsData = [
    {
      title: "Rating today",
      dataUrl: `${baseUrl}/empleado/califPromDia/${agent.IdEmpleado}/calificaciones/${formattedDate}`,
      rankUrl: `${baseUrl}/empleado//leaderboardCalificacionesDia/${formattedDate}/${agent.IdEmpleado}`,
      color: "#00BCB4",
    },
    {
      title: "Call count today",
      dataUrl: `${baseUrl}/empleado/llamadasDiaHoyEmpleado/${agent.IdEmpleado}/${formattedDate}`,
      rankUrl: `${baseUrl}/empleado//leaderboardLlamadasDia/${formattedDate}/${agent.IdEmpleado}`,
      color: "#D7006D",
    },
    {
      title: "Call Feeling Fashion",
      dataUrl: `${baseUrl}/empleado/modaDeSentimientoEmpleado/${agent.IdEmpleado}`,
      rankUrl: null,
      color: "#FFCE00",
    },
    {
      title: "Average call duration",
      dataUrl: `${baseUrl}/empleado/getPromedioTiempoLlamada/${agent.IdEmpleado}`,
      rankUrl: null,
      color: "#EC6907",
    },
  ];

  return (
    <div className="cardContainer">
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
