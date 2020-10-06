import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const shared = css`
  margin: 0;
`;

export const Heading1 = styled.h1`
  ${shared}
  font-size: ${({ theme: { fontSize } }) => fontSize.big};
  color: ${({ theme: { color } }) => color.black};
  padding: 3.2rem 0;
`;

export const Text = styled.p`
  ${shared}
  font-size: ${({ small, theme: { fontSize } }) =>
    small ? fontSize.small : fontSize.medium};
  color: ${({ white, theme: { color } }) =>
    white ? color.white : color.black};
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  padding: 2.5rem 0;
`;

Text.propTypes = {
  small: PropTypes.bool,
  white: PropTypes.bool,
  isBold: PropTypes.bool,
};

Text.defaultProps = {
  small: false,
  white: false,
  isBold: false,
};
