import React from 'react'

import {Link} from 'react-router-dom'
import  {useSelector} from 'react-redux';

function Navbar() {

  const items = useSelector((state) => state.cart);

  return (
    <div className='navbar-part' style = {{display:'flex',flexDirection:'row',padding:'1%',backgroundColor:'greenyellow'}}>
         <span className='logo'>  REDUX Store  </span>  
         <div className='first-part-nav' style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
              <span> <Link to = "/"> Home </Link> </span>
              <span>  <Link to = "/cart"> Cart  </Link>  </span>
              <span>  Cart items : {items.length} </span>
         </div>  
    </div>
  )
}
export default  Navbar