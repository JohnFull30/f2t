import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';
import ShoppingCart from './ShoppingCart';

const ToolBar = () => {
  return (
    <Box sx={{ boxShadow: 1, py: { xs: 1, sm: 2 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ width: { xs: '100%', sm: 'auto' }, display: 'flex', justifyContent: { xs: 'space-between', sm: 'flex-start' }, alignItems: 'center' }}>
            <Logo />
            {/* Show cart here on mobile */}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <ShoppingCart itemCount={0} />
            </Box>
          </Box>

          {/* Center: SearchBar + Location */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              flexGrow: 1,
              mt: { xs: 1, sm: 0 },
            }}
          >
            <SearchBar />
            <LocationSelector address="15330 Archwood St" />
          </Box>

          {/* Right: Shopping Cart (only on desktop) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ShoppingCart itemCount={0} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ToolBar;
