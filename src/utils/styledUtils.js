import { theme } from '../theme';
const { color } = theme;

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
