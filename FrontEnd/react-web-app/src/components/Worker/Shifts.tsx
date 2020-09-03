import React, { Component } from 'react'
import './Worker.scss'

class Shifts extends Component {

    render() {
        return (
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
        );
    }
}

export default Shifts;