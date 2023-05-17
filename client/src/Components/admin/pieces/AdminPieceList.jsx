import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getPieces } from '../../../redux/actions/pieceActions';
import { getPieces } from '../../../redux/actions/pieceActions';
import AdminPieceCard from './AdminPieceCard';
import "./adminPiecelist.css";



const AdminPieceList = () => {

  const { pieces, loading } = useSelector((state) => state.piecesReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPieces()); 
  }, []);
  


  return (
    <div >

      <h1 className='title-adm-scr'>Admin Screen List</h1> 

      <div className='piece-list-form'>


        {loading ? (
        <h1>Loading ...</h1> ) : 
      
      (
        pieces && React.Children.toArray(pieces.map((el) => <AdminPieceCard piece={el} />))
      )}

        
        
      </div>
    </div>
  )
}

export default AdminPieceList