import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({  stock,onAdd }) => {
  const initial=1;
  const [count, setCount] = useState(initial);
 
  const incrementar = () => {
    if(count<stock){
      setCount(count+1)
    }
  }
  const decrementar = () => {
    if(count>initial){
      setCount(count-1)
    }
  }
  
 
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <button onClick={() => decrementar()} className='btn btn_item_count'   >-</button>
        </div>
        <div className='col'>
          <h3 >{count}</h3>
        </div>
        <div className='col'>
          <button onClick={() => incrementar()} className='btn btn_item_count' >+</button>
        </div>
      </div>
      <div className='row' >
        <Link to='/cart'><button onClick={()=>onAdd(count)}>Agregar al carrito</button></Link>
        <p>{stock} unidades disponibles</p>
      </div>
    </div>
  );
};

export default ItemCount;
