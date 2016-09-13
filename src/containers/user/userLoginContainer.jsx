import React from 'react';
import UserLogin from '../../components/user/userLogin.jsx';

export default class UserLoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
     // TODO: send request to the server
    this.setState({ email, password });
    console.log(email, password);
  }

  render() {
    return (
      <UserLogin
        password={this.state.password}
        email={this.state.email}
        handlePasswordChange={this.handlePasswordChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}
