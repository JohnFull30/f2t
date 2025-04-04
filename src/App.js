import React from 'react';
import ToolBar from './components/Header/ToolBar';
import CarouselComponent from './components/CarouselComponent';
import eggIcon from './assets/icons/egg-icon.png';
import flowerIcon from './assets/icons/flower-icon.png';
import herbIcon from './assets/icons/herb-icon.png';
import milkIcon from './assets/icons/milk-icon.png';
import strawberryIcon from './assets/icons/strawberry-icon.png';
import veggieIcon from './assets/icons/veggie-icon.png';

const iconStyle = {
  width: 40,
  height: 40,
  objectFit: 'contain',
};

const carouselItems = [
  { label: 'Fresh Eggs', icon: <img src={eggIcon} alt="egg" style={iconStyle} /> },
  { label: 'Organic Veggies', icon: <img src={veggieIcon} alt="veggies" style={iconStyle} /> },
  { label: 'Herbs', icon: <img src={herbIcon} alt="herbs" style={iconStyle} /> },
  { label: 'Flowers', icon: <img src={flowerIcon} alt="flowers" style={iconStyle} /> },
  { label: 'Honey', icon: <img src={flowerIcon} alt="honey" style={iconStyle} /> }, // placeholder
  { label: 'Milk', icon: <img src={milkIcon} alt="milk" style={iconStyle} /> },
  { label: 'Vegetables', icon: <img src={veggieIcon} alt="vegetables" style={iconStyle} /> },
  { label: 'Cheese', icon: <img src={milkIcon} alt="cheese" style={iconStyle} /> }, // reused milk
  { label: 'Fruit Basket', icon: <img src={strawberryIcon} alt="fruit" style={iconStyle} /> },
  { label: 'Herbs', icon: <img src={herbIcon} alt="herbs" style={iconStyle} /> }, // repeated
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
