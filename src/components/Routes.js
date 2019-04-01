import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import MainScreen from '../screens/MainScreen';
import Logout from '../screens/Logout';
import NotFound from '../screens/NotFound';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Routes extends Component {
  render() {
      let main, logout;

      if( this.props.loggedIn)
      {
            main = <Route path="/mainscreen" component={MainScreen} />
            logout = <Route path="/logout" component={Logout} />
      }
    return (
      <div>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} /> */}
            {/* <Route exact path="/mainscreen" render={Main} /> */}
            {/* <Route exact path="/mainscreen" component={}/> */}
            {/* <Route exact path="/loading" render={(props) => { handleAuthentication(); return <Loading auth={auth} {...props}></Loading>}} /> */}
            {/* <Route exact path="/login" component={()=> auth.login()} /> */}
            {main}
            {logout}
            {/* <Route exact path="/mainscreen" component={MainScreen} />
            <Route exact path="/logout" component={Logout} /> */}
            <Route component={ NotFound}/>
      </div>
    )
  }
}
Routes.propTypes = {
    loggedIn: PropTypes.bool.isRequired
  
}

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
})

export default connect(mapStateToProps, null)(Routes);
