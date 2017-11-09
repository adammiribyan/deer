import { combineReducers } from 'redux';
// import {
//   LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
// } from './actions'

function auth(state = {}) {
  return { isAuthenticated: false, errorMessage: '' };
}

const Deer = combineReducers({
  auth
})

export default Deer;
