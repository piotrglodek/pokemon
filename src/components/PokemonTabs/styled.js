import styled from 'styled-components';

// ABOUT POKEMON COMPONENTS
export const PokemonSizeWrapper = styled.div`
  width: 90%;
  margin: 2.6rem auto;
  display: flex;
  padding: 1.8rem 2rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PokemonSizeColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const PokemonSizeLabel = styled.p`
  color: ${({ theme: { color } }) => color.gray};
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 1rem;
`;

export const PokemonSizeDescription = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ theme: { color } }) => color.black};
`;

// BASE STATS POKEMON COMPONENTS

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const TableRow = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  & > * {
    flex: 1;
  }
`;
export const TableLabel = styled.h2`
  margin: 0;
  color: ${({ theme: { color } }) => color.gray};
  font-size: 1.4rem;
`;
export const TableValue = styled.p`
  margin: 0;
  color: ${({ theme: { color } }) => color.black};
  font-size: 1.4rem;
  text-align: center;
`;
export const TablePercentage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const StatContainer = styled.div`
  width: 100%;
  background-color: ${({ theme: { color } }) => color.gray};
  height: 3px;
  position: relative;
`;
export const StatFill = styled.div`
  position: absolute;
  left: 0;
  height: 3px;
  background-color: ${({ isRed, theme: { color } }) =>
    isRed ? color.red : color.green};
  width: ${({ width }) => width}%;
`;

// export const Table = styled.div`
//   width: 100%;
//   display: flex;
//   margin-top: 5rem;
// `;

// export const TableColumn = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// export const TableColumnTitle = styled.p`
//   margin: 0;
//   margin-bottom: 1.6rem;
//   color: ${({ theme: { color } }) => color.gray};
//   font-size: 1.4rem;
//   min-width: 6.8rem;
//   height: 1.8rem;
// `;

// export const TableColumnValue = styled.p`
//   margin: 0;
//   margin-bottom: 1.6rem;
//   color: ${({ theme: { color } }) => color.black};
//   font-size: 1.4rem;
//   min-width: 3.8rem;
//   text-align: center;
//   height: 1.8rem;
// `;

// export const TableColumnPercentage = styled.p`
//   margin: 0;
//   margin-bottom: 1.6rem;
//   display: flex;
//   align-items: center;
//   width: 100px;
//   height: 1.8rem;
// `;

// export const StatContainer = styled.div`
//   width: 100%;
//   background-color: ${({ theme: { color } }) => color.gray};
//   height: 3px;
//   position: relative;
// `;

// export const StatFill = styled.div`
//   position: absolute;
//   left: 0;
//   height: 3px;
//   background-color: ${({ isRed, theme: { color } }) =>
//     isRed ? color.red : color.green};
//   width: ${({ width }) => width}%;
// `;
