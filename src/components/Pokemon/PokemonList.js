import React, { useState } from 'react';
// components
import { PokemonCardSkeleton, PokemonCard, Grid, Pagination } from '../';
import { useQuery } from 'react-query';

export const PokemonList = () => {
  const numberOfPokemons = 12;
  const [currentUrl, setCurrentUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemons}`
  );
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);

  const prevPage = () => setCurrentUrl(prevUrl);
  const nextPage = () => setCurrentUrl(nextUrl);

  const fetchData = async (key, currentUrl) => {
    const response = await fetch(currentUrl);
    const data = await response.json();
    const { next, previous, results } = data;

    setPrevUrl(previous);
    setNextUrl(next);

    const pokemons = await Promise.all(
      results.map(async item => {
        const res = await fetch(item.url);
        return res.json();
      })
    );
    return pokemons;
  };

  const { isLoading, error, data } = useQuery(
    ['pokemons', currentUrl],
    fetchData
  );
  return (
    <>
      {error && `An error has occurred: ${error.message}`}
      <Grid>
        {isLoading &&
          Array(numberOfPokemons)
            .fill()
            .map((e, i) => <PokemonCardSkeleton key={i} />)}
        {data && data.map(item => <PokemonCard key={item.name} data={item} />)}
      </Grid>
      <Pagination
        prevPage={prevUrl ? prevPage : null}
        nextPage={nextUrl ? nextPage : null}
      />
    </>
  );
};
