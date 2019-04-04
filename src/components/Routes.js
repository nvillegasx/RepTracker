import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import MainScreen from '../screens/MainScreen';
import Logout from '../screens/Logout';
import NotFound from '../screens/NotFound';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddWorkout from '../screens/AddWorkout';

class Routes extends Component {
  render() {
      let main, logout;
      let addworkout;

      if( this.props.loggedIn)
      {
            // main = <Route path="/mainscreen" component={MainScreen} />
            main = <Route path="/mainscreen" render={() => this.props.loggedIn === true ? <MainScreen/> : <Redirect to="/login"/>} />
            logout = <Route path="/logout" component={Logout} />
            // addworkout = <Route path="/addworkout" component={AddWorkout}/>
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
            {/* {addworkout} */}
            {/* <Route exact path="/mainscreen" component={MainScreen} />
            <Route exact path="/logout" component={Logout} /> */}
            {/* <Route component={ NotFound}/> */}
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
