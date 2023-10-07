import { useState, useEffect } from "react"
import ItemList from "./Itemlist"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseconfig"




const ItemListContainer = ({titulo}) => {
    const [productos, setproductos] = useState ([])

    const { categoryId } = useParams ()

    useEffect(() => {

      const productosRef = collection(db, "productos");
      const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setproductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoryId])
    
    
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer