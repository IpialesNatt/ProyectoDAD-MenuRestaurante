
import MenuItem from "./MenuItem";
import './MenuList.css';

function MenuList({ items }) {
  if (items.length === 0) {
    return (
      <div className="no-items">
        No hay platos en esta categoría.
      </div>
    );
  }

  return (
    <div className="menu-list">
      {items.map(item => (
        <MenuItem 
          key={item.id}
          item={item} // Pasamos el objeto completo como prop
        />
      ))}
    </div>
  );
}

export default MenuList;