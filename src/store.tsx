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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch