import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    white: '#FFFFFF',
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
    xs: '1.4rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3rem',
    xl: '3.6rem',
  },
};

const { color } = theme;

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

   .grass,.bug{
    background-color:${color.green};
   }
   .grass .badge,.bug .badge{
    background-color:${color.lGreen};
   }
   .fire,.fighting,.dragon{
    background-color:${color.red};
   }
   .fire .badge,.fighting .badge,.dragon .badge{
    background-color:${color.lRed};
   }
   .water,.flying,.ice{
    background-color:${color.blue};
   }
   .water .badge,.flying .badge,.ice .badge{
    background-color:${color.lBlue};
   }
   .normal,.rock,.steel,.dark,.shadow,.unknown{
    background-color:${color.gray};
   }
   .normal .badge,.rock .badge,.steel .badge,.dark .badge,.shadow .badge,.unknown .badge{
    background-color:${color.lGray};
   }
   .poison,.ghost{
    background-color:${color.violet};
   }
   .poison .badge,.ghost .badge{
    background-color:${color.lViolet};
   }
   .fairy,.psychic{
    background-color:${color.pink};
   }
   .fairy .badge,.psychic .badge{
    background-color:${color.lPink};
   }
   .ground{
    background-color:${color.brown};
   }
   .ground .badge{
    background-color:${color.lBrown};
   }
   .electric{
    background-color:${color.yellow};
   }
   .electric .badge{
    background-color:${color.lYellow};
   }
`;
