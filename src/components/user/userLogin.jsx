import React from 'react';

export default function UserLogin (props) {
  return (
    <div className="container login-container">
      <form className="pure-form pure-form-stacked" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>Please sign in</legend>
          <label htmlFor="email" >Email address</label>

          <input type="email" placeholder="Email address" value={props.email} onChange={props.handleEmailChange} />

          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" placeholder="Password" value={props.password} onChange={props.handlePasswordChange} />

          <label htmlFor="remember" className="pure-checkbox">Remember me.
            <input type="checkbox" value="remember" />
          </label>
          <input className="pure-button pure-button-primary" type="submit" value="Sign in" />
        </fieldset>
      </form>
    </div>
  );
}
