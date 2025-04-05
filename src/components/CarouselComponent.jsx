import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CarouselComponent = ({ items }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <IconButton 
        onClick={() => handleScroll('left')} 
        sx={{ position: 'absolute', left: 0, zIndex: 10 }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          overflowX: 'auto',
          display: 'flex',
          gap: 2,
          px: 4,
          py: 1,
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
      {items.slice(0, 10).map((item, index) => (
        <Box
        key={index}
        sx={{
          flex: '0 0 auto',
          width: { xs: '60%', sm: '200px', md: '180px' },
          height: '150px',
          borderRadius: 2,
          boxShadow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
      
  {item.icon}
  <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 500 }}>
    {item.label}
  </Typography>
</Box>

      ))}
    </Box>

    <IconButton
      onClick={() => handleScroll('right')}
      sx={{ position: 'absolute', right: 0, zIndex: 10 }}
    >
      <ChevronRight />
    </IconButton>
    </Box>
  );
};

export default CarouselComponent;
