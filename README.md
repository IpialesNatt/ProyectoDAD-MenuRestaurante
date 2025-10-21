# Restaurante Bienvenido - Menú Digital

Una aplicación web moderna desarrollada en React que muestra un menú interactivo de restaurante consumiendo datos en tiempo real de TheMealDB API.

## Características Principales

- **Menú interactivo** con filtros por categoría (Seafood, Pasta, Dessert)
- **Diseño 100% responsive** para todos los dispositivos
- **Consumo de API externa** en tiempo real
- **Interfaz intuitiva** con feedback visual inmediato
- **Componentes reutilizables** y modulares

##  Tecnologías Utilizadas

- **React 18+** - Framework principal con Hooks
- **JavaScript ES6+** - Lógica de aplicación
- **CSS3 + Flexbox** - Estilos y diseño responsive
- **Fetch API** - Consumo de APIs REST
- **TheMealDB API** - Fuente de datos de platos

## 📁 Estructura del Proyecto
src/
- **components/** 
    Header/ # Encabezado con nombre y slogan
    MenuList/ # Contenedor de tarjetas de platos
    MenuItem/ # Tarjeta individual de cada plato
    CategoryButtons/ # Filtros por categoría
- **services/** 
    MenuService.js # Lógica de consumo de API
- **App.jsx** # Componente principal
- **App.css** # Estilos globales


## 🎯 Funcionalidades Implementadas

### Gestión de Estado
```javascript
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
Consumo de API con Fetch
javascript
export async function getMenus(categoryKey) {
  const res = await fetch(category.endpoint);
  const data = await res.json();
  
  return data.meals.map(meal => ({
    id: meal.idMeal,
    name: meal.strMeal,
    category: category.name,
    thumb: meal.strMealThumb,
    price: Math.floor(Math.random() * 30) + 10
  }));
}

🌐 TheMealDB API
Endpoints utilizados:

Seafood: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

Pasta: https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta

Dessert: https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert

Características:

API gratuita sin autenticación requerida

Datos en tiempo real de platos internacionales

Imágenes de alta calidad incluidas

Formato JSON fácil de procesar

 Diseño y UX
Principios de Usabilidad Aplicados
Jerarquía Visual: Imagen → Nombre → Categoría → Precio

Feedback Inmediato: Estados de carga y mensajes de error

Navegación Intuitiva: Filtros claros y accesibles

Diseño Responsive: Adaptable a móviles, tablets y desktop


## Vista previa del proyecto

<p align="center">
  <img src="https://github.com/IpialesNatt/ProyectoDAD-MenuRestaurante/raw/master/src/images/img1.png" width="300" />
  <img src="https://github.com/IpialesNatt/ProyectoDAD-MenuRestaurante/raw/master/src/images/img2.png" width="300" />
  <img src="https://github.com/IpialesNatt/ProyectoDAD-MenuRestaurante/raw/master/src/images/img3.png" width="300" />
</p>


Esquema de Colores
Primario: #001f37 (Azul oscuro)

Secundario: #80375e (Rosa/vino)

Fondo: #f1f1e6 (Crema suave)

📱 Responsive Design
La aplicación utiliza Flexbox para un layout flexible:

css
.menu-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
 Instalación y Uso
bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build