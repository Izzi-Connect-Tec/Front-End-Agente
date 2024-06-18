import CardComponent from "./CardComponent";
import "../styles/calificacion.css";


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
      title: "Calificación promedio del agente",
      dataUrl: `${baseUrl}/empleado/califPromDia/${agent.IdEmpleado}/calificaciones/${formattedDate}`,
      rankUrl: `${baseUrl}/empleado//leaderboardCalificacionesDia/${formattedDate}/${agent.IdEmpleado}`,
      color: "#00BCB4",
    },
    {
      title: "Cantidad de llamadas en el día",
      dataUrl: `${baseUrl}/empleado/llamadasDiaHoyEmpleado/${agent.IdEmpleado}/${formattedDate}`,
      rankUrl: `${baseUrl}/empleado//leaderboardLlamadasDia/${formattedDate}/${agent.IdEmpleado}`,
      color: "#D7006D",
    },
    {
      title: "Moda de sentiminento de llamadas",
      dataUrl: `${baseUrl}/empleado/modaDeSentimientoEmpleado/${agent.IdEmpleado}`,
      rankUrl: "urllll",
      color: "#FFCE00",
    },
    {
      title: "Promedio de tiempo en llamada",
      dataUrl: `${baseUrl}/empleado/getPromedioTiempoLlamada/${agent.IdEmpleado}`,
      rankUrl: "urllll",
      color: "#EC6907",
    },
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
