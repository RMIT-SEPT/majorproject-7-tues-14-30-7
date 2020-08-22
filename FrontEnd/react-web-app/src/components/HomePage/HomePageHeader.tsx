import React, { Component } from 'react'
import '../../App.scss';
import { Link } from 'react-router-dom';
import HomePageContent from './HomePageContent';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="//localhost:3000">
                </a>
                
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item">
                    <div className="field">
                        <div className="control">
                        <input className="text is-primary" placeholder="Search"></input>
                        </div>
                    </div>
                    </div>
                    <Link to="/Worker" className="navbar-item">
                        <a>Worker</a>
                    </Link>

                    <Link to="/CustomerHomepage" className="navbar-item">
                        <a>Customer</a>
                    </Link>

                    <Link to="/BusinessPage" className="navbar-item">
                        <a>BusinessPage</a>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        More
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                        Contact Us
                        </a>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                        <strong>Sign up</strong>
                        </a>
                        <a className="button is-light">
                        Log in
                        </a>
                    </div>
                    </div>
                </div>
            </nav>

            <HomePageContent/>
            </div>
        )
    }
}