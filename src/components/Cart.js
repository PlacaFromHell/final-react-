import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="Container carritox">
            <h1> Carrito </h1>

            {
                cart.map((prod) => (
                    <div key={prod.nombre} className="fila">
                        <h3>{prod.nombre}</h3>
                        <p className="filaitem">Precio unitario ${prod.precio}</p>
                        <p>Cantidad {prod.cantidad}</p>
                        <p>Precio total ${prod.precio * prod.cantidad}</p>
                    </div>
                ))
            }

            {
                cart.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <h3>
                        <Link to="/checkout" className="finalizar">Finalizar compra</Link>
                    </h3>
                    <button className="boton" onClick={handleVaciar}>Vaciar</button>
                </>
                :
                <h2 className="titulo">El carrito está vacío</h2>
            }
        </div>
    )
}

export default Cart;