import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const PokemonCardSkeleton = () => {
  return (
    <CardSkelet>
      <CardTitleSkelet />
      <CardRowSkelet>
        <CardBadgesSkelet>
          <CardBadgeSkelet />
          <CardBadgeSkelet />
        </CardBadgesSkelet>
        <CardImgWrapperSkelet>
          <CardImgSkelet />
        </CardImgWrapperSkelet>
      </CardRowSkelet>
    </CardSkelet>
  );
};

const duration = 1.5;
const pulse = keyframes`
    0% {
    opacity: 1;
  }
  50%{
    opacity:0.4;
  }
  100% {
    opacity: 1;
  }
`;
const sharedStyles = css`
  background-color: rgba(255, 255, 255, 0.3);
  animation: ${pulse} ${duration}s ease-in-out 0.5s infinite;
  border-radius: 0.4rem;
`;

const CardSkelet = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem 1rem 0.6rem;
  text-decoration: none;
  background-color: #bbb;
  display: block;
`;
const CardTitleSkelet = styled.div`
  ${sharedStyles}
  height: 1.7rem;
`;
const CardRowSkelet = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const CardBadgesSkelet = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & :nth-child(1) {
    margin-bottom: 0.6rem;
  }
`;
const CardBadgeSkelet = styled.p`
  ${sharedStyles}
  margin: 0;
  width: 4.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 3rem;
  height: 2.5rem;
`;
const CardImgWrapperSkelet = styled.div`
  flex: 3;
`;
const CardImgSkelet = styled.div`
  ${sharedStyles}
  display: block;
  height: 12rem;
`;
