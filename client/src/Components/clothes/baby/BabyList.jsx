import React from 'react';
import { useSelector } from 'react-redux';
import PieceCard from './PieceCard';


const BabyList = () => {



  const { pieces, loading } = useSelector((state) => state);

  return (
    <div>

      {loading ? (
        <h1>Loading ...</h1> ) : 
      
      (
        pieces&&React.Children.toArray(pieces.filter((el) => <PieceCard piece={el.cathegory==="baby"} />))
      )}

    </div>
  )
}

export default BabyList