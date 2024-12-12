import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar}) => {
  console.log("sidebar is", sidebar)
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className='sidelink'> 
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className='sidelink'> 
          <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className='sidelink'> 
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className='sidelink'> 
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className='sidelink'> 
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className='sidelink'> 
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className='sidelink'> 
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className='sidelink'> 
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className='sidelink'> 
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr/>
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className="sidelink">
          <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="sidelink">
          <img src={simon} alt="" /><p>MrBeast</p>
        </div>
        <div className="sidelink">
          <img src={tom} alt="" /><p>Jestin</p>
        </div>
        <div className="sidelink">
          <img src={megan} alt="" /><p>5-Minute Crafts</p>
        </div>
        <div className="sidelink">
          <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
