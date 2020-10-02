import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Container } from './components';
// pages
import { Home, Pokedex } from './pages';

const routesList = [
  { path: '/', Component: Home, pageTitle: 'Home' },
  { path: '/pokedex', Component: Pokedex, pageTitle: 'Pokedex' },
];

export default function Routes() {
  return (
    <Container>
      <Switch>
        {routesList.map(route => {
          const { path, Component, pageTitle } = route;
          return (
            <Route
              key={path}
              exact
              path={path}
              component={() => <Component pageTitle={pageTitle} />}
            />
          );
        })}
      </Switch>
    </Container>
  );
}
