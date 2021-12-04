import ItemCount from './ItemCount';

const ItemListContainer = (prop) =>{

    const addToCart = () => {
        console.log("Agregaste el producto al carrito");
    }

    return <>
        <div className="greeting">
            {prop.greeting}
        </div>
        <ItemCount stock={10} onAdd={addToCart} initial={1}></ItemCount>
    </>

}

export default ItemListContainer