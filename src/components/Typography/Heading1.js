import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const { fontSize, color } = theme;
const StyledHeading1 = styled.h1`
  margin: 4rem 0;
  font-size: ${fontSize.xl};
  color: ${color.black};
`;

export const Heading1 = ({ children }) => {
  return <StyledHeading1>{children}</StyledHeading1>;
};
