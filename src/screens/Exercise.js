import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'



class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises : [
                {
                    name: "bench press",
                    desc: "chest exercise"
                },
                {
                    name: "bicep curl",
                    desc: "bicep exercise"
                },
                {
                    name: "tricep pushdown",
                    desc: "tricep exercise"
                },
                {
                    name: "bench press",
                    desc: "chest exercise"
                }
            ]
        }
    }
    displayExercises =()=>{
    return (
            <div style={{margin: "auto", width:"50%"}}>
            {
                
                this.state.exercises.map((exercise, index) => (
                    
                    <div key={exercise.name.toString()+index}>
                        {/* <div>{{index}}</div> */}
                        <div class="card text-white bg-primary mb-3 col-md" style={{maxWidth: "25rem", margin: "5%"}}>
                            <div class="card-body">
                                <h1 class="card-title">{exercise.name}</h1>
                                <p class="card-text">Description of exercise which is optional</p>
                                <p>Clicking on the card should take you to the records.</p>
                            </div>
                        </div>
                    </div>
                ))
            }
                <div>
                    <div class="card text-white bg-primary mb-3 col-md" style={{maxWidth: "25rem", margin: "5%"}}>
                    <Link className="nav-link" to="/">

                        <div class="card-body">
                        <i class="fas fa-plus fa-8x" style={{paddingBottom: "5%"}}></i>
                        <h3>Add New Exercise</h3>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Navbar/>

                <div>This page will allow the user to add new exercises or PR's to an existing one. This should be cards displaying exercises.</div>

                <h2>Add New Exercise</h2>

                <div class="container" style={{maxWidth: "95%"}}>
                    <div class="row">
                        <div style={{margin: "auto", width:"50%"}}>
                        {this.displayExercises()}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Exercise;