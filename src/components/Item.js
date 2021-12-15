import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div className = "cardProduct">
            <h2 className = "titleProduct">{product.name}</h2>
            <p className = "priceProduct">{product.price}</p>
            <Link to='/detail' className="detailLink">Details</Link>
        </div>
    )
}

export default Item