import React, { Component } from 'react'
import CustomerPageHeader from './CustomerPageHeader'

class CustomerHomepage extends Component {
    render() {
        return (
            <div className="content">
                <CustomerPageHeader/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                Customer Dashboard
                            </h1>
                        </div>
                    </div>
                </section>
                <br/>
                <div className="container is-fluid">
                    <div className="box">Customer Booking History:</div>
                </div>
            </div>
        )
    }
}

export default CustomerHomepage