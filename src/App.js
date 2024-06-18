import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute';
import LogIn from "./components/LogIn";
import Window from "./components/Window";
import Stats from "./components/Stats";
import NotFound from "./components/NotFound";
import { useLogInContext } from "./providers/LogInContext";

function App() {

  // let agent = JSON.parse(window.localStorage.getItem('Agent'));
  const [agent,] = useLogInContext();


  return (

        <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route element={<ProtectedRoute isAllowed={!!agent.IdEmpleado}/>}>
            <Route path="/window" element={<Window />} />
            <Route path="/stats" element={<Stats />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
