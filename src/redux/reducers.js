import { ON_DETECTED } from './actionTypes'

const defaultState = {
  results: []
};

const onDetected = (state = defaultState, action) => {
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

export default onDetected;