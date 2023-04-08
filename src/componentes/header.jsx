import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className=' position-fixed top-0 left-0 w-100'  style={{zIndex:'999',background:"#202020" }} >
        <div className="container-fluid ">
            <div className="row">
                <div className="col-6">
                    <Link className="logo   "  to={'/'}>
                        <img src="https://i.ibb.co/s9Qys2j/logo.png" width={40} alt="youtubeLogo" />
                    </Link>
                </div>
                <div className="col-6">
                <div class="search__container">
  
    <input class="search__input" type="text" placeholder="Search"/>
</div>
                </div>

 
            </div>
        </div>
    </header>
  )
}

export default Header