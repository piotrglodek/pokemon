import React from 'react';
import styled from 'styled-components';

// TODO:
// responsive grid
const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};
