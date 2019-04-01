import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom'; 
// BrowserRouter as Router, 

import Header from './components/Header'
import Routes from './components/Routes'

import MainScreen from './screens/MainScreen';
import Logout from './screens/Logout';

import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { createBrowserHistory } from 'history';

// import Auth from './Auth/Auth.js';


class App extends Component {
  
  render() {
    const history = createBrowserHistory();

    let main, logout;

    // this.componentDidUpdate = () => {

    //   if( this.props.loggedIn)
    //   {
    //         main = <Route path="/mainscreen" component={MainScreen} />
    //         logout = <Route path="/logout" component={Logout} />
    //   }
    // }


    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={ () => (<Login history={history}/>)} />
              <Route exact path="/signup" component={Signup} />
              {main}
              {logout}
              <Route component={ NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
