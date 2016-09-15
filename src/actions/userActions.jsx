import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import UserConstants from '../constants/UserConstants.jsx';

export function authUserAction(email, password) {
  AppDispatcher.dispatch({
    type: UserConstants.AUTHENTICATE_USER,
    user: {
      email,
      password
    }
  });
}

export function getAuthUserAction(token) {
  AppDispatcher.dispatch({
    type: UserConstants.GET_AUTH_USER,
    token
  });
}
