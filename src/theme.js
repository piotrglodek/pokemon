import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    white: '#EAEBF5',
    lGray: '#B4B5BE',
    gray: '#7b9095',
    lViolet: '#A47EB4',
    violet: '#7c538c',
    lRed: '#da7f7f',
    red: '#C73B37',
    lGreen: '#76c7b4',
    green: '#36996D',
    lYellow: '#f7ce5e',
    yellow: '#EDA926',
    lBlue: '#418fd8',
    blue: '#2E6DD5',
    lBrown: '#CEA6A1',
    brown: '#b1736c',
    lPink: '#ff9ff3',
    pink: '#f368e0',
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
