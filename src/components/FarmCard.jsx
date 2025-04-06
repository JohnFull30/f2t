import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FarmCard = ({ name, image, tags, location }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/farm-profile', {
      state: { name, image, tags, location },
    });
  };

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={name}
        sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          {tags?.map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {location}
        </Typography>

        <Button
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mt: 2,
            textTransform: 'none',
            borderRadius: 2,
            borderColor: '#FF3008',
            color: '#FF3008',
            '&:hover': {
              backgroundColor: 'rgba(255, 48, 8, 0.1)',
              borderColor: '#FF3008',
            },
          }}
          onClick={handleClick}
        >
          View Farm
        </Button>
      </CardContent>
    </Card>
  );
};

export default FarmCard;
