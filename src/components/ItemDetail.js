import ItemCount from './ItemCount'

const ItemDetail = ({id, nombre, rutaImagen, descripcion, precio, stock}) => {

    return (
        <section className='DetalleProducto' >
            <img src={`${rutaImagen}`} className="d-block" alt={nombre}/>
            <div className='detalles'>
                <h2 className='mb-3'> {id} - {nombre}</h2>
                <p>
                    {descripcion} 
                </p>
                <p className='precio'>
                     Precio: ${precio}
                </p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('cantidad agregada ', quantity)}/>
            </div>
      </section>
    )
}
      
export default ItemDetail
