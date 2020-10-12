import React, { useState } from 'react';
// components
import { PokemonCardSkeleton, PokemonCard, Grid, Pagination } from '../';
import { usePaginatedQuery } from 'react-query';

export const PokemonList = () => {
  const fetchData = async (key, pageUrl) => {
    const response = await fetch(pageUrl);
    const data = await response.json();
    const { next, previous, results } = data;
    const pokemons = await Promise.all(
      results.map(async item => {
        const res = await fetch(item.url);
        return res.json();
      })
    );
    return { previous, next, pokemons };
  };

  const [api, setApi] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const {
    isLoading,
    isError,
    error,
    resolvedData,
    latestData,
    isFetching,
  } = usePaginatedQuery(['pokemons', api], fetchData);

  const handleNextPage = e => {
    e.stopPropagation();
    setApi(latestData.next);
    window.scrollTo(0, 0);
  };
  const handlePrevPage = e => {
    e.stopPropagation();
    setApi(latestData.previous);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isError && <p>{error.message}</p>}
      {isLoading || isFetching ? (
        <Grid>
          {Array(20)
            .fill()
            .map((e, i) => (
              <PokemonCardSkeleton key={i} />
            ))}
        </Grid>
      ) : (
        <>
          <Pagination
            nextPage={latestData.next ? handleNextPage : null}
            prevPage={latestData.previous ? handlePrevPage : null}
          />
          <Grid>
            {resolvedData.pokemons.map(item => (
              <PokemonCard key={item.name} data={item} />
            ))}
          </Grid>
          <Pagination
            nextPage={latestData.next ? handleNextPage : null}
            prevPage={latestData.previous ? handlePrevPage : null}
          />
        </>
      )}
    </>
  );
};
