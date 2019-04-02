import React, { Component } from 'react';
import '../css/Header.css';
import Icons from './Icons';

class Header extends Component {
    render() {
      return (
        <div className="Body">
            <div className="jumbotron">
            <h1>Rep Tracker!</h1>
            <p>Let us help you track your workouts so you can keep track of PRs!</p>
            {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
            </div>
            <Icons/>
        </div>
      );
    }
  }
  
  export default Header;