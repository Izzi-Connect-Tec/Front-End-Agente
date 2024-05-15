import './App.css';
import Window from './components/Window';
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