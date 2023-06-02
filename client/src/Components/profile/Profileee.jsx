import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import "./profileee.css";
import { BiMessageDetail} from 'react-icons/bi';
import { RiAdminLine} from 'react-icons/ri';
import { BiLogOutCircle} from 'react-icons/bi';

import { ImWoman} from 'react-icons/im';
import { ImMan} from 'react-icons/im';
import { FaChild, FaUserCircle} from 'react-icons/fa';
import { FaBaby} from 'react-icons/fa';
import { logout } from '../../redux/actions/userActions';




const Profile = () => {

  const dispatch = useDispatch();

  const { users }=useSelector( state => state.userReducer );

  console.log(users)

  const handleSubmit =  (e) => {
    e.preventDefault();
      dispatch(logout());
     
      window.location.href='/signin';
  } ; 
      


  return (
    <div>

        <div className='div-log-name-logout'>
<div >
        <FaUserCircle className='log-userrr' />
        <h3  className='user-name'>{users.fullName}</h3>
        {/* <h3>{users.email}</h3> */}
        </div>

        <BiLogOutCircle onClick={handleSubmit} className='btn-logout' />
        
       {  users.userRole==="admin"? 

        (<Link className='lnk' to="/adminDashboard">
             <RiAdminLine className='btn-adm-dash'/>
        </Link> )
        : null

          }


        </div> 


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
          
          <Link to="/contactus"  >           
           <BiMessageDetail className='logo-contact' />
          </Link> 
        </div>

    </div>
  )
}

export default Profile