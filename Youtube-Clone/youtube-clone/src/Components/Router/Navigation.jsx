import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Video from '../../Pages/Video/Video'

const Navigation = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default Navigation
