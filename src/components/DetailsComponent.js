import React from 'react';

const DetailsComponent = ({ pizzaData, size, quantity, totalPrice }) => {
  return (
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{pizzaData.name}</h5>
        <p className="card-text">Price: ${pizzaData.prices[size]}</p>
        <p className="card-text"><small className="text-muted">Quantity: {quantity}</small></p>
        <p className="card-text"><strong>Total Price: ${totalPrice}</strong></p>
      </div>
    </div>
  );
};

export default DetailsComponent;