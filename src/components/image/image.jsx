import React from 'react';
import { Link } from 'react-router';

export default function Image (props) {
  return(
    <div className="image">
      <div className="content">

        <div className="image-type">
          <a className="pure-button button-select" href="#">
            <i className="fa fa-rocket" aria-hidden="true"></i> Jumpstarts
          </a>

          <a className="pure-button pure-button-primary button-select" href="#">
            <i className="fa fa-users" aria-hidden="true"></i> Public images
          </a>

          <a className="pure-button button-select" href="#">
            <i className="fa fa-lock" aria-hidden="true"></i> Private images
          </a>
        </div>

        <div className="search">
          <div className="search-options">
            <a className="pure-button pure-button-primary button-select" href="#">
              <i className="fa fa-search" aria-hidden="true"></i> Search Docker hub
            </a>

            <a className="pure-button button-select" href="#">
              <i className="fa fa-search" aria-hidden="true"></i> Other registries
            </a>
          </div>

          <form className="search-bar pure-form">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="pure-input-1" type="text" placeholder="Search"/>
          </form>
        </div>

        <div className="images-list">
          <div className="images-item pure-g">
            <div className="pure-u-1-6">
              <div className="logo">
                <img src="http://lorempixel.com/640/480/technics/1"/>
              </div>
            </div>
            <div className="pure-u-14-24">
              <h2>mysql</h2>
              <p>MySQL is the world's second most wisely used open-source relational database management system (RDBMS).</p>
              <p><a href="#">More details <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
            </div>
            <div className="pure-u-1-4">
              <a className="pure-button pure-button-primary button-select" href="#">
                Select <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="images-item pure-g">
            <div className="pure-u-1-6">
              <div className="logo">
                <img src="http://lorempixel.com/640/480/technics/2"/>
              </div>
            </div>
            <div className="pure-u-14-24">
              <h2>tutum/mysql</h2>
              <p>MySQL Server Image - listens on port 3306. For the admin account password, either set MYSQL_PASS environment available, or check the logs for a randomly generated one.</p>
              <p><a href="#">More details <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
            </div>
            <div className="pure-u-1-4">
              <a className="pure-button pure-button-primary button-select" href="#">
                Select <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
