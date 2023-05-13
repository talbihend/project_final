import userReducer from "./userReducer";
import piecesReducers from "./pieceReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({ userReducer, piecesReducers });

export default rootReducer;