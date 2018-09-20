import { ON_DETECTED } from './actionTypes'

export const onDetectedReducer = (result) => ({
  type: ON_DETECTED,
  result: result
});