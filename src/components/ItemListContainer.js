import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { Products } from '../mocks/Products';
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {

    const bringProducts = async () =>{
        const productsCollections = collection(db, "Products");
        const request = await getDocs(productsCollections)
        console.log(request)
    }

    
  

    const {id} = useParams();

    const [message, setMessage] = useState("Loading products...")
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const products = bringProducts();
        console.log(products)

        
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


    return <>
        <div className="greeting">
            {message}
        </div>
        <ItemList products={products}></ItemList>
    </>

}

export default ItemListContainer