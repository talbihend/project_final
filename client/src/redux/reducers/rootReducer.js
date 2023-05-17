import userReducer from "./userReducer";
import piecesReducers from "./pieceReducer";
import commandReducer from "./commandReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({ userReducer, piecesReducers, commandReducer });

export default rootReducer;