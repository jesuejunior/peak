import React from 'react';
import UserLogin from '../../components/user/userLogin.jsx';
import AuthService from '../../services/AuthService.jsx';
import AuthStore from '../../stores/AuthStore.jsx';

export default class UserLoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange.bind(this));
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

    AuthService.login(email, password);
  }

  _onChange() {
    console.log('User logado');
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
