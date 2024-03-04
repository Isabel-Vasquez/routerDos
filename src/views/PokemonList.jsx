import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContex.jsx';

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='pokemon-form d-flex flex-column align-items-center justify-content-center'
    >
      <div className='mb-3'>
        <h2>Seleciona un pokemon</h2>
        <select
          id='pokemonSelect'
          className='form-select'
          value={selectedPokemon}
          onChange={(e) => setSelectedPokemon(e.target.value)}
        >
          <option value=''>Pokemones</option>
          {pokemons.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='btn bg-dark text-white'>
        Ver detalle
      </button>
    </form>
  );
};

export default PokemonList;
