import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Container, PokemonSinglePage } from './components';
// pages
import { Pokedex } from './pages';

export default function Routes() {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path='/' component={Pokedex} />
        </Switch>
      </Container>
      <Switch>
        <Route
          exact
          path='/pokemon/:pokemonName'
          component={PokemonSinglePage}
        />
      </Switch>
    </>
  );
}
