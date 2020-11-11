import React from 'react';
import styled from 'styled-components';

const PokemonCardContainer = styled.div`
  display: flex;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 8px;
`;

const PokemonCard = ({ name, url }) => {
  return (
    <PokemonCardContainer>
      <div>Nombre: {name}</div>
      <div>
        <a href={url}>Ver mas info</a>
      </div>
    </PokemonCardContainer  >
  );
};

export default PokemonCard;