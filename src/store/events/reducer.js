import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  items: [],
  selectedItems: [],
  error: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case actionTypes.FETCH:
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  case actionTypes.FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      items: action.payload,
      error: null,
    };
  case actionTypes.FETCH_FAILURE:
    return {
      ...state,
      isLoading: false,
      items: [],
      error: action.payload,
    };
  case actionTypes.GET_LIST_EVENTS:
    return {
      ...state,
      selectedItems: state.items.filter(item => item.listId === action.payload),
    };
  default:
    return { ...state };
  }
};
