import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
