import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import forms from "./reducers/forms";
import answers from "./reducers/answers";

const reducer = combineReducers({
  auth,
  forms,
  answers
});

export const store = createStore(reducer, applyMiddleware(thunk));
