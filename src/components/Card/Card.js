import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { handleColor } from '../../utils/styledUtils';

export const Box = styled(Link)`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2.5rem 1.8rem;
  background-color: ${({ color }) => handleColor(color)};
  text-decoration: none;
  display: block;
  box-shadow: 0px 3px 10px 0px ${({ color }) => handleColor(color)};
`;

export const Title = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: 700;
  margin: 0;
  color: ${({ color }) => handleColor(color)};
`;

export const Wrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
`;

export const BadgesWrapper = styled.div`
  width: 40%;
`;

export const Badge = styled.p`
  margin: 0;
  padding-bottom: 0.6rem;
  width: max-content;
  border-radius: 0.8rem;
  background-color: ${({ color }) => handleColor(color)};
`;

export const Image = styled.img`
  display: block;
  width: 60%;
  height: 7.5rem;
  background: ${({ src }) => src} center center / contain no-repeat;
`;

Box.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Title.propTypes = {
  color: PropTypes.string,
};

Badge.propTypes = {
  color: PropTypes.string,
};

Image.propTypes = {
  src: PropTypes.string,
};
