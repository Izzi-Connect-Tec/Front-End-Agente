// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import Service from "./Service";
import Stats from "./Stats";
import Solutions from "./Solutions"
import Client from "./Client"

const Window = (props) => {
    return (
        <div className="window">
            <div className="stats">
                <div className="title"></div>
                <Stats/>
            </div>
            <div className="client">
                <div className="title"></div>
                <Client/>
            </div>
            <div className="service">
                <div className="title"></div>
                <Service/>
            </div>
            <div className="solutions">
                <div className="title"></div>
                <Solutions/>
            </div>
        </div>
    );
}

export default Window;