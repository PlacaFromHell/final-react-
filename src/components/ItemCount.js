import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad (cantidad + 1)
        }
    }
    
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1)
        }
    }

    return (
        <div className='contador'>
            <div className="controles">
                <button className='boton' onClick={decrementar}>-</button>
                <h5 className='numero'>{cantidad}</h5>
                <button className='boton' onClick={incrementar}>+</button>
            </div>
            <button className='CartBtn' onClick={() => onAdd (cantidad)} disabled={!stock}>
            <p className="text">Agregar al carrito</p>
            </button>
        </div>   
    )
}

export default ItemCount