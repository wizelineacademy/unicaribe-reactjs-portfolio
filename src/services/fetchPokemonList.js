const BASE_URL = 'https://pokeapi.co/api/v2/';
const PokemonListEndpoint = 'pokemon';

const FetchPokemonService = async () => {
  const response = await fetch(`${BASE_URL}${PokemonListEndpoint}`);
  const data = await response.json();

  return data;
};

export default FetchPokemonService;
