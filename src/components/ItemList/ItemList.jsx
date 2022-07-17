import React from 'react'
import Item from  "../Item/Item"

export const ItemList = ({ listadoProductos }) => {

  return (
    <div className='container'>
      <div className="row justify-content-evely">
        {listadoProductos.map((unProducto) => 
        <Item 
          name={unProducto.name}
          description={unProducto.description}
          category={unProducto.category}
          img={unProducto.img}
          price={unProducto.price} 
          id={unProducto.id} 
          />)}
       </div>
    </div>
        

  )
}

export default ItemList;