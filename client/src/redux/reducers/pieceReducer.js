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

const init = {
  loading: true,
  pieces: [],
  error:null
};

const piecesReducers = (state = init, { type, payload }) => {
  switch (type) {

    
///   add cases

case ADD_PIECES: 
  return {
    ...state,
    loading: true,
  };
case ADD_PIECES_SUCCESS:
  return {
    ...state,
    pieces:  payload, 
    // pieces: [...state.pieces, payload], 

  };
case ADD_PIECES_FAIL:
  return {
    ...state,
    loading: true,
    error:payload
  };



 ///   get cases

    case GET_PIECES:
      return {
        ...state,
        loading: true,
      };
      case GET_PIECES_SUCCESS:
        return {
          ...state,
          loading: false,
          pieces: payload,
        };
      case GET_PIECES_FAIL:
        return {
          ...state,
          loading: true,
          error:payload
        };


///   edit cases

    case EDIT_PIECES:
      return {
        ...state,
        loading: true,
      };
      case EDIT_PIECES_SUCCESS :
        return {
          ...state,
          pieces: state.pieces.map((el) =>
            el._id === payload._id ? { ...el, ...payload } : el
          ),
        };
        case EDIT_PIECES_FAIL :
        return {
          ...state,
          loading: true,
          error:payload
        };



  ///   delete cases

    case DELETE_PIECES:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PIECES_SUCCESS :
      return {

        ...state,
        pieces: state.pieces.filter((el) => el._id !== payload),
      };
      case DELETE_PIECES_FAIL :
        return {
          ...state,
          loading: true,
          error:payload
        };



  ///   get by cath cases

    // case GET_PIECES_BY_CATHEGORY:
    //   return {
    //     ...state,
    //     pieces: state.pieces.filter((el) => el.cathegory !== payload),
    //   };

    default:
      return state;
  }
};
export default piecesReducers;
