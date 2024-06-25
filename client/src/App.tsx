import { useMemo } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from '@/theme';

import Navbar from '@/scenes/navbar';

function App() {
   const theme = useMemo(() => createTheme(themeSettings), []);

   return (
      <div className="app">
         <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
         </ThemeProvider>
      </div>
   );
}

export default App;
