import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthConstants from '../constants/AuthConstants.jsx';
import { browserHistory } from 'react-router';

export function authUserAction(jwt) {
  const savedToken = localStorage.getItem('jwt');

  AppDispatcher.dispatch({
    type: AuthConstants.LOGIN_USER,
    jwt
  });

  if (savedToken !== jwt) {
    localStorage.setItem('jwt', jwt);
    browserHistory.push('/');
  }
}

export function logoutUserAction(token) {
  AppDispatcher.dispatch({
    type: AuthConstants.LOGOUT_USER
  });
}
