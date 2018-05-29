import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
};

// you must return a new object otherwise it wont know that something updated
// implicit return statement
const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

// actions are objects that have a type and a payload
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;