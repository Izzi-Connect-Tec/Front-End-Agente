// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import Service from "./Service";
// import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";
import Header from "./Header";

const Window = (props) => {
  return (
    <div>
      <Header />
      <div className="window">
      <div className="solutions">
          <Solutions />
        </div>
        <div className="client">
          <Client />
        </div>
        <div className="service">
          <Service />
        </div>
      </div>
    </div>
  );
};

export default Window;
