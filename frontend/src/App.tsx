import { ThemeProvider } from '@mui/material';
import Routes from './routes';

import { SnackbarProvider } from 'notistack';
import { generateTheme } from 'theme/theme';
function App() {
  const theme = generateTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          autoHideDuration={2000}
        >
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
