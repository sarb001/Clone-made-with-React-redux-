import React from 'react';

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
         {
           products.map(one => (
              <div className = "card-products"  style = {{backgroundColor:'burlywood',margin:'3% 5%'}} key = {one.id}>
                <div className="card-image" style = {{paddingTop:'9%'}}>
                    <span> <img src = {one.image} style = {{width:'10%'}} /> </span>
                </div>
                <div className="card-content">
                    <div className="card-price">
                        <span style = {{fontWeight:'700'}}> {one.price}  </span>
                    </div>
                    <div className="card-title">
                      <span style = {{fontSize:'18px',fontWeight:'400'}}> {one.title} </span>
                    </div>
                </div>
                <button onClick={() =>handleremove(one.id)}> Remove </button>
              </div>
           ))
         }
    </div>
  )
}
export default Cart
