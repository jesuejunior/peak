import axios from 'axios';
import * as AuthAction from '../actions/authActions.jsx';

const AuthService = {
  login: function(email, password) {
    // request login
    const token = 'JWT a9s8dasdj.as0d8asuj0.0as09djas';

    AuthAction.authUserAction(token);

    return {
      token
    };
  },

  logout: function() {
    logoutUserAction();
  }
}

export default AuthService;
