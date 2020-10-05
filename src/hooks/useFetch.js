import { useState, useEffect } from 'react';

export function useFetch() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      await fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => res.json())
        .then(data => {
          setPokemons(data.results);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setErrors([
            'Oops! It seems an error has occured.',
            'Try refresh page. If the problem still occurs, please feel free to let me know on ',
            'https://github.com/piotrglodek/pokemon/issues',
          ]);
          setLoading(false);
        });
    };
    fetchPokemons();
  }, []);
  return [pokemons, loading, errors];
}
