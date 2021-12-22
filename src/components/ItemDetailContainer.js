import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Products } from '../mocks/Products';
import { useParams } from 'react-router';
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './CartContext';


const ItemDetailContainer = () => {

    const {id} = useParams();

    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                if (id) {
                    const filter = Products.filter((x) => x.id === Number(id));
                    res(filter)
                }else {
                    res(Products)
                }
            }, 2000)
        })
    
        promise
        .then((result) => {
            setDetail(result)
        })
        .catch (() => {
        })
    },[id])

    const addToCart = (quantity) => {
        console.log("Agregaste el producto al carrito")
        setQuantity(quantity)
        console.log(quantity)
    }

    const result = useContext(context);
    console.log(result)
   

    

    if (detail.length) {
        return <div>
            <ItemDetail detail = {detail[0]}/>
            <ItemCount stock={10} onAdd={addToCart} initial={1}></ItemCount>
            <Button variant="light" className="btn" >
                <Link to={'/cart'} className="detailLink">Finish purchase</Link>
            </Button>
        </div> 
    } else {
        return <p> Loading.. </p>
    }
}
    
export default ItemDetailContainer;