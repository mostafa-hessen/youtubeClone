import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchFromAPI } from '../global/Api';

function Header() {
   const navigate= useNavigate()
    const [serchedValue, setserchedValue] = useState('')

    // useEffect(() => {
    //     // setVideos(null);
    //     fetchFromAPI(`search?part=snippet,id&q=${serchedValue}`)
    //       .then((data) => console.log(data))
    //     // console.log(serchedValue);
    //     }, [serchedValue]);
    

       const submit =(e)=> {
        // searchedpage
        e.preventDefault()
        navigate(`searchedpage/${serchedValue}`)
       }


  return (
    <header className=' position-fixed top-0 left-0 w-100'  style={{zIndex:'999',background:"#202020" }} >
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4 col-md-6">
                    <Link className="logo   "  to={'/'}>
                        <img src="https://i.ibb.co/s9Qys2j/logo.png" width={40} alt="youtubeLogo" />
                    </Link>
                </div>
                <div className="col-8 col-md-6">
                <div className="search__container">
  <form onSubmit={submit}>

  <input className="search__input" type="text" placeholder="Search"onChange={(e)=>setserchedValue(e.target.value)}/>
  </form>
  </div>
                </div>

 
            </div>
        </div>
    </header>
  )
}

export default Header