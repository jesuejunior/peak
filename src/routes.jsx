import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import UserLoginContainer from './containers/user/UserLoginContainer.jsx';
import UserRegister from './components/user/userRegister.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Image from './components/image/image.jsx';
import Expedition from './components/expedition/expedition.jsx';
import Layout from './components/layout.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" header="Dashboard" component={Layout}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' header='Dashboard' component={Dashboard} />
      <Route path='images' header='Image' component={Image} />
      <Route path='expeditions' header='Expedition' component={Expedition} />
      <Route path="users/login" header="Login" component={UserLoginContainer} />
      <Route path="users/new" header="Register" component={UserRegister} />
    </Route>
  </Router>
);

export default routes;
