import React from 'react';
import styled from 'styled-components';

export const Pagination = ({ prevPage, nextPage }) => {
  return (
    <StyledContainer>
      <StyledCol justify='flex-end'>
        {prevPage && <StyledButton onClick={prevPage}>Previous</StyledButton>}
      </StyledCol>
      <StyledCol>
        {nextPage && <StyledButton onClick={nextPage}>Next</StyledButton>}
      </StyledCol>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0 1.6rem;
`;

const StyledCol = styled.div`
  width: 50%;
  padding: 0 1rem;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'start')};
`;

const StyledButton = styled.button`
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: 700;
  padding: 0.6rem 2rem;
  border: none;
  outline: none;
  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.accent};
  cursor: pointer;
  margin: 0 1rem;
  border-radius: 0.3rem;
`;
