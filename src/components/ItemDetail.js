const ItemDetail = ({name, description, color, size, price}) => {
    return <>
        <div className = "detailContainer">
            <h1 className = "detailTitle">{name}</h1>
            <h2 className = "detailDescription">{description}</h2>
            <div className="detailColorAndSize">
                <p>Color: {color}</p>
                <p>Size: {size}</p>
            </div>
            <h2 className ="detailPrice">{price}</h2>
        </div>
    </>
}

export default ItemDetail;