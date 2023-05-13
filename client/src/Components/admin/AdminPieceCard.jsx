import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePiece, getPieces } from '../../redux/actions/pieceActions';
import EditPiece from './EditPiece';

const AdminPieceCard = ({piece}) => {

    const dispatch = useDispatch();

  return (
    <div>

<div>
            {/* <img src="sss" alt="logo" /> */}
            <h4>name {piece.name}</h4>
            <h4>color : {piece.color}</h4>
            <h4>reference : {piece.reference}</h4>


        <button className='button-form' onClick={()=>{dispatch(deletePiece(piece._id)) ; dispatch(getPieces())}}  >Delete</button>
        <EditPiece piece={piece}/>
       

        </div>









    </div>
  )
}

export default AdminPieceCard