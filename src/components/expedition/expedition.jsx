import React from 'react';
import { Link } from 'react-router';

export default function Expedition (props) {
    return(
        <div className="expedition-module">
            <div className="pure-g ">
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