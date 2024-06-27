import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

type Props = {
   title: string;
   sideText: string;
   icon?: React.ReactNode;
   subtitle?: string;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
   const { palette } = useTheme();

   return (
      <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
         <FlexBetween>{icon}</FlexBetween>
         <Box width="100%" mb="-0.1 rem">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{subtitle}</Typography>
         </Box>
         <Typography
            variant="h5"
            fontWeight="700"
            color={palette.secondary[500]}
         >
            {sideText}
         </Typography>
      </FlexBetween>
   );
};

export default BoxHeader;
