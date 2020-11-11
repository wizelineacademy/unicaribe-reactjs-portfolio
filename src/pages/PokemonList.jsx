import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/pokemonCard';
import FetchPokemonService from '../services/fetchPokemonList';

const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const pokemonData = await FetchPokemonService();
      setPokemons(pokemonData.results);
    };

    getData();
  }, []);

  const renderPokemonList = () => {
    return pokemons && pokemons.map(pokemon => {
      return (
        <PokemonCard name={pokemon.name} url={pokemon.url} />
      );
    });
  };

  return (
    <div>
      { pokemons.length && renderPokemonList() } 
    </div>
  );
};

export default PokemonListPage;