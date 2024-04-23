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
                <Stats/>
            </div>
            <div className="client">
                <Client/>
            </div>
            <div className="service">
                <Service/>
            </div>
            <div className="solutions">
                <Solutions/>
            </div>
        </div>
    );
}

export default Window;