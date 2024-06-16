import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter
import Window from './components/Window';
import Login from './components/Login';
import Calificacion from './components/Calificacion';
import {getActiveCalls}  from './components/ActiveCalls';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useLogInContext } from './Providers/LogInContext';



function App() {

  const [agent,] = useLogInContext();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route element={<ProtectedRoute isAllowed={!!agent.IdEmpleado}/>}> */}
            <Route path="/window" element={<Window />} />
            <Route path="/calificacion" element={<Calificacion/>}/>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
    // <button onClick={getActiveCalls}></button>
  );
}

export default App;
