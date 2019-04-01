import React, { Component } from 'react';
import '../css/Header.css';
import Icons from './Icons';

class Header extends Component {
    render() {
      return (
        <div className="Body">
            <div className="jumbotron">
            <h1>Health Tracker!</h1>
            <p>We know staying healthy is difficult, but it plays a vital role in longevity.</p>
            {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
            </div>
            <Icons/>
        </div>
      );
    }
  }
  
  export default Header;