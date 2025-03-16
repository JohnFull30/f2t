import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF3008' }}>
        DOORDASH
      </Typography>
    </Box>
  );
};

export default Logo;
