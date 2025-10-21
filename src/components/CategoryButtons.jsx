
import { CATEGORIES } from "../services/MenuService";
import "./CategoryButtons.css"; 

function CategoryButtons({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-buttons">
      <h3>Categorías</h3>
      <button
        className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
        onClick={() => onCategoryChange('all')}
      >
        Todas las categorías
      </button>
      
      {Object.keys(CATEGORIES).map(categoryKey => (
        <button
          key={categoryKey}
          className={`category-btn ${selectedCategory === categoryKey ? 'active' : ''}`}
          onClick={() => onCategoryChange(categoryKey)}
        >
          {CATEGORIES[categoryKey].name}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;