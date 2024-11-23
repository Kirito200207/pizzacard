import React from 'react';

const ControlsComponent = ({ onDecrement, onIncrement }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button className="btn btn-sm btn-danger" onClick={onDecrement}>-</button>
      <button className="btn btn-sm btn-success" onClick={onIncrement}>+</button>
    </div>
  );
};

export default ControlsComponent;
