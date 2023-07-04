const initialState = {
    name: "",
    email: "",
    message: "",
  };
  
   export const payloadDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FORM_DATA":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  

  



