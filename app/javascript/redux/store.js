// app/javascript/redux/store.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import greetingsReducer from "./reducers/greetingsReducer";

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
