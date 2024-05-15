// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import "../styles/window-header.css";
import Service from "./Service";
// import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";
import Header from "./Header";

const Window = (props) => {
  return (
    <div className="window-header">
      <Header />
      <div className="window">
        <div className="">
          <Solutions />
        </div>
        <div className="">
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
