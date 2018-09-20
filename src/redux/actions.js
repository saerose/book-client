import { ON_DETECTED } from './actionTypes'

export const onDetected = (result) => ({
  type: ON_DETECTED,
  result: result
});