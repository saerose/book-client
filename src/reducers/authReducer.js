// import jwtDecode from 'jwt-decode';

//
// export function isRefreshTokenExpired(state) {
//     if (state.refresh && state.refresh.exp) {
//         return 1000 * state.refresh.exp - (new Date()).getTime() < 5000;
//     }
//     return true;
// }

const initialState = {
    access: undefined,
    refresh: undefined,
    errors: {},
};

export default (state=initialState,action) => {
  switch(action.type) {
    default:
      return state;
  }
}


export function isAuthenticated(state) {
  return true;
}
