import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import "./signup.css";
import { registerUser } from '../../redux/actions/userActions';


   

const SignUp = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const {loading, users}=useSelector( state => state.userReducer );//fi lcas hethi ne5dem bel root reducer mch bel reducer l3adi , wheka 3leh lazemni na3mel specification lel reducer li n7eb njiba men rootreducer , na3tih state.reducer bch ya5eth state li fi const init li f lcomponent reducer
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
      const newUser = { fullName, email, password }
      dispatch(registerUser(newUser)) //dispatchina l'action, w 3malna register te3 user , t3abet state
  };

  return (
    <div>
      <form action="" class="form">

{
        loading ? <h1>loading...</h1>  
        
        : users ?  <Navigate  to="/signin"/> 
        
        :
      
      <>

<h1 class="title-sign-up">SIGNUP</h1>

<div class="inputContainer">
<label for="" class="label">Full Name</label>
<br/>
<input  type="text" class="input" placeholder="full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
</div>

<div class="inputContainer">
<label for="" class="label">Email</label>
<br/>
<input  type="text" class="input" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div class="inputContainer">
<label for="" class="label">Password</label>
<br/>
<input  type="text" class="input" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button  onClick={handleSubmit} className="Btn-sign-up">Sign up</button>

</>
     }
     </form>
    <div className='have-acc'>
      <p>you already have an account</p>
    <Link to="/signin">
    <p className='parag'>SignIn</p>
    </Link>
    </div>
    
    </div>
  )
}

export default SignUp