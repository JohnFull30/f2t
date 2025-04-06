import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Container, Divider } from '@mui/material';
import farmImg1 from '../assets/images/farm-placeholder1.png';

const farms = {
  'sunny-hill-farm': {
    name: 'Sunny Hill Farm',
    location: 'Tobago East',
    image: farmImg1,
    about: 'Fresh eggs and organic produce...',
    highlights: ['Organic eggs', 'Free-range chickens', 'Vegetables'],
  },
  // add other farms here
};

const FarmProfile = () => {
  const navigate = useNavigate();
  const { farmId } = useParams();

  const farm = farms[farmId] || {
    name: 'Farm not found',
    location: '',
    image: farmImg1,
    about: 'No information available.',
    highlights: [],
  };

  return (
    <Box>
      <Box component="img" src={farm.image} alt={farm.name} sx={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <Container sx={{ py: 4 }}>
        <Typography variant="body2" sx={{ cursor: 'pointer', color: '#FF3008' }} onClick={() => navigate(-1)}>
          ← Back to Farm Explorer
        </Typography>
        <Typography variant="h4">{farm.name}</Typography>
        <Typography variant="subtitle1">{farm.location}</Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6">About the Farm</Typography>
        <Typography variant="body1">{farm.about}</Typography>
        <Typography variant="h6">Highlights</Typography>
        <ul>
          {farm.highlights.map((item, i) => (
            <li key={i}><Typography variant="body2">{item}</Typography></li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default FarmProfile;
