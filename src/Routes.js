import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Layout, Pokemon } from './components';
// pages
import { Pokedex } from './pages';

export default function Routes() {
  return (
    <>
      <Layout.Container>
        <Switch>
          <Route exact path='/' component={Pokedex} />
        </Switch>
      </Layout.Container>
      <Switch>
        <Route exact path='/pokemon/:pokemonName' component={Pokemon} />
      </Switch>
    </>
  );
}
