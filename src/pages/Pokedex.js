import React from 'react';
import { useHistory } from 'react-router-dom';
//hooks
import { useSetPageTitle } from '../hooks';
// components
import { Arrow, Typography, Pokemons } from '../components';

function Pokedex(props) {
  const { pageTitle } = props;
  useSetPageTitle(pageTitle);
  const handleGoBack = useHistory().goBack;

  return (
    <>
      <Arrow.Button onClick={handleGoBack}>
        <Arrow.Back />
      </Arrow.Button>
      <Typography.Heading1>{pageTitle}</Typography.Heading1>
      <Pokemons />
    </>
  );
}

export default Pokedex;
