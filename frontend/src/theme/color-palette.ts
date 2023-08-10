import { Palette } from '@mui/material/styles';

export const ColorPalette: Partial<Palette> = {
  background: {
    default: '#f6f6f6',
    paper: '#fff'
  },
  text: {
    primary: '#000000',
    secondary: '#999999',
    disabled: '#BCBCBC'
  },
  divider: '#EAEAEA'
};

export const DarkModePalette = {
  background: {
    default: '#000000',
    paper: 'rgb(255, 255, 255, 0.1)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#CCCCCC',
    disabled: '#666666'
  },
  divider: '#333333'
};
