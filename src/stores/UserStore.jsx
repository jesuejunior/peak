import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthService from '../services/AuthService.jsx';
import UserConstants from '../constants/UserConstants.jsx';

class UserStore extends EventEmitter {
	constructor() {
		super();
		this._user = {};
	}

	getUser(username, password) {
		this._user = AuthService.login(username, password);
		this.emit("change");
	}

	handleActions(action) {
		switch (action.type) {
			case UserConstants.AUTHENTICATE_USER: {
				this.getUser(action.user.username, action.user.password);
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
