import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokemonCard = props => {
  const { data } = props;
  const { id, name } = data;
  const types = data.types.map(type => type.type.name);

  return (
    <Card className={types[0]} to={`/pokemon/${name}`}>
      <CardTitle>{name}</CardTitle>
      <CardRow>
        <CardBadges>
          {types.map((type, index) => (
            <CardBadge className='badge' key={index}>
              {type}
            </CardBadge>
          ))}
        </CardBadges>
        <CardImgWrapper>
          <CardImg
            url={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          />
        </CardImgWrapper>
      </CardRow>
    </Card>
  );
};

const Card = styled(Link)`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem 1rem 0.6rem;
  text-decoration: none;
  display: block;
`;
const CardTitle = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  margin: 0;
  color: ${({ theme: { color } }) => color.white};
  text-transform: capitalize;
  letter-spacing: 0.1rem;
`;
const CardRow = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const CardBadges = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & :nth-child(1) {
    margin-bottom: 0.6rem;
  }
`;
const CardBadge = styled.p`
  margin: 0;
  width: max-content;
  padding: 0.6rem 1.2rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 3rem;
  text-transform: capitalize;
  color: ${({ theme: { color } }) => color.white};
`;
const CardImgWrapper = styled.div`
  flex: 3;
`;
const CardImg = styled.div`
  display: block;
  height: 12rem;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

Card.propTypes = {
  to: PropTypes.string.isRequired,
};
CardImg.propTypes = {
  url: PropTypes.string,
};
Card.defaultProps = {
  to: '/',
};
