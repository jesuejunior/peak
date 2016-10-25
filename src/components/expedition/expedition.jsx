import React from 'react';
import { Link } from 'react-router';

export default function Expedition (props) {
    return(
        <div className="expedition-module">
            <h2>
                Expeditions
                <span className="separator"></span>
                <button className="pure-button pure-button-primary">Add Expedition</button>
            </h2>
            <div className="pure-g">
                <div className="pure-u-1-4">
                    <div className="expedition-box active">
                        <div className="status">
                            <span>Active</span>
                        </div>
                        <h3>
                            <i className="fa fa-server" aria-hidden="true"></i><br/>
                            hello-world
                        </h3>
                        <p className="info">
                            <div>
                                <span>
                                    <i className="fa fa-wifi" aria-hidden="true"></i> 13.37.13.37
                                </span>
                                <span>
                                    <i className="fa fa-building-o" aria-hidden="true"></i> peak
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa fa-tachometer" aria-hidden="true"></i> 2.4 <abbr title="gigahertz">GHz</abbr>
                                </span>
                                <span>
                                    <i className="fa fa-microchip" aria-hidden="true"></i> 0.97 <abbr title="gigibyte">GiB</abbr>
                                </span>
                                <span>
                                    <i className="fa fa-hdd-o" aria-hidden="true"></i> 29.4 <abbr title="gigibyte">GiB</abbr>
                                </span>
                            </div>
                            <div className="target">target.hello-world</div>
                        </p>
                        <div className="pure-g containers">
                            <div className="pure-u-1-2">
                                <i className="fa fa-cube" aria-hidden="true"></i> hello agent <br/> 13.37.13.37
                            </div>
                            <div className="pure-u-1-2">
                                <i className="fa fa-cube" aria-hidden="true"></i> world agent <br/> 133.71.33.7
                            </div>
                            <div className="pure-u-1-2">
                                <i className="fa fa-cube" aria-hidden="true"></i> dummy agent <br/> 1.33.7.7
                            </div>
                            <div className="pure-u-1-2 add">
                                <a href="#"><i className="fa fa-plus" aria-hidden="true"></i> Add Container</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1-4">
                    <div className="expedition-box stopped">
                        <div className="status">
                            <span>Stopped</span>
                        </div>
                        <h3>
                            <i className="fa fa-server" aria-hidden="true"></i><br/>
                            hello-world
                        </h3>
                        <p className="info">
                            <div>
                                <span>
                                    <i className="fa fa-wifi" aria-hidden="true"></i> 13.37.13.37
                                </span>
                                <span>
                                    <i className="fa fa-building-o" aria-hidden="true"></i> peak
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa fa-tachometer" aria-hidden="true"></i> 2.4 <abbr title="gigahertz">GHz</abbr>
                                </span>
                                <span>
                                    <i className="fa fa-microchip" aria-hidden="true"></i> 0.97 <abbr title="gigibyte">GiB</abbr>
                                </span>
                                <span>
                                    <i className="fa fa-hdd-o" aria-hidden="true"></i> 29.4 <abbr title="gigibyte">GiB</abbr>
                                </span>
                            </div>
                            <div className="target">target.hello-world</div>
                        </p>
                        <div className="pure-g containers">
                            <div className="pure-u-1-2">
                                <i className="fa fa-cube" aria-hidden="true"></i> hello agent <br/> 13.37.13.37
                            </div>
                            <div className="pure-u-1-2">
                                <i className="fa fa-cube" aria-hidden="true"></i> world agent <br/> 133.71.33.7
                            </div>
                            <div className="pure-u-1 add">
                                <a href="#"><i className="fa fa-plus" aria-hidden="true"></i> Add Container</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pure-g">
                <div className="pure-u-1-4">
                    <h2>expedition-name</h2>
                    <h3 className="partly">
                        <i className="fa fa-play" aria-hidden="true"></i> Partly running
                    </h3>
                    <p>
                        <i className="fa fa-clock-o" aria-hidden="true"></i> a few seconds ago
                    </p>
                    <hr/>
                </div>
                <div className="pure-u-3-4">
                    <p className="title-bar text-right">
                        <button className="pure-button button-error">
                            <i className="fa fa-stop" aria-hidden="true"></i> Stop
                        </button>
                        <button className="pure-button">
                            <i className="fa fa-trash" aria-hidden="true"></i> Terminate
                        </button>
                        <button className="pure-button pure-button-primary">
                            <i className="fa fa-refresh" aria-hidden="true"></i> Redeploy
                        </button>
                        <button className="pure-button button-success">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                        </button>
                    </p>

                    <p>
                        <button className="pure-button pure-button-primary">
                            Services
                        </button>
                        <button className="pure-button">
                            Endpoints
                        </button>
                        <button className="pure-button">
                            Stackfile
                        </button>
                        <button className="pure-button">
                            Timeline
                        </button>
                    </p>

                    <p className="text-right">
                        <button className="pure-button pure-button-primary">
                            Actions <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                    </p>

                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <a href="#">hello-world</a><br/>
                                    <i className="fa fa-cube" aria-hidden="true"></i> 1 Container
                                </td>
                                <td className="red">
                                    <i className="fa fa-stop" aria-hidden="true"></i> Stopped
                                </td>
                                <td>
                                    hello/world:latest
                                </td>
                                <td>
                                    <button className="pure-button button-success">
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </button>
                                    <button className="pure-button">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                    <button className="pure-button pure-button-primary">
                                        <i className="fa fa-refresh" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <a href="#">hello-world</a><br/>
                                    <i className="fa fa-cube" aria-hidden="true"></i> 1 Container
                                </td>
                                <td className="green">
                                    <i className="fa fa-play" aria-hidden="true"></i> Running
                                </td>
                                <td>
                                    hello/world:latest
                                </td>
                                <td>
                                    <button className="pure-button button-error">
                                        <i className="fa fa-stop" aria-hidden="true"></i>
                                    </button>
                                    <button className="pure-button">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                    <button className="pure-button pure-button-primary">
                                        <i className="fa fa-refresh" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
