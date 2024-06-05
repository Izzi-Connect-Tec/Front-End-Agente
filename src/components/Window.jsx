// Componente que funje de contenedor del resto de la pantalla
import "../styles/window.css";
import "../styles/window-header.css";
import Service from "./Service";
// import Stats from "./Stats";
import Client from "./Client";
import Solutions from "./Solutions";
import Header from "./Header";
import CustomizedSnackbars from "./Alerta";
import AppProviders from "../Providers/AppProviders";

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
      <CustomizedSnackbars/>
    </AppProviders>
  );
};

export default Window;
