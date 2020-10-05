import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Layout } from './components';
// pages
import { Home, Pokedex, PokemonSinglePage } from './pages';

export default function Routes() {
  return (
    <Layout.Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pokedex' component={Pokedex} />
        <Route
          exact
          path='/pokemon/:pokemonName'
          component={PokemonSinglePage}
        />
      </Switch>
    </Layout.Container>
  );
}
