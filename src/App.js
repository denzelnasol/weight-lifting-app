import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ExercisePage from './pages/ExercisePage/ExercisePage'
import ExerciseCardPage from './pages/ExerciseCardPage/ExerciseCardPage'
import Navbar from './common/components/Navbar'
import Calculator from './pages/CalculatorPage/Calculator'
import Login from './pages/Login'
import Register from './pages/Register'

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from 'react-redux'
import store from './store'

import PrivateRoute from "./common/components/private-route/PrivateRoute";
import Dashboard from "./common/components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


const App = () => {

  return (
    <div className='container rounded'>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path='/' component={ExerciseCardPage} />
          <Route path='/exercises/:exerciseId' component={ExercisePage} />
          <Route path='/calculator' component={Calculator} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App;
