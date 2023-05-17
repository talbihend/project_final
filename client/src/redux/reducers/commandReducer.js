import {
    ADD_COMMAND,
    ADD_COMMAND_FAIL,
    ADD_COMMAND_SUCCESS,
    GET_COMMAND,
    GET_COMMAND_FAIL,
    GET_COMMAND_SUCCESS,
  } from "../actionTypes/commandActionTypes";
  
  const init = {
    loading: true,
    pieces: null,
    error:null
  };
  
  const commandReducer = (state = init, { type, payload }) => {
    switch (type) {
  
      
  ///   add cases
  
  case ADD_COMMAND:
    return {
      ...state,
      loading: true,
    };
  case ADD_COMMAND_SUCCESS:
    return {
      ...state,
      commands: [...state.commands, payload],
    };
  case ADD_COMMAND_FAIL:
    return {
      ...state,
      loading: true,
      error:payload
    };
  
  
  
   ///   get cases
  
      case GET_COMMAND:
        return {
          ...state,
          loading: true,
        };
        case GET_COMMAND_SUCCESS:
          return {
            ...state,
            loading: false,
            commands: payload,
          };
        case GET_COMMAND_FAIL:
          return {
            ...state,
            loading: true,
            error:payload
          };
  
          default:
            return state;
        }
      };
      export default commandReducer;