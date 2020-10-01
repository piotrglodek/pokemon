import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled(Link)`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2.5rem 1.8rem;
  background-color: ${({ $bgColor }) => $bgColor};
  text-decoration: none;
  display: block;
`;

export const Title = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
  margin: 0;
`;

export const Wrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
`;

export const WrapperItem = styled.div`
  width: 50%;
`;

export const Badge = styled.p`
  margin: 0;
  padding-bottom: 0.6rem;
  width: max-content;
  border-radius: 0.8rem;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 7.5rem;
  background: ${({ src }) => src} center center / contain no-repeat;
`;

Box.propTypes = {
  to: PropTypes.string.isRequired,
  $bgColor: PropTypes.string.isRequired,
};

Badge.propTypes = {
  $bgColor: PropTypes.string.isRequired,
};

Image.propTypes = {
  src: PropTypes.string,
};
