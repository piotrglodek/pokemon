import styled from 'styled-components';
import { handleColor, handleCardColor } from '../../utils/styledUtils';

export const Foreground = styled.div`
  width: 100%;
  height: auto;
  ${({ $cardColor, color }) =>
    $cardColor
      ? handleCardColor($cardColor)
      : `background-color:${handleColor(color)}`};

  box-shadow: none;
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
`;

export const Header = styled.header`
  margin: 3rem 0 1.4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${({ color }) => handleColor(color)};
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin: 0;
`;

export const SubTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
  margin: 0;
`;

export const BadgesWrapper = styled.div`
  display: flex;
  & :nth-child(1) {
    margin-right: 0.6rem;
  }
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
  height: 23.6rem;
  width: 23.6rem;
  margin: 0 auto;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  bottom: -3rem;
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: ${({ theme: { color } }) => color.white};
  padding: 5rem 2rem;
`;
