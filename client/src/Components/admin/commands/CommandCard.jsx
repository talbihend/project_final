import React from 'react'
import "./commandCard.css";

const CommandCard = ({command}) => {
  return (
    <div className='grand-div'>


        <div  className='div-petit'>
        <h3>customer_name : {command.customer_name}</h3>
        <h3>phone_number : {command.phone_number}</h3>
        <h3> address :{command.address}</h3>
        </div>

        <div className='div-petit'>
        <h3>reference : {command.reference}</h3>
        <h3>color : {command.color}</h3>
        <h3>size :{command.size}</h3>
        <h3>number_of_piece :{command.number_of_piece}</h3>
        </div>
       

      
    </div>
  )
}

export default CommandCard