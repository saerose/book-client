import { ON_DETECTED, ON_SEARCH, LOG_IN } from './actionTypes'

export const onDetectedReducer = (result) => ({
  type: ON_DETECTED,
  result
});

export const onSearch = (list) => ({
  type: ON_SEARCH,
  list
})

export const logIn = (user) => ({
  type: LOG_IN,
  user
})