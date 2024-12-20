import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand px-3" href="#">e-Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link" href="#">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="products" class="nav-link" href="#">Products</Link>
      </li>
      
      
    </ul>
  
  </div>
</nav>
    </div>
  )
}
export default Header