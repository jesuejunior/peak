import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthService from '../services/AuthService.jsx';
import UserConstants from '../constants/UserConstants.jsx';

var _user = {};

class UserStore extends EventEmitter {
	constructor() {
		super();
	}

	requestLogin(username, password) {
		_user = AuthService.login(username, password);
		this.emit("change");
	}

  getUser() {
    return _user;
  }

	handleActions(action) {
		switch (action.type) {
			case UserConstants.AUTHENTICATE_USER: {
				this.requestLogin(action.user.username, action.user.password);
				break;
			}
			case UserConstants.GET_AUTH_USER: {
				break;
			}
		}
	}
}

const userStore = new UserStore;
AppDispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
