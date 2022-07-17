import "./ItemDetail.css"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({name,img,description,price,stock,id}) {

    const onAdd = (count) => {
       alert (`Se agregaron al carrito ${count} productos`)
    }
    
    return (
            <div className="container1">
            <div className="card1 cardStyle1">
                <div className="card-body1">
                    <img src={img} alt={name} />
                    <h5 className="card-title1">Nombre: {name}</h5>
                    <p className='precio1'>Descripción: {description}</p>
                    <p className='precio1'>Precio: $ {price}</p>
                    <p className='precio1'>Cantidad disponible: {stock}</p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>
            
        </div>     
    )
}

export default ItemDetail;



