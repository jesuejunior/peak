import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserLogin from './components/user/userLogin';
import UserRegister from './components/user/userRegister';
import Home from './components/dashboard/home';
import Layout from './components/layout';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" header="Dashboard" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/login" header="Login" component={UserLogin} />
      <Route path="/register" header="Register" component={UserRegister} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('content'));
