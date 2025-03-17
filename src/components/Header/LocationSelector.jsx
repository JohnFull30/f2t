import React from 'react';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LocationSelector = ({ address = "15330 Archwood St" }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <LocationOnIcon sx={{ color: '#424242' }} />
      <Typography variant="body2" sx={{ ml: 0.5 }}>
        {address}
      </Typography>
      <KeyboardArrowDownIcon fontSize="small" />
    </Box>
  );
};

export default LocationSelector;
