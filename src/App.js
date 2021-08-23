import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 

import { Navbar,Sidebar } from './components';


import {
  Home,
  About,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  Error

} from './pages';


function App() {
  return (
   <div>
     <Navbar />
     <Sidebar />
     <Home />
     <About />
     <Cart />
     <Checkout />
     <Products />
     <SingleProduct />
     <Error />
   </div>
  );
}

export default App;
