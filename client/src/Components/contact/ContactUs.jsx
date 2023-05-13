import React from 'react'
import "./Contacttt.css";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
    <div className='div-contact'>

        <div>
        <h3>customer details</h3>
        <label class="label-form">Customer's name</label>
        <br/>
        <input  type="text" class="input-customer" placeholder="name"/>
        <br/>
        <label>Phone number </label>
        <br/>
        <input  type="text" class="input-customer" placeholder="phone"/>
        <br/>
        <label> Adress</label>
        <br/>
        <input  type="text" class="input-customer" placeholder="adress"/>
        </div>

        <div>
          <h3>Features of clothes</h3>
          <br/>
        <label>reference</label>
        <br/>
        <input  type="text" class="input-clothes" placeholder="reference"/>
        <br/>
        <label>Color</label>
        <br/>
        <input  type="text" class="input-clothes" placeholder="color"/>
        <br/>
        <label>Size</label>
        <br/>
        <input  type="text" class="input-clothes" placeholder="size"/>
        <br/>
        <label>number of piece</label>
        <br/>
        <input  type="text" class="input-clothes" placeholder="piece"/>
        </div>
        </div>

        <button>Send</button>
        
        <Link to="/profile">
      <button>Back to your profile</button>    
    </Link>

        
    </div>
  )
}

export default ContactUs