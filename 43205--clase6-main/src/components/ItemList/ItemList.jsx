import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({productos}) => { //Recibo mi array de productos de "asynmock.js" por medio de prop
  return (
    <div className="contenedorProductos"> 
        {productos.map(prod => <Item key={prod.id} {...prod} /> )} {/* Transformo mis productos por medio de map, */}
    </div>                                                            /* en cada vuelta en cada iteracion del array, voy a generar un nuevo componente item con la info de nombre precio id y uso el operador spread */    
  )
}

export default ItemList