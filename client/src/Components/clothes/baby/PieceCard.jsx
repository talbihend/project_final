import React from 'react';
import "./pieceCard.css";

const PieceCard = ({piece}) => {
  console.log("piece,",piece)
  return (
    <div>
        
        <div className='div-card'>
            <img src="https://cdn.shopify.com/s/files/1/0020/5370/1699/products/chemise-ikks-bebe-garcon-bleu-210333-1.jpg?v=1649158156" alt="logo"  className='img-form'/> 

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