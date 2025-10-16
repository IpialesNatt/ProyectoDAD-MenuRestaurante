import MenuItem from "./MenuItem"
//para renderizar una lista de componentes MenuItem
function MenuList ({items}){
//aqui declaramos las constantes 

//recorremos un array de items en javaScript
//por cada item devuleve un componente de MenuItem
    return(
        <>
        <div className="menu-list-container">
        {items.map(item =>(
            <MenuItem key={item.id} item={item}/>
        )
        )}
        </div>
        </>
    )

}
export default MenuList