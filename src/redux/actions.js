import {
  ON_DETECTED,
  ON_SEARCH,
  LOG_IN,
  ADD_BOOK
} from './actionTypes'

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

export const addLibrary = (book) => ({
  type: ADD_BOOK,
  book
})