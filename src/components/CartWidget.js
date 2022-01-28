import { context } from "./CartContext";
import { useContext } from "react";
import Badge from 'react-bootstrap/Badge'
import { NavLink } from "react-router-dom";


const CartWidget = () => {
    const {getQuantity} = useContext(context);

    return (
        <div>
            <NavLink to="/cart" exact>
              <span className="material-icons cartIcon">shopping_cart</span>
            </NavLink>
            {getQuantity() === 0 ? null :
                <Badge className="badgeCart" bg="danger">
                    {getQuantity()}
                </Badge>
            }
        </div>
    )
}

export default CartWidget;