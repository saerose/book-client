import { combineReducers } from 'redux';
import { ON_DETECTED, ON_SEARCH } from './actionTypes'

const defaultState = {
  results: {},
  list: []
};

const onDetectedReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ON_DETECTED:
      return {
        ...state,
        results: action.result
      }
    case ON_SEARCH:
      console.log('prevState:', state)
      console.log('newState:', {
        ...state,
        list: action.list
      })
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
}

// Combining all reducers.
const reducers = combineReducers({
  onDetectedReducer
});

export default reducers;