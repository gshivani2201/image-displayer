import React from 'react'
import Search from './Search'
import Sort from './Sort'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor : '#635666'}}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" style={{alignItems: 'center', justifyContent: 'space-evenly'}} id="navbarSupportedContent">
                    <Sort />
                    <Search />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header