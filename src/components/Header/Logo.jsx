import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <Link to={`/f2t`} style={{ textDecoration: 'none' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF3008' }}>
        FARM2TABLE
      </Typography></Link>
    </Box>
  );
};

export default Logo;
