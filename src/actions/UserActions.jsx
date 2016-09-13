import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import UserConstants from '../constants/UserConstants.jsx';

export function authUser() {
    AppDispatcher.dispatch({
        type: UserConstants.GET_USER,
        user: {
            username,
            password
        }
    });
}

export function getAuthUser(username, password) {
    AppDispatcher.dispatch({
        type: UserConstants.GET_AUTH_USER,
    });
}
