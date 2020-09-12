import React, { Component } from 'react'
import '../../App.scss';
import { BrowserRouter as Router,Link } from "react-router-dom";
import NavSearch from './NavSearch';

export default class HomePageHeader extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* <div className="navbar-item">
                        <Link to="/"><img src={require("./Images/brand.png")} width="112" height="28" alt="nav-img"/></Link>
                    </div> */}
                    <div className="navbar-item">
                        <Link to="/"><span className="title" id="brand">AGME</span></Link>
                    </div>
                    
                    <label
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        htmlFor="nav-toggle-state"
                        >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </label>
                    </div>
                    <input type="checkbox" id="nav-toggle-state" />

                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item" id="burgerzoomed">

                                <NavSearch/>

                            </div>
                            <div className="navbar-item">
                                <Link to="/CustomerHomePage">Dashboard</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/Worker">tempworkerlink</Link>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                    <div className="navbar-link" id="dropdown">
                                        More
                                    </div>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-item">
                                        <Link to="/">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <div className="button is-primary" id="signup">
                                        <strong>Sign up</strong>
                                    </div>
                                    <div className="button is-light">
                                        Log in
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}