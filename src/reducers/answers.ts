import {
  FETCHING_RESPONSE,
  FETCH_RESPONSES,
  FETCH_RESPONSE,
} from '../constants/actions';

const initialState = {
  isFetching: false,
  answers: {},
  answer: {},
  answersCount: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RESPONSE: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_RESPONSES: {
      return {
        ...state,
        isFetching: false,
        answers: action.payload,
        answersCount: action.payload.length,
      };
    }
    case FETCH_RESPONSE:
      return {
        ...state,
        isFetching: false,
        answer: action.payload,
      };
    default:
      return state;
  }
};
