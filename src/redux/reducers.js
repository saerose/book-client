import { combineReducers } from 'redux';
import { ON_DETECTED } from './actionTypes'

const defaultState = {
  results: []
};

const onDetectedReducer = (state = defaultState, action) => {
  console.log('redux state', state)
  console.log('redux action', action)
  switch(action.type) {
    case ON_DETECTED:
      return {
        ...state,
        results: action.result
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