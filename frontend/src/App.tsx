import { ThemeProvider } from '@mui/material';
import Routes from './routes';
import { theme } from 'theme/theme';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
