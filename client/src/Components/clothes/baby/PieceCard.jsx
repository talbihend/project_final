import React from 'react'

const PieceCard = ({piece}) => {
  return (
    <div>
        
        <div>
            {/* <img src="sss" alt="logo" /> */}
            <h4>{piece.name}</h4>
            <h4>color : {piece.color}</h4>
            <h4>reference : {piece.reference}</h4>
        </div>


    </div>
  )
}

export default PieceCard