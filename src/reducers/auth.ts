import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants/actions';

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  isUpdating: true,
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggingIn: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.payload,
        error: {},
        success: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload,
        user: null,
        success: {},
      };

    default:
      return state;
  }
};
