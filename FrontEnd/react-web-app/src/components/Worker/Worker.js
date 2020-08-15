import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Worker extends Component {
    render() {
        return (
            <div class="Background">
            <section class="hero is-medium"> 
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-1 ">Worker Profile Page</h1> 
                        <h2 class="subtitle">Name:</h2>
                        <h2 class="subtitle">Last Name:</h2>
                        <h2 class="subtitle">Services Offered:</h2>
                        <h2 class="subtitle">Upcoming Shifts:</h2>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Worker;
