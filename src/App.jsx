// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import MenuList from "./components/MenuList";
import Header from "./components/Header";
import CategoryButtons from "./components/CategoryButtons";
import { getMenus, getAllMenus } from "./services/MenuService";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("SEAFOOD"); // Por defecto Seafood como pide el ejercicio

  // Effect que se ejecuta cuando cambia la categoría seleccionada
  useEffect(() => {
    const loadCategory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let menus;

        if (selectedCategory === "all") {
          menus = await getAllMenus();
        } else {
          menus = await getMenus(selectedCategory);
        }

        setItems(menus);
      } catch (err) {
        setError(err.message);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header name="Restaurante Bienvenido" slogan="De la pradera a tu plato" />

      <div className="main-content">
        <CategoryButtons
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="menu-section">
          {isLoading && <div className="loading">Cargando menú...</div>}

          {error && <div className="error">Error: {error}</div>}

          {!isLoading && !error && <MenuList items={items} />}
        </div>
      </div>
      <Footer name="Si no quedas satisfecho" slogan="puedes repetir, la comida no se acaba"/>
    </div>
  );
}

export default App;
