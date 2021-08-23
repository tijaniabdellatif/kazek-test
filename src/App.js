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
   <Router>
     <Navbar />
     <Sidebar />

     <Switch>

     <Route exact path="/home">
     <Home />
     </Route>

     <Route exact path="/about"><About /></Route>

     <Route exact path='/cart'>
     <Cart />
     </Route>

    <Route exact path="/checkout"><Checkout /></Route> 

    <Route exact path="/products"><Products /></Route> 


      <Route exact path="/products/:id" children={<SingleProduct />} />

     <Route exact path="*">
     <Error />
     </Route>

     </Switch>
    
   </Router>
     
   
    
   
  );
}

export default App;
