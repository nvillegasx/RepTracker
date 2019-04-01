import React, { Component } from 'react';
import '../css/Icons.css';

class Icon extends Component {
    render() {
      return (
        <div className="Icon">
            <div className="row">
                <div className="col-md border border-dark rounded">
                    <i className="fas fa-heartbeat fa-3x"></i>
                    <p>You can track the amount of calories burned</p>
                </div>
                <div className="col-md border border-dark rounded">
                    <i className="fas fa-apple-alt fa-3x"></i>
                    <p>You can track what you eat</p>
                </div>
                <div className="col-md border border-dark rounded">
                    <i className="fas fa-dumbbell fa-3x"></i>
                    <p>You can track your workouts</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Icon;