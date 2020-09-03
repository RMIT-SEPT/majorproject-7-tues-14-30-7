import React, { Component } from 'react'
import {BrowserRouter, Router} from "react-router-dom"
import 'bulma/css/bulma.css'
import './Worker.scss'
import Shifts from './Shifts'

class Worker extends Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/worker/1').then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json, 
            })
        });
    }

    render() {
        
        var {isLoaded, items} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        
        else {

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
                                    <span className="title is-bold">{items.user.firstName} {items.user.lastName}</span>
                                    <br/>
                                    <a className="button is-primary is-outlined edit-button" href="#" id="edit-preferences">
                                                                                                            Edit Profile
                                    </a>
                                    <br/>
                                </p>
                                <p className="tagline">
                                    {items.description}
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
                    <Shifts/>
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
                </body>
            )
        }
    }
}

export default Worker;
