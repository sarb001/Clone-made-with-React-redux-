import React, { useEffect, useState } from 'react'
import  { useDispatch } from 'react-redux';
import {add} from '../Slice/CartSlice';

import './Products.css';

 function Products() 
 {
  const dispatch = useDispatch();
   const [products,setproducts] = useState([]);

   useEffect(() =>
   {
      const fetchprod = async() =>
      {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          setproducts(data);
      }
      fetchprod();
   },[])

   const handleadd = (item) =>
   {
       dispatch(add(item));
   }

  return (
    <div className = 'container' > 
        {products.map(item =>
          (
              <div className = "card-products"  key = {item.id}>
                   <div className="card-image" style = {{paddingTop:'9%',width:'100%',textAlign:'center',height:'20vh'}}>
                        <span > <img src = {item.image} style = {{width:'50%',borderRadius:'50%'}}  alt = "images"/> </span>
                   </div>
                   <div className="card-content" style = {{height:'13vh'}}>
                       <div className="card-price">
                            <span style = {{fontWeight:'700'}}> Rs.-  {item.price}  </span>
                       </div>
                       <div className="card-title">
                         <span style = {{fontSize:'12px',fontWeight:'600'}}> {item.title} </span>
                       </div>
                   </div>
                   <div style = {{textAlign:'center',padding:'6% 0%'}}>
                    <button  id  = "cart-btn"  onClick={() => handleadd(item)}>  Add to Cart  </button>
                   </div>
              </div>
          ))
        }
         
    </div>
  )
}
export default Products