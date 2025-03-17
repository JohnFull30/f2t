import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = ({ itemCount = 0 }) => {
  return (
    <Box sx={{ cursor: 'pointer' }}>
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon sx={{ color: '#FF3008', fontSize: 28 }} />
      </Badge>
    </Box>
  );
};

export default ShoppingCart;
