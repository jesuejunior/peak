import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
    render(){
      return(
        <div>
          <div className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
              <Link to='/home' className="pure-menu-heading custom-menu-brand logo">Peak</Link>
              <a href="#" className="custom-menu-toggle" id="toggle"></a>
            </div>
            <div className="pure-menu pure-menu-horizontal custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
              <div className="custom-menu-screen"></div>
              <ul className="pure-menu-list">
                <li className="pure-menu-item"> <Link to='/home' activeClassName="active" className="pure-menu-link">Home</Link></li>
                <li className="pure-menu-item"><a href="#" ng-link="['Container']" className="pure-menu-link">Containers</a></li>
                <li className="pure-menu-item"><a href="#" ng-link="['Expedition']"className="pure-menu-link">Expeditions</a></li>
                <li className="pure-menu-item"><a href="#" ng-link="['Image']" className="pure-menu-link">Images</a></li>
                <li className="pure-menu-item"><a href="#" ng-link="['Network']" className="pure-menu-link">Networks</a></li>
                <li className="pure-menu-item"><a href="#" ng-link="['NodeList']" className="pure-menu-link">Nodes</a></li>
                <li className="pure-menu-item"><a href="#" ng-link="['Volume']" className="pure-menu-link">Volumes</a></li>
                <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <a href="#"  className="pure-menu-link"> <img className="" width="40px" height="40px"/> </a>
                  <ul className="pure-menu-children">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Account</a></li>
                    <li className="pure-menu-item"><a href="#" className="clickable pure-menu-link" >Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>                
        </div>
        )
    }

}

export default Navbar; 
