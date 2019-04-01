import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/MainScreen.css';


class MainScreen extends Component {
  render() {

    return (
      <div>
          <div className="container">
          {/* blue background is blue in Icons.css file */}
          {/* {console.log(this.props.userdata)} */}
            <h1 className="title">Personal Records</h1>
            <hr></hr>
            <div className="row">
                <div className="col-sm">
                    <h5>Bench Press</h5>
                    <div className="userPR">225</div>
                </div>
                <div className="col-sm">
                    <h5>Squat</h5>
                    <div className="userPR">497</div>
                </div>
                <div className="col-sm">
                <h5>Deadlift</h5>
                    <div className="userPR">525</div>
                </div>
            </div>
            <h1 className="title">Weight Progress</h1>
            <hr></hr>
            <div className="row">
                <div className="weightProgress col-lg">The graph with the weight progress</div>
            </div>
          </div>
        
      </div>
    )
  }
}

MainScreen.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userdata: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  userdata: state.login.userInfo
})

// export default MainScreen;
export default connect(mapStateToProps, null)(MainScreen);