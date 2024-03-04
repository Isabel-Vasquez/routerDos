import React, { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

const PokemonContexProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20'
        );
        const { results } = await response.json();
        setPokemons(results);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    fetchPokemons();
  }, []);

  const fetchPokemonDetail = async (id) => {
    if (!pokemonDetails[id]) {
      // Check if we already have the details for this Pokemon
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemonDetails((prevDetails) => ({
          ...prevDetails,
          [id]: data, // Store the details using the Pokemon's ID as the key
        }));
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
    }
  };

  return (
    <PokemonContext.Provider
      value={{ pokemons, pokemonDetails, fetchPokemonDetail }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContexProvider };
