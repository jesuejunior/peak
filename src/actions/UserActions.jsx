import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import UserConstants from '../constants/UserConstants.jsx';

export function authUser(email, password) {
    AppDispatcher.dispatch({
        type: UserConstants.AUTHENTICATE_USER,
        user: {
            email,
            password
        }
    });
}

export function getAuthUser(username) {
    AppDispatcher.dispatch({
        type: UserConstants.GET_AUTH_USER,
        username
    });
}