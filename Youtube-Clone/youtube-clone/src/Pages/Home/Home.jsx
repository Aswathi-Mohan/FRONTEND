import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default Home
