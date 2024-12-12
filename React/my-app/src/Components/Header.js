import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="AboutUs" class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
          <Link to="Users" class="nav-link">Users</Link>
        </li>
        <li class="nav-item">
          <Link to="todo" class="nav-link">Todo</Link>
        </li>
        <li class="nav-item">
          <Link to="advisegenerator" class="nav-link">Advise Generator</Link>
        </li>
        <li class="nav-item">
          <Link to="images" class="nav-link">Images</Link>
        </li>
        <li class="nav-item">
          <Link to="ContactUs" class="nav-link">Contact Us</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
