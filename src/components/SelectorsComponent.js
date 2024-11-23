import React from 'react';

const SelectorsComponent = ({ selectedPizza, setSelectedPizza, size, setSize, pizzas }) => {
  return (
    <>
      <div className="mt-3">
        <label htmlFor="pizzaSelect" className="form-label">Choose a Pizza:</label>
        <select
          id="pizzaSelect"
          className="form-select"
          value={selectedPizza}
          onChange={(e) => setSelectedPizza(e.target.value)}
        >
          {pizzas.map(pizza => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <label htmlFor="sizeSelect" className="form-label">Choose a Size:</label>
        <select
          id="sizeSelect"
          className="form-select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </>
  );
};

export default SelectorsComponent;