import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import store from './Slice/Store';

function App() {
  return (
    <div className = "App">
           {/* // Store value can be acceessible Globally  */}
      <Provider store  = {store}> 
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
          <Navbar />
            <Routes>
                <Route  path = "/" element = {<Home />} > </Route>

                <Route  path = "/cart" element = {<Cart />} > </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
