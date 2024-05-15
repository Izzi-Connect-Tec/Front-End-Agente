import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter
import Window from './components/Window';
import Login from './components/Login';
//import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/window" element={<Window />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

