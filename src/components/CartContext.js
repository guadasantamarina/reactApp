import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const context = createContext()
const {Provider} = context

const CartContext = ({children}) => {



    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState (0)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState("")

    const savePurchase = async() => {
        setLoading(true)
        const order = {
            products: [{id:1, title:"x"}],
            user:{
                name: "xxx",
                mail: "xxxxxx",
                phone: "xxxxxxxx",
            },
            total:100,
        }
        const ordersCollectios = collection(db, "orders")
        const ref = await addDoc(ordersCollectios,order)
        const id = ref.id
        setLoading(false)
        setId(id)

    }

    const addItem = (item,quantity) => {
        if (isInCart(item.id)){
            const filter = cart.filter((x)=> x.id === item.id)
            const filter2 = cart.filter((x)=> x.id !== item.id)
            filter[0].quantity = filter[0].quantity + quantity;
            setCart([...filter2, ...filter])  
        }else{
            console.log("Agregando Item")
            item.quantity = quantity;
            setCart([...cart, item]);
        }    
    }

    const removeItem = (id, q) => {
        if(isInCart(id)){
            const itemRemove = cart.filter((product) => product.id !== id);
            setCart(itemRemove);
            setQuantity(quantity - q );
        }
    }

    const isInCart = (id) => {
        const esRepetido = cart.some((x)=> x.id === id)
        return esRepetido   
    }

    const clearCart = () => {
        setCart([]);
        setQuantity(0);
    }

   const finishPurchase = (products) => {
       setCart(products)
   }

    const getTotal = () => {
        let total = 0;
        cart.forEach(e => {
            let subTotal = e.quantity * e.price;
            total = total + subTotal;
        });
        return total;
    }

    const getQuantity = () => {
        let q = 0
        cart.forEach(item => {
            q += item.quantity
        })
        return q
    }

    const getStock = (id) => {
        const i = cart.findIndex((item) => item.id === id);
        const stock = cart[i].stock;                                                                                                                                                                                                               
        return stock;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

    const cartCtx = {cart,
        addItem,
        finishPurchase,
        clearCart,
        getTotal,
        removeItem,
        getQuantity,
        getStock,
        savePurchase
    }


    return <Provider value = {cartCtx}>
            {children}
    </Provider>
}

export default CartContext