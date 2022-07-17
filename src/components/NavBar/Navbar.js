import React from 'react';
import CartWidget from '../CartWidjet/CartWidget';
import '../NavBar/Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {

    return (
        <nav>
        <ul>
          <li><Link className='navbar' to='/'>Inicio</Link></li>
          <li><Link to='/category/Equipos'>Equipos</Link></li>
          <li><Link to='category/Perifericos'>Perifericos</Link></li>
          <li><a className="navbar" href="#">Contectenos</a></li>
        </ul>
        <CartWidget />
      </nav> 
        
    );
}

export default Navbar;