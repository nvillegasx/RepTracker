import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/loginActions';
import '../css/Header.css';

// import Auth from '../Auth/Auth.js';


class Header extends Component {

    render() {
        // const auth = new Auth();
        let login;
        let signup;
        let home;
        // let loginAuth = () => {
        //     auth.login();
        //     console.log(auth);
        //     this.props.userLogin();
        // }
        let logout;
        // console.log(this.props.auth)



        if(!this.props.loggedIn)
        {
            login = <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li>;
        }
        if(this.props.loggedIn)
        {
            home = <li className="nav-item active"><Link className="nav-link" to="/mainscreen">Home </Link></li>
            logout = <li className="nav-item"><Link className="nav-link" to="/logout" >Log Out</Link></li>;
        }
        if(window.location.pathname === '/')
        {
            signup = <li className="nav-item"><Link className="nav-link" to="/signup" >Sign Up</Link></li>
        }

      return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link className="navbar-brand" to="/">HealthTracker</Link> */}
                {/* <span>HealthTracker</span> */}
                {/* add some spacing to seperate the links */}
                <div>
                    <h3>RepTracker</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="sr-only">Toggle navigation</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {home}
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/mainscreen">Home </Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/activity">Activity</Link>
                        </li> */}
                    </ul>
                {/* <div> */}
                    <ul className="navbar-nav mr">
                        {/* <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li> */}
                {login}
                {logout}
                {signup}
                        {/* <li className="nav-item"><Link className="nav-link" to="/logout" >Log Out</Link></li> */}
                        {/* <li className="nav-item"><Link className="nav-link" to="/signup" >Sign Up</Link></li> */}
                    </ul>
                {/* </div> */}
                </div>
            </nav>
        </div>
      );
    }
}
Header.propTypes = {
    userLogin: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired
  
  }
  
  const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
  })
  

//   export default Header;
export default connect(mapStateToProps, { userLogin })(Header);