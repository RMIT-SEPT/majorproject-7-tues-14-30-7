import React, { Component } from 'react'
import CustomerPageHeader from './CustomerPageHeader'
import CustomerBookingHistory from './CustomerBookingHistory'

class CustomerHomepage extends Component {
    render() {
        return (
            <div className="content">
                <CustomerPageHeader/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                "Customer Name" Dashboard
                            </h1>
                        </div>
                    </div>
                </section>
                <br/>
                <div className="container is-fluid">
                    <div className="box">Customer Booking History:
                    <CustomerBookingHistory/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerHomepage