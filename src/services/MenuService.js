// services/MenuService.js
// Define all available categories with their endpoints
const CATEGORIES = {
  DESSERT: { 
    name: 'Dessert', 
    endpoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
  },
  PASTA: {
    name: 'Pasta', 
    endpoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
  },
  SEAFOOD: {
    name: 'Seafood', 
    endpoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  }
};

// Main function to get menus by category
export async function getMenus(categoryKey = 'SEAFOOD') {
  try {
    const category = CATEGORIES[categoryKey];
    if (!category) {
      throw new Error(`Categoría ${categoryKey} no encontrada`);
    }

    const res = await fetch(category.endpoint);

    if (!res.ok) {
      throw new Error(`Error en ${category.name} (${res.status})`);
    }

    const data = await res.json();
    
    if (!data.meals) {
      return [];
    }
    
    // Normalize data and add prices
    const normalizedMenus = data.meals.map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: category.name,
      thumb: meal.strMealThumb,
      price: Math.floor(Math.random() * 30) + 10 // Price between 10 and 40
    }));
    
    return normalizedMenus;
  } catch (error) {
    console.error('Error obteniendo menús:', error);
    throw error;
  }
}

// Function to get ALL categories at once
export async function getAllMenus() {
  try {
    const promises = Object.keys(CATEGORIES).map(categoryKey => 
      getMenus(categoryKey)
    );
    
    const results = await Promise.all(promises);
    const allMenus = results.flat();
    
    return allMenus;
  } catch (error) {
    console.error('Error obteniendo todos los menús:', error);
    throw error;
  }
}

export { CATEGORIES };