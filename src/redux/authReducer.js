// import jwtDecode from 'jwt-decode';

//
// export function isRefreshTokenExpired(state) {
//     if (state.refresh && state.refresh.exp) {
//         return 1000 * state.refresh.exp - (new Date()).getTime() < 5000;
//     }
//     return true;
// }


export function isAuthenticated(state) {
    return false;
}
