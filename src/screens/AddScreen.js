import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import AddWorkout from './AddWorkout'

class AddScreen extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={{maxWidth: "50%", margin: "auto"}}>
                    <AddWorkout />
                </div>
            </div>
        )
    }
}

export default AddScreen; 
