import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getProfile, loginUser } from '../../redux/actions/userActions';
import "./signin.css";




const SignIn = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading }=useSelector( state => state.userReducer );

  // const user = users.findOne({ email });

  // const navigatee = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
      const newUser = {  email, password }
      dispatch(loginUser(newUser))
      dispatch(getProfile())
      // navigatee("/profile");
      // (<Navigate  to="/profile"/>)
  }; 


  return (
    <div className='div-sign-in'>
    <form id='form'>
  
    {
        loading ? <h1>loading...</h1> 

        : localStorage.getItem('token') ? (<Navigate  to="/profile"/>)
        // : user ? <Navigate  to="/profile"/>

        : 

      <>

<h1 class="title-sign-in">SIGN IN</h1>
 
<div class="inputContainer">
<label  className="label">Email</label>
<br/>
<input  type="text" class="input" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>


<div class="inputContainer">
<label  className="label">Password</label>
<br/>
<input  type="text" class="input" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button onClick={handleSubmit} className="Btn-sign-up"  >Sign In</button>
 </>
     } 

</form>
    

    {/* <Link to="/profile">
      <button>Sign in to your profile</button>    
    </Link> */}
    <div className='have-acc'>
      <p>you haven't an account</p>
    <Link to="/signup">
      <p className='parag'>Back SignUp</p>
    </Link>
    </div>
    </div>

  )
}

export default SignIn