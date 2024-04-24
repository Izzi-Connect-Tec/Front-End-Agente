// Contenedor que muestra las estadísticas del agente que está atendiendo una llamada
import "../styles/stats.css";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import Timer from "./Timer";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="titulo-stats">
        <h2>Estadísticas</h2>
      </div>
      <div className="stats-div">
        <div className="sentiment-div">
          <p>Llamada en curso</p>
          <div text-align="center">
            <Timer />
          </div>
          <p>Sentimiento en la llamada actual.</p>
          <LinearProgress variant="determinate" value={60} />
          <p>Cantidad llamadas en el día:<br/>
          5</p>
        </div>
        <div className="prom-div">
          <p>Calificación promedio: 4.5</p>
          <div text-align="center">
            <Rating 
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
          <p>Promedio de sentimiento en llamada.</p>
          <LinearProgress variant="determinate" value={60} />
          <p>Promedio de tiempo de atención:<br/>
          9 min 20 seg</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
