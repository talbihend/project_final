import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PieceCard from '../baby/PieceCard';
import { getPieces } from '../../../redux/actions/pieceActions';
import "../list.css"


const ManList = () => { 
  
  
  
  const { pieces, loading } = useSelector((state) => state.piecesReducers);
  // console.log(pieces);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPieces());
  }, []);


  return (
    <div className='div-list'>

      {loading ? (
        <h1>Loading ...</h1> ) :  
      
      (
        pieces&&React.Children.toArray(pieces.filter((el) =>el.cathegory==="man" ).map(el=><PieceCard  piece={el}/>))
      )}
    </div>
  )
}

export default ManList