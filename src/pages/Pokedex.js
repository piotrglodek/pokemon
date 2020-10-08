import React from 'react';
//hooks
import { useSetPageTitle } from '../hooks';
// components
import { Container, Heading1, PokemonList } from '../components';

function Pokedex() {
  useSetPageTitle('Pokedex');

  return (
    <Container>
      <Heading1>Pokedex</Heading1>
      <PokemonList />
    </Container>
  );
}

export default Pokedex;
