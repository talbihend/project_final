import React from 'react'
import { Link } from 'react-router-dom';
import "./profileee.css";
import { BiMessageDetail} from 'react-icons/bi';
import { ImWoman} from 'react-icons/im';
import { ImMan} from 'react-icons/im';
import { FaChild} from 'react-icons/fa';
import { FaBaby} from 'react-icons/fa';



const Profile = () => {

  // na3melou condition ngollou itha kan ma lgitch token a3melli redirect lel login
  return (
    <div className='grand-div'>
       
     
       
        <div>
        <h1 className='title-choose' >choose your clothes</h1>

        <div className='div-types'>


        <Link className='lnk' to="/women">
          {/* <h1 className='titles-types'>women</h1> */}
          <ImWoman className='logo-type' />
        </Link> 


        <Link className='lnk' to="/man">
          {/* <h1 className='titles-types'>man</h1> */}
          <ImMan className='logo-type' />
        </Link>  


        <Link className='lnk' to="/child">
          {/* <h1 className='titles-types'>child</h1> */}
          <FaChild className='logo-type' />
        </Link> 


        <Link className='lnk' to="/baby">
          {/* <h1 className='titles-types'>baby</h1> */}
          <FaBaby className='logo-type' />
        </Link> 

        </div>
        </div>

        <div>
          
          <Link to="/contactus">           
           <BiMessageDetail className='logo-contact' />
          </Link> 
        </div>

    </div>
  )
}

export default Profile