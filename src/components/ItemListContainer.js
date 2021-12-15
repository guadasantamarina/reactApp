import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';

const ItemListContainer = () =>{

    const {id} = useParams();
    console.log(id)



    const [message, setMessage] = useState("Loading products...")
    const [products, setProducts] = useState([])
    
    const homeProducts = [
        {name:'L.A', id:1, price:5, img:'../../public/LA.jpeg', category:'cap'},
        {name:'Happy Face', id:2, price:5, img:'../../public/happyFace.jpeg', category:'cap'},
        {name:'Vans', id:3, price:8, img:'../../public/vans.jpeg', category: 'cap'},
        {name: 'F*ck You', id: 4, price: 10, category: 'winter'},
        {name: 'Saturn', id: 5, price: 10, category: 'winter'},
        {name: 'Pacsun', id: 6, price: 10, category: 'winter'}
    ]


    useEffect(() => {

        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    res(homeProducts)
                }else {
                    rej()
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
    },[])

    
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