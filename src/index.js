import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LogInProvider } from './Providers/LogInContext';
import { ControlLlamadaProvider } from './Providers/ControlLlamadaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogInProvider>
    <ControlLlamadaProvider> 
      <App />
      </ControlLlamadaProvider> 
    </LogInProvider>
  </React.StrictMode>
);
