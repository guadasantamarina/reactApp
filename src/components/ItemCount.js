import { useState } from "react";

const ItemCount = ({stock, onAdd, initial}) => {

    const [counter, setCount] = useState(1);
    const q = document.querySelector('.counter')
    


    const minus = () => {
        if (counter > initial) {
            setCount(counter -1);
        }
    }

    const add = () => {
        if (counter < stock) {
            setCount(counter +1)
        }
    }

    return (
        <div class="counterDiv">
            <p class="counter">{counter}</p>
            <div class="btnsCounter">
                <button type="button" class="btnCounter" onClick={minus}> - </button>
                <button type="button" class="btnCounter" onClick={add}> + </button>
            </div>
            <div>
                <button type="button" class="btnAddToCart" onClick={() => onAdd(q.innerText)}> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemCount;