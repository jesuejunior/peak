import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h3> Peak Dashboard </h3>
        <Content />
      </div>
    </div>
  );
}


function Content (props) {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <Link to="/users/login">
          Login
        </Link>
      </div>
    </div>
  );
}
