import React from 'react';

const ImageComponent = ({ pizzaData }) => {
  return (
    <div className="col-md-4">
      <img src={pizzaData.image} className="img-fluid rounded-start" alt={pizzaData.name} />
    </div>
  );
};

export default ImageComponent;