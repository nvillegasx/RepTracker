import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Router, Switch, Route, Redirect} from 'react-router-dom'; 
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
import {PrivateRoute} from './components/MainScreenRoute'
import AddWorkout from './screens/AddWorkout'

// import Auth from './Auth/Auth.js';


class App extends Component {
  
  render() {
    const history = createBrowserHistory();


    // componentDidUpdate()
    // {

    //   main = <Route path="/mainscreen" render={() => this.props.loggedIn === true ? <MainScreen/> : <Redirect to="/login"/>} />
    //   if( this.props.loggedIn)
    //   {
    //         // main = <Route path="/mainscreen" render={() => t}component={MainScreen} />
    //         // main = <Route path="/mainscreen" component={MainScreen} />
    //         // main = <Route path="/mainscreen" render={ () => if(this.props.loggedIn === true) <MainScreen />} />
    //         logout = <Route path="/logout" component={Logout} />
    //   }
    // }
    // this.componentDidUpdate = () => {
    //   console.log("hello")
    // }
    // if( this.props.loggedIn)
    // {
    //   console.log(this.props.loggedIn)
    //       main = <Route path="/mainscreen" component={MainScreen} />
    //       logout = <Route path="/logout" component={Logout} />
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
              <Route path="/addworkout" component={AddWorkout}/>
              <Routes/>

              {/* {main} */}

              {/* {logout} */}
              <Route component={ NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
