const BASE_URL = 'https://pokeapi.co/api/v2/';
const PokemonListEndpoint = 'pokemon/';

const FetchPokemonDetails = async (name) => {
  const response = await fetch(`${BASE_URL}${PokemonListEndpoint}${name}`);
  const data = await response.json();

  return data;
};

export default FetchPokemonDetails;
