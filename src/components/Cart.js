import { useContext } from "react";
import { context } from './CartContext';

const Cart = () => {

    const {cart, removeItem, clearCart, getTotal, savePurchase} = useContext(context);

    return (
        <div className="cartContainer">
            <h1 className="cartTitle">Cart:</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((p,i) => {
                        return (
                            <div  className="cartRow" key={i}>
                                <img src={p.img} className="imgCart"/> 
                                <h2 className="cartProduct"> {p.quantity} X {p.name} - ${p.price} </h2>
                                <button className="btnRemove" onClick={() => removeItem(p.id, p.quantity)}> Remove </button>
                            </div>
                        )
                    })}
                    <h2 className="total"> Total: ${getTotal()} </h2>
                    <div className="cartBtns">
                       <button className="btnCart" onClick={() => clearCart()}> Clear Cart </button>
                       <button className="btnCart" onClick={()=> savePurchase()}> Buy </button>
                    </div>
                </div>
            ) : <p className="emptyCart">Your cart is empty</p>}
        </div>
    )

}

export default Cart ;