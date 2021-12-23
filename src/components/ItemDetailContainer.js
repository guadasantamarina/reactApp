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
   
    // const context = useContext(context);
     
    if (detail.length) {
        return <div>
            <ItemDetail detail = {detail[0]}/>
        </div> 
    } else {
        return <p> Loading.. </p>
    }
}
    
export default ItemDetailContainer;