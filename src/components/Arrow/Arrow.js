import styled from 'styled-components';
import { ReactComponent as BackArrowSvg } from '../../assets/arrow-back.svg';

export const Button = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
`;

export const Back = styled(BackArrowSvg)`
  fill: ${({ isWhite, theme: { color } }) =>
    isWhite ? color.white : color.black};
  width: 3rem;
  height: 3rem;
`;
