import React from 'react';
import { Link } from 'react-router';

export default function Image (props) {
  return(
    <div className="image-module">
      <div className="content">

        <div className="step-1">
          <h2>Images</h2>
          <div className="steps-selector pure-g">
            <div className="pure-u-1-4 step highlight">
              <div className="step-number">1</div>
              <div className="step-text">Image selection</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">2</div>
              <div className="step-text">Service configuration</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">3</div>
              <div className="step-text">Environment variables</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">4</div>
              <div className="step-text">Volumes</div>
            </div>
          </div>

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

        <hr/>

        <div className="step-2">
          <div className="steps-selector pure-g">
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Image selection</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number">2</div>
              <div className="step-text">Service configuration</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">3</div>
              <div className="step-text">Environment variables</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">4</div>
              <div className="step-text">Volumes</div>
            </div>
          </div>

          <form className="pure-g pure-form image-properties">
            <div className="pure-u-1-5">
              <p>Image</p>
            </div>
            <div className="pure-u-4-5">
              <p>peak/hello-world</p>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="ServiceName">Service Name</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <input id="ServiceName" type="text" placeholder="hello-world-01287ccf" defaultValue="hello-world-01287ccf" className="pure-input-1"/>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="ImageTag">Image tag</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <select id="ImageTag" className="pure-input-1">
                <option>latest</option>
              </select>
            </div>

            <div className="pure-u-1-5 pure-control-group">
              <label htmlFor="NumberOfContainers">Number of containers</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <input id="NumberOfContainers" type="range" min="0" max="10" step="1" className="pure-input-1"/>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="DeployTags">Deploy tags</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <input id="DeployTags" type="text" className="pure-input-1"/>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="Network">Network</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <select id="Network" className="pure-input-1">
                <option>Dummy-Network</option>
              </select>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="DeployTags">Hostname</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <input id="Hostname" type="text" className="pure-input-1"/>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-input">
              <label htmlFor="DeployTags">Domain</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <input id="Domain" type="text" className="pure-input-1"/>
            </div>

            <div className="pure-u-1-5 pure-control-group label-for-table">
              <label>Ports</label>
            </div>
            <div className="pure-u-4-5 pure-control-group">
              <table className="table">
                <thead>
                  <tr><th>Port</th><th>Protocol</th><th>Listen address</th><th>Host port</th><th></th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="number" size="5" min="0" max="65535"/>
                    </td>
                    <td>
                      <select>
                        <option>TCP</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" placeholder="0.0.0.0" size="16"/>
                    </td>
                    <td>
                      <input type="number" size="5" min="0" max="65535"/>
                    </td>
                    <td>
                      <button className="pure-button pure-button-success"><i className="fa fa-plus" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <hr/>

        <div className="step-3">

          <div className="steps-selector pure-g">
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Image selection</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Service configuration</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number">3</div>
              <div className="step-text">Environment variables</div>
            </div>
            <div className="pure-u-1-4 step">
              <div className="step-number">4</div>
              <div className="step-text">Volumes</div>
            </div>
          </div>

          <table className="pure-table pure-form variables">
            <thead>
              <tr>
                <th>New key</th>
                <th>New value</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="pure-control-group">
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td>
                  <button className="pure-button button-success"><i className="fa fa-hdd-o" aria-hidden="true"></i></button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="pure-table pure-form variables">
            <thead>
              <tr>
                <th>Variable keys</th>
                <th>Variable values</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="pure-control-group">
                <td>
                  <input type="text" defaultValue="hello"/>
                </td>
                <td>
                  <input type="text" defaultValue="world"/>
                </td>
                <td>
                  <button className="pure-button button-error"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue="port"/>
                </td>
                <td>
                  <input type="text" defaultValue="1337"/>
                </td>
                <td>
                  <button className="pure-button button-error"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <hr/>

        <div className="step-4">

          <div className="steps-selector pure-g">
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Image selection</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Service configuration</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number"><i className="fa fa-check" aria-hidden="true"></i></div>
              <div className="step-text">Environment variables</div>
            </div>
            <div className="pure-u-1-4 step highlight">
              <div className="step-number">4</div>
              <div className="step-text">Volumes</div>
            </div>
          </div>

          <div className="pure-g pure-form add-volumes">
            <div className="pure-u-1-4 pure-control-group labels">
              <label htmlFor="add-volumes-select-service">Add volumes from</label>
            </div>
            <div className="pure-u-1-2 pure-control-group">
              <select id="add-volumes-select-service" className="pure-input-1">
                <option value="">Select service</option>
              </select>
            </div>
            <div className="pure-u-1-4 pure-control-group buttons">
              <button className="pure-button button-success">
                <i className="fa fa-plus" aria-hidden="true"></i> Add
              </button>
            </div>

            <div className="pure-u-1-4 pure-control-group labels">
              <label htmlFor="add-volumes-container-path">Add volume</label>
            </div>
            <div className="pure-u-1-4 pure-control-group">
              <input type="text" id="add-volumes-container-path" className="pure-input-1" placeholder="Container path"/>
            </div>
            <div className="pure-u-1-4 pure-control-group">
              <input type="text" id="add-volumes-host-path" className="pure-input-1" placeholder="Host path (optional)"/>
            </div>
            <div className="pure-u-1-4 pure-control-group buttons">
              <button className="pure-button button-success">
                <i className="fa fa-plus" aria-hidden="true"></i> Add
              </button>
            </div>
          </div>

          <table className="pure-table pure-table-horizontal volumes-from-other-services">
            <thead>
              <tr>
                <th>Volumes from other services</th>
                <th>Writable</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data-container</td>
                <td>
                  <i className="fa fa-check-circle green" aria-hidden="true"></i>
                </td>
                <td>
                  <button className="pure-button button-error">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="pure-table pure-table-horizontal paths">
            <thead>
              <tr>
                <th>Container path</th>
                <th>Host path</th>
                <th>Writable</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/ghost-override</td>
                <td>/docker/blog</td>
                <td>
                  <i className="fa fa-check-circle green" aria-hidden="true"></i>
                </td>
                <td>
                  <button className="pure-button button-error">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>/data</td>
                <td>
                  <em><a href="#">Add host path</a></em>
                </td>
                <td>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}
