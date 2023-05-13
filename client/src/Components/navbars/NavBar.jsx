import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>

        <div className='div-nav'>
           <h1 className='title-nav'>Hend Shop</h1>
            <Link to="/">
                <h2 className='title-home'>Home</h2>
            </Link>
            <Link to="/signup">
                <h2 className='title-connect'>Connect</h2>
            </Link>
            
        </div>
    </div>
  )
}

export default NavBar