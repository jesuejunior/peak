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
        return this._user = AuthService.login(username, password);
    }

    handleActions(action) {
        switch (action.type) {
            case UserConstants.GET_USER: {
                this.getUser(action.user.username, action.user.password);
                break;
            }
        }
    }
}

const userStore = new UserStore;
AppDispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
