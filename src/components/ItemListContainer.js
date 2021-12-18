import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { Products } from '../mocks/Products';
const ItemListContainer = () =>{

    const {id} = useParams();



    const [message, setMessage] = useState("Loading products...")
    const [products, setProducts] = useState([])
    
   


    useEffect(() => {

        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                if (id) {
                    const filter = Products.filter((x)=> x.category === id)
                    res(filter)
                }else {
                    res(Products)
                }
            }, 2000)
        })
    
        promise
        .then((result) => {
            setMessage("")
            setProducts(result)

        })
        .catch (() => {
            setMessage("Failed to load")
        })
    },[id])

    
    const addToCart = () => {
        console.log("Agregaste el producto al carrito");
    }

    return <>
        <div className="greeting">
            {message}
        </div>
        <ItemList products={products}></ItemList>
        <ItemCount stock={10} onAdd={addToCart} initial={1}></ItemCount>
    </>

}

export default ItemListContainer