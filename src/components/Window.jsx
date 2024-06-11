// Componente que funje de contenedor del resto de la pantalla
// import "../styles/window.css";
import "../styles/window-header.css";
import Service from "./Service";
// import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";
import Header from "./Header";
import AppProviders from "../Providers/AppProviders";
import {TarjetaLlamada} from "./tarjetaLlamada";
import { TarjetaCliente } from "./tarjetaCliente";
import { TarjetaChat } from "./tarjetaChat";
import { TarjetaSoluciones } from "./tarjetaSoluciones";

const Window = (props) => {


  return (
    <AppProviders>
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
      {/* <div className="window-header">
        <Header />
        <div className="llamada">
          <div className="datosLlamada">
            <TarjetaLlamada/>
            <TarjetaCliente/>
          </div>
          <div className="servicioLlamada">
            <TarjetaChat/>
            <TarjetaSoluciones/>
          </div>
        </div>  
      </div> */}
    </AppProviders>
  );
};

export default Window;
