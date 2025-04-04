import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import FarmCard from './FarmCard';
import farmImg1 from '../assets/images/farm-placeholder1.png';
import farmImg2 from '../assets/images/farm-placeholder2.png';
import farmImg3 from '../assets/images/farm-placeholder3.png';

const sampleFarms = [
  {
    name: 'Sunny Hill Farm',
    image: farmImg1,
    tags: ['Organic', 'Eggs', 'Free-range'],
    location: 'Tobago East',
  },
  {
    name: 'Green Pastures',
    image: farmImg2,
    tags: ['Vegetables', 'Sustainable'],
    location: 'Scarborough',
  },
  {
    name: 'Tropical Roots',
    image: farmImg3,
    tags: ['Fruits', 'Local', 'Herbs'],
    location: 'Mount St. George',
  },
];

const FarmCardSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 12 }, py: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: { xs: 'center', md: 'center' } }}
      >
        Explore Local Farms
      </Typography>

      <Grid2
        container
        spacing={3}
        justifyContent={{ xs: 'center', md: 'center' }}
      >
        {sampleFarms.map((farm, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <FarmCard {...farm} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FarmCardSection;
