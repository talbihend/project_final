import React from 'react'
import { useSelector } from 'react-redux';
import AdminPieceCard from './AdminPieceCard';

const AdminPieceList = () => {

  const { pieces, loading } = useSelector((state) => state.piecesReducers);
  


  return (
    <div>
        <h1>Admin Screen List</h1>

        {loading ? (
        <h1>Loading ...</h1> ) :  
      
      (
        pieces && React.Children.toArray(pieces.map((el) => <AdminPieceCard piece={el} />))
      )}

        
    </div>
  )
}

export default AdminPieceList