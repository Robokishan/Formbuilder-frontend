import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import forms from "./reducers/forms";

const reducer = combineReducers({
  auth,
  forms
});

export const store = createStore(reducer, applyMiddleware(thunk));
