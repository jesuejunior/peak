import React from 'react';
import Navbar from './navbar/navbar.jsx'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <div className="pure-g">
          <Navbar />
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
