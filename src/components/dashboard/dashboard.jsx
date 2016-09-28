import React from 'react';
import { Link } from 'react-router';

export default function Dashboard (props) {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <Content />
    </div>
  );
}


function Content (props) {
  return (
    <div className="dashboardContent">
      <div className="pure-g">
        <div className="pure-u-1-4 pure-u-sm-1-2">
          <div className="box">
            <h4>Expeditions</h4>
            <p className="value">0</p>
          </div>
        </div>
        <div className="pure-u-1-4 pure-u-sm-1-2">
          <div className="box">
            <h4>Containers</h4>
            <p className="value">8</p>
          </div>
        </div>
        <div className="pure-u-1-4 pure-u-sm-1-2">
          <div className="box">
            <h4>Images</h4>
            <p className="value">8</p>
          </div>
        </div>
        <div className="pure-u-1-4 pure-u-sm-1-2">
          <div className="box">
            <h4>Nodes</h4>
            <p className="value">1</p>
          </div>
        </div>
      </div>
      <div className="pure-g">
        <div className="pure-u-1-2 pure-u-sm-1-1">
          <div className="box">
            <h4>CPU</h4>
            <p className="graph-value">0%</p>
          </div>
        </div>
        <div className="pure-u-1-2 pure-u-sm-1-1">
          <div className="box">
            <h4>Memory</h4>
            <p className="graph-value">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
