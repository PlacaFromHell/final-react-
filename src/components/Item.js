import { Link } from 'react-router-dom'
const Item = ({id, nombre, rutaImagen, precio, stock}) => {

    return (
        <div className="card" >
        <picture>
         <img src={`${rutaImagen}`} className="card-img-top" alt={nombre}/>
        </picture>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className='naranjita'> 
                Precio: ${precio} Cantidad:{stock}
            </p>
            <Link to={`/item/${id}`} className="btn btn-primary">
                 Ver detalle
            </Link> 
        </div>
    </div>
    )
}
      


export default Item
