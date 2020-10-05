import React from 'react';
//hooks
import { useSetPageTitle, useFetch } from '../hooks';
// components
import {
  Arrow,
  Typography,
  Spinner,
  NoData,
  PokemonCard,
  Layout,
} from '../components';

function Pokedex(props) {
  useSetPageTitle('Pokedex');

  const [pokemons, loading, errors] = useFetch();

  const PokemonCards = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.name} {...pokemon} />;
  });

  return (
    <>
      <Arrow.Button onClick={() => props.history.goBack()}>
        <Arrow.Back />
      </Arrow.Button>
      <Typography.Heading1>Pokedex</Typography.Heading1>
      {loading && <Spinner />}
      {errors && <NoData errors={errors} />}
      {pokemons && <Layout.Grid>{PokemonCards}</Layout.Grid>}
    </>
  );
}

export default Pokedex;
