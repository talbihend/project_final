
import {
  ADD_COMMAND,
  ADD_COMMAND_FAIL,
  ADD_COMMAND_SUCCESS,
  GET_COMMAND,
  GET_COMMAND_FAIL,
  GET_COMMAND_SUCCESS,
} from "../actionTypes/commandActionTypes"; 

import axios from "axios";





//  add  command

export const addMyNewCommand =
  (customer_name ,  phone_number,  address ,   reference ,  color , size , number_of_piece) => async (dispatch) => {
    dispatch({
      type: ADD_COMMAND ,
    });
    const MyNewCommand = { customer_name ,  phone_number,  address ,   reference ,  color , size , number_of_piece};

    try {
      const res = await axios.post("/command/addcommand", MyNewCommand);
      // console.log(res)
      dispatch({
        type: ADD_COMMAND_SUCCESS ,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error);

      dispatch({
        type: ADD_COMMAND_FAIL ,
        payload: error,
      });
    }
  };

//  get  command

export const getCommand = () => async (dispatch) => {
  dispatch({
    type: GET_COMMAND ,
  });
  try {
    const res = await axios.get("/command/getcommand");
    // console.log(res)
    dispatch({
      type: GET_COMMAND_SUCCESS ,
      payload: res.data,
    });
  } catch (error) {
    // alert('get error')
    // console.log(error);

    dispatch({
      type: GET_COMMAND_FAIL ,
      payload: error,
    });
  }
};

