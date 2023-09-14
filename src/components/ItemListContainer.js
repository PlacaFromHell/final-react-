import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '.././asyncMock'
import ItemList from './Itemlist.js'
import Category from './Category.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams ()

    useEffect (() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
         .then (response => {
            setProducts(response)
         })
         .catch(error => {
            console.log(error)
         })
    }, [categoryId])


    return (
        <div className='main'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer