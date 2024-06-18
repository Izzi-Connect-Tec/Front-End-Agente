// Authors: Joahan García, Karla Cruz and Maximiliano Lecona
// Component who contains everything displayed in the window

import "../styles/window.css";
import Header from "./Header";
import AppProviders from "../providers/AppProviders";
import EmbedConnect from "./EmbedConnect";
import { Call } from "./Call";

const Window = (props) => {
  return (
    <AppProviders>
      <div className="windowHeader">
        <Header />
        <Call />
        <EmbedConnect />
      </div>
    </AppProviders>
  );
};

export default Window;
