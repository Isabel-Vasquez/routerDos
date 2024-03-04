import React from 'react';
import { createRoot } from 'react-dom/client'; // Actualizado aquí
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { PokemonContexProvider } from './context/PokemonContex.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonContexProvider>
        <App />
      </PokemonContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
