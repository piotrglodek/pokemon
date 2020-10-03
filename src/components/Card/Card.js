import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { handleColor, handleCardColor } from '../../utils/styledUtils';

export const Box = styled(Link)`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.6rem;
  text-decoration: none;
  ${({ $cardColor, color }) =>
    $cardColor
      ? handleCardColor($cardColor)
      : `background-color:${handleColor(color)}`};
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const BadgesWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  & :nth-child(1) {
    margin: 0.6rem 0;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: 700;
  margin: 0;
  color: ${({ color }) => handleColor(color)};
  text-transform: capitalize;
  letter-spacing: 0.1rem;
`;

export const Badge = styled.p`
  padding: 0.6rem 1.2rem;
  width: min-content;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 3rem;
  text-transform: capitalize;
  color: ${({ color }) => handleColor(color)};
`;

export const Image = styled.div`
  display: flex;
  min-height: 10rem;
  width: 60%;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
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
  url: PropTypes.string,
};
