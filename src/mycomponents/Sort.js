import React from 'react'

function Sort() {

  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{color: '#D3EBCD'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort by</a>
          <ul className="dropdown-menu" style={{backgroundColor: '#AEDBCE', color: '#635666'}} aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Ascending order</a></li>
              <li><a className="dropdown-item" href="#">Descending order</a></li>
          </ul>
      </li>
    </ul>
  )
}

export default Sort