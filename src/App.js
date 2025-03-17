import React from 'react';
import ToolBar from './components/Header/ToolBar';
import CarouselComponent from './components/CarouselComponent';
import GrassIcon from '@mui/icons-material/Grass';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SpaIcon from '@mui/icons-material/Spa';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const carouselItems = [
  { label: 'Fresh Eggs', icon: <SpaIcon fontSize="large" /> },
  { label: 'Organic Veggies', icon: <AgricultureIcon fontSize="large" /> },
  { label: 'Herbs', icon: <GrassIcon fontSize="large" /> },
  { label: 'Flowers', icon: <LocalFloristIcon fontSize="large" /> },
  { label: 'Honey', icon: <LocalFloristIcon fontSize="large" /> },
  { label: 'Milk', icon: <AgricultureIcon fontSize="large" /> },
  { label: 'Vegetables', icon: <GrassIcon fontSize="large" /> },
  { label: 'Cheese', icon: <AgricultureIcon fontSize="large" /> },
  { label: 'Fruit Basket', icon: <LocalFloristIcon fontSize="large" /> },
  { label: 'Herbs', icon: <GrassIcon fontSize="large" /> },
];


function App() {
  return (
    <div>
      <ToolBar />
      <CarouselComponent items={carouselItems} />
    </div>
  );
}

export default App;
