import { createContext, useState } from "react";

export const context = createContext()
const {Provider} = context



const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {

    }

   const cartCtx = {cart,
        addToCart}
    return <Provider value = {cartCtx}>
            {children}
    </Provider>
}

export default CartContext