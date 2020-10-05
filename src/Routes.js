import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Container } from './components';
// pages
import { Home, Pokedex, PokemonSinglePage } from './pages';

export default function Routes() {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pokedex' component={Pokedex} />
        <Route exact path='/pokemon/:id' component={PokemonSinglePage} />
      </Switch>
    </Container>
  );
}
