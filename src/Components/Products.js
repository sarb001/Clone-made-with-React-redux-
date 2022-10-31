import React, { useEffect, useState } from 'react'

 function Products() 
 {
   const [products,setproducts] = useState([]);

   useEffect(() =>
   {
      const fetchprod = async() =>
      {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          console.log(data)
;         setproducts(data);
      }
      fetchprod();
   },[])

  return (
    <div className = 'container' style = {{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',padding:'2%'}}> 
        {products.map(item =>
          (
              <div className = "card-products"  style = {{backgroundColor:'burlywood',margin:'3% 5%'}}>
                   <div className="card-image" style = {{paddingTop:'9%'}}>
                        <span> <img src = {item.image} style = {{width:'50%'}} /> </span>
                   </div>
                   <div className="card-content">
                       <div className="card-price">
                            <span style = {{fontWeight:'700'}}> {item.price}  </span>
                       </div>
                       <div className="card-title">
                         <span style = {{fontSize:'18px',fontWeight:'400'}}> {item.title} </span>
                       </div>
                   </div>
                   <button>  Add to Cart  </button>
              </div>
          ))
        }
         
    </div>
  )
}
export default Products