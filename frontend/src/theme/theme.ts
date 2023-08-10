import { createTheme } from '@mui/material/styles';
import { ColorPalette, DarkModePalette } from './color-palette';
import useAppStore from 'service/app.slice';

export const generateTheme = () => {
  const { darkMode } = useAppStore();

  const theme = createTheme({
    palette: darkMode ? DarkModePalette : ColorPalette
  });

  return theme;
};
