import React, { Component } from 'react'
import '../../App.scss';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item" href="//localhost:3000">
                    <img src={require("./Images/brand.png")} width="112" height="28"/>
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
                    <a className="navbar-item">
                    Dashboard
                    </a>

                    <a className="navbar-item">
                    placeholder
                    </a>

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
            </div>
        )
    }
}