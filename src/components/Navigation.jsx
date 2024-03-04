import React from 'react';
import { NavLink } from 'react-router-dom';
import ubicacion from '../assets/img/ubicacion.png';

const Navigation = () => {
  return (
    <nav className='nav container-fluid d-flex justify-content-between align-items-center'>
      <div>
        <img src={ubicacion} alt='Imagen icons de ubicación' className='img' />
      </div>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'activeLink ' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pokemon'
            className={({ isActive }) => (isActive ? 'activeLink ' : undefined)}
          >
            Pokémon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
