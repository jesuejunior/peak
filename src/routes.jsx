import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import UserLogin from './components/user/userLogin.jsx';
import UserRegister from './components/user/userRegister.jsx';
import Home from './components/dashboard/home.jsx';
import Layout from './components/layout.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" header="Dashboard" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="users/login" header="Login" component={UserLogin} />
      <Route path="users/new" header="Register" component={UserRegister} />
    </Route>
  </Router>
);

export default routes;
