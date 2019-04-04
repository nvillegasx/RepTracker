import React, { Component } from 'react'

class AddWorkout extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Workout Name</label>
            <input type="text" className="form-control"></input>
          </div>
        </form>
      </div>
    )
  }
}
export default AddWorkout;
