import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Window from "./components/Window";
import Stats from "./components/Stats";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/window" element={<Window />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
