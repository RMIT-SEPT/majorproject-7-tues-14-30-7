import React, { Component } from 'react'
import CustomerHomepage from '../Customer/CustomerHomepage'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page!</h1>
                <CustomerHomepage/>
                
            </div>
        )
    }
}

export default Homepage;