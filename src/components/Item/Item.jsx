import React from 'react'
import {Link} from "react-router-dom"





export const Item = ({id,name,price,img,category,description }) => {

    return (
        <Link to={`/item/${id}`}>
            <main class="page-content">
              <div class="card">
                <div class="content">
                  <img src={img}  alt={name}/>
                  <h2 class="title">Nombre: {name}</h2>
                  <p class="title">Precio: $ {price}</p>

                </div>
              </div>
            </main>
         </Link>
    )
}
export default Item;