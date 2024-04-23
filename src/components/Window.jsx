// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import Service from "./Service";
import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";

const Window = (props) => {
    return (
        <div className="window">
            <div className="stats">
                <div className="title">Estadísticas</div>
                <Stats/>
            </div>
            <div className="client">
                <div className="title">Cliente</div>
                <Client/>
            </div>
            <div className="service">
                <div className="title">Servicio</div>
                <Service/>
            </div>
            <div className="solutions">
                <div className="title">Soluciones frecuentes</div>
                <Solutions/>
            </div>
        </div>
    );
}

export default Window;