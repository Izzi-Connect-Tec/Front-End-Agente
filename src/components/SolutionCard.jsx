import '../styles/solutionCard.css';

const SolutionCard = (props) => {
    return (
        <div className="solution-card">
            <p>{props.tituloSolucion}</p>
        </div>
    );
}

export default SolutionCard;