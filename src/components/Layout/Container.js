import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 1.4rem;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
