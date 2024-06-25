import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from '@/theme';

function App() {
   const theme = useMemo(() => createTheme(themeSettings), []);

   return (
      <div className="app">
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
               <Routes>
                  <Route path="/" element={<div>dashboard page0</div>} />
                  <Route
                     path="/predictions"
                     element={<div>dashboard page0</div>}
                  />
               </Routes>
            </Box>
         </ThemeProvider>
      </div>
   );
}

export default App;
