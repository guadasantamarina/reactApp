import  Item  from './Item'
const ItemList = ({products}) => {
    return (
        <div>
            <ul>
                {products.map((x) => (
                    <Item product = {x} id = {x.id}/>
                ))}
            </ul>  
        </div>
    );
};
 

export default ItemList 