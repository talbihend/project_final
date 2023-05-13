import {
  ADD_PIECES,
  ADD_PIECES_FAIL,
  ADD_PIECES_SUCCESS,
  DELETE_PIECES,
  DELETE_PIECES_FAIL,
  DELETE_PIECES_SUCCESS,
  EDIT_PIECES,
  EDIT_PIECES_FAIL,
  EDIT_PIECES_SUCCESS,
  GET_PIECES,
  GET_PIECES_FAIL,
  GET_PIECES_SUCCESS,
} from "../actionTypes/pieceActionTypes";
import axios from "axios";



//  add  piece

export const addMyNewPiece =
  (name, reference, color, cathegory) => async (dispatch) => {
    dispatch({
      type: ADD_PIECES ,
    });
    const MyNewPiece = { name, reference, color, cathegory };

    try {
      const res = await axios.post("/piece/addpiece", MyNewPiece);
      // console.log(res)
      dispatch({
        type: ADD_PIECES_SUCCESS ,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error);

      dispatch({
        type: ADD_PIECES_FAIL ,
        payload: error,
      });
    }
  };

//  get  piece

export const getPieces = () => async (dispatch) => {
  dispatch({
    type: GET_PIECES ,
  });
  try {
    const res = await axios.get("/piece/getpiece");
    // console.log(res)
    dispatch({
      type: GET_PIECES_SUCCESS ,
      payload: res.data,
    });
  } catch (error) {
    // alert('get error')
    // console.log(error);

    dispatch({
      type: GET_PIECES_FAIL ,
      payload: error,
    });
  }
};



//  edit  piece

export const editPieces = (MyPiece) => async (dispatch) => {
  dispatch({
    type: EDIT_PIECES ,
  });
  try {
    const res = await axios.put(`/piece/update/${MyPiece._id}`, MyPiece);
    dispatch({
      type: EDIT_PIECES_SUCCESS ,
      payload: res.data,
    });
  } catch (error) {
    // alert("there is an error");
    // console.log(error);
    
    dispatch({
      type: EDIT_PIECES_FAIL ,
      payload: error,
    });
  }
};

//  delete piece

export const deletePiece = (_id) => async (dispatch) => {
  dispatch({
    type: DELETE_PIECES ,
  });
  try {
    const res = await axios.delete(`/piece/deletepiece/${_id}`);
    dispatch({
      type: DELETE_PIECES_SUCCESS ,
      payload: res.data,
    });
  } catch (error) {

    dispatch({
      type: DELETE_PIECES_FAIL ,
      payload: error,
    }); 
  
  }
};

//  get piece by cathegory

// export const getPiecesByCathegory = (cathegory) => async (dispatch) => {
//   dispatch({
//     type: GET_PIECES_BY_CATHEGORY ,
//   });
//   try {
//     const res = await axios.get(`/piece/getbycathegory/${cathegory}`);
//     console.log(res);
//     dispatch({
//       type: GET_PIECES_BY_CATHEGORY_SECCESS ,
//       payload: res.data,
//     });
//   } catch (error) {
//     // alert('get error')
//     // console.log(error);
    
//     dispatch({
//       type: GET_PIECES_BY_CATHEGORY_FAIL ,
//       payload: error,
//     });
//   }
// };
