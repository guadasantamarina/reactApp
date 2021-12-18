import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div className = "cardProduct">
            <img src={product.img} className = "imgProduct"/>
            <h2 className = "titleProduct">{product.name}</h2>
            <p className = "priceProduct">{product.price}</p>
            <Link to={`item/${product.id}`} className="detailLink">Details</Link>
        </div>
    )
}

export default Item