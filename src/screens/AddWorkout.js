import React, { Component } from 'react'

class AddWorkout extends Component {
  constructor() {
    super();
    this.state ={
      exercises: [
        // {
        //   name: null,
        //   sets: [
        //     {reps: 0, weight: 0}
        //   ]
        // }
      ]
    }
    this.state.exercises[0] =     
    <div className="row">
      <div className=" col-sm form-group">
        <label>Repetitions</label>
        <input type="number" className="form-control"></input>
      </div>
      <div className=" col-sm form-group">
        <label>Weight</label>
        <input type="number" className="form-control"></input>
      </div>
  </div>
  }
  addRow = () => {
    let newRow = 
    <div className="row">
          <div className=" col-sm form-group">
            <label>Repetitions</label>
            <input type="number" className="form-control"></input>
          </div>
          <div className=" col-sm form-group">
            <label>Weight</label>
            <input type="number" className="form-control"></input>
          </div>
    </div>
    let newEx = this.state.exercises
    // this.state.exercises[0].sets[0]
    newEx.push(newRow)
    this.setState({exercises: newEx});
  }
  
  render() {
    
    return (
      <div>
        <form>
          <div className="row form-group">
            <label className="col-sm">Exercise Name</label>
            <input type="text" className="col-sm form-control"></input>
          </div>
        </form>
        <div>
              { this.state.exercises.map(r => (
                <div>{r}</div>
              ))
              
            }
              <button onClick={this.addRow}>Add Exercise</button>
        </div>
      </div>
    )
  }
}
export default AddWorkout;
