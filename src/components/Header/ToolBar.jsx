// ToolBar.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';
import ShoppingCart from './ShoppingCart';

const ToolBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        padding: 2,
        gap: 1.5,
        boxShadow: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Logo />
        <ShoppingCart itemCount={0} />
      </Box>

      <Box
        sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: 1,
            }}
>
  <SearchBar />
  <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '100%', sm: 'auto' } }}>
    <LocationSelector address="15330 Archwood St" />
  </Box>
</Box>

      </Box>
  );
};

export default ToolBar;
