// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import Service from "./Service";

const Window = (props) => {
    return (
        <div className="window">
            <div className="stats">
                <div className="title"></div>
                
            </div>
            <div className="client">
                <div className="title"></div>
                
            </div>
            <div className="service">
                <div className="title"></div>
                {Service}
            </div>
            <div className="solutions">
                <div className="title"></div>

            </div>
        </div>
    );
}

export default Window;