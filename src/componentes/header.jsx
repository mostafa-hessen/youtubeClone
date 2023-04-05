import React from 'react'

function Header() {
  return (
    <header >
        <div className="container-fluid p-2 position-fixed top-0">
            <div className="row">
                <div className="col-6">
                    <div className="logo   ">
                        <img src="https://i.ibb.co/s9Qys2j/logo.png" width={40} alt="youtubeLogo" />
                    </div>
                </div>
                <div className="col-6">
                        <div className="search&photo">

                        </div>
                </div>

 
            </div>
        </div>
    </header>
  )
}

export default Header