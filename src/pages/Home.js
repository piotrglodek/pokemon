import React from 'react';
import { useSetPageTitle } from '../hooks';
// components
import { Typography, Card, Layout } from '../components';

const cardsData = [
  {
    color: 'green',
    to: '/pokedex',
    title: 'Pokedex',
  },
  {
    color: 'red',
    to: '/moves',
    title: 'Moves',
  },
  {
    color: 'blue',
    to: '/abilities',
    title: 'Abilities',
  },
  {
    color: 'yellow',
    to: '/items',
    title: 'Items',
  },
  {
    color: 'violet',
    to: '/locations',
    title: 'Locations',
  },
  {
    color: 'brown',
    to: '/type',
    title: 'Type',
  },
];

const Cards = cardsData.map(card => {
  const { color, to, title } = card;
  return (
    <Card.Box key={title} color={color} to={to}>
      <Card.Title>{title}</Card.Title>
    </Card.Box>
  );
});

const Home = props => {
  const { pageTitle } = props;
  useSetPageTitle(pageTitle);

  return (
    <>
      <Typography.Heading1>What are you looking for?</Typography.Heading1>
      <Layout.Grid>{Cards}</Layout.Grid>
    </>
  );
};

export default Home;
