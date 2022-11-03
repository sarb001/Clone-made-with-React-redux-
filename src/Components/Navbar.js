import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom'
import  {useSelector} from 'react-redux';

function Navbar() {

  const items = useSelector((state) => state.cart);

  return (
    <div className='navbar-part'>
         <span className='logo'>  REDUX Store  </span>  
         <div className='first-part-nav' >
              <span>  <Link to = "/"> Home </Link> </span>
              <span style = {{textAlign:'end'}}>  <Link to = "/cart"> Cart  : {items.length} </Link>  </span>
           
         </div>  
    </div>
  )
}
export default  Navbar