import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});

    const LADetails = {
        id: 1,
        name: "L.A",
        img: "../../public/LA.jpeg",
        description: "Vintage light blue cap, 'L.A' printed",
        color: "Light blue",
        size: "Regular",
        onsale: false,
        price: 5,
        stock: 10,
    }

    

    useEffect(() => {

        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                res(LADetails)
                rej()   
            }, 2000)
        })

        promise
        .then((result) => {
            console.log(result)
            setDetail(result)

        })
        .catch (() => {
        })
    },[])

    return <ItemDetail img={detail.img} name={detail.name} description={detail.description} color={detail.color} size={detail.size} price={detail.price}/>
}

export default ItemDetailContainer;