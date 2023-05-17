import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PieceCard from './PieceCard';
import { getPieces } from '../../../redux/actions/pieceActions';
import "../list.css"



const BabyList = () => {



  const { pieces, loading } = useSelector((state) => state.piecesReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPieces());
  }, []);

  return (
    <div>

      {loading ? (
        <h1>Loading ...</h1> ) : 
      
      (
        pieces&&React.Children.toArray(pieces.filter((el) =>el.cathegory==="baby" ).map(el=><PieceCard  piece={el}/>))
      
      )}

    </div>
  )
}

export default BabyList