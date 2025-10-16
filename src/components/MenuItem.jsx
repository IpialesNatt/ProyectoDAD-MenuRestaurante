function MenuItem({item}){
    //aqui declaramos las constantes
  
    return (
    <>
    <div className="manu-container">
        <div className = "image-container">
        <img
          src={item.thumb}
          alt={item.name}
        />
        </div>

    </div>
    <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <span className="item-category">{item.category}</span>
        <div className="item-price">${item.price}.00</div>
        <button className="btn-add-to-cart">
          Añadir al Pedido
        </button>
        
    </div>
    </>
)

}


export default MenuItem