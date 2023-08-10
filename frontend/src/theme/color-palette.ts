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
  error: { light: '', main: '#FF0000', dark: '', contrastText: '' },
  divider: '#EAEAEA'
};

export const DarkModePalette = {
  background: {
    default: '#222222',
    paper: '#333333'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#999999',
    disabled: '#777777'
  },
  divider: '#555555',
  error: { light: '', main: '#ff3d3d', dark: '', contrastText: '' }
};
