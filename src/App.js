import React from 'react';

import Navbar from './Components/Navbar/Navbar'
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/Not-Found/NotFound';
import { Route, Routes, createSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from './Context/Cart';
function App() {
  const navigate=useNavigate();
    const {cartItemCount}=useCart();
  const onSearch=(searchQuery)=>{
    navigate(`/?${createSearchParams({q:searchQuery})}`)
  }
  return (
    <div className="App">
      <Navbar onSearch={onSearch} cartCountItem={cartItemCount()}/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
