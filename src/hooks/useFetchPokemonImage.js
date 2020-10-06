import { useState, useEffect } from 'react';

export function useFetchPokemonImage(id) {
  const [loadingImage, setLoadingImage] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
    setLoadingImage(false);
  }, [id]);

  return [loadingImage, image];
}
