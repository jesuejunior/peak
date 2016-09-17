import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthService from '../services/AuthService.jsx';

var _user = {};

class UserStore extends EventEmitter {
	constructor() {
		super();
	}

  getUser() {
    return _user;
  }

	handleActions(action) {

  }
}

const userStore = new UserStore;
AppDispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
