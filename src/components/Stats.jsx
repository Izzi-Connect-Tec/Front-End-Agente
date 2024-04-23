// Contenedor que muestra las estadísticas del agente que está atendiendo una llamada
import "../styles/stats.css";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import Timer from "./Timer";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="titulo">
        <h2>Estadísticas</h2>
      </div>
      <div className="stats-div">
        <div className="sentiment-div">
          <text>Sentimiento en la llamada.</text>
          <LinearProgress variant="determinate" value={60} />
          <text>Llamada en curso</text>
          <Timer />
          <text>Cantidad llamadas en el día:</text>
          <text>5</text>
        </div>
        <div className="prom-div">
          <text>Calificación promedio: 4.5</text>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <text>Promedio de sentimiento en llamada.</text>
          <LinearProgress variant="determinate" value={60} />
          <text>Promedio de tiempo de atención.</text>
        </div>
      </div>
    </div>
  );
};

export default Stats;
