import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContex.jsx';

const PokemonDetail = () => {
  const { pokemonDetails, fetchPokemonDetail } = useContext(PokemonContext);
  const { id } = useParams(); // Asegúrate de que 'id' corresponde al parámetro usado en tus rutas

  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id, fetchPokemonDetail]);

  const pokemonDetail = pokemonDetails[id];

  return (
    <div className='d-flex justify-content-center'>
      {pokemonDetail ? (
        <>
          <div className='d-flex justify-content-center container-details flex-wrap'>
            <figure>
              <img
                loading='lazy'
                src={pokemonDetail.sprites?.front_default} // Usa 'sprites.front_default' para la imagen
                alt={pokemonDetail.name}
              />
            </figure>
            <div>
              <h3>{pokemonDetail.name}</h3>
              <ul>
                <li>Hp: {pokemonDetail.stats[0].base_stat}</li>
                <li>Attack: {pokemonDetail.stats[1].base_stat}</li>
                <li>Defense: {pokemonDetail.stats[2].base_stat}</li>
                <li>Special-attack: {pokemonDetail.stats[3].base_stat}</li>
                <li>Special-defense: {pokemonDetail.stats[4].base_stat}</li>
                <li>Speed: {pokemonDetail.stats[5].base_stat}</li>
                <li>Height: {pokemonDetail.height}</li>
                <li>Weight: {pokemonDetail.weight}</li>
                <li>
                  Type:{' '}
                  {pokemonDetail.types
                    ?.map((type) => type.type.name)
                    .join(', ')}
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading Pokémon...</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
