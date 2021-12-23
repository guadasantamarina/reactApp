import { createContext, useState } from "react";

export const context = createContext()
const {Provider} = context



const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item,quantity) => {
        if (isInCart(item.id)){
            console.log("Este item ya existe")
        }else{
            console.log("Agregando Item")
            item.quantity = quantity;
            setCart([...cart, item]);
        }
        
    }
    console.log(cart)


    const isInCart = (id) => {
        console.log(id)
        const some = cart.some((x)=> x.id === id)
        console.log(some)
        
    }




   const finishPurchase = (products) => {
       setCart(products)
   }


   const cartCtx = {cart,
        addItem,
        finishPurchase,
    }


    return <Provider value = {cartCtx}>
            {children}
    </Provider>
}

export default CartContext