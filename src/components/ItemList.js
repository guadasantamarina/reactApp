import  Item  from './Item'
const ItemList = ({products}) => {
    return (
        <div>
            <ul>
                {products.map((x) => (
                    <Item product = {x} />
                ))}
            </ul>  
        </div>
    );
};
 

export default ItemList 