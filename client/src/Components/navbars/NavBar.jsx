import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>

        <div className='div-nav'>
           <h1 className='title-nav'>Hend Brand</h1>
            <Link className='Lnk' to="/">
                <h2 className='title-home'>Home</h2>
            </Link>
            <Link className='Lnk'  to="/signup">
                <h2 className='title-connect'>Connect</h2>
            </Link>
            
        </div>
    </div>
  )
}

export default NavBar