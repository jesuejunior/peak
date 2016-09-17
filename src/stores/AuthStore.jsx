import BaseStore from './BaseStore.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthService from '../services/AuthService.jsx';
import AuthConstants from '../constants/AuthConstants.jsx';

var _loggedUser = {};
var _jwt = '';

class AuthStore extends BaseStore {
	constructor() {
		super();
	}

  get loggedUser() {
    return _loggedUser;
  }

  get jwt() {
    return _jwt;
  }

  isLoggedIn() {
    return !!_jwt;
  }

  handleUserLogin(jwt) {
    _jwt = jwt;
    this.emitChange();
  }

	handleActions(action) {
		switch (action.type) {
			case AuthConstants.LOGIN_USER: {
        this.handleUserLogin(action.jwt);
				break;
			}
			case AuthConstants.LOGGED_USER: {
				break;
			}
		}
	}
}

const authStore = new AuthStore;
AppDispatcher.register(authStore.handleActions.bind(authStore));

export default authStore;
