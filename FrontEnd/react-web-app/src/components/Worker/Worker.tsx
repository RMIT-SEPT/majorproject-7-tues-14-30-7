import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Worker extends Component {
    render() {
        return (
            <div className="Background">
            <section className="hero is-medium"> 
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1 ">Worker Profile Page</h1> 
                        <h2 className="subtitle">Name:</h2>
                        <h2 className="subtitle">Last Name:</h2>
                        <h2 className="subtitle">Services Offered:</h2>
                        <h2 className="subtitle">Upcoming Shifts:</h2>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Worker;
