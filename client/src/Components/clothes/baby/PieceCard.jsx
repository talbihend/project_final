import React from 'react';
import "./pieceCard.css";

const PieceCard = ({piece}) => {
  console.log("piece,",piece)
  return (
    <div>
        
        <div className='div-card'>
            <img src={piece.image} alt="logo"  className='img-form'/> 

            <h4 className='name-form' >{piece.name}</h4>

            <div className='div-color-ref' >
            <h4 className='color-form'  >color : {piece.color}</h4>
            <p className='virgule'>,</p>
            <h4 className='reference-form' >reference : {piece.reference}</h4>
            </div>
            
           
        </div>


    </div>
  )
}

export default PieceCard