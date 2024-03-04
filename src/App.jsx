import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './views/Home.jsx';
import PokemonList from './views/PokemonList.jsx';
import PokemonDetail from './views/PokemonDetail.jsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<PokemonList />} />
        <Route path='/pokemon/:id' element={<PokemonDetail />} />
      </Routes>
    </div>
  );
};

export default App;
