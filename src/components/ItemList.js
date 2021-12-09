// import Item from './Item.js'
const ItemList = ({products}) => {
    return (
        <div>
            {products.map((e,i) =>{
                return <>
                    <div class="cardProduct">
                        <img src={e.img} alt="" />
                        <h3 class="titleProduct">{e.name}</h3>
                        <h4 class="priceProduct">{e.price}</h4>
                    </div>
                </>
            })}
        </div>
    )
}
 

export default ItemList 