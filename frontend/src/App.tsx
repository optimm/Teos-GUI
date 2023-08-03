import { ThemeProvider } from '@mui/material';
import Routes from './routes';
import { theme } from 'theme/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
