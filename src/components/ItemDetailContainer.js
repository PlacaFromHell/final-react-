import { useEffect, useState } from 'react'
import { getProductsById } from '.././asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer= () => {
    const [products, setProducts] = useState ([])

    const {itemId} = useParams ()

    useEffect (() => {
        getProductsById(itemId)
         .then (response => {
            setProducts(response)
         })
         .catch(error => {
            console.log(error)
         })
    }, [])

    return (
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer