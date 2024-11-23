import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import DetailsComponent from './DetailsComponent';
import ControlsComponent from './ControlsComponent';
import SelectorsComponent from './SelectorsComponent';

// 导入本地图片
import classicItalian from './classic_italian.jpg';
import seafoodDeluxe from './seafood_deluxe.jpg';
import hawaiian from './hawaiian.jpg';

const Pizzacard = () => {
  const [selectedPizza, setSelectedPizza] = useState('classic_italian');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('small');

  const pizzas = [
    { id: 'classic_italian', name: 'Classic Italian Pizza', prices: { small: 10.99, medium: 12.99, large: 14.99 }, image: classicItalian },
    { id: 'seafood_deluxe', name: 'Seafood Deluxe Pizza', prices: { small: 12.99, medium: 14.99, large: 16.99 }, image: seafoodDeluxe },
    { id: 'hawaiian', name: 'Hawaiian Pizza', prices: { small: 9.99, medium: 11.99, large: 13.99 }, image: hawaiian }
  ];

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const selectedPizzaData = pizzas.find(pizza => pizza.id === selectedPizza);
  const totalPrice = (selectedPizzaData.prices[size] * quantity).toFixed(2);

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <ImageComponent pizzaData={selectedPizzaData} />
        <DetailsComponent pizzaData={selectedPizzaData} size={size} quantity={quantity} totalPrice={totalPrice} />
        <div className="col-md-8">
          <div className="card-body">
            <ControlsComponent onDecrement={handleDecrement} onIncrement={handleIncrement} />
            <SelectorsComponent selectedPizza={selectedPizza} setSelectedPizza={setSelectedPizza} size={size} setSize={setSize} pizzas={pizzas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizzacard;