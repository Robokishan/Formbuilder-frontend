import {
  GET_FORMS,
  GET_FORM,
  UPDATE_NEW_FORM,
  FETCHING_FORMS,
  UPDATE_EXSITING_FORM,
} from '../constants/actions';

const initialState = {
  isFetching: false,
  forms: {},
  form: { title: '', description: '', form: [] },
  formCount: 0,
  newForm: { title: '', description: '', form: [] },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FORMS: {
      return {
        ...state,
        isFetching: false,
        forms: action.payload,
        formCount: action.payload.length,
      };
    }
    case GET_FORM:
      return {
        ...state,
        isFetching: false,
        form: action.payload,
      };
    case UPDATE_NEW_FORM:
      return {
        ...state,
        newForm: { ...state.newForm, [action.key]: action.payload },
      };
    case FETCHING_FORMS:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_EXSITING_FORM:
      return {
        ...state,
        form: { ...state.form, [action.key]: action.payload },
      };

    default:
      return state;
  }
};
