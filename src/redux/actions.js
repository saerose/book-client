import { ON_DETECTED, ON_SEARCH } from './actionTypes'

export const onDetectedReducer = (result) => ({
  type: ON_DETECTED,
  result
});

export const onSearch = (list) => ({
  type: ON_SEARCH,
  list
})