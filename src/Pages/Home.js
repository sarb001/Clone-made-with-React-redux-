import React from 'react';
import Products from '../Components/Products';

import './Home.css';
export default function Home() {
  return (
    <div className='home-main'> 
         <div className = 'heading'> 
            <span>  Welcome to the Redux store   </span>
         </div>
         <section>
            <Products />
         </section>
    </div>
  )
}
