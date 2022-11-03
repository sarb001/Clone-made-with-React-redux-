import React from 'react';
import './Cart.css';


import { useSelector , useDispatch} from 'react-redux';    // useselector is imported 
import { remove } from '../Slice/CartSlice';

 function Cart() 
 {
  const products = useSelector(state => state.cart);    // put  whole cart state in variable 

  const dispatch = useDispatch();
  const handleremove = (prodid) =>
  {
    dispatch(remove(prodid));
  }
  return (
    <div> 

         
         {  products?.length === '' ?  
         <div style  = {{fontSize:'30px',fontWeight:'500',padding:'5% 5%'}}>  Cart is Empty .....
          </div> : (

           products.map(one => (
              <div className = "cart-products"   key = {one.id}>

                <div className="card-first">
                    <div className  = "card-image" style = {{paddingTop:'9%'}}>
                          <span> <img src = {one.image} style = {{width:'20%'}}  alt = "selected-img"/> </span>
                      </div>
                      <div className = "card-content">
                          <div className = "card-price">
                              <span style = {{fontWeight:'700'}}> Rs.-  {one.price}  </span>
                          </div>
                          <div className="card-title">
                            <span style = {{fontSize:'22px',fontWeight:'400'}}> {one.title} </span>
                          </div>
                      </div>
                </div>
                <div className="card-second">
                   <button id = "cart-remove-btn" onClick={() =>handleremove(one.id)}> Remove </button>
                </div>
              </div>)
           ))
         }
    </div>
  )
}
export default Cart
