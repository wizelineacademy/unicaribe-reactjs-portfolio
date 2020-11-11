import React from 'react';
import { PokemonDetailContainer, PokemonName, PokemonImage } from './styled';

const PokemonDetailsCard = ({ pokemon }) => {

  const { name, sprites, types } = pokemon;

  return (
    <PokemonDetailContainer>
      <PokemonName>
        {name}
      </PokemonName>
      <PokemonImage src={sprites.other.dream_world.front_default} alt={name} />
    </PokemonDetailContainer>
  );
}
 
export default PokemonDetailsCard;