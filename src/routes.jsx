import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { UserLogin } from './components/user/userLogin.jsx';
import { UserRegister } from './components/user/userRegister.jsx'
import { Home } from './components/dashboard/home.jsx';
import App from './app.jsx'

const routes = (
        <Router history={hashHistory}>
          <Route path='/' header='Dashboard' component={App}>
            <IndexRoute component={Home} />
            <Route path='login' header='Login' component={UserLogin} />
            <Route path='register'header='Register' component={UserRegister} />
          </Route>
        </Router>
        )
        
export default routes;
