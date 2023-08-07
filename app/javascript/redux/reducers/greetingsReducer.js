// app/javascript/redux/reducers/greetingsReducer.js

const initialState = {
  message: "",
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GREETING":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
