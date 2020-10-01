import React from 'react';
import { withTheme } from 'styled-components';
import { useSetPageTitle } from '../hooks/useSetPageTitle';
// components
import { Container, Typography, Card, Layout } from '../components';

const Home = props => {
  useSetPageTitle('Home');
  const {
    theme: { color },
  } = props;

  return (
    <>
      <Container>
        <Typography.Heading1>What are you looking for?</Typography.Heading1>
        <Layout.Grid>
          <Card.Box $bgColor={color.green} to='/pokedex'>
            <Card.Title>Pokedex</Card.Title>
          </Card.Box>
          <Card.Box $bgColor={color.red} to='/moves'>
            <Card.Title>Moves</Card.Title>
          </Card.Box>
          <Card.Box $bgColor={color.blue} to='/abilities'>
            <Card.Title>Abilities</Card.Title>
          </Card.Box>
          <Card.Box $bgColor={color.yellow} to='/items'>
            <Card.Title>Items</Card.Title>
          </Card.Box>
          <Card.Box $bgColor={color.violet} to='/locations'>
            <Card.Title>Locations</Card.Title>
          </Card.Box>
          <Card.Box $bgColor={color.brown} to='/type'>
            <Card.Title>Type</Card.Title>
          </Card.Box>
        </Layout.Grid>
      </Container>
    </>
  );
};

export default withTheme(Home);
