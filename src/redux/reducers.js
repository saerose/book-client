import { combineReducers } from 'redux';
import {
  ON_DETECTED,
  ON_SEARCH,
  LOG_IN,
  ADD_BOOK
} from './actionTypes'

const defaultState = {
  results: {},
  list: []
};

const defaultUserState = {
  user: {}
}

// const defaultBookState = {
//   book: []
// }

const onDetectedReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ON_DETECTED:
      return {
        ...state,
        results: action.result
      }
    case ON_SEARCH:
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
}

const userReducer = (state = defaultUserState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.user
      }
    case ADD_BOOK:
      return {
        ...state,
        user: {
          ...state.user,
          books: [
            ...state.user.books,
            action.book
          ]
        }
      }
    default:
      return state;
  }
}

// Combining all reducers.
const reducers = combineReducers({
  onDetectedReducer,
  userReducer
});

export default reducers;