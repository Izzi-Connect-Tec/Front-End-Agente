import "../styles/window.css";
import Header from "./Header";
// import AppProviders from "../../providers/AppProviders";
import EmbedConnect from "./EmbedConnect";
import { Call } from "@mui/icons-material";
import AppProviders from "../providers/AppProviders"


const Window = (props) => {
  return (
    <AppProviders>
      <div className="window">
        <Header />
        <Call />
        <EmbedConnect />
      </div>
    </AppProviders>
  );
};

export default Window;
