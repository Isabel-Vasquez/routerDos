import React from 'react';
import pikachu from '../assets/img/pikachu.png';

const Home = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center home'>
      <h1 className='mb-5'>Bienvenido maestro pokemon</h1>
      <img src={pikachu} className='home__img' alt='Imagen de pikachu' />
    </div>
  );
};

export default Home;
