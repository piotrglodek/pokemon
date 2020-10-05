import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonSinglePage() {
  const { pokemonName } = useParams();
  return <div>Pokemon single page. Pokemon id:{pokemonName}</div>;
}

export default PokemonSinglePage;
