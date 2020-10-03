import { useState, useEffect } from 'react';

export const useFetchPokemons = () => {
  const limit = 25;
  const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  // FIXME: urls  for pagination
  //   const [prevUrl, setPrevUrl] = useState(null);
  //   const [nextUrl, setNextUrl] = useState(null);

  // pokemons
  const [pokemons, setPokemons] = useState([]);
  // loading state and error
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*
        fetch pokemons returns object of:
            count: <NUMBER> number of pokemons
            next: <STRING> url for next pokemons
            previous: <STRING> url for prev pokemons, on first fetch return NULL
            results: <ARRAY> array of objects pokemons: name:<string> pokemon name url:<string> pokemon url
        */
        const { results } = await (await fetch(API_URL)).json();
        results.forEach(result => {
          const { url } = result;
          fetchPokemonData(url);
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrors([
          'Oops! It seems an error has occured.',
          'Try refresh page. If the problem still occurs, please feel free to let me know on ',
          'https://github.com/piotrglodek/pokemon/issues',
        ]);
        setLoading(false);
      }
    };

    const fetchPokemonData = async pokemonUrl => {
      const pokemon = await (await fetch(pokemonUrl)).json();
      setPokemons(prevState => [...prevState, pokemon]);
    };
    fetchData();
  }, [API_URL]);

  return [pokemons, loading, errors];
};
