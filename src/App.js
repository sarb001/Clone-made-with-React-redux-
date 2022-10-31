import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">
         <BrowserRouter >
         <Navbar />
          <Routes>
              <Route  path = "/" element = {<Home />} > </Route>

              <Route  path = "/cart" element = {<Cart />} > </Route>
          </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
