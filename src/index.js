import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LogInProvider } from './providers/LogInContext';
import { CallControlProvider } from './providers/CallControlContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogInProvider>
      <CallControlProvider>
        <App />
      </CallControlProvider>
    </LogInProvider>
  </React.StrictMode>
);
