import React from 'react';
import UserLogin from '../../components/user/userLogin.jsx';
import { authUser } from '../../actions/UserActions.jsx';

export default class UserLoginContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {
        email: '', password: ''
      } 
    };
  }

  componentWillMount() {
    UserStore.on("change", );
  }

  handleEmailChange(e) {
    this.setState({ user: { email: e.target.value } });
  }

  handlePasswordChange(e) {
    this.setState({ user: { password: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || !password) {
      return;
    }

    const user = authUser(email, password);

    console.log(user);
     // TODO: send request to the server
    // this.setState({ email, password });
    // console.log(email, password);
  }

  render() {
    return (
      <UserLogin
        password={this.state.user.password}
        email={this.state.user.email}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)} />
    );
  }
}
