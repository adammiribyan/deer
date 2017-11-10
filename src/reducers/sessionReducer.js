import jwtDecode from 'jwt-decode';

const initialState = (token => ({
  fetching: false,
  currentUser: token ? jwtDecode(token) : null,
  errorMessage: null,
}))(localStorage.authToken)

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CREATE_SESSION_PENDING': {
      return {...state, fetching: true}
    }
    case 'CREATE_SESSION_REJECTED': {
      return {...state, fetching: false, errorMessage: action.errorMessage}
    }
    case 'CREATE_SESSION_FULFILLED': {
      return {...state, fetching: false, currentUser: action.user, errorMessage: null}
    }
    case 'DESTROY_SESSION': {
      return {
        fetching: false,
        currentUser: null,
        errorMessage: null,
      }
    }
    default: {
      return state
    }
  }
}
