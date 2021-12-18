import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Products } from '../mocks/Products';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [detail, setDetail] = useState([]);

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

    return <ItemDetail img={detail.img} name={detail.name} description={detail.description} color={detail.color} size={detail.size} price={detail.price}/>
}

export default ItemDetailContainer;