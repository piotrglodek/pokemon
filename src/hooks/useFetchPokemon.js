import { useState, useEffect } from 'react';

export function useFetchPokemon(url) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      await fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
          setPokemon(data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchPokemon();
  }, [url]);
  return [pokemon, loading];
}
