import { useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';

import FlexBetween from '@/components/FlexBetween';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const { palette } = useTheme();
   const [selected, setSelected] = useState('dashboard');

   return (
      <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
         <FlexBetween gap="0.75rem">
            <PixIcon sx={{ fontSize: '28px' }} />
            <Typography variant="h4" fontSize="16px">
               Financier
            </Typography>
         </FlexBetween>

         <FlexBetween gap="2rem">
            <Box
               sx={{
                  '&:hover': { color: palette.primary[100] },
               }}
            >
               <Link
                  to="/"
                  style={{
                     color:
                        selected === 'dashboard'
                           ? 'inherit'
                           : palette.grey[700],
                     textDecoration: 'inherit',
                  }}
                  onClick={() => setSelected('dashboard')}
               >
                  dashboard
               </Link>
            </Box>
            <Box
               sx={{
                  '&:hover': { color: palette.primary[100] },
               }}
            >
               <Link
                  to="/predictions"
                  style={{
                     color:
                        selected === 'predictions'
                           ? 'inherit'
                           : palette.grey[700],
                     textDecoration: 'inherit',
                  }}
                  onClick={() => setSelected('predictions')}
               >
                  predictions
               </Link>
            </Box>
         </FlexBetween>
      </FlexBetween>
   );
};

export default Navbar;
