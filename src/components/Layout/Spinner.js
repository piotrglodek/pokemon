import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner = () => {
  return (
    <StyledContainer>
      <StyledSpinner />
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
  }
`;
const StyledSpinner = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border-top: 0.5rem solid rgba(255, 255, 255, 0.2);
  border-right: 0.5rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.5rem solid ${({ theme: { color } }) => color.accent};
  transform: translateZ(0);
  animation: ${spinner} 1.1s infinite linear;
`;
