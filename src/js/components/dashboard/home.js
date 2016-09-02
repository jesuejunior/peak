import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <h3> Peak Dashboard </h3>
        <div>
          Teste
        </div>
        <Link to="/login">
          Login
        </Link>
      </div>
    );
  }
}
