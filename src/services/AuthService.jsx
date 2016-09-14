import axios from 'axios';

class AuthService {
  login(username, password) {
    return {
      id: 1,
      username: 'auser01',
      token: 'JWT a9s8dasdj.as0d8asuj0.0as09djas'
    };
  }
}

export default new AuthService;
