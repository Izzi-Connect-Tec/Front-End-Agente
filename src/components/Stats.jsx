// Contenedor que muestra las estadísticas del agente que está atendiendo una llamada
// import "../styles/stats.css";
//import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from '@mui/material/CircularProgress';
//import Timer from "./Timer";

function GradientCircularProgress() {
  return (
    <div>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </div>
  );
}

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="stats-div">
        <div className="sentiment-div">
          <p style={{backgroundColor: "black"}}>Sentimiento en la llamada actual.</p>
          <GradientCircularProgress variant="determinate" value={90} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
