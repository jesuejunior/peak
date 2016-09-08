import React from 'react';
import Navbar from './navbar/navbar.jsx'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className="pure-g">
          {this.props.children}
        </div>
      </div>
    );
  }
}
