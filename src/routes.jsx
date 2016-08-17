import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { UserLogin } from './components/user/userLogin.jsx';
import { Home } from './components/dashboard/home.jsx';


const routes = (
        <Router history={hashHistory}>
            <Route path='/' header='Dashboard' component={Home}/>
            <Route path='/login' header='Login' component={UserLogin} />
        </Router>
        )
        
export default routes;
