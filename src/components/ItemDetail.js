import ItemCount from "./ItemCount";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';
import { context } from './CartContext';

const ItemDetail = ({detail}) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem }  = useContext(context)
    
   

    


    const addToCart = (q) => {
        addItem(detail,q)
        console.log("Agregaste el producto al carrito")
        setQuantity(q)
    }




    return <>
        <div className = "detailContainer">
            <img src={detail.img} className="imgProduct" />
            <h1 className = "detailTitle">{detail.name}</h1>
            <h2 className = "detailDescription">{detail.description}</h2>
            <div className="detailColorAndSize">
                <p>Color: {detail.color}</p>
                <p>Size: {detail.size}</p>
            </div>
            <h2 className ="detailPrice">{detail.price}</h2>
            { quantity === 0 ? <ItemCount stock={detail.stock} onAdd={addToCart} initial={detail.initial}></ItemCount>  : <Button variant="light" className="btn"> <Link to={'/cart'} className="detailLink">Finish purchase</Link> </Button>}
        </div>
    </>
}

export default ItemDetail;