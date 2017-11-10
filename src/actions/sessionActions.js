import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const login = (credentials) => {
  return dispatch => {
    dispatch({ type: 'CREATE_SESSION_PENDING' });

    axios.post('/auth', { user: {...credentials} }).then(response => {
      localStorage.authToken = response.data.token;

      dispatch({
        type: 'CREATE_SESSION_FULFILLED',
        user: jwtDecode(response.data.token)['sub'],
      })
    }).catch(response => {
      dispatch({
        type: 'CREATE_SESSION_REJECTED',
        errorMessage: response.response.data.errors[0],
      })
    })
  }
}

export const logout = () => {
  delete localStorage.authToken;
  return { type: 'DESTROY_SESSION' };
}
