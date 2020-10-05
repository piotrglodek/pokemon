import React from 'react';
import { useParams } from 'react-router-dom';

function PokemonSinglePage() {
  const { id } = useParams();
  return <div>Pokemon single page. Pokemon id:{id}</div>;
}

export default PokemonSinglePage;
