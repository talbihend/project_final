import React from 'react'
import { Link } from 'react-router-dom';
import "./profileee.css";


const Profile = () => {
  return (
    <div className='grand-div'>
       
     
        <div>
          <h1>Welcome to profile</h1>
          <Link to="/contactus">
           <button>contact us</button>
          </Link> 
        </div>
        <div className='div-types'>
        <Link to="/women">
          <h1 className='titles-types'>women</h1>
        </Link> 
        <Link to="/man">
          <h1 className='titles-types'>man</h1>
        </Link> 
        <Link to="/child">
          <h1 className='titles-types'>child</h1>
        </Link> 
        <Link to="/baby">
          <h1 className='titles-types'>baby</h1>
        </Link> 

        </div>

    </div>
  )
}

export default Profile