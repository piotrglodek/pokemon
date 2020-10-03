import React from 'react';
// components
import { Spinner, Typography, Card, Layout } from '../';
// hooks
import { useFetchPokemons } from '../../hooks';

function Pokemons() {
  const [pokemons, loading, errors] = useFetchPokemons();
  // FIXME: NoData component with image
  if (errors) {
    return (
      <>
        <Typography.Text>{errors[0]}</Typography.Text>
        <Typography.Text>
          {errors[1]}
          <a target='_blank' rel='noopener noreferrer' href={errors[2]}>
            github issues
          </a>
          .
        </Typography.Text>
      </>
    );
  }

  if (loading || !pokemons) {
    return <Spinner />;
  } else {
    const renderPokemonCards = pokemons.map(pokemon => {
      const { id, name, types } = pokemon;
      // pokemon types
      const pokemonTypes = [];
      types.map(type => pokemonTypes.push(type.type.name));
      return (
        <Card.Box $cardColor={pokemonTypes[0]} key={id} to='/'>
          <Card.Title>{name}</Card.Title>
          <Card.Wrapper>
            <Card.BadgesWrapper>
              {pokemonTypes.map(type => (
                <Card.Badge key={type}>{type}</Card.Badge>
              ))}
            </Card.BadgesWrapper>
            <Card.Image
              url={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            />
          </Card.Wrapper>
        </Card.Box>
      );
    });

    return <Layout.Grid>{renderPokemonCards}</Layout.Grid>;
  }
}

export default Pokemons;
