import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../css/Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/loginActions';
// import { Redirect } from 'auth0-js';


class Login extends Component {
  onSubmit = (e) =>
  {
    e.preventDefault();

    const user = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    // call action
    this.props.userLogin(user)
    this.componentDidUpdate()
    
    // this.afterSubmit()
  }
  componentDidUpdate = () => {

    if(this.props.loggedIn == true ){
      this.props.history.push('/mainscreen');

    }
  }

  // afterSubmit = () => {
  //   // console.log(this.props.loggedIn)
    
  //   if(true == true ){
  //     this.props.history.push('/mainscreen');

  //   }
  // }
  // onClick = () => {
  //   if(this.props.loggedIn == true)
  //   {
  //     this.props.history.push('/mainscreen');
  //   }
  // }

  render() {
    return (
      <div>
          <div class="container">
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h3>Log In</h3>
                </div>
                <div class="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input name="email" type="text" class="form-control" placeholder="username"></input>
                    </div>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input name="password" type="password" class="form-control" placeholder="password"></input>
                    </div>
                    <div class="form-group">
                      <input type="submit" value="Login" class="btn float-right login_btn"></input>
                    </div>
                  </form>
                </div>
                <div class="card-footer">
                  <div class="d-flex justify-content-center links">
                    Don't have an account?<Link className="link"to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
})


export default connect(mapStateToProps, { userLogin})(Login);
