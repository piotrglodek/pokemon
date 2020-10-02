import styled, { keyframes } from 'styled-components';
import { ReactComponent as SpinnerSvg } from '../../assets/spinner.svg';

const duration = '1.4s';
const offset = 187;

const rotator = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
    0% { stroke-dashoffset: ${offset}; }
    50% {
    stroke-dashoffset:${offset / 4};
    transform:rotate(135deg);
    }
    100% {
    stroke-dashoffset: ${offset};
    transform:rotate(450deg);
    }
`;

export const Spinner = styled(SpinnerSvg)`
  stroke: ${({ theme: { color } }) => color.accent};
  animation: ${rotator} ${duration} linear infinite;
  & circle {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} ${duration} ease-in-out infinite;
  }
`;
