import React from 'react'

let UserLogin = React.createClass({
  getInitialState: function(){
    return {email:'', password:'' };
  },

  handleEmailChange: function(e){
    this.setState({email: e.target.value});
  },

  handlePasswordChange: function(e){
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
     // TODO: send request to the server
    this.setState({email: email, password: password});
    console.log(email, password);
  },

  render: function(){
    return(
        <div className="container login-container">
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Please sign in</legend>
              <label htmlFor="email" >Email address</label>
              <input type='email' placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange} /> 
              <label htmlFor="password" className="sr-only">Password</label>
              <input type='password' placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} /> 
              <label htmlFor="remember" className="pure-checkbox"/>
              <input type='checkbox' > Remember me </input>
              <button className="pure-button pure-button-primary" type="submit"> Sign in </button>
            </fieldset>
          </form>
        </div>
      )
  }
});

export { UserLogin };
