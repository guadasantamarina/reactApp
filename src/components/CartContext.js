import { createContext, useState } from "react";

export const context = createContext()
const {Provider} = context



const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item,quantity) => {
        if (isInCart(item.id) === true){
            console.log("Este item ya existe")
        }else{
            item.quantity = quantity;
            setCart([...cart, item]);
        }
        
    }
    console.log(cart)


    const isInCart = (id) => {
        console.log(id)
        const filter = cart.filter((x)=> x.id === id)
        console.log(filter)
        console.log(filter.length)
        if (filter.lenght === 1){
            console.log("Item repetido")
            return true
        }else{
            console.log("Item a agregar")
            return false
        }
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