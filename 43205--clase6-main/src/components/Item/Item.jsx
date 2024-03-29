import React from 'react'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className="imgProducto"src={img} alt={nombre} />
        <h3>Nombre:{nombre} </h3>
        <p>Precio:{precio}</p>
        <p>id:{id}</p>
        <button className='btnProducto'>Ver detalles</button>
    </div>
  )
}

export default Item