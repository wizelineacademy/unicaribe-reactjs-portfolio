import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchPokemonDetails from '../services/fetchPokemonDetails';
import PokemonDetailsCard from '../components/pokemonDetailsCard';

const PokemonDetailsPage = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const data = await FetchPokemonDetails(pokemonName);

      setPokemonData(data);
    };

    fetchPokemonDetails();
  }, []);
  return (
    <div>
      {
        pokemonData && <PokemonDetailsCard pokemon={pokemonData} />
      }
    </div>

  );
};

export default PokemonDetailsPage;
