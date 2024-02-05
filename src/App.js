import React from 'react'
import Navbar from './components/Navbar.jsx';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard.jsx';
import CartPage from './components/cartPage.jsx';


const App = () => {

  
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ProductCard/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
