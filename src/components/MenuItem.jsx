import { useState } from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="menu-item">
      <div className="image-container">
        <img src={item.thumb} alt={item.name} />
      </div>
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price}.00</p>
        
        <div className="button-container">
          <button className="add-button" onClick={handleClick}>
            Añadir al pedido
          </button>
          
          {showMessage && (
            <div className="success-message">
              ¡Añadido al pedido!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;