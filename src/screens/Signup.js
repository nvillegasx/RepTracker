import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignup } from '../redux/actions/loginActions';


class Signup extends Component {
  onSubmit = (e) =>
  {
    e.preventDefault();

    const user = {
        firstname : e.target.firstname.value,
        lastname : e.target.lastname.value,
        email: e.target.email.value,
        password: e.target.password.value
    }

    // call action
    this.props.userSignup(user)
  }

  render() {
    return (
      <div>
          <div class="container">
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h3>Sign Up</h3>
                </div>
                <div class="card-body">
                  <form onSubmit={this.onSubmit}>
                  <div class="input-group form-group">
                      {/* <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div> */}
                      <input name="firstname" type="text" class="form-control" placeholder="first name"></input>
                    </div>
                    <div class="input-group form-group">
                      {/* <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div> */}
                      <input name="lastname" type="text" class="form-control" placeholder="last name"></input>
                    </div>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input name="email" type="text" class="form-control" placeholder="email"></input>
                    </div>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input name="password" type="password" class="form-control" placeholder="password"></input>
                    </div>
                    <div class="form-group">
                      <input type="submit" value="Signup" class="btn float-right login_btn"></input>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

Signup.propTypes = {
  userSignup: PropTypes.func.isRequired
}

export default connect(null, { userSignup })(Signup);
