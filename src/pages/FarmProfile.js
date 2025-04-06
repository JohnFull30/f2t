import React from 'react';
import { useNavigate, /*useParams*/ } from 'react-router-dom';
import { Box, Typography, Container, Divider } from '@mui/material';
import farmImg1 from '../assets/images/farm-placeholder1.png'; // example image

const FarmProfile = () => {
  const navigate = useNavigate();
  // const { id } = useParams(); saved for future farm API usage

  // Dummy data for now (replace with real farm data or API)
  const farm = {
    name: 'Sunny Hill Farm',
    location: 'Tobago East',
    image: farmImg1,
    about: 'Sunny Hill Farm has been serving the local community with fresh eggs and organic produce for over 15 years...',
    highlights: ['Organic eggs', 'Free-range chickens', 'Locally grown vegetables'],
  };

  return (
    <Box>
      <Box
        component="img"
        src={farm.image}
        alt={farm.name}
        sx={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />

      <Container sx={{ py: 4 }}>
        {/* Back Button */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#FF3008',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 'medium',
              '&:hover': { textDecoration: 'underline' },
            }}
            onClick={() => navigate(-1)}
          >
            ← Back to Farm Exploer
          </Typography>
        </Box>

        <Typography variant="h4" fontWeight="bold">{farm.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{farm.location}</Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>About the Farm</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>{farm.about}</Typography>

        <Typography variant="h6" gutterBottom>Highlights</Typography>
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
