import React from "react";

export default class UserLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
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
      <div className="container login-container">
        <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <legend>Please sign in</legend>
            <label htmlFor="email" >Email address</label>

            <input type="email" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />

            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />

            <label htmlFor="remember" className="pure-checkbox"></label>
            <input type="checkbox" value="Remember me" />

            <input className="pure-button pure-button-primary" type="submit" value="Sign in" />
          </fieldset>
        </form>
      </div>
    );
  }
}
