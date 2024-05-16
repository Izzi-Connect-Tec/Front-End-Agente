import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter
import Window from './components/Window';
<<<<<<< HEAD
import Login from './components/Login';
import Calificacion from './components/Calificacion';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/window" element={<Window />} />
          <Route path="/calificacion" element={<Calificacion/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calificacion from './components/Calificacion';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Window/>}/>
          <Route path="/calificacion" element={<Calificacion/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
