import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PokemonCardContainer } from './styled';

const PokemonCard = ({ name, url }) => {
  return (
    <PokemonCardContainer>
      <div>Nombre: {name}</div>
      <div>
        <Link to={`/pokemon/${name}`}>
          Ver mas
        </Link>
      </div>
    </PokemonCardContainer  >
  );
};

export default PokemonCard;