import React from 'react';
// components
import { Spinner } from '../';
// hooks
import { useFetch } from '../../hooks';

function Pokemons() {
  const [response, loading] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=50`
  );

  if (loading || !response) {
    return <Spinner />;
  }

  console.log(response);
  return <>Data loaded</>;
}

export default Pokemons;
