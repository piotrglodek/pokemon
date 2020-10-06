import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { Arrow, Spinner, PokemonTabs } from '../';
import {
  useSetPageTitle,
  useFetchPokemon,
  useFetchPokemonImage,
} from '../../hooks';

export const Pokemon = props => {
  const { pokemonName } = useParams();
  const capitlizedPokemonName = `${pokemonName
    .charAt(0)
    .toUpperCase()}${pokemonName.slice(1)}`;

  useSetPageTitle(capitlizedPokemonName);

  const [pokemon, loading] = useFetchPokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const RenderPokemon = () => {
    const { id, name, types } = pokemon;

    const [loadingImage, image] = useFetchPokemonImage(id);
    // pokemon types
    const pokemonTypes = [];
    types.map(type => pokemonTypes.push(type.type.name));
    return (
      <S.Foreground $cardColor={pokemonTypes[0]}>
        <S.Wrapper>
          <Arrow.Button onClick={() => props.history.goBack()}>
            <Arrow.Back $isWhite />
          </Arrow.Button>
          <S.Header>
            <S.Title>{name}</S.Title>
            <S.SubTitle>#{id}</S.SubTitle>
          </S.Header>
          <S.BadgesWrapper>
            {pokemonTypes.map(type => (
              <S.Badge className='badge' key={type}>
                {type}
              </S.Badge>
            ))}
          </S.BadgesWrapper>
          {loadingImage && <Spinner />}
          {image && <S.Image url={image} />}
        </S.Wrapper>
        <S.DetailsWrapper>
          <PokemonTabs pokemon={pokemon} />
        </S.DetailsWrapper>
      </S.Foreground>
    );
  };

  return (
    <>
      {loading && <Spinner />}
      {pokemon && <RenderPokemon />}
    </>
  );
};
