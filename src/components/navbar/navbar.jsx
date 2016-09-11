import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return(
          <div className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
              <Link to='/' className="custom-menu-brand logo"></Link>
              <a href="#" className="custom-menu-toggle" id="toggle"></a>
            </div>
            <div className="pure-menu pure-menu-horizontal custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
              <div className="custom-menu-screen"></div>
              <ul className="pure-menu-list">
                <li className="pure-menu-item"> <Link to='/home' activeClassName="active" className="pure-menu-link">Home</Link></li>
                 {/* IF logged show it  */}
                <li className="pure-menu-item"><Link to='/containers' activeClassName='active'  className="pure-menu-link">Containers</Link></li>
                <li className="pure-menu-item"><Link to='/expeditions' className="pure-menu-link">Expeditions</Link></li>
                <li className="pure-menu-item"><Link to='/images' className="pure-menu-link">Images</Link></li>
                <li className="pure-menu-item"><Link to='/networks' className="pure-menu-link">Networks</Link></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Nodes</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Volumes</a></li>
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#"  className="pure-menu-link"> <img className="" width="40px" height="40px"/> </a>
                  <ul className="pure-menu-children">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Account</a></li>
                    <li className="pure-menu-item"><a href="#" className="clickable pure-menu-link" >Logout</a></li>
                  </ul>
                </li>
                 {/* If note logged show it */}
                 <li className="pure-menu-item"><Link to='/users/login' activeClassName='active'  className="pure-menu-link"> Login</Link></li>
              </ul>
            </div>
          </div>
      );
  }
}
