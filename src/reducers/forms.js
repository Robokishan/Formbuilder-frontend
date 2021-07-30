import {
  GET_FORMS,
  GET_FORM,
} from "../constants/actions";

const initialState = {
  isFetching: false,
  forms: false,
  form: false,
  formCount: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FORMS: {
      return {
        ...state,
        forms: action.payload,
        formCount: action.payload.length
      };
    }
    case GET_FORM:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};
