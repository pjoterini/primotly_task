import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { orange, teal } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Swapi } from './components/swapi/Swapi';

//eslint-disable-next-line
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ThemeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{ ml: 1, mt: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: teal,
          secondary: orange,
          contrastThreshold: 4.5,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeButton />
        <Box
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Swapi />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
