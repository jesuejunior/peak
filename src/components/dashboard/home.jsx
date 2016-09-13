import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {
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
