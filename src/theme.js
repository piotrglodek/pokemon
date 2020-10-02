import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    white: '#EAEBF5',
    gray: '#B4B5BE',
    lViolet: '#A47EB4',
    violet: '#7c538c',
    lRed: '#fda7a7',
    red: '#C73B37',
    lGreen: '#91e3cf',
    green: '#36996D',
    lYellow: '#ffe8a9',
    yellow: '#EDA926',
    lBlue: '#add7fe',
    blue: '#2E6DD5',
    lBrown: '#CEA6A1',
    brown: '#b1736c',
    accent: '#6c79db',
    black: '#303943',
  },
  fontSize: {
    small: '1.4rem',
    medium: '1.6rem',
    big: '3rem',
  },
};

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        box-sizing:border-box;
    }

    html{
      font-size:62.5%;
    }

    body{
        margin:0;
        font-family: 'Roboto', sans-serif;
    }
`;
