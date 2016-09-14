import React from 'react';
import UserLogin from '../../components/user/userLogin.jsx';
import { authUserAction } from '../../actions/UserActions.jsx';
import UserStore from '../../stores/UserStore.jsx';

export default class UserLoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  componentWillMount() {
    UserStore.on("change", () => {
      console.log('Dados recebidos do login!');
      console.log('User logado ', UserStore.getUser());
    });
  }

  componentWillUnmount() {
    UserStore.removeListener("change");
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
    
    authUserAction(email, password);
  }

  render() {
    return (
      <UserLogin
        email={this.state.email}
        password={this.state.password}
        handleEmailChange={this.handleEmailChange.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)} />
    );
  }
}
