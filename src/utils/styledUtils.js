import { theme } from '../theme';
const { color } = theme;

export const handleCardColor = cardColor => {
  switch (cardColor) {
    case 'grass':
    case 'bug':
      return `
      background-color:${color.green};
      box-shadow: 0px 3px 10px 0px ${color.green};
      & .badge{
        background-color:${color.lGreen};
      }
      `;
    case 'fire':
    case 'fighting':
    case 'dragon':
      return `
      background-color:${color.red};
      box-shadow: 0px 3px 10px 0px ${color.red};
      & .badge{
        background-color:${color.lRed};
      }
      `;
    case 'water':
    case 'flying':
    case 'ice':
      return `
      background-color:${color.blue};
      box-shadow: 0px 3px 10px 0px ${color.blue};
      & .badge{
        background-color:${color.lBlue};
      }
      `;
    case 'normal':
    case 'rock':
    case 'steel':
    case 'dark':
    case 'shadow':
    case 'unknown':
      return `
      background-color:${color.gray};
      box-shadow: 0px 3px 10px 0px ${color.gray};
      & .badge{
        background-color:${color.lGray};
      }
      `;
    case 'poison':
    case 'ghost':
      return `
      background-color:${color.violet};
      box-shadow: 0px 3px 10px 0px ${color.violet};
      & .badge{
        background-color:${color.lViolet};
      }
      `;
    case 'fairy':
    case 'psychic':
      return `
      background-color:${color.pink};
      box-shadow: 0px 3px 10px 0px ${color.pink};
      & .badge{
        background-color:${color.lPink};
      }
      `;
    case 'ground':
      return `
      background-color:${color.brown};
      box-shadow: 0px 3px 10px 0px ${color.brown};
      & .badge{
        background-color:${color.lBrown};
      }
      `;
    case 'electric':
      return `
      background-color:${color.yellow};
      box-shadow: 0px 3px 10px 0px ${color.yellow};
      & .badge{
        background-color:${color.lYellow};
      }
      `;
    default:
      return `
        background-color:${color.white};
        box-shadow: 0px 3px 10px 0px ${color.white};
        & .badge{
          background-color:${color.white};
        }
        `;
  }
};

export const handleColor = colorName => {
  switch (colorName) {
    case 'gray':
      return color.gray;
    case 'lViolet':
      return color.lViolet;
    case 'violet':
      return color.violet;
    case 'lRed':
      return color.lRed;
    case 'red':
      return color.red;
    case 'lGreen':
      return color.lGreen;
    case 'green':
      return color.green;
    case 'lYellow':
      return color.lYellow;
    case 'yellow':
      return color.yellow;
    case 'lBlue':
      return color.lBlue;
    case 'blue':
      return color.blue;
    case 'lBrown':
      return color.lBrown;
    case 'brown':
      return color.brown;
    case 'accent':
      return color.accent;
    case 'black':
      return color.black;
    default:
      return color.white;
  }
};
