import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home" 
import Products from "./Products" 
import ProductDetails from './ProductDetails'

 class Navigation extends Component {
  render() {
    return (
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productDetails/:productId" element={<ProductDetails/>} />
     </Routes>
    )
  }
}
export default Navigation