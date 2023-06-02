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
    commands: [] ,
    errors:null
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
      ...state, loading:false,
      commands: payload,    ////// payload howa variable yetbaddel 7asb les donneés te3i li da5althom fi lbackend, mathalan image wella non yetbaddal 7asb li nda5la fih 
      
      // commands: [...state.commands, payload], 
      // ...state,loading:false,commands:payload,
      errors:null 
    };
  case ADD_COMMAND_FAIL:
    return {
      ...state,
      loading: true,
      errors:payload
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
            errors:payload
          };
  
          default:
            return state;
        }
      };
      export default commandReducer;