import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Item = ({product}) => {
    return (
        <div className = "cardProduct">
            <img src={product.img} className = "imgProduct"/>
            <h2 className = "titleProduct">{product.name}</h2>
            <Button variant="light" className="btn" >
                <Link to={`/item/${product.id}`} className="detailLink">Details</Link>
            </Button>
        </div>
    )
}

export default Item