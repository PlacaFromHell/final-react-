import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, handleRestar, handleSumar, handleAgregar, nombre }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      handleSumar(); 
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      handleRestar(); 
    }
  };

  return (
    <div className="Control">
        
      <div className="controles">
        <button className="boton" onClick={decrementar}>
          -
        </button>
        <h5 className="numero">{cantidad}</h5>
        <button className="boton" onClick={incrementar}>
          +
        </button>
      </div>
      <button className="boton" onClick={handleAgregar} disabled={stock <= 0}>
        <p className="text">Agregar al carrito</p>
      </button>
    </div>
  );
};

export default ItemCount;