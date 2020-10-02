import React from 'react';
import { useSetPageTitle } from '../hooks';

function Pokedex(props) {
  const { pageTitle } = props;
  useSetPageTitle(pageTitle);

  return <>Pokedex</>;
}

export default Pokedex;
