import React from 'react';
import { useFetchPokemon, useFetchPokemonImage } from '../../hooks';
import { Card, Spinner } from '../';

export const PokemonCard = props => {
  const { url } = props;

  const [pokemon, loading] = useFetchPokemon(url);

  const PokemonTile = () => {
    const { id, name, types } = pokemon;
    const [loadingImage, image] = useFetchPokemonImage(id);
    // pokemon types
    const pokemonTypes = [];
    types.map(type => pokemonTypes.push(type.type.name));
    return (
      <Card.Box $cardColor={pokemonTypes[0]} to={`/pokemon/${name}`}>
        <Card.Title>{name}</Card.Title>
        <Card.Wrapper>
          <Card.BadgesWrapper>
            {pokemonTypes.map(type => (
              <Card.Badge key={type}>{type}</Card.Badge>
            ))}
          </Card.BadgesWrapper>
          {loadingImage && <Spinner />}
          {image && <Card.Image url={image} />}
        </Card.Wrapper>
      </Card.Box>
    );
  };

  return (
    <>
      {loading && (
        <Card.Box to='/'>
          <Spinner />
        </Card.Box>
      )}
      {pokemon && <PokemonTile />}
    </>
  );
};
