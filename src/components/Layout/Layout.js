import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem 1rem;
`;
