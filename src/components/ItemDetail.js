const ItemDetail = ({detail}) => {
    return <>
        <div className = "detailContainer">
            <img src={detail.img} className="imgProduct" />
            <h1 className = "detailTitle">{detail.name}</h1>
            <h2 className = "detailDescription">{detail.description}</h2>
            <div className="detailColorAndSize">
                <p>Color: {detail.color}</p>
                <p>Size: {detail.size}</p>
            </div>
            <h2 className ="detailPrice">{detail.price}</h2>
        </div>

    </>
}

export default ItemDetail;