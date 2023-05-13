import React from 'react';
import { useSelector } from 'react-redux';
import PieceCard from '../baby/PieceCard';

const ChildList = () => {

  

  const { pieces, loading } = useSelector((state) => state);

  return (
    <div>

      {loading ? (
        <h1>Loading ...</h1> ) : 
      
      (
        pieces&&React.Children.toArray(pieces.filter((el) => <PieceCard piece={el.cathegory==="child"} />))
      )}
    </div>
  )
}

export default ChildList