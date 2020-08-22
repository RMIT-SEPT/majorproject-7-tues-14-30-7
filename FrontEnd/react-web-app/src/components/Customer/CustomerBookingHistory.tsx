import React, { Component } from 'react'

export default class CustomerBookingHistory extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <header className="card-header">
                        <p className = "card-header-title">Hairdresser Service</p>
                    </header>
                    <div className = "card-content">
                        <div className = "content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Business Blurb
                        here.
                        <br></br>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className = "card">
                    <header className="card-header">
                        <p className = "card-header-title">Dentist Service</p>
                    </header>
                    <div className = "card-content">
                        <div className = "content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Business Blurb
                        here.
                        <br></br>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>


            </div>
            
        )
    }
}
