import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Worker.scss'

class Worker extends Component {
    render() {
        return (
            <body>
                <div className="section profile-heading">
                    <div className="columns is-mobile is-multiline">
                        <div className="column is-2">
                            <span className="header-icon user-profile-image">
                                <img alt="" src="http://placehold.it/300x225"/>
                            </span>
                        </div>
                        <div className="column is-4-tablet is-10-mobile name">
                            <p>
                                <span className="title is-bold">FirstName LastName</span>
                                <br/>
                                <a className="button is-primary is-outlined edit-button" href="#" id="edit-preferences">
                                                                                                        Edit Profile
                                </a>
                                <br/>
                            </p>
                            <p className="tagline">
                                Worker information that is needed goes here, anything can be include possibly include
                                information about the worker and maybe things such as recent changes, there currently 
                                provided service, when they last logged on possibly, maybe even even tell them
                                if their employer/business recently uploaded there shifts for the week etc.........
                            </p>
                        </div>
                        <div className="column is-2-tablet is-4-mobile has-text-centered">
                            <p className="stat-val">3</p>
                            <p className="stat-key">Shifts</p>
                        </div>
                        <div className="column is-2-tablet is-4-mobile has-text-centered">
                            <p className="stat-val">4</p>
                            <p className="stat-key">Services</p>
                        </div>
                        <div className="column is-2-tablet is-4-mobile has-text-centered">
                            <p className="stat-val">99%</p>
                            <p className="stat-key">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
                <div className="profile-options is-fullwidth">
                    <div className="tabs is-fullwidth is-medium">
                        <ul>
                            <li className="link">
                                <a>
                                    <span className="icon">
                                        <i className="fa fa-list"></i>
                                    </span>
                                    <span>Profile Info</span>
                                </a>
                            </li>
                            <li className="link">
                                <a>
                                    <span className="icon">
                                        <i className="fa fa-list"></i>
                                    </span>
                                    <span>Services</span>
                                </a>
                            </li>
                            <li className="link is-active">
                                <a>
                                    <span className="icon">
                                        <i className="fa fa-list"></i>
                                    </span>
                                    <span>Shifts</span>
                                </a>
                            </li>
                            <li className="link">
                                <a>
                                    <span className="icon">
                                        <i className="fa fa-list"></i>
                                    </span>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="columns is-mobile">
                    <div className="column is-2-tablet is--mobile">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="container">
                                    <span className="tag is-dark subtitle">Monday</span>
                                    <p>Shift info goes here</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">Report Unavailable</a>
                            </footer>
                        </div>
                        <br/>
                    </div>
                    <div className="column is-2-tablet is-6-mobile">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="container">
                                    <span className="tag is-dark subtitle">Tuesday</span>
                                    <p>Shift info goes here</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">Report Unavailable</a>
                            </footer>
                        </div>
                        <br/>
                    </div>
                    <div className="column is-2-tablet is-6-mobile">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="container">
                                    <span className="tag is-dark subtitle">Wednesday</span>
                                    <p>Shift info goes here</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">Report Unavailable</a>
                            </footer>
                        </div>
                        <br/>
                    </div>
                    <div className="column is-2">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="contianer">
                                    <span className="tag is-dark subtitle">Thursday</span>
                                    <p>Shift info goes here</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">Report Unavailable</a>
                            </footer>
                        </div>
                        <br/>
                    </div>
                    <div className="column is-2">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img alt="" src="http://placehold.it/300x225"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="container">
                                    <span className="tag is-dark subtitle">Friday</span>
                                    <p>Shift info goes here</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item">Report Unavailable</a>
                            </footer>
                        </div>
                        <br/>
                    </div>
                </div>
                
            </body>
        )
    }
}

export default Worker;
