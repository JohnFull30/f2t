// ToolBar.jsx example
import React from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';
import ShoppingCart from './ShoppingCart';

const ToolBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, boxShadow: 1 }}>
      <Logo />
      <SearchBar />
      <LocationSelector address="15330 Archwood St" />
      <ShoppingCart itemCount={0} />
    </Box>
  );
};

export default ToolBar;
