import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.jsx';
import Home from './components/dashboard/home.jsx';

console.log(routes);

ReactDOM.render(routes, document.getElementById('peakApp'));
