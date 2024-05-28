import "../styles/solutions.css";
import FormDialog from "./Reporte";
import SolutionCard from "./SolutionCard";
import solutionsData from "./solutionData";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="titulo-soluciones">
        <h2>Soluciones</h2>
      </div>
      <div className="solutions-div">
        <div className="possible-solutions">
          {solutionsData.map((solution) => (
            <SolutionCard
              key={solution.IdSolucion}
              solutionId={solution.IdSolucion}
              tituloSolucion={solution.Nombre}
            />
          ))}
        </div>
        <div className="botones-solutions">
          <FormDialog />
          <FormDialog />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
