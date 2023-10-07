import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const ItemDetail = ({ nombre, rutaImagen, descripcion, precio, stock }) => {
  const { cart, addToCart } = useContext(CartContext);
  console.log(cart);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <section className="DetalleProducto">
      <img src={rutaImagen} className="fotinga" alt={nombre} />
      <div className="detalles">
        <h2 className="card-title">{nombre}</h2>
        <p className="naranjita">{descripcion}</p>
        <p className="naranjita">Precio: ${precio}</p>
        <ItemCount
          cantidad={cantidad}
          handleRestar={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={() => {
            addToCart(nombre, cantidad, precio); 
          }}
          stock={stock}
        />
      </div>
    </section>
  );
};

export default ItemDetail;
